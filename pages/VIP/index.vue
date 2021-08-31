<template>
    <view class="container">
        <view class="Header">VIP会员</view>
        <scroll-view scroll-x="true" class="menu">
            <view class="menu-item active">推荐</view>
            <view class="menu-item">免费体验</view>
            <view class="menu-item">小白入门</view>
            <view class="menu-item">快手菜</view>
            <view class="menu-item">快手菜</view>
            <view class="menu-item">快手菜</view>
            <view class="menu-item">快手菜</view>
        </scroll-view>
        <view class="vip-card" @click="gotoBuyVip">
            <view class="user">
                <image
                    v-if="!isLogin"
                    class="avatar"
                    src="../../static/images/Vip/zu431@2x.png"
                    mode=""
                />
                <image
                    v-if="isLogin"
                    class="avatar"
                    :src="userInfo.avatarUrl"
                    mode=""
                />
                <view class="text">
                    <view class="row1">
                        <view
                            >欢迎你，{{
                                isLogin ? userInfo.nickName : '朋友'
                            }}</view
                        >
                        <button class="vip-btn">开通</button>
                    </view>
                    <view>8元开通VIP，畅学明初独家菜谱</view>
                </view>
            </view>
            <view class="ad">
                <view class="ad-item">
                    <image
                        class="ad-img"
                        src="../../static/images/Vip/mengbanzu254@2x.png"
                        mode=""
                    />
                    <view>名厨课程</view>
                </view>
                <view class="ad-item">
                    <image
                        class="ad-img"
                        src="../../static/images/Vip/mengbanzu255@2x.png"
                        mode=""
                    />
                    <view>无广告打扰</view>
                </view>
                <view class="ad-item">
                    <image
                        class="ad-img"
                        src="../../static/images/Vip/mengbanzu256@2x.png"
                        mode=""
                    />
                    <view>身份标识</view>
                </view>
            </view>
        </view>
        <view class="msg-flow">
            <!-- NOTE 循环新增flow-item -->
            <view class="flow-item">
                <view class="title">VIP最新推荐</view>
                <scroll-view scroll-x="true" class="scroll-box">
                    <!-- NOTE 循环 -->
                    <view
                        class="scroll-item"
                        v-for="item in reccomendList"
                        :key="item._id"
                    >
                        <video
                            class="video"
                            :src="item.vid"
                            @loadedmetadata="videoTimeUpdateEvent"
                        />
                        <view class="item-text">
                            <view class="item-title">{{ item.name }}</view>
                            <view class="item-desc">
                                <text class="liulan-text">{{
                                    item.pageview
                                }}</text>
                                <image
                                    class="mini-icon"
                                    src="../../static/images/@2/caunbeilaingfanyichu_slices/liulan@2x.png"
                                    mode=""
                                />

                                <text class="liulan-text">{{
                                    item.collections
                                }}</text>
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
            <view class="flow-item">
                <view class="title">限时免费体验</view>
                <scroll-view scroll-x="true" class="scroll-box">
                    <!-- NOTE 循环 -->
                    <view
                        class="scroll-item"
                        v-for="item in freeList"
                        :key="item._id"
                    >
                        <video
                            class="video"
                            :src="item.vid"
                            @loadedmetadata="videoTimeUpdateEvent"
                        />
                        <view class="item-text">
                            <view class="item-title">{{ item.name }}</view>
                            <view class="item-desc">
                                <text class="liulan-text">{{
                                    item.pageview
                                }}</text>
                                <image
                                    class="mini-icon"
                                    src="../../static/images/@2/caunbeilaingfanyichu_slices/liulan@2x.png"
                                    mode=""
                                />

                                <text class="liulan-text">{{
                                    item.collections
                                }}</text>
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
            <view class="flow-item">
                <view class="title">猜你喜欢</view>
                <scroll-view scroll-x="true" class="scroll-box">
                    <!-- NOTE 循环 -->
                    <view
                        class="scroll-item"
                        v-for="item in guessLikeList"
                        :key="item._id"
                    >
                        <video
                            class="video"
                            :src="item.vid"
                            @loadedmetadata="videoTimeUpdateEvent"
                        />
                        <view class="item-text">
                            <view class="item-title">{{ item.name }}</view>
                            <view class="item-desc">
                                <text class="liulan-text">{{
                                    item.pageview
                                }}</text>
                                <image
                                    class="mini-icon"
                                    src="../../static/images/@2/caunbeilaingfanyichu_slices/liulan@2x.png"
                                    mode=""
                                />

                                <text class="liulan-text">{{
                                    item.collections
                                }}</text>
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
    import $request from '@/apis/request'
    export default {
        data() {
            return {
                reccomendList: [],
                freeList: [],
                guessLikeList: [],
                vipChefsList: [],
                userInfo: {},
                isLogin: false,
            }
        },
        onShow() {
            const token = uni.getStorageSync('token')
            const userInfo = getApp().globalData.userInfo
            if (token) {
                this.getReccomendList(token)
                this.getFreeList(token)
                this.getGuessLikeList(token)
                this.getVipChefsList(token)
                this.userInfo = userInfo
                this.isLogin = true
            }
        },
        methods: {
            async getReccomendList(token) {
                const res = await $request({
                    url: '/vip/getRecommendMenuList',
                    token,
                })
                this.reccomendList = res.data.menus
            },
            async getFreeList(token) {
                const res = await $request({
                    url: '/vip/getisFreeMenuList',
                    token,
                })
                this.freeList = res.data.menus
            },
            async getGuessLikeList(token) {
                const res = await $request({
                    url: '/vip/likeMenu',
                    token,
                })
                this.guessLikeList = res.data.menus
            },
            async getVipChefsList(token) {
                const res = await $request({
                    url: '/vip/vipExclusive',
                    token,
                })
                this.vipChefsList = res.data.menus
            },
            videoTimeUpdateEvent(e) {
                this.s_to_hs(e.detail.duration)
            },
            gotoBuyVip() {
                uni.navigateTo({
                    url: '/pages/VIP/vipDetail',
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
                h += ''
                s += ''
                //如果只有一位数，前面增加一个0
                h = h.length == 1 ? '0' + h : h
                s = s.length == 1 ? '0' + s : s
                return h + ':' + s
            },
        },
    }
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>
