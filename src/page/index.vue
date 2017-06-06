<template>
	<div class="index">
		<public-header></public-header>
		<div class="banner">
			<img class="banner" src="../../static/img/pic_banner@2x.png" />
		</div>
		<div style="height:0.2rem;background:#f1f1f1;" class="lines"></div>
		<div class="menu">
			<div class="index-menu-item">
				<router-link to='/BusinessCredit'>
					<span class="icon-zsd">
						<img src="../../static/img/icon_zsd@2x.png" alt="">
					</span>
					<p>臻商贷</p>
				</router-link>
			</div>
			<div class="index-menu-item">
				<router-link to='/carCredit'>
					<span class="icon-cdd">
						<img src="../../static/img/icon_cdd@2x.png" alt="">
					</span>
					<p>车抵贷</p>
				</router-link>
			</div>
			<div class="index-menu-item" style="border-right:0;">
				<a href="https://ecentre.spdbccc.com.cn/creditcard/indexActivity.htm?data=P1780931">
					<span class="icon-jqqd">
						<img src="../../static/img/icon_xyk@2x.png" alt="">
					</span>
					<span class="icon-xyk"></span>
					<p>信用卡</p>
				</a>
			</div>
		</div>
		<div class="bg"></div>
		<div class="inter">
			<span class="cell-text">热门推荐</span>
		</div>
		<router-link to='/BusinessCredit'>
			<div class="zsd">
				<span>臻商贷</span>
			</div>
		</router-link>
		<div class="words">
			<p class="word-top">臻e盾安保商户专享，无抵押、免担保小额借款。</p>
			<div class="word-down">
				<p class="wordl">可贷金额： 最高20万</p>
				<p class="wordr">
					<span class="word-l">
						费率低至每日
					</span>
					<span class="word-c">0.04</span>
					<span class="word-r">%</span>
				</p>
			</div>
		</div>
		<div style="height:0.2rem;background:#f2f2f2;"></div>
		<router-link to='/carCredit'>
			<div class="zsd">
				<span>车抵贷</span>
			</div>
		</router-link>
		<div class="words">
			<p class="word-top">贷款额度高、车辆安全、极速放款。</p>
			<div class="word-down">
				<p class="wordl">可贷金额： 最高50万</p>
				<p class="wordr">
					<span class="word-l">
						最高达车辆估值的
					</span>
					<span class="word-c">100</span>
					<span class="word-r">%</span>
				</p>
			</div>
		</div>
		<div style="height:0.2rem;background:#f1f1f1;"></div>
	</div>
</template>
<script>
import PublicHeader from '../components/public/Header';
export default {
	components: {
		PublicHeader: PublicHeader
	},
	data() {
		return {
			megs: [],
			apiUrl: 'api/commission/home.json',
			//  是否设置过交易密码
			apiUrl1: 'api/trade/pwd/exist.json',
			exist: '',
			customerKey: ''
		};
	},
	created: function () {
		var customerKey = this.$route.query.customerKey;
		if (customerKey) {
			localStorage.setItem('customerKey', customerKey);
		} else {
			this.customerKey = localStorage.getItem('customerKey');
		}
	},
	methods: {
		// 原生返回
		backall() {
			var ua = navigator.userAgent.toLowerCase();
			// alert(ua)
			if (/iphone|ipad|ipod/.test(ua)) {
				popToViewController();
			} else if (/android/.test(ua)) {
				// alert("android");
				htmlToJava.popToViewController();
			}
		}
	}
};

</script>
<style lang="scss">
.index {
	padding-top: 0.88rem;
}

@mixin border($color) {
	position: relative;
	border: none;
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

@mixin borders($color) {
	position: relative;
	border: none;
	&:after {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		background: $color;
		width: 1px;
		height: 100%;
		-webkit-transform: scaleX(0.5);
		transform: scaleX(0.5);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
	}
}

header {
	display: flex;
	justify-content: center;
	margin-top: 0.32rem;
	position: relative;
	height: 0.72rem;
}

.pass-title {
	font-size: 0.36rem;
	color: #353535;
	font-family: PingFang-SC-Bold;
	margin-bottom: 0.26rem;
}

.left {
	position: absolute;
	left: 0.216rem;
	top: 0;
	width: 0.268rem;
	height: 0.44rem;
}

.index .banner {
	height: 3rem;
	width: 100%;
}

.lines {
	@include border(#d0d0d0);
}

.index-menu-item {
	float: left;
	width: 33.3%;
	height: 2rem;
	position: relative;
	text-align: center;
	background: #fff;
	@include borders(#d0d0d0);
	&:last-child {
		border-right: none;
	}
	img {
		height: 0.78rem;
		width: 0.78rem;
		margin-top: 0.36rem;
	}
	p {
		font-family: PingFang-SC-Medium;
		font-size: 0.24rem;
		color: #353535;
		margin-top: 0.2rem;
	}
}

.menu {

	@include border(#d0d0d0);
	overflow: hidden;
}

.bg {
	height: 0.44rem;
	@include border(#d0d0d0);
}

.inter {
	height: 0.8rem;
	@include border(#d0d0d0);
}

.inter span {
	line-height: 0.8rem;
	font-size: 0.3rem;
	font-family: PingFang-SC-Medium;
	margin-left: 0.216rem;
	color: #353535;
}

.zsd {
	height: 1.02rem;
	@include border(#d0d0d0);
	margin-left: 0.216rem;
}

.zsd span {
	line-height: 1.02rem;
	font-size: 0.3rem;
	font-family: PingFang-SC-Heavy;

	color: #353535;
}

.words {
	margin-left: 0.216rem;
	height: 1.5rem;
	.word-top {
		height: 0.5rem;
		font-size: 0.24rem;
		color: #aaaaaa;
		margin-top: 0.26rem;
		font-family: PingFang-SC-Regular;
	}
	.word-down {
		height: 1rem;
		position: relative;
		.wordl {
			position: absolute;
			bottom: 0.32rem;
			font-size: 0.26rem;
			color: #353535;
			font-family: PingFang-SC-Medium;
		}
		.wordr {
			position: absolute;
			bottom: 0.32rem;
			right: 0.216rem;
			text-align: right;
			font-size: 0.26;
			.word-l {
				font-size: 0.2rem;
				color: #353535;
			}
			.word-c {
				color: #ff5722;
				font-size: 0.4rem;
			}
			.word-r {
				color: #353535;
				font-size: 0.24rem;
			}
		}
	}
}
</style>