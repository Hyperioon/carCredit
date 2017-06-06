import * as types from '../mutation-types';

const state = {
	car: {
		addressProvince: '',
		addressCity: '',
		dataYear: '',
		dataMonth: '',
		miles: '',
		cityId: '',
		carId: '',
		carName: '',
		range: []
	}
};

// getters
const getters = {
	car: state => state.car
};

// actions
const actions = {
	// 选择车辆品牌

	// 选择上牌时间
	chooseData({commit}, data) {
		commit(types.CHOOSE_DATA, data);
	},
	// 保存车辆上牌城市
	saveAddress({commit}, data) {
		commit(types.SAVE_CITY, data);
	},
	// 保存选定的车型,时间
	saveCarId({commit}, data) {
		commit(types.SAVE_CAR, data);
	}
};

// mutations
const mutations = {
	[types.CHOOSE_DATA](state, data) {
		state.car.dataYear = data[0];
		state.car.dataMonth = data[1];
	},
	[types.SAVE_CITY](state, data) {
		console.log(data);
		state.car.cityId = data.cityId;
		state.car.addressProvince = data.addressProvince;
		state.car.addressCity = data.addressCity;
	},
	[types.SAVE_CAR](state, data) {
		if (data.modelName.length > 38) {
			state.car.carName = data.modelName.substring(0, 38) + '...';
		} else {
			state.car.carName = data.modelName;
		}
		state.car.carId = data.modelId;
		state.car.maxRegYear = data.maxRegYear;
		state.car.minRegYear = data.minRegYear;
		let range = [];
		range.length = data.maxRegYear - data.minRegYear;
		for (let i = 0; i < range.length; i++) {
			range[i] = parseInt(data.minRegYear) + i;
		}
		state.car.range = range;
		state.car.dataYear = '';
		state.car.dataMonth = '';
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};