<template>
	<view class="container">
		<view class="HeadContainer">
			<view class="Title"
				>{{ meunData.name }}
				<text @tap="back">返回</text>
			</view>
			<view class="Header">
				<image
					src="../../static/images/@2/midouyichu _slices/xuhuan@2x.png"
					mode=""
					@tap="handleLike(currentId)"
				/>
				<image src="../../static/images/@2/midouyichu _slices/zhuanfa@2x.png" mode="" />
			</view>
		</view>
		<view class="player">
			<video :src="meunData.vid"></video>
			<!-- <image src="../../static/images/@2/midouyichu _slices/tupian1@2x.png" mode="" /> -->
			<view class="alertVIP" v-if="userInfo.vip?false:true">
				<view>开通会员观看时评做法</view>
				<view class="playerBTN" @click="toVIP">立即开通</view>
				<view @click="toUserCenter">已是会员，立即登录></view>
			</view>
		</view>
		<view class="playerInfo">
			<view class="buyVipButton" v-if="userInfo.vip?false:true">会员低至2元/月，免广告、看10000+名厨视频</view>
			<view class="menuName">{{ meunData.name }}</view>
			<view class="cardDataBox">
				<view class="cardItemData">
					<text class="cardItemNumber">{{ meunData.pageview }}</text
					>浏览
					<image src="../../static/images/@2/caipusousuo_slices/mengbanzu278@2x.png" />
				</view>
				<view class="cardItemData" @tap="handleCollect(currentId)">
					<text class="cardItemNumber">{{ meunData.collections }}</text
					>收藏
					<image src="../../static/images/@2/caipusousuo_slices/mengbanzu279@2x.png" />
				</view>
			</view>
		</view>
		<view class="menuInfoBox">
			<view class="menuInfo">
				<block v-for="item in meunData.tips" :key="item.tipname">
					<view class="menuTitle">{{ item.tipname }}</view>
					<view class="menuText">
						{{ item.tipdescribe }}
					</view>
				</block>
			</view>
		</view>
		<view class="menuItem">
			<view class="cardDataBox">
				<view class="cardItemData">
					<image src="../../static/images/@2/midouyichu _slices/shijian@2x.png" />
					<text class="cardItemNumber">{{ meunData.needtime }}</text
					>分钟
				</view>
				<view class="cardItemData">
					<image src="../../static/images/@2/midouyichu _slices/xing @2x.png" />
					<text class="cardItemNumber">{{ meunData.grade }}</text
					>难度
				</view>
			</view>
			<view>
				<view class="item-box">
					<view class="item itemHeader">
						<text class="itemTitle">用料</text>
						<text class="remove">移出采购清单</text>
					</view>
					<block v-for="item in meunData.ingredient" :key="item.name">
						<view class="item">
							<text>{{ item.name }}</text>
							<text>{{ item.number }}</text>
						</view>
					</block>
				</view>
			</view>
			<view>
				<view v-for="item in meunData.method" :key="item.describe">
					<view>{{ item.describe }}</view>
					<image :src="item.img" />
				</view>
			</view>
			<view class="flow-item">
				<view class="title">猜你喜欢</view>
				<scroll-view scroll-x="true" class="scroll-box">
					<!-- NOTE 循环 -->
					<view class="scroll-item" v-for="item in guessLikeList" :key="item._id">
						<video class="video" :src="item.vid" @loadedmetadata="videoTimeUpdateEvent" />
						<view class="item-text">
							<view class="item-title">{{ item.name }}</view>
							<view class="item-desc">
								<text class="liulan-text">{{ item.pageview }}</text>
								<image
									class="mini-icon"
									src="../../static/images/@2/caunbeilaingfanyichu_slices/liulan@2x.png"
									mode=""
								/>

								<text class="liulan-text">{{ item.collections }}</text>
								<image
									class="mini-icon"
									src="../../static/images/@2/caunbeilaingfanyichu_slices/shoucamg@2x.png"
									mode=""
								/>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import $request from "@/apis/request"
	export default {
		data() {
			return {
				currentId: "",
				meunData: {},
				guessLikeList: [],
				userInfo: {},
			}
		},
		onLoad(options) {
			console.log(options)
			this.currentId = options.id
			const token = uni.getStorageSync("token")
			const userInfo = getApp().globalData.userInfo
			this.userInfo = userInfo
			console.log("USERINFO", this.userInfo)
			if (token) {
				this.getMenuDetail()
				this.getGuessLikeList(token)
				this.haveVisit(token)
			}
		},
		methods: {
			async getMenuDetail() {
				const res = await $request({
					url: "/search/menuDetail",
					method: "POST",
					data: {
						_id: this.currentId,
					},
				})
				this.meunData = res.data.message[0]
			},
			async getGuessLikeList(token) {
				const res = await $request({
					url: "/vip/likeMenu",
					token,
				})
				this.guessLikeList = res.data.menus
			},
			async haveVisit(token) {
				const userInfo = getApp().globalData.userInfo
				await $request({
					url: "/user/record",
					method: "POST",
					token,
					data: {
						user_id: userInfo._id,
						menu_id: this.currentId,
					},
				})
			},
			async handleLike(id) {
				const token = uni.getStorageSync("token")
				const userInfo = getApp().globalData.userInfo
				const res = await $request({
					url: "/user/mylike",
					method: "POST",
					token,
					data: {
						user_id: userInfo._id,
						menu_id: this.currentId,
					},
				})
				if (res.statusCode === 200) {
					uni.showToast({
						title: "喜欢成功",
						duration: 2000,
					})
				}
			},
			async handleCollect(id) {
				const token = uni.getStorageSync("token")
				const userInfo = getApp().globalData.userInfo
				const res = await $request({
					url: "/user/collect",
					method: "POST",
					token,
					data: {
						user_id: userInfo._id,
						menu_id: this.currentId,
					},
				})
				if (res.statusCode === 200) {
					uni.showToast({
						title: "收藏成功",
						duration: 2000,
					})
				}
			},
			toVIP(e) {
				uni.switchTab({
					url: "/pages/VIP/index",
				})
			},
			toUserCenter(e) {
				uni.switchTab({
					url: "/pages/UserCenter/index",
				})
			},
			back(e) {
				uni.navigateBack({ delta: 1 })
			},
		},
	}
</script>

<style scoped lang="scss">
	@import "./index.scss";
</style>
