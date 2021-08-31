const baseURL = 'http://web.woniulab.com:8005'
/**
 *
 * @param {string} url  请求地址
 * @param {string} method   请求方式
 * @param {object} data  请求参数
 * @return {Promise} 返回Promise对象
 */
export default ({ url, method = 'GET', data, token = '' }) => {
    uni.showLoading({
        title: '加载中',
    })
    return new Promise((resolve, reject) => {
        uni.request({
            header: {
                Authorization: token,
            },
            url: baseURL + url,
            method,
            data,
            success: (res) => {
                resolve(res)
            },
            complete: () => {
                uni.hideLoading()
            },
        })
    })
}
