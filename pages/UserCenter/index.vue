<template>
    <view>
        <!-- NOTE 头像、vip登录 -->
        <view class="container">
            <view class="user">
                <image
                    class="avatar"
                    src="@/static/images/@2/wode 1_slices/zu428@2x.png"
                    mode=""
                />
                <view class="login">
                    <view>
                        <text>立即登录</text><br />
                        <text class="second">登录后可收藏喜欢的菜谱</text>
                    </view>
                    <view>
                        <text> > </text>
                    </view>
                </view>
            </view>
            <view class="vip">
                <image
                    class="img"
                    src="../../static/images/@2/wode 1_slices/mengbanzu87@2x.png"
                    mode=""
                />
                <view class="text-box">
                    <view>升级为VIP</view>
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
    import TabMenu from '../../components/TabMenu/TabMenu.vue'
    export default {
        components: {
            TabMenu,
        },
    }
</script>

<style scoped lang="scss" }>
    @import './index.scss';
</style>
