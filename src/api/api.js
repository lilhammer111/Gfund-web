import { httpInstance } from "../utils/http"

export const login = (data) => {
    return httpInstance({
        url: 'url',
        method: 'post',
        data
    })
}

export const getNav = () => {
    return httpInstance({
        method: 'get',
        url: 'nav'
    })
}

export const sendMsgCode = (phone) => {
    return httpInstance({
        url: 'sms_codes/' + phone,
        method: 'get',
    })
}