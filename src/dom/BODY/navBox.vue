<template>
  <div class="navbox">
      <ul class="nav">
        <li class="left_nav"></li>
        <li class="right_nav">
          <span><b>元</b></span>
          <span>
            <img src="https://ac-r.static.booking.cn/static/img/flags/24/cn/b50a28ad0218953c0c5daed6a7efa724475c3ec3.png" alt="">
          </span>
          <span class="iconfont icon-weixin">
            <i></i>
          </span>
          <span>
            <b>上线我的住宿</b>
          </span>
          <span class="tSpan">
            <b>注册</b>
          </span>
          <span class="tSpan">
            <router-link to="/login" tag="b">登录</router-link>
          </span>
        </li>
      </ul>
      <ul class="nav_bottom">
      
          <router-link class="lis" @click.native="clickClock($event)" to="/zhuSu" tag="li">住宿</router-link>
       
      
          <router-link @click.native="clickClock($event)" to="/jp" tag="li">机票</router-link>
       
      
          <router-link @click.native="clickClock($event)" to="/zc" tag="li">租车</router-link>
       
      
          <router-link @click.native="clickClock($event)" to="/car" tag="li">私人接送</router-link>
       
      </ul>
  </div>
</template>
<script>
export default {
  name: 'navBox',
  data(){
    return {

    }
  },
  components: {
  },
  methods:{
    clickClock:function(e){

      // console.log(e.target)//获取到当前的元素
      let lis = document.querySelectorAll('.nav_bottom>li');
      for(let i = 0 ; i<lis.length ; i++){
        lis[i].classList.remove('lis');
        
        lis[i].classList.add('list');
        
      }
        e.target.classList.remove('list');
      
        e.target.classList.add('lis');
    }
  },
  beforeMount(){
   
  }
}
</script>

<style scoped>

@import '../../css/nav.css';

</style>
