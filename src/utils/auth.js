//存token
export const setToken = (token) => {
    return sessionStorage.setItem('token', token)
}

//取token
export const getToken = () => {
    return sessionStorage.getItem('token')
}

// 删token
export const deleteToken = () => {
    return sessionStorage.removeItem('token')
}