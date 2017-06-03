import Vue from 'vue';
import Router from 'vue-router';
import CarEvaluate from '../page/CarEvaluate';
import ChooseBrand from '../page/ChooseBrand';
import CarCredit from '../page/CarCredit';
import duoduo from '../page/duoduo';
import xiaojiu from '../page/xiaojiu';
import rongyi from '../page/rongyi';
import tuodao from '../page/tuodao';
import EvaluaResult from '../page/EvaluaResult.vue';
import Index from '../page/index.vue';
import CarType from '../page/CarType.vue';
import ChooseType from '../page/ChooseType.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', name: '融资', component: Index },
		{ path: '/index', name: '融资', component: Index },
		{ path: '/carCredit', name: '车抵贷', component: CarCredit },
		{ path: '/evaluate', name: '车辆评估', component: CarEvaluate },
		{ path: '/chooseBrand', name: '选择品牌', component: ChooseBrand },
		{ path: '/tuodao', name: '拓道金服', component: tuodao },
		{ path: '/duoduo', name: '多多理财', component: duoduo },
		{ path: '/rongyi', name: '融易车贷', component: rongyi },
		{ path: '/evaluaResult', name: '评估结果', component: EvaluaResult },
		{ path: '/xiaojiu', name: '小九金福', component: xiaojiu },
		{ path: '/carType', name: '选择车型', component: CarType },
		{ path: '/chooseType', name: '选择车系', component: ChooseType }
	]
});
