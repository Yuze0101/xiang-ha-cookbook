<template>
	<view class="main">

		<view class="header">
			<view class="title">
				<text>我的会员</text>
				<view class="title-back" @click="back">
					返回
				</view>
			</view>
			<!-- 会员用户 -->
			<view class="vips">
				<view class="vips-left">
					<view class="vips-avator">
						<image v-for="(item,index) in avators" :src="item.imgSrc" mode="" :key='index'
							:style="{height:'36rpx',width:'36rpx',position:'absolute',zIndex:index,left:`${24*index}rpx`,marginLeft:'24rpx',verticalAlign:'center'}">
						</image>
					</view>
					<view class="vips-p">
						<text>5593人已开通会员</text>
					</view>
				</view>
				<view class="vips-right">
					<text>购买查询</text>
				</view>
			</view>

			<!-- 立即登录模块 -->
			<view class="register">
				<view class="register-center">
					<view class="center-left">
						<image :src="userAvatar" mode=""></image>
					</view>
					<view class="center-right">
						<view class="p-top">
							<text v-if="!userVip">立即开通</text>
							<text v-else>立即续费</text>
							<text class="p-1">会员</text>
						</view>
						<view class="p-bottom">
							<text v-if="!userVip">开通会员尊享VIP权益</text>
							<text v-else>续费会员尊享VIP权益</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 推荐月数模块 -->
			<view class="months">
				<view :class="['months-item',index==0?'choosed':'',userChoose==item._id?'userChoose':'']"
					v-for="(item,index) in mouths" :key='item._id'
					@click="changeChoose(item.mouth);changeUserChoose(item._id)">

					<view class="p1">
						<text>{{item.mouth}}个月</text>
					</view>
					<view class="p2">
						<text>￥{{item.salePrice}}</text>
					</view>
					<view class="p3">
						<text>￥{{item.normalPrice}}</text>
					</view>

				</view>
			</view>

			<!-- 开通模块 -->
			<view class="recommend">
				<text class="p1">恭喜</text>
				<text class="p2">您获得2折开通会员特权！</text>
				<view class="button" @click="showPopup" >
				<text v-if="!userVip">立即开通</text>
				<text v-else>立即续费</text>
				</view>
			</view>

			<!-- 弹出购买框 -->
			<uni-popup ref="popup" type="bottom">
				<view class="popup">
					<view class="p111">
						<text v-if="!userVip">开通VIP会员</text>
						<text v-else>续费VIP会员</text>
					</view>

					<view class="months">
						<view :class="['months-item',index==0?'choosed':'',userChoose==item._id?'userChoose':'']"
							v-for="(item,index) in mouths" :key='item._id'
							@click="changeChoose(item.mouth);changeUserChoose(item._id)">

							<view class="p1">
								<text>{{item.mouth}}个月</text>
							</view>
							<view class="p2">
								<text>￥{{item.salePrice}}</text>
							</view>
							<view class="p3">
								<text>￥{{item.normalPrice}}</text>
							</view>

						</view>
					</view>
					<view class="recommend">
						<text class="p1">恭喜</text>
						<text class="p2">开通后立即全站去广告、免费看10000+名厨视频</text>
						<view class="button" @click="openVip">立即购买</view>
					</view>
				</view>

			</uni-popup>



			<view class="row">

			</view>

			<!-- VIP特权模块 -->
			<view class="myVip">
				<text class="p1">VIP特权</text>
				<view class="every" v-for="item in rights" :key="item.id">
					<view class="left">
						<image :src="item.imgSrc" mode=""></image>
					</view>
					<view class="right">
						<view class="p1">
							<text>{{item.title}}</text>
						</view>
						<view class="p2">
							<text>{{item.p}}</text>
						</view>
					</view>
				</view>
			</view>

			<view class="row">
			</view>

			<!-- 使用说明模块 -->
			<view class="dec">
				<text class="dec-p">会员使用说明</text>
				<view class="p1 p2">
					<text>1.会员服务一经开通，不支持退款；</text>
				</view>
				<view class="p1">
					<text>2.如遇到苹果手机支付问题，建议参考Appstore支付流程；</text>
				</view>
				<view class="p1">
					<text>3.若会员开通出现异常，请立即联系客服，我们会在三个工作日内给出处理结果；</text>
				</view>
				<view class="p1">
					<text>4.会员常见问题、会员服务协议、会员隐私协议。</text>
				</view>
			</view>
		</view>
	</view>


</template>

<script>
	import $request from '../../apis/request.js'
	export default {
		data() {
			return {
				avators: [{
						imgSrc: '../../static/yonghu1@2x.png'
					},
					{
						imgSrc: '../../static/yonghu2@2x.png'
					},
					{
						imgSrc: '../../static/yonghu3@2x.png'
					},
					{
						imgSrc: '../../static/yonghu4@2x.png'
					},
					{
						imgSrc: '../../static/yonghu5@2x.png'
					},
					{
						imgSrc: '../../static/yonghu6@2x.png'
					}
				],
				choose: {
					_id: '',
					date: '',
				},
				userVip:false,
				userAvatar:"../../static/touxiang495@2x.png",
				vipTime:'',
				userChoose: '',
				mouths: [],
				rights: [{
					id: 1,
					imgSrc: '../../static/caipu.png',
					title: '1000+精品名厨菜谱',
					p: '大咖教学，轻松学会'
				}, {
					id: 2,
					imgSrc: '../../static/new.png',
					title: '每周上新',
					p: '新菜持续更新中'
				}, {
					id: 3,
					imgSrc: '../../static/ad.png',
					title: '会员免广告打扰',
					p: '体验更流畅'
				}, {
					id: 4,
					imgSrc: '../../static/biaoshi.png',
					title: 'VIP尊贵身份标识',
					p: '随时随地、与众不同'
				}, ]
			}
		},
		onLoad() {
			this.getVipList();
			console.log(getApp().globalData.userInfo);
			
		},
		onShow(){
			this.userVip=getApp().globalData.userInfo.vip;
			this.vipTime = getApp().globalData.userInfo.vipdate;
			this.userAvatar=getApp().globalData.userInfo.avatarUrl
		},
		methods: {
			showPopup() {
				this.$refs.popup.open();
			},
			closePopup() {
				this.$refs.popup.close();
			},
			//获取 VIP 套餐列表
			async getVipList() {
				const token = uni.getStorageSync('token');
				const res = await $request({
					url: '/user/topupList',
					token
				})
				this.mouths = res.data.data;
				this.choose = {
					_id: '',
					data: res.data.data[0].mouth
				}
			},
			//开通会员
			async openVip() {
				const token = uni.getStorageSync('token');
				if (!this.choose._id) {
					uni.showToast({
						title: '请选择套餐',
						icon:"error"
					})
				} else {
					const res = await $request({
						url: "/user/openVip",
						token,
						data: this.choose
					})
					if (res.data.code) {
						uni.showToast({
							title: res.data.msg,
						})
						this.closePopup()
					}
				}
			},
			//修改用户选中的开通数据
			changeChoose(mouths) {
				const _id = getApp().globalData.userInfo._id;
				this.choose = {
					_id,
					date: mouths + ''
				}
			},
			changeUserChoose(_id) {
				this.userChoose = _id;
			},
			back(e) {
				uni.navigateBack({
					delta: 1
				})
			},

		}
	}
</script>

<style scoped lang="scss">
	.main {
		background-color: #fff;
	}

	.header {
		height: 508rpx;
		background-color: #313131;
		border-radius: 0 0 100rpx 100rpx;

		.title {
			padding-top: 112rpx;
			text-align: center;
			font-size: 36rpx;
			color: #fff;
			position: relative;
		}

		.title-back {
			position: absolute;
			font-size: 30rpx;
			left: 36rpx;
			top: 118rpx;
		}

		.vips {
			color: #fff;
			display: flex;
			height: 48rpx;
			line-height: 48rpx;
			justify-content: space-between;
			margin-top: 50rpx;

			.vips-left {
				height: 48rpx;
				width: 434rpx;
				border-radius: 0 40rpx 40rpx 0;
				background-color: #5c5c5c;
				font-size: 26rpx;
				display: flex;

				.vips-avator {
					padding-top: 6rpx;
				}

				.vips-p {
					margin-left: 200rpx;
				}
			}

			.vips-right {
				font-size: 28rpx;
				margin-right: 32rpx;
			}
		}
	}

	.register {
		margin-top: 28rpx;
		width: 750rpx;
		height: 302rpx;
		background-image: url("https://z3.ax1x.com/2021/08/30/hYJipF.png");
		background-size: cover;
		overflow: hidden;

		.register-center {
			margin-top: 88rpx;
			height: 108rpx;
			width: 750rpx;
			padding-left: 64rpx;
			display: flex;

			.center-left {
				image {
					width: 108rpx;
					height: 108rpx;
				}
			}

			.center-right {
				margin-left: 18rpx;

				.p-top {
					font-size: 40rpx;
					color: #7b5b21;
					font-weight: bold;
				}

				.p-1 {
					font-size: 32rpx;
					padding-left: 25rpx;
					padding-right: 25rpx;
					background-color: #a5a5a5;
					border-radius: 16rpx;
					color: #fbedc5;
					font-weight: normal;
					margin-left: 8rpx;
				}

				.p-bottom {
					margin-top: 18rpx;
					color: #7b5b21;
					font-size: 30rpx;
				}
			}

		}
	}

	.months {
		margin: 0 auto;
		margin-top: 48rpx;
		display: flex;
		width: 686rpx;
		height: 242rpx;

		.months-item {
			width: 212rpx;
			height: 232rpx;
			margin-left: 24rpx;

			&:nth-child(1) {
				margin-left: 0;
			}

			border-radius: 16rpx;
			border: solid 2rpx #e0e0e0;
			text-align: center;

			.p1 {
				margin-top: 48rpx;
				font-size: 36rpx;
				font-weight: bold;
			}

			.p2 {
				margin-top: 24rpx;
				font-size: 42rpx;
				line-height: 42rpx;
				color: #deb264;
				font-weight: bold;
			}

			.p3 {
				font-size: 30rpx;
				margin-top: 22rpx;
				line-height: 30rpx;
				color: #a49fa0;
				text-decoration: line-through;
			}
		}

		.choosed {
			background-color: #fbf7ef;
			position: relative;
			border: solid 2rpx #dcb66a;

			&::before {
				content: '推荐';
				left: 0;
				top: -24rpx;
				position: absolute;
				width: 98rpx;
				height: 48rpx;
				line-height: 48rpx;
				font-weight: bold;
				background-image: url(../../static/tuijian@2x.png);
				background-size: cover;
				font-size: 28rpx;
				text-align: center;
				color: #fff;
			}
		}

		.userChoose {
			border: solid 2rpx red;
			;
		}
	}

	.recommend {
		margin: 0 auto;
		margin-top: 26rpx;
		width: 686rpx;

		.p1 {
			background-image: url(../../static/gongxi@2x.png);
			height: 42rpx;
			padding-left: 18rpx;
			padding-right: 18rpx;
			background-size: cover;
			font-size: 28rpx;
			font-weight: bold;
			color: #deb264;
		}

		.p2 {
			color: #7b5b21;
			font-size: 30rpx;
		}

		.button {
			margin-top: 34rpx;
			width: 686rpx;
			height: 80rpx;
			text-align: center;
			font-size: 42rpx;
			border-radius: 16rpx;
			font-weight: bold;
			border: none;
			color: #a98c4f;
			line-height: 80rpx;
			background-color: #fcf1d3;
		}
	}

	.row {
		height: 48rpx;
		margin-top: 74rpx;
		background-color: #f5f7fa;
		width: 100vw;
	}

	.myVip {
		padding-top: 20rpx;

		.p1 {
			margin-left: 32rpx;
			margin-bottom: 42rpx;
			font-size: 44rpx;
			font-weight: bold;
		}

		.every {
			padding-left: 46rpx;
			display: flex;
			margin-top: 50rpx;
			height: 90rpx;

			.left {
				image {
					width: 90rpx;
					height: 90rpx;
				}
			}

			.right {
				margin-left: 44rpx;

				.p1 {
					font-weight: bold;
					font-size: 32rpx;
					margin-bottom: 0;
					margin-left: 0;
				}

				.p2 {
					margin-top: 18rpx;
					color: #aaaaaa;
					font-size: 24rpx;
				}
			}
		}
	}

	.dec {
		width: 686rpx;
		margin: 0 auto;
		margin-top: 20rpx;
		margin-bottom: 52rpx;

		.dec-p {
			font-size: 34rpx;
			font-weight: bold;
			color: #484848;
		}

		.p1 {
			font-size: 28rpx;
			color: #b7b7b7;
			line-height: 40rpx;
		}

		.p2 {
			margin-top: 22rpx;
		}
	}

	.popup {
		height: 516rpx;
		width: 100vw;
		background-color: #fff;
		overflow: hidden;
		padding-bottom: 40rpx;

		.choosed {
			border: solid 2rpx #dcb66a;
		}

		.userChoose {
			border: solid 2rpx red;
			;
		}

		.choosed::before {
			content: '即将涨价';
			width: 158rpx;
			height: 56rpx;
			font-weight: normal;
			top: -40rpx;
			line-height: 76rpx;
			font-size: 28rpx;
			background-image: url('../../static/zhangjia@2x.png');
		}

		.p111 {
			line-height: center;
			font-size: 32rpx;
			color: #5a5a5a;
			text-align: center;
			margin-top: 22rpx;
		}

		.p2 {
			font-weight: bold;
			color: #000;
			font-size: 26rpx;
		}

	}
</style>
