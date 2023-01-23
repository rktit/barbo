import * as Cookies from './cookies'

export default function statusReturn(value) {
    let validate = false
    switch (value) {
        case 200:
            validate = true
            break;
        case 201:
            validate = true
            break;
        case 204:
            validate = true
            break;
        case 226:
            validate = true
            break;

        default:
            validate = false
            break;
    }
    return validate
}

export function typeError(msg) {
    let result = '500'
    if (msg.indexOf('400') > -1) result = '400'
    else if (msg.indexOf('401') > -1) result = '401'
    else if (msg.indexOf('404') > -1) result = '404'
    else if (msg.indexOf('500') > -1) result = '500'

    return result
}

export async function Authorization(type = 0) {
    const token = await (Cookies.getCookie('token') !== undefined) ? Cookies.getCookie('token') : null
    let options = null

    if (type === 0) {
        options = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    } else {
        options = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
    }
    return options
}

export async function hasUnitSelected() {
    return await localStorage.getItem(`@${process.env.REACT_APP_COOKIE}:unitUser`) ? localStorage.getItem(`@${process.env.REACT_APP_COOKIE}:unitUser`) : '0'
}