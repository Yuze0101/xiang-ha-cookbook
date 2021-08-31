<script>
    import $request from '@/apis/request'
    export default {
        onLaunch: function () {
            console.log('App Launch')
            const token = uni.getStorageSync('token')
            if (token) {
                this.getUserInfo(token)
            }
        },
        onShow: function () {
            console.log('App Show')
        },
        onHide: function () {
            console.log('App Hide')
        },
        methods: {
            async getUserInfo(token) {
                const res = await $request({
                    url: '/user/getUserInfo',
                    method: 'GET',
                    token,
                    data: {
                        token,
                    },
                })
                getApp().globalData.userInfo = res.data[0]
            },
        },
    }
</script>

<style>
    /*每个页面公共css */
    page {
        background-color: #f4f4f4;
    }
</style>
