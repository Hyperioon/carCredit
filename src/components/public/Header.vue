<template>
	<div class="public-header">
		<img src="../../assets/icon_back@2x.png" alt="" @click='back()'>
		<span>{{this.$route.name}}</span>
	</div>
</template>

<script>
	export default {
		methods: {
			// 返回上一页
			back() {
				this.$router.go(-1);
			}
		}
	};
</script>

<style lang="scss">
	@import '../../css/public/header.scss';
</style>
