import store from '@/store/index';

export function loading() {
    store.dispatch('handleLoading', true);
}
export function hideLoading() {
    let timer = setTimeout(() => {
        store.dispatch('handleLoading', false);
        clearTimeout(timer);
    }, 1000)
}

export function getScrollbarWidth(dom) {
    if (!dom) return;
    return window.innerWidth - dom.clientWidth;
}

export function isEmail(email) {
    var regx = /^[a-zA-Z0-9_\-]+@[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-]+$/;
    return regx.test(email);
}
export function isPhone(tel) {
    var regx = /^1[34578]\d{9}$/;
    return regx.test(tel);
}

export function loginSave(token, name) {
    store.dispatch('setUserName', name);
    store.dispatch('setToken', token);
    localStorage[window.btoa('userName')] = encodeStr(name, true);
    localStorage[window.btoa('token')] = window.btoa(token);
}
export function loginClear() {
    store.dispatch('setUserName', '');
    store.dispatch('setToken', '');
    localStorage[window.btoa('userName')] = '';
    localStorage[window.btoa('token')] = '';
}

export function getToken() {
    let token = store.state.token;
    if (!token) {
        let storageToken = localStorage[window.btoa('token')];
        if (storageToken) {
            token = window.atob(storageToken);
        }
    }
    return token;
}

//解密
export function decodeStr(str, doubleFlag = true) {
    return doubleFlag ? decodeURIComponent(decodeURIComponent(str)) : decodeURIComponent(str);
}
//加密
export function encodeStr(str, doubleFlag = true) {
    return doubleFlag ? encodeURIComponent(encodeURIComponent(str)) : encodeURIComponent(str);
}

//获取课程类型简称
export function getCourseTypeShort(courseType) {
    let courseClass = '';
    switch(courseType) {
        case 'Mathematics':
            courseClass = 'Math';
            break;
        case 'Computer Science / Computer Engineering':
            courseClass = 'Comp';
            break;
        case 'Visual Arts & Design':
            courseClass = 'Visual';
            break;
        case 'Business & Finance':
            courseClass = 'Business';
            break;
        case 'Research':
            courseClass = 'Research';
            break;
        case 'Tutoring':
            courseClass = 'Tutoring';
            break;
        case 'English Literature & Composition':
            courseClass = 'English';
            break;
        default: 
            courseClass = '';
    }
    return courseClass;
}
export function joinNum(min, max) {
    if (min > max) {
        let tran = min;
        min = max; 
        max = tran;
    }
    if (!(min + max)) {
        return '';
    }
    if (min == max) {
        return min
    }
    return min + '-' + max;
}

//补全日期,两位数显示
export function padStart(str, num = 2, symbol='0'){
    return (str + '').padStart(num,symbol);
}

export function formatActivityDate(dateTime, Capitalize = true) {
    if (!dateTime) {
        return {
            dateEn: '',
            dateCn: '',
        }
    }
    let date = new Date(dateTime);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = padStart(date.getDate());
    let hour = padStart(date.getHours());
    let minute = padStart(date.getMinutes());
    let monthArr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
    return {
        dateEn: `${monthArr[month]} ${day}, ${year} | ${hour}:${minute}`,
        dateCn: `${padStart(month + 1)}/${day}/${year} ${hour}:${minute}`,
    }
}

export function getFormParams(params) {
    let formData = new FormData();
    for(var key in params) {
        formData.append(key, params[key]);
    }
    return formData;
}