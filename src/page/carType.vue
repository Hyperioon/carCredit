<template>
	<div class="car-type">
		<public-header></public-header>
		<h2>当前车系：aodi </h2>
		<div class="type-wrapper">
			<div class="type-title">2016款</div>
			<div class="type-content">
				<span class="car-style">2016款 奥迪A3 sports 运动款</span>
				<span class="car-price">指导价：15.9万，<span>排量：1.5L</span></span>
			</div>
		</div>
	</div>
</template>
<script>
	import PublicHeader from '../components/public/Header.vue';
	export default {
		name: 'CarType',
		components: {
			PublicHeader: PublicHeader
		},
		data() {
			return {
				api1: '/api/carCredit/m/filter/che300/queryForBrankList.json'
			};
		},
		mounted() {
			// this.$http.post(this.api1, { emulateJSON: true })
			// 	.then((response) => {
			// 		if (response.data.code === 0) {
			// 		console.log(response);
			// 	}
			// 	});
		}
	};

</script>
<style lang="scss">
	@import '../css/car-type.scss';
</style>
