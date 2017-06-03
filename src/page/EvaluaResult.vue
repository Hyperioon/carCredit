<template>
	<div class='evalua-result'>
		<public-header></public-header>
		<span class='result'>完成</span>
		<div class='content'>
			当前估值： <span>13.99</span> 万
		</div>
		<div class="result-type">
			<span class="left">车型</span><span class="right">2016款奥迪A6L</span>
		</div>
		<div class="result-time">
			<span class="left">上牌时间</span><span class="right">2016-2</span>
		</div>
		<div class="result-time">
			<span class="left">所在城市</span><span class="right">杭州</span>
		</div>
		<div class="result-time">
			<span class="left">行驶里程</span><span class="right">5万公里</span>
		</div>
	</div>
</template>

<script>
	import PublicHeader from '../components/public/Header.vue';
	export default {
		components: {
			PublicHeader: PublicHeader
		}
	};
</script>

<style lang="scss">
	@import '../css/evalua-result.scss';
</style>