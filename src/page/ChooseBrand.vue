<template>
	<div class='choose-brand'>
		<public-header></public-header>
		<div class='page-indexlist-wrapper'>
			<mt-index-list>
				<mt-index-section v-for='item in list' :index='item[0].initial'>
					<span v-for='cell in item' @click='chooseBrand(cell)' :title='cell.brandName'>
						<mt-cell :title='cell.brandName'>
						</mt-cell>
					</span>
				</mt-index-section>
			</mt-index-list>
		</div>
	</div>
</template>

<script type='text/babel'>
import PublicHeader from '../components/public/Header';

export default {
	components: {
		PublicHeader: PublicHeader
	},
	data() {
		return {
			api: 'api/carCredit/m/filter/che300/queryForBrankList.json',
			list: []
		};
	},
	methods: {
		chooseBrand(cell) {
			this.$router.push({name: '选择车系', params: { brandName: cell.brandName, brandId: cell.brandId }});
		}
	},
	mounted() {
		this.$http.post(this.api, { emulateJSON: true })
			.then((response) => {
				if (response.data.code === 0) {
					this.list = response.data.list;
				}
			});
	}
};
</script>
<style lang="scss">
	@import '../css/choose-brand.scss';
</style>
