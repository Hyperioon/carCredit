<template>
	<div class='car-evaluate'>
		<public-header></public-header>
		<div class='evalua car-type'>
			<span class='left-content'>选择车型</span>
			<router-link to='/chooseBrand'>
				<div v-show='!car.carName' class='right'>
					<span>未选择</span>
					<span class='arrow'></span>
				</div>
				<span class="car-name">{{car.carName}}</span>
			</router-link>
		</div>
		<div class='evalua'>
			<span class='left-content'>上牌时间(全新车)</span>
			<div class='right'>
				<span v-show='!dataYear' @click="open('left')">未选择 </span>
				<span class='arrow'></span>
			</div>
			<span v-show='dataYear' class="right" @click="open('left')">{{dataYear}}年{{car.dataMonth}}月</span>
		</div>
		<div class='evalua'>
			<span class='left-content'>所在城市</span>
			<div class='right' v-show='!car.addressProvince'>
				<span @click="open('bottom')">未选择</span>
				<span class='arrow'></span>
			</div>
			<span class="right" @click="open('bottom')">{{car.addressProvince}} {{car.addressCity}}</span>
		</div>
		<div class='evalua'>
			<span class='left-content'>行驶里程</span>
			<span class='right far'>万公里</span>
			<input class="right input"  v-model.number ='car.miles' placeholder="请输入里程" type="number" value="">
		</div>
		<router-link to="/evaluaResult">
			<button type="button" @click='startEvalua' :disabled="!this.available" :class="available?'available':'not-available'">开始评估</button>
		</router-link>
		<!--选择地址-->
		<mu-popup popupClass='choose-city' position="bottom" :open="bottomPopup" @close="close('bottom')">
			<mu-appbar>
				<mu-flat-button slot="left" label="取消" color="white" @click="close('bottom')" />
				<mu-flat-button slot="right" label="确定" color="white" @click="confim('bottom')" />
			</mu-appbar>
			<div class="page-picker-wrapper">
				<mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5"></mt-picker>
			</div>
		</mu-popup>
		<!--选择日期-->
		<mu-popup v-show="this.range" popupClass='choose-time' position="left" :open="leftPopup" @close="close('left')">
			<mu-appbar>
				<mu-flat-button slot="left" label="取消" color="white" @click="close('left')" />
				<mu-flat-button slot="right" label="确定" color="white" @click="confim('left')" />
			</mu-appbar>
			<mu-content-block>
				<div class="city-picker">
					<mu-picker :slots="timeSlots" :visible-item-count="3" @change="dataChange" :values="data" />
				</div>
			</mu-content-block>
		</mu-popup>
		
	</div>
</template>
<script>
import PublicHeader from '../components/public/Header.vue';
import { Picker } from 'mint-ui';
import { mapGetters, mapMutations, mapActions } from 'vuex';
const data = {
	mongth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};
const address = {
	'北京': ['北京'],
	'广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
	'上海': ['上海'],
	'天津': ['天津'],
	'重庆': ['重庆'],
	'辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
	'江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
	'湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江', '神农架林区'],
	'四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
	'陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
	'河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
	'山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
	'河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
	'吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'],
	'黑龙江': ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭地区'],
	'内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '锡林郭勒盟', '兴安盟', '阿拉善盟'],
	'山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
	'安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
	'浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
	'福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
	'湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'],
	'广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
	'江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
	'贵州': ['贵阳', '六盘水', '遵义', '安顺', '铜仁地区', '毕节地区', '黔西南布依族苗族自治州', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
	'云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'],
	'西藏': ['拉萨', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则地区', '阿里地区'],
	'海南': ['海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县'],
	'甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '酒泉', '张掖', '庆阳', '平凉', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州'],
	'宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
	'青海': ['西宁', '海东地区', '海北藏族自治州', '海南藏族自治州', '黄南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
	'新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏地区', '喀什地区', '克孜勒苏柯尔克孜自治州', '巴音郭楞蒙古自治州', '昌吉回族自治州', '博尔塔拉蒙古自治州', '石河子', '阿拉尔', '图木舒克', '五家渠', '伊犁哈萨克自治州'],
	'香港': ['香港'],
	'澳门': ['澳门'],
	'台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县', '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市']
};
const province = {
	prov: ['北京', '上海', '四川', '天津', '吉林', '宁夏', '安徽', '山东', '山西', '广东', '广西', '新疆', '江苏', '江西', '河北', '河南', '浙江', '海南', '内蒙古', '湖北', '云南', '湖南', '甘肃', '福建', '西藏', '贵州', '辽宁', '重庆', '陕西', '青海', '黑龙江']
};
export default {
	name: 'CarEvaluate',
	components: {
		PublicHeader: PublicHeader,
		Picker: Picker
	},
	data() {
		return {
			bottomPopup: false,
			leftPopup: false,
			available: false,
			popupVisible: false,
			error: '',
			range: [],
			addressSlots: [
				{
					flex: 1,
					values: province.prov,
					className: 'slot1',
					textAlign: 'center'
				},
				{
					flex: 1,
					values: ['北京'],
					className: 'slot2',
					textAlign: 'center'
				}
			],
			timeSlots: [],
			addressProvince: '',
			addressCity: '',
			list: [],
			data: ['', ''],
			dataYear: '',
			customerKey: '',
			dataMonth: '',
			api: 'api/carCredit/m/filter/che300/queryCitylList.json',
			evaluaApi: 'api/carCredit/m/filter/che300/queryCarPrice.json'
		};
	},
	computed: {
		...mapGetters({
			car: 'car'
		})
	},
	watch: {
		car: {
			handler(car) {
				// 监听页面输入，如果输入完成，提交按钮则可用
				if (car.carName && car.miles && car.addressCity && car.dataYear) {
					this.available = true;
				} else {
					this.available = false;
				}
			},
			deep: true
		}
	},
	methods: {
		...mapMutations({
			selectData: 'CHOOSE_DATA',
			saveMiles: 'SAVE_MILES',
			saveCity: 'SAVE_CITY'
		}),
		...mapActions({
			chooseData: 'chooseData',
			saveAddress: 'saveAddress'
		}),
		onAddressChange(picker, values) {
			this.$http.post(this.api, { provName: values[0] }, { emulateJSON: true })
				.then((response) => {
					if (response.data.code === 0) {
						let city = [];
						this.list = response.data.list;
						this.list.forEach(function (item) {
							city.push(item.cityName);
						});
						address[values[0]] = city;
					}
				});
			picker.setSlotValues(1, address[values[0]]);
			this.addressProvince = values[0];
			this.addressCity = values[1];
			for (let item of this.list) {
				if (this.addressCity === item.cityName) {
					this.cityId = item.cityId;
				}
			}
			let data = {
				cityId: this.cityId,
				addressProvince: this.addressProvince,
				addressCity: this.addressCity
			};
			this.saveAddress(data);
		},
		dataChange(value, index) {
			switch (index) {
				case 0:
					this.dataYear = value;
					this.dataMonth = 2;
					break;
				case 1:
					this.dataMonth = value;
					break;
			}
			this.data = [this.dataYear, this.dataMonth];
			if (this.dataYear && this.dataMonth) {
				this.chooseData(this.data);
			}
		},
		open(position) {
			this[position + 'Popup'] = true;
			data.year = this.range;
			this.timeSlots = [
				{
					width: '50%',
					textAlign: 'center',
					values: data.year
				},
				{
					width: '50%',
					textAlign: 'center',
					values: data.mongth
				}
			];
		},
		close(position) {
			this[position + 'Popup'] = false;
			if (position === 'left') {
				this.dataYear = '';
				this.dataMonth = '';
				let data = ['', ''];
				this.chooseData(data);
			} else {
				this.addressProvince = '';
				this.addressCity = '';
				this.address = [this.addressProvince, this.addressCity];
			}
		},
		confim(position) {
			this.data = [this.dataYear, this.dataMonth];
			this[position + 'Popup'] = false;
		},
		// 开始评估
		startEvalua() {
			let data = this.car.dataYear + '-' + this.car.dataMonth;
			this.$http.post(this.evaluaApi, { modelId: this.car.carId, regDate: data, mile: this.car.miles, zone: this.car.cityId, customerKey: 120 }, { emulateJSON: true })
				.then((response) => {
					if (response.data.code === 0) {
						// this.list = response.data.list;
						console.log(response.data);
						this.error = response.data.error;
					}
				});
		}
	},
	mounted() {
		this.dataYear = this.car.dataYear;
		this.range = this.car.range;
		var customerKey = this.$route.query.customerKey;
		if (customerKey) {
			localStorage.setItem('customerKey', customerKey);
		} else {
			this.customerKey = localStorage.getItem('customerKey');
		}
		console.log(this.customerKey);
	}
};

</script>

<style lang="scss">
@import '../css/evaluate.scss';
.mu-popup-bottom {
	width: 100%;
	height: 4.9rem;
}

.mu-appbar {
	background-color: white;
	.left {
		.mu-flat-button-label {
			color: #8f8f8f;
			font-size: 0.3rem;
		}
	}
	.right {
		.mu-flat-button-label {
			color: #5aa8f0;
			font-size: 0.3rem;
		}
	}
}

.mu-paper-1 {
	box-shadow: none;
	position: relative;
}

.mu-content-block {
	padding-top: 0.5rem;
}

.mu-popup-left {
	width: 100%;
	height: 6rem;
	bottom: 0;
	top: 85%;
	.mu-picker-item {
		color: #8f8f8f;
		font-size: .3rem; // padding: 0.15rem 0.1rem;
		&.selected {
			color: #353535;
		}
	}
}
</style>