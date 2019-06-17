import axios from 'axios';
import router from '../router/';
const request = axios.create();

// 添加请求拦截器
request.interceptors.request.use(config => {
    return {
        ...config,
        headers:{
            ...config.headers,
            token : window.localStorage.getItem('token')
        }
    }
},error => {
    return Promise.reject(error);
})

// 添加响应拦截器
request.interceptors.response.use(response => {
    return response.data;
},error => {
    const response = error.response;
    const status = response.status;
    if(status > 400){
        switch(status) {
            case 401 : 
                router.push('/login');
            break;
            case 404 : 
                alert('页面丢失');
            break;
            case 405 : 
                alert('没有权限');
            break;
            case 422 : 
                console.log('用户名密码错误');
            break;
            default :
                console.log('网络出现错误');
        }
    }
    return Promise.reject(error);
})

export default {
    get(url,data) {
        return request.get(url,{
            params : data
        })
    },
    post(url,data) {
        return request.post(url,data)
    }
}