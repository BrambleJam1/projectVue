import request from "@/utils/request";
export default {
    namespaced :true,
    state : {
        userinfo : {}
    },
    mutations:{
        setUserInfo(state,data){
            state.userinfo = data;
        }
    },
    actions : {
        getUserInfo(context){//context获取上下文，找到commit
            //console.log(context.commit)
            request.get('/api/user/info').then(res => {
                context.commit('setUserInfo',res.data)
            })
        }
    }
}