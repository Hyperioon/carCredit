<template>
	<div class="BusinessCredit">
		<header>
			<public-header></public-header>
		</header>
		<div class="pic">
			<img src="../../static/img/icon_success.png" alt="">
		</div>
		<div class="succ-title">
			<p>借款申请提交成功！</p>
		</div>
		<div class="succ-titles">
			<p>我们将在24小时内联系您~</p>
		</div>

		<footer>
			<div @click="succ">
				<p>完成</p>
			</div>

		</footer>

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
			succ() {
				this.$router.push('/');
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

	header {
		display: flex;
		justify-content: center;
		margin-top: 0.32rem;
		position: relative;
		@include border(#d0d0d0);
		height: 0.26rem;
	}
.BusinessCredit{
	padding-top: 0.44rem;
}
	.pass-title {
		font-size: 0.36rem;
		color: #353535;
		font-family: PingFang-SC-Bold;
		margin-bottom: 0.26rem;
	}

	.pic {
		display: flex;
		justify-content: center;
		margin-top: 1.56rem;
		img {
			height: 1.76rem;
			width: 1.76rem;
		}
	}

	.succ-title {
		display: flex;
		justify-content: center;
		text-align: center;
		margin-top: 0.4rem;
		p {
			color: #353535;
			font-size: 0.32rem;
			font-family: PingFang-SC-Medium;
		}
	}

	.succ-titles {
		display: flex;
		justify-content: center;
		text-align: center;
		margin-top: 0.22rem;
		p {
			color: #353535;
			font-size: 0.3rem;
			font-family: PingFang-SC-Regular;
		}
	}

	.left {
		position: absolute;
		left: 0.216rem;
		top: 0;
		width: 0.268rem;
		height: 0.44rem;
	}

	footer {
		display: flex;
		margin-top: 0.64rem;
		bottom: 0.48rem;
		justify-content: center;
		margin-left: 5%;

		div {
			width: 2.32rem;
			height: 0.8rem;
			background: #ff7635;
			border-radius: 2px;
		}
	}

	footer p {
		line-height: 0.8rem;
		text-align: center;
		color: #ffffff;
		font-size: 0.32rem;
		font-family: PingFang-SC-Medium;
	}

</style>
