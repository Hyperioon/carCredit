<template>
	<div class="car-type">
		<public-header></public-header>
		<h2>当前车系：{{this.seriesName}} </h2>
		<div class="type-wrapper" v-for="item in list">
			<div class="type-title">
				<span>{{item[0].modelYear}}款</span>
			</div>
			<div class="type-content" v-for='item in item'>
				<div class="content-item" @click='selectCar(item)'>
					<span class="car-style">{{item.modelName}}</span>
					<span class="car-price">指导价：{{item.modelPrice}}万，
						<span>排量：{{item.liter}}</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import PublicHeader from '../components/public/Header.vue';
import { mapMutations, mapActions } from 'vuex';
export default {
	name: 'CarType',
	components: {
		PublicHeader: PublicHeader
	},
	data() {
		return {
			seriesId: '',
			seriesName: '',
			list: [],
			api: '/api/carCredit/m/filter/che300/queryModelList.json'
		};
	},
	methods: {
		...mapMutations({
			saveCar: 'SAVE_CAR'
		}),
		...mapActions({
			saveCarId: 'saveCarId'
		}),
		changeArr() {
			return this.list.reduce(function (pre, current, index) {
				pre[current.modelYear] = pre[current.modelYear] || [];
				pre[current.modelYear].push(current);
				return pre;
			}, {});
		},
		selectCar(item) {
			this.saveCarId(item);
			this.$router.push('evaluate');
		}
	},
	mounted() {
		this.seriesId = this.$route.params.seriesId;
		this.seriesName = this.$route.params.seriesName;
		this.$http.post(this.api, { seriesId: this.seriesId }, { emulateJSON: true })
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
@import '../css/car-type.scss';
</style>
