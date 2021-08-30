<template>
    <view>
        <scroll-view scroll-x="true" class="scroll-box">
            <view class="scroll-item active">所有食材</view>
            <view class="scroll-item">其他食材</view>
            <view class="scroll-item">其他食材</view>
            <view class="scroll-item">其他食材</view>
            <view class="scroll-item">其他食材</view>
        </scroll-view>
        <view>
            <view class="item-box">
                <view class="item">
                    <text>豌豆凉粉</text>
                    <text>500g</text>
                </view>
                <view class="item">
                    <text>葱末</text>
                    <text>50g</text>
                </view>
            </view>
            <view class="box-foot">
                <text>展开全部</text>
                <image
                    src="../../static/images/@2/wode 1_slices/mengbanzu 282@2x.png"
                    mode=""
                />
            </view>
        </view>
    </view>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    @import './TabMenu.scss';
</style>
