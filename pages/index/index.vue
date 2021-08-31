<template>
	<view class="">

		<view class="title">
			<view class="title-1">
				<text>香哈菜谱大全</text>
			</view>
			<view class="title-2">
				<text>小白学做菜必备烹饪助手</text>
			</view>
			<view class="search">
				<input class="search-input" type="text" v-model="search" placeholder="共有857142道菜" />
				<image src="../../static/mengbanzu2@2x.png" class="search-img" mode=""></image>
			</view>
		</view>

		<!-- 轮播图部分 -->
		<view class="banner">
			<swiper :indicator-dots="true" circular indicator-active-color='#d86f32' :autoplay="true" :interval="3000"
				:duration="1000">
				<swiper-item v-for="item in banner" :key="item._id">
					<view class="swiper-item">
						<image :src="item.image_src" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- nav部分 -->
		<view class="nav">
			<view class="nav-item" v-for="item in nav" :key='item._id'>
				<image class="nav-img" :src="item.image_src" mode=""></image>
				<view class="">

					<text>{{item.name}}</text>
				</view>
			</view>
		</view>

		<!-- 三个标题部分 -->
		<view class="title-3">
			<view class="title-3-left">
				<swiper class="title-3-left-item" :indicator-dots="true" circular indicator-active-color='#d86f32'
					:autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in secBanner[0].floor_imgs" :key='index'>
						<image class="title-3-left-item" :src="item"></image>
					</swiper-item>
				</swiper>
				<view class="title-3-title">
					<text>{{this.secBanner[0].floor_title.slice(1,6)}}</text>
				</view>
			</view>
			<view class="title-3-right">
				<view class="top" v-for="item in secondBanner" :key="item._id">
					<view class="title-3-title">
						<text>{{item.floor_title.slice(1,6)}}</text>
					</view>
					<image :src="item.floor_imgs[0]" mode=""></image>
				</view>
				<!-- <view class="bottom">
					<view class="title-3-title">
						<text>减肥集中营</text>
					</view>
					<image :src="right2Src" mode=""></image>
				</view> -->
			</view>
		</view>

		<!-- 美食展示部分 -->
		<view class="food">
			<view class="food-item" v-for="item in foods" :key="item._id">
				<image :src="item.coverpic" mode=""></image>
				<view class="p1">
					<text>{{item.name}}</text>
				</view>
				<view class="p2">
					<text>{{item.pageview}}
					</text>
					<image class="icon" src="../../static/mengban165@2x.png" mode=""></image>
					<text class="p-right">{{item.collections}}
					</text>
					<image class="icon" src="../../static/mengban167@2x.png" mode=""></image>
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
				search: '',
				banner: [],
				nav: [],
				secBanner: [],
				foods: []
			}
		},
		computed: {
			secondBanner() {
				return this.secBanner.filter((item, index) => {
					if (!index == 0) {
						return item
					}
				})
			}

		},
		onLoad() {
			this.getBanners();
			this.getNavs();
			this.getSecBanners();
			this.getRecommends()
		},
		methods: {
			async getBanners() {
				const res = await $request({
					url: "/home/swiperdata"
				})
				this.banner = res.data.message;
			},
			async getNavs() {
				const res = await $request({
					url: "/home/catitems"
				})
				this.nav = res.data.message;
			},
			async getSecBanners() {
				const res = await $request({
					url: "/home/floorsdata"
				})
				this.secBanner = res.data.message;
			},
			async getRecommends(){
				const res = await $request({url:'/home/recommend'})
				this.foods = res.data.message
				console.log(123,this.foods);
			}
		}
	}
</script>

<style scoped lang="scss">
	.title {
		background-image: url(../../static/mengbanzu250@2x.png);
		width: 750rpx;
		height: 220rpx;
		color: #fff;
		padding-left: 32rpx;
		position: relative;

		.title-1 {
			font-size: 40rpx;
			font-weight: bold;
			padding-top: 80rpx;
		}

		.title-2 {
			font-size: 24rpx;
		}

		.search {
			width: 686rpx;
			height: 74rpx;
			border-radius: 38rpx;
			background-color: #fff;
			position: absolute;
			top: 184rpx;
			box-shadow: 0 5rpx 10rpx 0rpx #F3f3f3;

			.search-input {
				margin: 0 auto;
				width: 544rpx;
				height: 74rpx;
				color: #000;
				font-size: 26rpx;
				text-align: center;
			}

			.search-img {
				position: absolute;
				height: 26rpx;
				width: 26rpx;
				top: 24rpx;
				left: 38rpx;
			}
		}
	}

	.banner {
		margin: 0 auto;
		margin-top: 62rpx;
		width: 686rpx;
		height: 326rpx;

		.swiper-item {
			image {
				height: 304rpx;
				width: 686rpx;
				border-radius: 16rpx;
			}
		}
	}

	.nav {
		// height: 186rpx;
		width: 686rpx;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;

		.nav-item {
			height: 98rpx;
			width: 72rpx;
			font-size: 24rpx;
			margin-right: 80rpx;
			text-align: center;

			&:nth-child(5n) {
				margin-right: 0;
			}

			margin-top: 28rpx;

			image {
				width: 60rpx;
				height: 60rpx;
			}
		}
	}

	.title-3 {
		margin: 0 auto;
		margin-top: 36rpx;
		height: 363rpx;
		width: 686rpx;
		display: flex;
		position: relative;

		.title-3-left {
			width: 334rpx;
			height: 362rpx;

			.title-3-left-item {
				height: 362rpx;
				border-radius: 8rpx;
				width: 334rpx;
			}
		}

		.title-3-title {
			position: absolute;
			left: 10rpx;
			top: 10rpx;
			width: 164rpx;
			font-weight: bold;
			font-size: 30rpx;
			color: #fff;
			background-color: rgba(216, 111, 50, 0.63);
			height: 56rpx;
			line-height: 56rpx;
			text-align: center;
			border-radius: 8rpx;
		}

		.title-3-right {
			margin-left: 20rpx;
			height: 362rpx;

			image {
				height: 176rpx;
				width: 332rpx;
				border-radius: 8rpx;
			}

			.top {
				height: 176rpx;
				width: 332rpx;
				position: relative;
			}

			.bottom {
				margin-top: 10rpx;
				height: 176rpx;
				width: 332rpx;
				position: relative;
			}
		}
	}

	.food {
		display: flex;
		flex-wrap: wrap;
		width: 686rpx;
		height: fit-content;
		margin: 0 auto;
		margin-bottom: 20rpx;

		.food-item {
			margin-top: 26rpx;
			width: 330rpx;
			height: 352rpx;

			&:nth-child(2n) {
				margin-left: 20rpx;
			}

			image {
				width: 334rpx;
				height: 248rpx;
			}

			.p1 {
				font-size: 30rpx;
				color: #575757;
				font-weight: bold;
				margin-top: 10rpx;
			}

			.p2 {
				font-size: 20rpx;
				color: #aaaaaa;
				margin-top: 10rpx;

				.p-right {
					margin-left: 64rpx;
				}
			}

			.icon {
				margin-left: 6rpx;
				height: 25rpx;
				width: 25rpx;
				vertical-align: middle;
			}
		}
	}
</style>
