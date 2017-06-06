<template>
	<div class="BusinessCredit">
		<header>
			<img src="../../static/img/icon_back.png" @click="back" class="left">
			<p class="pass-title">申请借款</p>
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
	export default {
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
		margin-top: 0.8rem;
		position: relative;
		@include border(#d0d0d0);
		height: 1.8rem;
	}

	.pass-title {
		font-size: 0.9rem;
		color: #353535;
		font-family: PingFang-SC-Bold;
		margin-bottom: 0.65rem;
	}

	.pic {
		display: flex;
		justify-content: center;
		margin-top: 3.9rem;
		img {
			height: 4.4rem;
			width: 4.4rem;
		}
	}

	.succ-title {
		display: flex;
		justify-content: center;
		text-align: center;
		margin-top: 1rem;
		p {
			color: #353535;
			font-size: 0.8rem;
			font-family: PingFang-SC-Medium;
		}
	}

	.succ-titles {
		display: flex;
		justify-content: center;
		text-align: center;
		margin-top: 0.55rem;
		p {
			color: #353535;
			font-size: 0.75rem;
			font-family: PingFang-SC-Regular;
		}
	}

	.left {
		position: absolute;
		left: 0.54rem;
		top: 0;
		width: 0.67rem;
		height: 1.1rem;
	}

	footer {
		display: flex;
		margin-top: 1.6rem;
		bottom: 1.2rem;
		justify-content: center;
		margin-left: 5%;
		div {
			width: 5.8rem;
			height: 2rem;
			background: #ff7635;
		}
	}

	footer p {
		line-height: 2rem;
		text-align: center;
		color: #ffffff;
		font-size: 0.8rem;
		font-family: PingFang-SC-Medium;
	}

</style>
