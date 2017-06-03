import * as types from '../mutation-types';

const state = {
	car: {
		addressProvince: '',
		addressCity: '',
		dataYear: '',
		dataMonth: '',
		miles: ''
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
	// 保存车辆行驶里程
	changeMiles({commit}, data) {
		commit(types.SAVE_MILES, data);
	},
	// 保存车辆上牌城市
	saveAddress({commit}, data) {
		commit(types.SAVE_CITY, data);
	}
};

// mutations
const mutations = {
	[types.CHOOSE_DATA](state, data) {
		state.car.dataYear = data[0];
		state.car.dataMonth = data[1];
	},
	[types.SAVE_MILES](state, data) {
		state.car.miles = data;
	},
	[types.SAVE_CITY](state, data) {
		console.log(data);
		state.car.addressProvince = data[0];
		state.car.addressCity = data[1];
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};