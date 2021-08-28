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
						title: '家常菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 3,
						title: '家常菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 4,
						title: '家常菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 5,
						title: '家常菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 6,
						title: '家常菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 7,
						title: '家常菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 8,
						title: '家常菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 9,
						title: '家常菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					},
					{
						id: 10,
						title: '家常菜',
						imgSrc: '../../static/jiachangcia588@2x.png'
					}
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
		height: 186rpx;
		width: 686rpx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.nav-item {
			height: 98rpx;
			font-size: 24rpx;
			margin-left: 96rpx;
			margin-top: 28rpx;
			image {
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
</style>
