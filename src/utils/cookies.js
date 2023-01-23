import Cookies from 'js-cookie'

const app_cookie = process.env.REACT_APP_COOKIE

export const setCookie = (key, value, days = 1) => {
    // console.log('setCookie', app_cookie, key, value)
    Cookies.set(`@${process.env.REACT_APP_COOKIE}:${key}`, value, {
        expire: days,
        path: '/'
    })
}

export const removeCookie = (key) => {
    // console.log('removeCookie', app_cookie, key)
    Cookies.remove(`@${process.env.REACT_APP_COOKIE}:${key}`, {
        path: '/'
    })
}

export const getCookie = (key) => {
    // console.log('getCookie', app_cookie, key)
    return Cookies.get(`@${process.env.REACT_APP_COOKIE}:${key}`)
}

export const getInfoCookies = (page) => console.log('all Cookies: ', app_cookie, page, Cookies.get())