import axios from 'axios';


axios.defaults.baseURL='../api';
// 拦截器
axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

export let getBaner = ()=>{
    return axios.get('/1.json')
}

// export let getHome=()=>{
//     return axios.all([getBaner(),getNew()])
// }
// export let deleteGo=(id)=>{
//     return axios.delete(`/list?id=${id}`)
// }


  



