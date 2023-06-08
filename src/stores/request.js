import axios from "axios";

// 创建新的axios实例
const httpInstance = axios.create({
    baseURL: 'baseURL',
    timeout: 1000,
})
//请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
})
//响应拦截器
httpInstance.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)
})

export default httpInstance