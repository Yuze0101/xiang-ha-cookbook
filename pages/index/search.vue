<template>
	<view class="container">
		<view class="Header">菜品搜索</view>
		<view class="searchBox">
			<input type="text" placeholder="请输入内容" class="inputItem" v-model="search" />
			<text class="searchBtn" @click="handleSearch">搜索</text>
		</view>
		<view class="scrollBox">
			<view class="scrollTitle">
				<text>精品名厨视频-会员专享</text>
				<image
					class="scrollTitleImg"
					src="../../static/images/@2/caipusousuo_slices/mengbanzu282@2x.png"
					mode=""
				/>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="0">
					<view
						id="demo1"
						class="scroll-view-item_H"
						v-for="item in scrollData"
						:key="item._id"
						@click="toProduct(item._id)"
					>
						<view class="scrollItemImgBox">
							<video
								:src="item.vid"
								:controls="false"
								:show-center-play-btn="false"
								@loadedmetadata="videoTimeUpdateEvent"
							></video>
							<text class="videoTime">{{ item.time }}</text>
						</view>
						<view class="scrollItemInfo">
							<text class="scrollItemTitle">{{ item.name }}</text>
							<view class="scrollItemDataBox">
								<view class="scrollItemData">
									<text class="scrollItemNumber">{{ item.pageview }}</text>
									<image src="../../static/images/@2/caipusousuo_slices/mengbanzu278@2x.png" />
								</view>
								<view class="scrollItemData">
									<text class="scrollItemNumber">{{ item.collections }}</text>
									<image src="../../static/images/@2/caipusousuo_slices/mengbanzu279@2x.png" />
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="infoFlow">
			<view class="rowCard" v-for="item in flowData" :key="item._id" @click="toProduct(item._id)">
				<view class="imgBox">
					<image :src="item.coverpic" mode="" />
				</view>
				<view class="cardInfoBox">
					<view class="cardInfo">
						<text class="cardTitle">{{ item.name }}</text>
						<text class="cardDes">{{ item.tips[0].tipdescribe[0] }}</text>
					</view>
					<view class="cardDataBox">
						<view class="cardItemData">
							<text class="cardItemNumber">{{ item.pageview }}</text>
							<image src="../../static/images/@2/caipusousuo_slices/mengbanzu278@2x.png" />
						</view>
						<view class="cardItemData">
							<text class="cardItemNumber">{{ item.collections }}</text>
							<image src="../../static/images/@2/caipusousuo_slices/mengbanzu279@2x.png" />
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $request from "@/apis/request"
	export default {
		data() {
			return {
				search: "",
				scrollData: [],
				flowData: [],
				time: [],
			}
		},
		onLoad(options) {
			console.log(options)
			this.search = options.search
			this.getVideo()
			this.getFlow()
			//TODO 接受路由传参并调用搜索方法
		},

		methods: {
			async getVideo() {
				const res = await $request({
					url: "/search/memberRecommend",
				})
				this.scrollData = res.data.message
				console.log(this.scrollData)
			},
			async getFlow() {
				const res = await $request({
					url: "/search/searchMenu",
					method: "POST",
					data: {
						val: this.search,
					},
				})
				this.flowData = res.data.menus
				console.log(this.flowData)
			},
			handleSearch() {
				//搜索
				console.log(this.search)
				this.getFlow()
			},
			toProduct(e) {
				//跳转到详情
				wx.navigateTo({
					url: `/pages/Product/index?goods_id=${e}`,
				})
			},
			videoTimeUpdateEvent(e) {
				//视频时长获取
				this.time.push(this.s_to_hs(e.detail.duration))
				const scrollData = this.scrollData
				scrollData.forEach((item, index) => {
					item.time = this.time[index]
				})
			},
			s_to_hs(s) {
				//计算分钟
				//算法：将秒数除以60，然后下舍入，既得到分钟数
				let h
				h = Math.floor(s / 60)
				//计算秒
				//算法：取得秒%60的余数，既得到秒数
				s = Math.floor(s % 60)
				//将变量转换为字符串
				h += ""
				s += ""
				//如果只有一位数，前面增加一个0
				h = h.length == 1 ? "0" + h : h
				s = s.length == 1 ? "0" + s : s
				return h + ":" + s
			},
		},
	}
</script>

<style scoped lang="scss">
	@import "./search.scss";
</style>
