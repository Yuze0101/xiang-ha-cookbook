<template>
    <view>
        <!-- NOTE 头像、vip登录 -->
        <view class="container">
            <view class="user">
                <image
                    v-if="!isLogin"
                    class="avatar"
                    src="@/static/images/@2/wode 1_slices/zu428@2x.png"
                    mode=""
                />
                <image
                    v-if="isLogin"
                    class="avatar"
                    :src="userInfo.avatarUrl"
                    mode=""
                />
                <view class="login" @click="handleLogin">
                    <view>
                        <text v-if="!isLogin">立即登录</text>
                        <text v-if="isLogin">{{ userInfo.nickName }}</text>
                        <br />
                        <text class="second" v-if="!isLogin"
                            >登录后可收藏喜欢的菜谱</text
                        >
                        <text class="second" v-if="isLogin">欢迎您</text>
                    </view>
                    <view>
                        <text> > </text>
                    </view>
                </view>
            </view>
            <view class="vip" @click="gotoBuyVip">
                <image
                    class="img"
                    src="../../static/images/@2/wode 1_slices/mengbanzu87@2x.png"
                    mode=""
                />
                <view class="text-box">
                    <view v-if="userInfo.vip">续费您的VIP</view>
                    <view v-if="!userInfo.vip">升级为VIP</view>
                    <view> > </view>
                </view>
            </view>
        </view>
        <!-- NOTE 收藏等按钮 -->
        <view class="container">
            <view class="btns">
                <view class="btns-item">
                    <image
                        src="../../static/images/@2/wode 1_slices/mengbanzu 272@2x.png"
                        mode=""
                    />
                    <text>我的收藏</text>
                </view>
                <view class="btns-item">
                    <image
                        src="../../static/images/@2/wode 1_slices/mengbanzu 281@2x.png"
                        mode=""
                    />
                    <text>我的收藏</text>
                </view>
                <view class="btns-item">
                    <image
                        src="../../static/images/@2/wode 1_slices/mengbanzu 272@2x.png"
                        mode=""
                    />
                    <text>点赞</text>
                </view>
            </view>
        </view>
        <!-- NOTE Tab按钮与列表 -->
        <view class="container">
            <TabMenu></TabMenu>
        </view>
        <!-- NOTE  我的菜谱 -->
        <view class="container">
            <view class="my-menu">
                <view class="title">我的菜谱</view>
                <scroll-view scroll-x="true" class="menu-box">
                    <view class="menu-item">
                        <image
                            src="../../static/images/@2/wode 1_slices/mengbanzu 146@2x.png"
                            mode=""
                        />
                        <view>川北凉粉</view>
                    </view>
                    <view class="menu-item">
                        <image
                            src="../../static/images/@2/wode 1_slices/mengbanzu 146@2x.png"
                            mode=""
                        />
                        <view>川北凉粉</view>
                    </view>
                    <view class="menu-item">
                        <image
                            src="../../static/images/@2/wode 1_slices/mengbanzu 146@2x.png"
                            mode=""
                        />
                        <view>川北凉粉</view>
                    </view>
                    <view class="menu-item">
                        <image
                            src="../../static/images/@2/wode 1_slices/mengbanzu 146@2x.png"
                            mode=""
                        />
                        <view>川北凉粉</view>
                    </view>
                </scroll-view>
            </view>
        </view>
        <!-- NOTE 反馈 -->
        <view class="container">
            <view class="feedback">
                <view class="feedback-item">
                    <image
                        src="../../static/images/@2/wode 1_slices/mengbanzu 272@2x.png"
                        mode=""
                    />
                    <view class="text">
                        <view>去给App Store给菜谱大全评分</view>
                        <view> > </view>
                    </view>
                </view>
                <view class="feedback-item">
                    <image
                        src="../../static/images/@2/wode 2_slices/mengbanzu273@2x.png"
                        mode=""
                    />
                    <view class="text">
                        <view>反馈问题</view>
                        <view> > </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import $request from '@/apis/request'
    import TabMenu from '../../components/TabMenu/TabMenu.vue'
    export default {
        components: {
            TabMenu,
        },
        data() {
            return {
                userInfo: {},
                isLogin: false,
            }
        },
        onShow() {
            if (this.getUserInfo() && this.getToken()) {
                this.userInfo = { ...this.getUserInfo() }
                this.isLogin = true
            }
        },
        methods: {
            async handleLogin() {
                if (this.isLogin) {
                    uni.showToast({
                        title: '您已登录',
                        duration: 2000,
                    })
                    return
                }
                const userInfo = await this.getUserProfile()
                const code = await this.getCode()
                const res = await this.wxLogin({
                    code,
                    appId: 'wx4b9d2d7fde7df6c4',
                    appSecret: 'def0d690e60e8b472857576e735df01d',
                })
                const res2 = await this.authDatabase(res.data.token, userInfo)
				this.getUserInfoFromDatabase(res.data.token)
                uni.setStorage({
                    key: 'token',
                    data: res.data.token,
                    success() {
                        uni.switchTab({
                            url: '/pages/UserCenter/index',
                        })
                    },
                })
            },
            async getUserInfoFromDatabase(token) {
                const res = await $request({
                    url: '/user/getUserInfo',
                    method: 'GET',
                    token,
                    data: {
                        token,
                    },
                })
                // console.log(res.data[0])
                getApp().globalData.userInfo = res.data[0]
            },
            getUserProfile() {
                return new Promise((resolve, reject) => {
                    wx.getUserProfile({
                        desc: '必须授权才可以使用',
                        success: (res) => {
                            resolve(res.userInfo)
                        },
                    })
                })
            },
            getCode() {
                return new Promise((resolve, reject) => {
                    wx.login({
                        success: (res) => {
                            resolve(res.code)
                        },
                    })
                })
            },
            getUserInfo() {
                return getApp().globalData.userInfo
            },
            getToken() {
                return uni.getStorageSync('token')
            },
            authDatabase(token, userInfo) {
                const { avatarUrl, nickName, gender, province } = userInfo
                return $request({
                    url: '/user/auth',
                    method: 'POST',
                    token,
                    data: {
                        token,
                        avatarUrl,
                        nickName,
                        gender,
                        province,
                    },
                })
            },
            wxLogin(data) {
                return $request({
                    url: '/user/wxLogin',
                    method: 'POST',
                    data,
                })
            },
            gotoBuyVip() {
                if (!this.isLogin) {
                    this.handleLogin()
                }
                uni.navigateTo({
                    url: '/pages/VIP/vipDetail',
                })
            },
        },
    }
</script>

<style scoped lang="scss" }>
    @import './index.scss';
</style>
