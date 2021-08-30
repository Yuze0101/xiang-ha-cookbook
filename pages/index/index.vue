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
				<swiper-item v-for="item in banner" :key="item.id">
					<view class="swiper-item">
						<image :src="item.imgSrc" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- nav部分 -->
		<view class="nav">
			<view class="nav-item" v-for="item in nav" :key='item.id'>
				<image class="nav-img" :src="item.imgSrc" mode=""></image>
				<view class="">

					<text>{{item.title}}</text>
				</view>
			</view>
		</view>

		<!-- 三个标题部分 -->
		<view class="title-3">
			<view class="title-3-left">
				<swiper class="title-3-left-item" :indicator-dots="true" circular indicator-active-color='#d86f32'
					:autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="item in secBanner" :key="item.id">
						<image class="title-3-left-item" :src="item.imgSrc"></image>
					</swiper-item>
				</swiper>
				<view class="title-3-title">
					<text>冬至吃饺子</text>
				</view>
			</view>
			<view class="title-3-right">
				<view class="top">
					<view class="title-3-title">
						<text>每日开运菜</text>
					</view>
					<image :src="right1Src" mode=""></image>
				</view>
				<view class="bottom">
					<view class="title-3-title">
						<text>减肥集中营</text>
					</view>
					<image :src="right2Src" mode=""></image>
				</view>
			</view>
		</view>

		<!-- 美食展示部分 -->
		<view class="food">
			<view class="food-item" v-for="item in foods" :key="item.id">
				<image :src="item.imgSrc" mode=""></image>
				<view class="p1">
					<text>{{item.title}}</text>
				</view>
				<view class="p2">
					<text>{{item.num}}
					</text>
					<image class="icon" src="../../static/mengban165@2x.png" mode=""></image>
					<text class="p-right">{{item.like}}
					</text>
					<image class="icon" src="../../static/mengban167@2x.png" mode=""></image>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				banner: [{
						id: 1,
						imgSrc: '../../static/NoPath-(91)@2x.png'
					},
					{
						id: 2,
						imgSrc: '../../static/NoPath-(91)@2x.png'
					},
					{
						id: 3,
						imgSrc: '../../static/NoPath-(91)@2x.png'
					}
				],
				nav: [{
						id: 1,
						title: '家常菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 2,
						title: '甜点',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 3,
						title: '素菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 4,
						title: '凉菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 5,
						title: '下饭菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 6,
						title: '川菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 7,
						title: '面食',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 8,
						title: '汤',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 9,
						title: '清淡',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 10,
						title: '分类',
						imgSrc: '../../static/jiachangcia588@2x.png'
					}
				],
				secBanner: [{
						id: 1,
						imgSrc: '../../static/dongzhi1@2x.png'
					},
					{
						id: 2,
						imgSrc: '../../static/dongzhi1@2x.png'
					},
					{
						id: 3,
						imgSrc: '../../static/dongzhi1@2x.png'
					}, {
						id: 4,
						imgSrc: '../../static/dongzhi1@2x.png'
					},
				],
				right1Src: '../../static/5b0394fa32431@2x.png',
				right2Src: '../../static/5b0394fa32431@2x.png',
				foods: [{
						id: 1,
						imgSrc: '../../static/1@2x.png',
						title: '奶油泡芙',
						num: '180.07万',
						like: '3.9万'
					},
					{
						id: 2,
						imgSrc: '../../static/1-huifude@2x.png',
						title: '大白兔奶茶',
						num: '66.4万',
						like: '2495'
					},
					{
						id: 3,
						imgSrc: '../../static/2@2x.png',
						title: '树莓沙冰',
						num: '216.0万',
						like: '4.4万'
					},
					{
						id: 4,
						imgSrc: '../../static/3@2x.png',
						title: '森林王国蛋糕',
						num: '251.2万',
						like: '7.9万'
					},
				]
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
			background-color: rgba(216,111,50, 0.63);
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
				.p-right{
					margin-left: 64rpx;
				}
			}
			.icon{
				margin-left: 6rpx;
				height: 25rpx;
				width: 25rpx;
				vertical-align: middle;
			}
		}
	}
</style>
