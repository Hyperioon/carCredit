<template>
	<div class="apply" style="padding-top: 0.88rem;">
		<public-header></public-header>
		<div class="apply-ipt">
			<p class="apply-p">真实姓名：</p>
			<div class="apply-d">
				<input type="text" placeholder="请输入身份证上姓名" v-model="name"> </div>

		</div>
		<div class="apply-ipt">
			<span v-show="nameinfo">姓名不能为空</span>
			<p class="apply-p">身份证号：</p>
			<div class="apply-d">
				<input type="text" placeholder="请输入身份证号码" v-model="idcard" v-bind="comname"> </div>
		</div>
		<div class="apply-ipt">
			<span v-show="idcardinfo">身份证号不能为空</span>
			<span v-show="idcardinfos">身份证号格式不正确</span>
			<p class="apply-p">手机号码：</p>
			<div class="apply-d">
				<input type="text" placeholder="请输入手机号码" v-model="tell" v-bind="comid"> </div>
		</div>
		<div class="apply-ipt">
			<span v-show="tellinfo">手机号码不能为空</span>
			<span v-show="tellinfos">手机号码格式不正确</span>
			<p class="apply-p">婚姻状况：</p>
			<div class="apply-d" @click="lives" v-bind="comxue">
				<i>{{xue}}</i>
				<em class="img-up" v-show="icon">
					<img src="../../static/img/icon_arrow_n.png" alt="">
				</em>
				<em class="img-up" v-show="!icon">
					<img src="../../static/img/icon_arrow_p.png" alt="">
				</em>
				<p v-show="xuep">请选择</p>
			</div>
		</div>
		<div class="apply-ipt">
			<span v-show="huninfo">婚姻状况不能为空</span>
			<p class="apply-p">学　　历：</p>
			<div class="apply-d" @click="stuts" v-bind="comhun">
				<i> {{hun}}</i>
				<em class="img-up" v-show="icon1">
					<img src="../../static/img/icon_arrow_n.png" alt="">
				</em>
				<em class="img-up" v-show="!icon1">
					<img src="../../static/img/icon_arrow_p.png" alt="">
				</em>
				<p v-show="hunp">请选择</p>
			</div>
		</div>
		<div class="apply-ipt">
			<span v-show="xueinfo">学历不能为空</span>
			<p class="apply-p">店铺名称：</p>
			<div class="apply-d">
				<input type="text" placeholder="请输入店铺名称" v-bind="comshop" v-model="shopval"> </div>
		</div>
		<div class="apply-ipt">
			<span v-show="shopinfo">店铺名称不能为空</span>
			<p class="apply-p">经营年限：</p>
			<div class="apply-d" @click="year" v-bind="comstatu">
				<i>{{nianx}}</i>
				<em class="img-up" v-show="icon2">
					<img src="../../static/img/icon_arrow_n.png" alt="">
				</em>
				<em class="img-up" v-show="!icon2">
					<img src="../../static/img/icon_arrow_p.png" alt="">
				</em>
				<p v-show="nianp">请选择</p>
			</div>
		</div>
		<div class="apply-ipt">
			<span v-show="jiinfo">经营年限不能为空</span>
			<p class="apply-p">经营状态：</p>
			<div class="apply-d" @click="firstatus" v-bind="comstatus">
				<i>{{statu}}</i>
				<em class="img-up" v-show="icon3">
					<img src="../../static/img/icon_arrow_n.png" alt="">
				</em>
				<em class="img-up" v-show="!icon3">
					<img src="../../static/img/icon_arrow_p.png" alt="">
				</em>
				<p v-show="statup">请选择</p>
			</div>
		</div>
		<div class="apply-ipt">
			<span v-show="jinstu">经营状态不能为空</span>
			<p class="apply-p"></p>
			<div class="apply-d" @click="secstatus">
				<i>{{status}}</i>
				<em class="img-up" v-show="icon4">
					<img src="../../static/img/icon_arrow_n.png" alt="">
				</em>
				<em class="img-up" v-show="!icon4">
					<img src="../../static/img/icon_arrow_p.png" alt="">
				</em>
				<p v-show="statusp">请选择</p>
			</div>
		</div>
		<div class="cover" v-show="covers">
			<div class="demo-picker-container" v-show="leave">
				<p @click="quxiao">取消</p>
				<span @click="sure">确定</span>
				<div style="height:0.8rem;"></div>
				<mt-picker :slots="slots0" @change="onValuesChange1" :visibleItemCount=3></mt-picker>
			</div>
			<div class="demo-picker-container" v-show="stu">
				<p @click="quxiao">取消</p>
				<span @click="sure1">确定</span>
				<div style="height:0.8rem;"></div>
				<mt-picker :slots="slots1" @change="onValuesChange2" :visibleItemCount=3></mt-picker>
			</div>
			<div class="demo-picker-container" v-show="years">
				<p @click="quxiao">取消</p>
				<span @click="sure2">确定</span>
				<div style="height:0.8rem;"></div>
				<mt-picker :slots="slots2" @change="onValuesChange3" :visibleItemCount=3></mt-picker>
			</div>
			<div class="demo-picker-container" v-show="fir">
				<p @click="quxiao1">取消</p>
				<span @click="sure3">确定</span>
				<div style="height:0.8rem;"></div>
				<mt-picker :slots="slots3" @change="onValuesChange4" :visibleItemCount=3></mt-picker>
			</div>
			<div class="demo-picker-container" v-show="sec">
				<p @click="quxiao2">取消</p>
				<span @click="surelast">确定</span>
				<div style="height:0.8rem;"></div>
				<mt-picker :slots="slots4" @change="onValuesChange5" :visibleItemCount=3></mt-picker>
			</div>
		</div>
		<div class="infofale" v-show="cliinfo">
			<p>经营状态不能为空</p>
		</div>
		<div class="infofale" v-show="cliinfos">
			<p>请按照要求填写信息</p>
		</div>
		<footer @click="submits">
			<p>提交申请</p>
		</footer>
	</div>
</template>
<script>
	import PublicHeader from '../components/public/Header.vue';
	export default {
		components: {
			PublicHeader: PublicHeader
		},
		data() {
			return {
				slots0: [{
					flex: 1,
					defaultIndex: -1,
					values: ['未婚', '已婚有子女', '已婚无子女', '离异无子女'],
					className: 'slot0',
					textAlign: 'center'
				}],
				slots1: [{
					flex: 1,
					defaultIndex: -1,
					values: ['初中及以下', '高中', '大专', '本科及以上'],
					className: 'slot1',
					textAlign: 'center'
				}],
				slots2: [{
					flex: 1,
					defaultIndex: -1,
					values: ['<6个月', '6个月-1年', '1-2年', '2-3年', '3-5年', '≥5年'],
					className: 'slot2',
					textAlign: 'center'
				}],
				slots3: [{
					flex: 1,
					defaultIndex: -1,
					values: [],
					className: 'slot3',
					textAlign: 'center'
				}],
				slots4: [{
					flex: 1,
					defaultIndex: -1,
					values: [],
					className: 'slot4',
					textAlign: 'center'
				}],
				show: false,
				leave: false,
				stu: false,
				years: false,
				fir: false,
				sec: false,
				icon: true,
				icon1: true,
				icon2: true,
				icon3: true,
				icon4: true,
				covers: false,
				jinstu: false,
				xuep: true,
				hunp: true,
				nianp: true,
				statup: true,
				statusp: true,
				cliinfo: false,
				nameinfo: false,
				idcardinfo: false,
				cliinfos: false,
				idcardinfos: false,
				tellinfo: false,
				tellinfos: false,
				huninfo: false,
				shopinfo: false,
				xueinfo: false,
				jiinfo: false,
				name: '',
				shopval: '',
				idcard: '',
				xue: '',
				hun: '',
				tell: '',
				nianx: '',
				style: '',
				styles: '',
				apiUrl1: 'api/carCredit/m/filter/applyInfo/queryOperateFirstDrop.json',
				apiUrl2: 'api/carCredit/m/filter/applyInfo/queryOperateSecondDrop.json',
				apiUrl3: 'api/carCredit/m/filter/applyInfo/add.json',
				firstatu: {},
				secstatu: {},
				optype: [],
				optype1: [],
				nes: [],
				as: [],
				asd: [],
				statu: '',
				status: '',
				operateTypeId: '',
				customerKey: ''
			};
		},
		created: function () {
			this.customerKey = localStorage.getItem('customerKey');
		},
		computed: {
			comname() {
				if (this.idcard) {
					if (this.name) {
						this.nameinfo = false;
					} else {
						this.nameinfo = true;
					}
				} else {

				}
			},
			comid() {
				let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
				if (this.tell) {
					if (this.idcard === '') {
						this.idcardinfos = false;
					}
					if (!this.idcard === '') {
						this.idcardinfo = false;
						if (reg.test(this.idcard)) {
							this.idcardinfos = false;
						} else {
							this.idcardinfos = true;
						}
					} else {
						this.idcardinfo = true;
					}
				}
			},
			comxue() {
				let reg = /^1[3|8|5|7|4]\d{9}$/;
				if (this.xue) {
					if (this.tell === '') {
						this.tellinfos = false;
					}
					this.xuep = false;
					if (this.tell) {
						this.tellinfo = false;
						if (reg.test(this.tell)) {
							this.tellinfos = false;
						} else {
							this.tellinfos = true;
						}
					} else {
						this.tellinfo = true;
					}
				}
			},
			comhun() {
				if (this.hun) {
					if (this.xue) {
						this.huninfo = false;
					} else {
						this.huninfo = true;
					}
				}
			},
			comshop() {
				if (this.shopval) {
					if (this.hun) {
						this.xueinfo = false;
					} else {
						this.xueinfo = true;
					}
				}
			},
			comstatu() {
				if (this.nianx) {
					if (this.shopval) {
						this.shopinfo = false;
					} else {
						this.shopinfo = true;
					}
				}
			},
			comstatus() {
				if (this.statu) {
					this.statusp = false;
					if (this.nianx) {
						this.jiinfo = false;
					} else {
						this.jiinfo = true;
					}
				}
			}

		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			apply() {
				this.$router.push('/BusinessCredit');
			},
			onValuesChange(picker, values) {
				this.statu = values.join();
				console.log(this.statu);
			},
			onValuesChange1(picker, values) {
				this.xue = values.join();
				if (this.xue) {
					this.xuep = false;
				} else {
					this.xuep = true;
				}
			},
			onValuesChange2(picker, values) {
				this.hun = values.join();
				if (this.hun) {
					this.hunp = false;
				} else {
					this.hunp = true;
				}
			},
			onValuesChange3(picker, values) {
				this.nianx = values.join();
				if (this.nianx) {
					this.nianp = false;
				} else {
					this.nianp = true;
				}
			},
			onValuesChange4(picker, values) {
				this.statu = values.join();
				if (this.statu) {
					this.statup = false;
				} else {
					this.statup = true;
				}
			},
			onValuesChange5(picker, values) {
				this.status = values.join();
				if (this.status) {
					this.statusp = false;
				} else {
					this.statusp = true;
				}
			},
			setSlotValues(index, values) {
				console.log(values);
			},
			quxiao() {
				this.covers = false;
				this.leave = false;
				this.stu = false;
				this.years = false;
				this.fir = false;
				this.sec = false;
			},
			quxiao1() {
				this.covers = false;
				this.fir = false;
				this.statu = '';
			},
			quxiao2() {
				this.covers = false;
				this.sec = false;
				this.status = '';
			},
			lives() {
				this.covers = true;
				this.leave = true;
				if (this.icon === true) {
					this.icon = false;
				} else {
					this.icon = true;
				}
			},
			stuts() {
				this.covers = true;
				this.stu = true;
				if (this.icon1 === true) {
					this.icon1 = false;
				} else {
					this.icon1 = true;
				}
			},
			year() {
				this.covers = true;
				this.years = true;
				if (this.icon2 === true) {
					this.icon2 = false;
				} else {
					this.icon2 = true;
				}
			},
			firstatus() {
				let vm = this;
				vm.fir = true;
				vm.covers = true;
				if (this.icon3 === true) {
					this.icon3 = false;
				} else {
					this.icon3 = true;
				}
				vm.asd = [];
				this.slots4[0].values = [];
				vm.$http.post(vm.apiUrl1, {
					emulateJSON: true
				})
					.then((response) => {
						if (response.data.code === 0) {
							console.log(response.data);
							let meg = response.data.obj;
							if (meg) {
								meg.forEach(function (val) {
									if (val.type) {
										vm.as.push(val.type);
									}
								});
								vm.slots3[0].defaultIndex = 2;
								vm.slots3[0].values = vm.as;
							}
						} else {
							console.log(response.data.error);
						}
					});
			},
			// 提交
			submits() {
				let vm = this;
				let Len = this.nes.length;
				for (var i = 0; i < Len; i++) {
					if (this.asd[i] === this.status) {
						this.operateTypeId = this.nes[i];
					}
				};
				if (!this.statu) {
					this.jinstu = true;
				} else {
					this.jinstu = false;
				}
				if (this.nameinfo === false && this.idcardinfo === false && this.idcardinfos === false && this.tellinfo === false &&
					this.tellinfos === false && this.huninfo === false && this.xueinfo === false && this.shopinfo === false && this.jiinfo ===
					false) {
					let info = {
						name: this.name,
						cardNum: this.idcard,
						phone: this.tell,
						marriage: this.xue,
						education: this.hun,
						shopName: this.shopval,
						manageTime: this.nianx,
						operateTypeId: this.operateTypeId,
						customerKey: this.customerKey
					};
					this.$http.post(this.apiUrl3, info, {
						emulateJSON: true
					})
						.then((response) => {
							if (response.data.code === 0) {
								this.$router.push('/Succsess');
							} else {
								console.log(response.data.error);
							}
						});
				} else {
					this.cliinfos = true;
					setTimeout(function () {
						vm.cliinfos = false;
					}, 1500);
				}
			},
			secstatus() {
				let vm = this;
				if (this.status) {
					this.covers = true;
					this.sec = true;
					if (this.icon4 === true) {
						this.icon4 = false;
					} else {
						this.icon4 = true;
					}
				} else {
					this.cliinfo = true;
					setTimeout(function () {
						vm.cliinfo = false;
					}, 1500);
				}
			},
			sure() {
				this.covers = false;
				this.leave = false;
				this.icon = true;
			},
			sure1() {
				this.covers = false;
				this.stu = false;
				this.icon1 = true;
			},
			sure2() {
				this.covers = false;
				this.years = false;
				this.icon2 = true;
			},
			sure3: function () {
				this.covers = false;
				this.fir = false;
				this.icon3 = true;
				if (this.statu) {
					let vm = this;
					vm.$http.post(vm.apiUrl2, {
						type: vm.statu
					}, {
							emulateJSON: true
						})
						.then((response) => {
							if (response.data.code === 0) {
								let meg = response.data.obj;
								if (meg) {
									meg.forEach(function (val) {
										vm.asd.push(val.details);
										vm.nes.push(val.operateTypeId);
									});
									vm.slots4[0].defaultIndex = 0;
									vm.slots4[0].values = vm.asd;
								}
							} else {
								console.log(response.data.error);
							}
						});
				}
			},
			surelast() {
				this.sec = false;
				this.covers = false;
				this.icon4 = true;
			}
		}
	};

</script>
<style lang="scss">
	@mixin border($color) {
		position: relative;
		border: none;
		width: 100%;
		&:after {
			content: '';
			position: absolute;
			bottom: 0;
			background: $color;
			width: 100%;
			height: 1px;
			left: 0;
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
		}
	}

	.trans p {
		line-height: 0.8rem;
		height: 0.8rem;
		@include border(#d0d0d0);
		font-size: 0.32rem;
	}

	.apply-ipt {
		height: 0.8rem;
		width: 100%;
		margin-top: 0.3rem;
		position: relative;
	}

	.apply-p {
		position: absolute;
		top: 0.26rem;
		left: 0.216rem;
		width: 25%;
		font-size: 0.3rem;
	}

	.apply-d {
		line-height: 0.78rem;
		position: absolute;
		height: 0.78rem;
		width: 70%;
		left: 25%;
		font-size: 0.3rem;
		border: 1px solid #d0d0d0;
		i {
			position: absolute;
		}
		input {
			height: 0.64rem;
			width: 94%;
			font-size: 0.3rem;
			outline: none;
			border: 0;
		}
		input::-webkit-input-placeholder {
			font-family: PingFang-SC-Regular;
			font-size: 0.3rem;
			color: #aaaaaa;
		}
	}

	.demo-picker-container {
		width: 100%;
		height: 3.68rem;
		background: #ffffff;
		position: absolute;
		bottom: 0;
	}

	.picker-item {
		font-size: 0.3rem;
	}

	.demo-picker-container p {
		float: left;
		margin-left: 0.216rem;
		font-size: 0.3rem;
		color: #8f8f8f;
		font-family: PingFang-SC-Medium;
		margin-top: 0.26rem;
	}

	.demo-picker-container span {
		float: right;
		margin-right: 0.216rem;
		font-size: 0.3rem;
		color: #8f8f8f;
		font-family: PingFang-SC-Medium;
		margin-top: 0.26rem;
	}

	.apply-ipt span {
		position: absolute;
		top: -0.32rem;
		left: 25%;
		font-size: 0.24rem;
		color: red;
	}

	.apply-d p {
		font-size: 0.3rem;
		color: rgb(209, 209, 209);
		font-family: PingFang-SC-Regular;
	}

	footer {
		display: flex;
		width: 90%;
		height: 0.8rem;
		background: #ff7635;
		bottom: 0.48rem;
		justify-content: center;
		margin-left: 5%;
		margin-top: 1.78rem;
		border-radius: 2px;
		margin-bottom: 0.48rem;
	}

	footer p {
		line-height: 0.8rem;
		color: #ffffff;
		font-size: 0.32rem;
		font-family: PingFang-SC-Medium;
	}

	.cover {
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
		background: rgba(36, 36, 36, 0.5);
		top: 0;
		bottom: 0;
	}

	.infofale {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		margin-top: 0.4rem;
	}

	.infofale p {
		width: 3.1rem;
		background: #525252;
		height: 0.8rem;
		border-radius: 0.2rem;
		color: #ffffff;
		font-size: 0.3rem;
		font-family: PingFang-SC-Regular;
		text-align: center;
		line-height: 0.8rem;
	}

	.img-up {
		position: absolute;
		right: 0.2rem;
		img {
			height: 0.2rem;
			width: 0.32rem;
		}
	}
</style>