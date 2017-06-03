<template>
	<div class="index">
		<public-header></public-header>
		<div class="banner">
			<!--<img src="../../../assets/imgs/pic_banner@2x.png" />-->
		</div>
		<div class="blank-top">

		</div>
		<div class="menu">
			<div class="menu-item">
				<a @click="creadit">
					<span class="icon-zsd"></span>
					<p>臻商贷</p>
				</a>
			</div>
			<div class="menu-item">
				<a @click="CarLoan">
					<span class="icon-cdd"></span>
					<p>车抵贷</p>
				</a>
			</div>
			<div class="menu-item">
				<a @click="">
					<span class="icon-jqqd"></span>
					<span class="icon-xyk"></span>
					<p>信用卡</p>
				</a>
			</div>
		</div>
		<div class="blank-bottom">

		</div>
		<div class="cell">
			<span class="cell-left"></span>
			<span class="cell-text">热门推荐</span>
		</div>
		<div class="content1" @click="creadit">
			<div class="title">
				<p>臻商贷</p>
			</div>
			<div class="words">
				<p class="word-top">臻e盾安保商户专享，无抵押、免担保小额借款。</p>
				<div class="word-down">
					<p class="wordl">可贷金额： 最高20万</p>
					<p class="wordr">
						<span class="word-l">
							费率低至每日
						</span>
						<span class="word-c">0.04</span>
						<span class="world-r">%</span>
					</p>
				</div>
			</div>
		</div>
		<div class="news-title">
		</div>
		<div class="content1" @click="Pledge">
			<div class="title">
				<p>车辆质押贷款</p>
			</div>
			<div class="words">
				<p class="word-top">贷款额度高、车辆安全、极速放款。</p>
				<div class="word-down">
					<p class="wordl">可贷金额： 最高20万</p>
					<p class="wordr">
						<span class="word-l">
							最高达车辆估值的
						</span>
						<span class="word-c">100</span>
						<span class="world-r">%</span>
					</p>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	import PublicHeader from '../components/public/Header.vue';
	export default {
		components: {
			PublicHeader
		}
	};
</script>
<style lang="scss">
	@import '../css/index.scss';
</style>