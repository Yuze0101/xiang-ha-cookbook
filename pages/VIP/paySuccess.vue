<template>
	<view class="container">
		<view class="Header">支付完成</view>
		<image class="wanchengPNG" src="../../static/images/@2/zhifuwancheng _slices/wancheng@2x.png" mode="" />
		<view class="title">支付成功</view>
		<view class="Money">已支付￥<text>{{money}}</text></view>
		<view class="logo">
			<image src="../../static/images/@2/zhifuwancheng _slices/wanchengtupian @2x.png" mode="" />
		</view>
		<view class="adver">立即分享 领取豪礼</view>
		<view @click="share" class="button active">立即分享</view>
		<view @click="toHome" class="button">返回首页</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money: 0
			}
		},
		onLoad(option) {
			console.log(option);
			this.money = option.money
		},
		methods: {
			toHome() {
				uni.switchTab({
					url: "/pages/VIP/index"
				})
			},
			share() {
				uni.showToast({
					title: '分享成功！'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "./paySuccess.scss";
</style>
