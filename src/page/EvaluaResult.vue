<template>
	<div class='evalua-result'>
		<public-header></public-header>
		<span class='result'>完成</span>
		<div class='content'>
			当前估值：
			<span>13.99</span> 万
		</div>
		<div class="result-type">
			<span class="left">车型</span>
			<span class="right">{{car.carName}}</span>
		</div>
		<div class="result-time">
			<span class="left">上牌时间</span>
			<span class="right">{{car.dataYear}}-{{car.dataMonth}}</span>
		</div>
		<div class="result-time">
			<span class="left">所在城市</span>
			<span class="right">{{car.addressCity}}</span>
		</div>
		<div class="result-time">
			<span class="left">行驶里程</span>
			<span class="right">{{car.miles}}</span>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import PublicHeader from '../components/public/Header.vue';
export default {
	components: {
		PublicHeader: PublicHeader
	},
	computed: {
		...mapGetters({
			car: 'car'
		})
	}
};
</script>

<style lang="scss">
@import '../css/evalua-result.scss';
</style>