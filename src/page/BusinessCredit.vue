<template>
	<div>
		<header style="border:0;">
			<img src="../../static/img/icon_back@2x.png" @click="back" class="left">
			<p class="pass-title">臻商贷</p>
		</header>
		<div class="banner">
			<img class="banner" src="../../static/img/pic_banner@2x.png" />
		</div>
		<div class="zsd-title">臻e盾安保商户专享
			<span>免抵押免担保</span>小额借贷！</div>
		<div>
			<div class="mortgage">
				<ul>
					<li>
						<div class="circle"></div>
						<span class="mortgage-shows">费率超低</span>
	
						<p class="mortgage-font">利息低至0.04%，还款压力小。</p>
					</li>
					<li>
						<span class="circle"></span>
						<span class="mortgage-shows">审核快捷</span>
						<p class="mortgage-font">只需三步，简捷不繁琐。</p>
					</li>
					<li>
						<span class="circle"></span>
						<span class="mortgage-shows">到账迅速</span>
						<p class="mortgage-font">工作日24小时内到账(审核通过，最快可2小时内)解燃眉之急。</p>
					</li>
					<li>
						<span class="circle"></span>
						<span class="mortgage-shows">灵活借贷</span>
						<p class="mortgage-font">最高可贷20万，满足不同借贷需求。</p>
					</li>
					<li>
						<span class="circle"></span>
						<span class="mortgage-shows">信息安全</span>
						<p class="mortgage-font">借款全程受法律保护，安心来借款。</p>
					</li>
	
				</ul>
			</div>
			<footer @click="apply">
				<p>申请借贷</p>
			</footer>
	
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		back() {
			this.$router.go(-1);
		},
		apply() {
			this.$router.push('/Apply');
		}
	}
};

</script>
<style lang="scss">
@mixin border($color) {
	position: relative;
	border: none;
	width: 100%;
	height: 0.88rem;
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
	left: 0.22rem;
	top: 0;
	width: 0.268rem;
	height: 0.44rem;
}

.banner {

	height: 3rem;
	width: 100%;
}

.mortgage li {
	position: relative;
	height: 1.08rem;
}

.mortgage-title {
	font-size: 0.128rem;
	color: #353535;
	font-family: '黑体';
	font-weight: 600;
}

.circle {
	height: 0.1rem;
	width: 0.1rem;
	background: #353535;
	border-radius: 50%;
	position: absolute;
	top: 0.48rem;
	left: 0.22rem;
}

.mortgage-font {
	color: #353535;
	font-size: 0.24rem;
	font-family: PingFang-SC-Regular;
	position: absolute;
	top: 0.88rem;
	left: 0.22rem;
}

.mortgage-shows {
	font-family: '黑体';
	font-weight: 600;
	position: absolute;
	font-size: 0.28rem;
	top: 0.4rem;
	left: 0.38rem;
}

.zsd-title {
	margin-left: 0.22rem;
	margin-top: 0.0rem;
	font-size: 0.3rem;
	color: #353535;
	font-family: PingFang-SC-Regular;
}

.zsd-title span {
	font-family: '黑体';
	font-weight: 600;
}

footer {
	display: flex;
	margin-top: 1.6rem;
	width: 90%;
	height: 0.8rem;
	background: #ff7635;
	margin-bottom: 0.48rem;
	justify-content: center;
	margin-left: 5%;
}

footer p {
	line-height: 0.8rem;
	color: #ffffff;
	font-size: 0.32rem;
	font-family: PingFang-SC-Medium;
}
</style>