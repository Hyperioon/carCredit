<template>
	<div class='car-credit'>
		<public-header></public-header>
		<router-link to="/evaluate">
			<span class='absolute-car'>车辆评估</span>
		</router-link>
		<img src="../assets/banner1.jpg" alt="" style="height: 3.2rem; width: 100%;">
		<div class="icon-wrapper">
			<span>
				<img src="../assets/icon_rate.png" alt="">
				<span class="title">费率低</span>
				<span class="content">月费率9厘起</span>
			</span>
			<span>
				<img src="../assets/icon_success.png" alt="">
				<span class="title">放款快</span>
				<span class="content">最快当天可放款</span>
			</span>
			<span>
				<img src="../assets/icon_quota.png" alt="">
				<span class="title">额度高</span>
				<span class="content">最高估值100%</span>
			</span>
		</div>
		<div class="condition">
			<h2>申请条件</h2>
			<div class="detail">
				<img src="../assets/icon_one.png">
				<div class="content">
					<span class="title">车辆要求:</span>
					<span>车辆无抵押、无质押、所有权完整</span>
					<span>车辆年检正常</span>
					<span>无待处理违章信息</span>
				</div>
			</div>
			<div class="detail">
				<img src="../assets/icon_two.png">
				<div class="content">
					<span class="title">身份要求:</span>
					<span>18-60周岁公民</span>
					<span>个人车主、上班族、私营企业主、本地常住居民</span>
					<span>良好的还款资管 充足的银行流水</span>
				</div>
			</div>
			<div class="detail">
				<img src="../assets/icon_three.png">
				<div class="content">
					<span class="title">所需材料:</span>
					<span>身份证、车辆登记证、本地常住证明、征信报告委托书</span>
					<span>6个月银行流水、车辆保单</span>
				</div>
			</div>
			<div class="border"></div>
			<div class="process">
				<h2>申请流程</h2>
				<div class="process-detail">
					<span class="main">
						<img src="../assets/icon_online.png" alt="">
						<span class='main-left'>线上申请</span>
					</span>
					<span class="not-mail">
						<img src="../assets/icon_arrow.png" alt="">
					</span>
					<span class="main">
						<img src="../assets/icon_offline.png"  alt="">
						<span>线下办理手续</span>
					</span>
					<span class="not-mail">
						<img src="../assets/icon_arrow.png" alt="">
					</span>
					<span class="main">
						<img src="../assets/icon_material.png" alt="">
						<span>申请材料审核</span>
					</span>
					<span class="not-mail">
						<img src="../assets/icon_arrow.png" alt="">
					</span>
					<span class="main">
						<img src="../assets/icon_success.png" alt="">
						<span class='main-left'>贷款成功</span>
					</span>
				</div>
			</div>
			<div class="border"></div>
			<div class='cooperation'>
				<h2>合作平台</h2>
				<div class='img-wrapper'>
					<router-link to="/tuodao">
						<div class='img-detail'>
							<img class='logo1' src="../assets/pic_logo_tdjf.png" alt="">
							<span class='tdjf'>拓道金福</span>
						</div>
					</router-link>
					<router-link to="/rongyi">
						<div class='img-detail'>
							<img class='logo2' src="../assets/pic_logo_rycd.png" alt="">
							<span>融易车贷</span>
						</div>
					</router-link>
					<router-link to="/xiaojiu">
						<div class='img-detail'>
							<img class='logo3' src="../assets/pic_logo_xjjf.png" alt="">
							<span>小九金服</span>
						</div>
					</router-link>
					<router-link to="/duoduo">
						<div class='img-detail'>
							<img class='logo4' src="../assets/pic_logo_ddlc.png" alt="">
							<span>多多理财</span>
						</div>
					</router-link>
					
				</div>

			</div>
			<div class='phone'>
				<h2>客服电话</h2>
				<div class='phone-wrapper'>
					<a href="tel:0571-89808770" class='phone-content'>
						<!--<img src="../assets/icon_call.png">-->
						<span class="phone-img"></span>
						<span class="number">0571-89808770</span>
					</a>
					<a href="tel:0571-898087702" class='phone-content'>
						<!--<img src="../assets/icon_call.png">-->
						<span class="phone-img"></span>
						<span class="number">0571-89808772</span>
					</a>
				</div>
			</div>
			<div class='application'>
				<button>立即申请</button>
			</div>
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
	@import '../css/car-credit.scss'
</style>