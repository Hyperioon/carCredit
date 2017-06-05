<template>
	<div class="choose-type">
		<public-header></public-header>

		<h2>当前品牌：<span>{{this.brandName}}</span> </h2>
		<div class="type-wrapper" v-for='item in list'>
			<div class="type-title">{{item[0].seriesGroupName}}</div>
			<div v-for='item in item'>
				<div class="type-content">
					<span class="car-style" @click='chooseCarType(item)'>{{item.seriesName}}</span>
				</div>
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
				brandName: '',
				brandId: '',
				list: [],
				api: '/api/carCredit/m/filter/che300/querySeriesList.json'
			};
		},
		computed: {
		},
		methods: {
			chooseCarType(item) {
				this.$router.push({name: '选择车型', params: { seriesId: item.seriesId, seriesName: item.seriesName }});
			},
			changeArr() {
				return this.list.reduce(function (pre, current, index) {
					pre[current.seriesGroupName] = pre[current.seriesGroupName] || [];
					pre[current.seriesGroupName].push(current);
					return pre;
				}, {});
			}
		},
		mounted() {
			this.brandName = this.$route.params.brandName;
			this.brandId = this.$route.params.brandId;
			this.$http.post(this.api, { brankId: this.brandId }, { emulateJSON: true })
			.then((response) => {
				if (response.data.code === 0) {
					this.list = response.data.list;
					this.list = this.changeArr();
				}
			});
		}
	};

</script>
<style lang="scss">
@import '../css/choose-type.scss';
</style>
