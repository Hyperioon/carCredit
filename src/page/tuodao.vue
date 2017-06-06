<template>
	<div class='tuodao'>
		<public-header></public-header>
		<div class='content'>
		</div>
		<p>
		拓道金服是中国领先的汽车金融服务平台，成立于2013年11月，注册资本5000万元。是中国汽车金融十强企业、互联网金融百强企业，并于2017年1月获得A轮8000万元融资、于2017年3月完成北京银行资金存管。公司拥有员工2000多人，在全国拥有80多处分支机构。 <br><br>
		拓道金服专注于汽车金融细分市场，根据银监会“小额、分散”的要求，以银行的高标准、互联网的高效率，为借款人提供高效、便捷的融资服务，为投资者提供安全、稳健的理财服务。
		</p>
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
	@import '../css/tuodao.scss';
</style>