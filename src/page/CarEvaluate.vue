<template>
	<div class='car-evaluate'>
		<public-header></public-header>
		<div class='evalua car-type'>
			<span class='left'>选择车型</span>
			<router-link to='/chooseBrand' class='right'>
				<span>未选择</span>
				<span class='arrow'></span>
			</router-link>
		</div>
		<div class='evalua'>
			<span class='left'>上牌时间</span>
			<div class='right'>
				<span v-show='!dataYear' @click="open('left')">未选择 </span>
				<span class='arrow'></span>
			</div>
			<span v-show='dataYear' class="right" @click="open('left')">{{dataYear}}年{{car.dataMonth}}月</span>
		</div>
		<div class='evalua'>
			<span class='left'>所在城市</span>
			<div class='right'>
				<span v-show='!addressProvince' @click="open('bottom')">未选择</span>
				<span class='arrow'></span>
			</div>
	
			<span class="right" @click="open('bottom')">{{car.addressProvince}} {{car.addressCity}}</span>
		</div>
		<div class='evalua'>
			<span class='left'>行驶里程</span>
			<span class='right far'>万公里</span>
			<input class="right input" v-model='car.miles' placeholder="请输入里程" type="text" value="1233">
		</div>
		<router-link to="/evaluaResult">
			<button type="button" :disabled="!this.available" :class="available?'available':'not-available'">开始评估</button>
		</router-link>
		<!--选择地址-->
		<mu-popup popupClass='choose-city' position="bottom" :open="bottomPopup" @close="close('bottom')">
			<mu-appbar>
				<mu-flat-button slot="left" label="取消" color="white" @click="close('bottom')" />
				<mu-flat-button slot="right" label="确定" color="white" @click="confim('bottom')" />
			</mu-appbar>
			<mu-content-block>
				<div class="city-picker">
					<mu-picker :slots="addressSlots" :visible-item-count="3" @change="addressChange" :values="address" />
				</div>
			</mu-content-block>
		</mu-popup>
	
		<!--选择日期-->
		<mu-popup popupClass='choose-time' position="left" :open="leftPopup" @close="close('left')">
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
import { mapGetters, mapMutations, mapActions } from 'vuex';
const data = {
	year: [2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990],
	mongth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};
let province = {
	prov: ['北京', '上海', '四川', '天津', '吉林', '宁夏', '安徽', '山东', '山西', '广东', '广西', '新疆', '江苏', '江西', '河北', '河南', '浙江', '海南', '内蒙古', '湖北', '云南', '湖南', '甘肃', '福建', '西藏', '贵州', '辽宁', '重庆', '陕西', '青海', '黑龙江']
};
export default {
	name: 'CarEvaluate',
	components: {
		PublicHeader: PublicHeader
	},
	data() {
		return {
			bottomPopup: false,
			leftPopup: false,
			available: false,
			addressSlots: [
				{
					width: '50%',
					textAlign: 'center',
					values: province.prov
				},
				{
					width: '50%',
					textAlign: 'center',
					values: []
				}
			],
			timeSlots: [
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
			],
			address: ['', ''],
			addressProvince: '',
			addressCity: '',
			data: ['', ''],
			province: ['', ''],
			dataYear: '',
			dataMonth: '',
			api: 'api/carCredit/m/filter/che300/queryCitylList.json'
		};
	},
	computed: {
		...mapGetters({
			car: 'car'
		})
	},
	watch: {
		mileage: {
			handler(val) {
				if (val) {
					this.changeMiles(val);
					this.change();
				} else {
					this.available = false;
				}
			}
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
			changeMiles: 'changeMiles',
			saveAddress: 'saveAddress'
		}),
		addressChange(value, index) {
			switch (index) {
				case 0:
					this.addressProvince = value;
					this.$http.post(this.api, {provName: value}, { emulateJSON: true })
						.then((response) => {
							if (response.data.code === 0) {
								let city = [];
								let list = response.data.list;
								list.forEach(function(item) {
									city.push(item.cityName);
								});
								this.addressSlots[1].values = city;
								this.addressCity = city[0];
							}
						});
					break;
				case 1:
					this.addressCity = value;
					break;
			}
			this.address = [this.addressProvince, this.addressCity];
			this.saveAddress(this.address);
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
		change() {
			if (this.addressProvince && this.addressCity && this.dataMonth && this.dataYear) {
				this.available = true;
			}
		},
		open(position) {
			this[position + 'Popup'] = true;
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
			this.address = [this.addressProvince, this.addressCity];
			this.data = [this.dataYear, this.dataMonth];
			this[position + 'Popup'] = false;
		}
	},
	mounted() {
		this.dataYear = this.car.dataYear;
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