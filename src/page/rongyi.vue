<template>
	<div class='rongyi'>
		<public-header></public-header>
		<div class='content'>
			<img src="../assets/pic_logo_rycd.png" alt="">
		</div>
		<p>
		融易车贷系杭州拓融投资管理咨询有限公司旗下的汽车质押贷款平台。平台没有募资端，通过加盟商开拓市场发展业务，由资金方（有资质的上市公司或国企、银行等）直接向C端借款客户放款，“融易车贷”则为资金方和借款客户提供车辆质押融资中介服务，收取服务手续费，并提供评估、检测、处置、风控等其他服务。
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
	@import '../css/rongyi.scss';
</style>