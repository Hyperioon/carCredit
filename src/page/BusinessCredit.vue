<template>
	<div>
		<public-header></public-header>
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
import PublicHeader from '../components/public/Header.vue';
export default {
	components: {
		PublicHeader: PublicHeader
	},
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


.pass-title {
	font-size: 0.9rem;
	color: #353535;
	font-family: PingFang-SC-Bold;
	margin-bottom: 0.65rem;
}

.left {
	position: absolute;
	left: 0.54rem;
	top: 0;
	width: 0.67rem;
	height: 1.1rem;
}

.banner {

	height: 7.5rem;
	width: 100%;
}

.mortgage li {
	position: relative;
	height: 2.7rem;
}

.mortgage-title {
	font-size: 0.32rem;
	color: #353535;
	font-family: '黑体';
	font-weight: 600;
}

.circle {
	height: 0.25rem;
	width: 0.25rem;
	background: #353535;
	border-radius: 50%;
	position: absolute;
	top: 1.2rem;
	left: 0.54rem;
}

.mortgage-font {
	color: #353535;
	font-size: 0.6rem;
	font-family: PingFang-SC-Regular;
	position: absolute;
	top: 2.2rem;
	left: 0.54rem;
}

.mortgage-shows {
	font-family: '黑体';
	font-weight: 600;
	position: absolute;
	font-size: 0.7rem;
	top: 1rem;
	left: 0.95rem;
}

.zsd-title {
	margin-left: 0.54rem;
	margin-top: 0.5rem;
	font-size: 0.75rem;
	color: #353535;
	font-family: PingFang-SC-Regular;
}

.zsd-title span {
	font-family: '黑体';
	font-weight: 600;
}

footer {
	display: flex;
	margin-top: 4rem;
	width: 90%;
	height: 2rem;
	background: #ff7635;
	margin-bottom: 1.2rem;
	justify-content: center;
	margin-left: 5%;
}

footer p {
	line-height: 2rem;
	color: #ffffff;
	font-size: 0.8rem;
	font-family: PingFang-SC-Medium;
}
</style>