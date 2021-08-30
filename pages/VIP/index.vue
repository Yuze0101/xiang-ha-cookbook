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
        <view class="vip-card">
            <view class="user">
                <image
                    class="avatar"
                    src="../../static/images/Vip/zu431@2x.png"
                    mode=""
                />
                <view class="text">
                    <view class="row1">
                        <view>欢迎你，朋友</view>
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
                    <view class="scroll-item">
                        <image
                            class="img"
                            src="../../static/images/@2/caunbeilaingfanyichu_slices/tupian 2@2x.png"
                            mode=""
                        />
                        <view class="item-text">
                            <view class="item-title">川味凉粉</view>
                            <view class="item-desc">
                                <text class="liulan-text">12.3万</text>
                                <image
                                    class="mini-icon"
                                    src="../../static/images/@2/caunbeilaingfanyichu_slices/liulan@2x.png"
                                    mode=""
                                />

                                <text class="liulan-text">7.8万</text>
                                <image
                                    class="mini-icon"
                                    src="../../static/images/@2/caunbeilaingfanyichu_slices/shoucamg@2x.png"
                                    mode=""
                                />
                            </view>
                        </view>
                    </view>
                    <view class="scroll-item">
                        <image
                            class="img"
                            src="../../static/images/@2/caunbeilaingfanyichu_slices/tupian 2@2x.png"
                            mode=""
                        />
                        <view class="item-text">
                            <view class="item-title">川味凉粉</view>
                            <view class="item-desc">
                                <text class="liulan-text">12.3万</text>
                                <image
                                    class="mini-icon"
                                    src="../../static/images/@2/caunbeilaingfanyichu_slices/liulan@2x.png"
                                    mode=""
                                />

                                <text class="liulan-text">7.8万</text>
                                <image
                                    class="mini-icon"
                                    src="../../static/images/@2/caunbeilaingfanyichu_slices/shoucamg@2x.png"
                                    mode=""
                                />
                            </view>
                        </view>
                    </view>
                    <view class="scroll-item">
                        <image
                            class="img"
                            src="../../static/images/@2/caunbeilaingfanyichu_slices/tupian 2@2x.png"
                            mode=""
                        />
                        <view class="item-text">
                            <view class="item-title">川味凉粉</view>
                            <view class="item-desc">
                                <text class="liulan-text">12.3万</text>
                                <image
                                    class="mini-icon"
                                    src="../../static/images/@2/caunbeilaingfanyichu_slices/liulan@2x.png"
                                    mode=""
                                />

                                <text class="liulan-text">7.8万</text>
                                <image
                                    class="mini-icon"
                                    src="../../static/images/@2/caunbeilaingfanyichu_slices/shoucamg@2x.png"
                                    mode=""
                                />
                            </view>
                        </view>
                    </view>
                    <view class="scroll-item">
                        <image
                            class="img"
                            src="../../static/images/@2/caunbeilaingfanyichu_slices/tupian 2@2x.png"
                            mode=""
                        />
                        <view class="item-text">
                            <view class="item-title">川味凉粉</view>
                            <view class="item-desc">
                                <text class="liulan-text">12.3万</text>
                                <image
                                    class="mini-icon"
                                    src="../../static/images/@2/caunbeilaingfanyichu_slices/liulan@2x.png"
                                    mode=""
                                />

                                <text class="liulan-text">7.8万</text>
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
    export default {}
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>
