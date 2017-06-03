<template>
	<div class='choose-brand'>
		<public-header></public-header>
		<h1 class='page-title'>Index List</h1>
		<p class='page-indexlist-desc'>此例请使用手机查看</p>
		<div class='page-indexlist-wrapper'>
			<mt-index-list>
				<mt-index-section v-for='item in list' :index='item[0].initial'>
					<mt-cell v-for='cell in item' :title='cell.brandName' :click='chooseBrand'></mt-cell>
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
			console.log(cell);
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