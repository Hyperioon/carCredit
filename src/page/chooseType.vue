<template>
	<div class="choose-type">
		<public-header></public-header>
		<h2>当前品牌：奥迪 </h2>
		<div class="type-wrapper">
			<div class="type-title">一汽奥迪</div>
			<div class="type-content">
				<span class="car-style">奥迪a3</span>
				<span class="car-style">奥迪a4</span>
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
	@import '../css/choose-type.scss';
</style>
