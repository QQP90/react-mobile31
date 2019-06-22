import axios from "axios"

// 统一发送请求前缀
axios.defaults.baseURL="http://react.zbztb.cn/site/"

// axios 拦截器
// 发送前调用一个事件，拦截器
// 发送回来调用一个事件，拦截器
// 添加响应拦截器
axios.interceptors.response.use(function (response){
    // 返回什么数据，其他用了axios请求的返回值就是什么数据
    return response.data
},function (error){
    // 对响应点错误做点什么
    return Promise.reject(error)
})


// 获取轮播图的数据
export const getGoods = ()=>{
    return axios.get("goods/gettopdata/goods")
}
// export const getGoods=()=>axios.get("goods/gettopdata/goods");
