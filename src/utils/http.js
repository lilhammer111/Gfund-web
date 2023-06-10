import axios from "axios";
import { getToken } from "./auth";

// 创建新的axios实例
export const httpInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 1000,
})
//请求拦截器
httpInstance.interceptors.request.use(config => {
    config.headers['token'] = getToken()
    return config
})
//响应拦截器
httpInstance.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)
})
