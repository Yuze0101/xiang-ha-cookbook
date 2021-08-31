<template>
	<view class="container">
		<view class="Header">食材分类</view>
		<view class="selectBox">
			<view class="buttonBox">
				<view class="Active">分类</view>
				<view>食材</view>
			</view>
		</view>
		<view class="searchBox">
			<input type="text" placeholder="想吃什么搜这里，如麻婆豆腐" class="inputItem" />
		</view>
		<view class="page-section-spacing">
			<view class="list-left">
				<scroll-view scroll-y="true">
					<block v-for="item in categories" :key="item._id">
						<view class="scroll-view-item active">1</view>
					</block>
				</scroll-view>
			</view>
			<view class="list-right">
				<scroll-view scroll-y="true">
					<block>
						<view class="scroll-view-item-right">123</view>
						<view class="goods_box">
							<view class="goods_item">
								<image
									class="goods_img"
									src="../../static/images/@2/shicaifenlei_slices/jiachangcai@2x.png"
								></image>
								<text class="goods_text">菜名</text>
							</view>
							<view class="goods_item">
								<image
									class="goods_img"
									src="../../static/images/@2/shicaifenlei_slices/jiachangcai@2x.png"
								></image>
								<text class="goods_text">菜名</text>
							</view>
							<view class="goods_item">
								<image
									class="goods_img"
									src="../../static/images/@2/shicaifenlei_slices/jiachangcai@2x.png"
								></image>
								<text class="goods_text">菜名</text>
							</view>
							<view class="goods_item">
								<image
									class="goods_img"
									src="../../static/images/@2/shicaifenlei_slices/jiachangcai@2x.png"
								></image>
								<text class="goods_text">菜名</text>
							</view>
							<view class="goods_item">
								<image
									class="goods_img"
									src="../../static/images/@2/shicaifenlei_slices/jiachangcai@2x.png"
								></image>
								<text class="goods_text">菜名</text>
							</view>
						</view>
					</block>
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
				categories: [],
				activeId: 0,
				current: {},
			}
		},
		onLoad() {
			this.getCategoryData()
		},
		methods: {
			changCategories(_id) {
				;(this.activeId = _id), (this.current = this.categories.find((item) => item.cat_id == _id).children)
			},
			async getCategoryData() {
				const res = await $request({
					url: "/categories",
				})
				console.log(res);
				this.categories = res.data.message
				this.activeId = res.data.message[0].cat_id
				this.currentGoods = res.data.message[0].children
				console.log(this.currentGoods)
			},
			toItemList(e) {
				wx.navigateTo({
					url: `/pages/index/search?id=${e}`,
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	@import "./categories.scss";
</style>
