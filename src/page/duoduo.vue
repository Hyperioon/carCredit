<template>
	<div class='xiaojiu'>
		<public-header></public-header>
		<div>
			<img src="../assets/多多理财.jpg" style="width:100%;margin-bottom:0.26rem;">
			<p>
				多多理财是浙江多多互联网金融信息服务有限公司旗下一家互联网金融信息服务平台，成立于2015年，在全国设有数十家汽车金融营业部，是旨在为有融资、投资需求的小微企业主或个人建立起高效、透明、安全、便捷的互联网金融信息服务。并在同年获得了兴乐集团参股（兴乐集团，上市公司恒天海龙的最大持股方）天使轮投资。
			</p>
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
	@import '../css/xiaojiu.scss';
</style>