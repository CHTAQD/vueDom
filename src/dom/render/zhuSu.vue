<template>
  <div class="zhusu">
      <div class="zTop">
        <h2>搜索优惠,体验世界</h2>
        <div class="book">丛书是的乡村民宿到时髦的都市公寓</div>
        <div class="inp">
          <i class="ione iconfont icon-chuangpu"></i>
          <input type="text" value='目的地？' @focus="values($event)" @blur="out($event)">
          <span class="Checking">
            <i class="ione iconfont icon-rili"></i>
            <b>入住 -- 退房</b>
            <div class="Checking_bottom as">日历</div>
            
          </span>
          <span class="renshu">
            <i class="ione iconfont icon-ren"></i>
            <b>{{nums}}人</b>
              .
            <b>{{num}}间客房</b>
            <i class="ione iconfont icon-shangxiazhankai"></i>
            <div class="renshu_bottom as">
             <div class="renshu_bottom_top">
                <span>客房:</span>
                <span @click="numjia">+</span>
                <b>{{num}}</b>
                <span @click="numjian">-</span>
              </div>
              <div class="renshu_bottom_top">
                <span>成人:</span>
                <span @click="numsjia">+</span>
                <b>{{nums}}</b>
                <span @click="numsjian">-</span>
              </div>
             
            </div>
          </span>
          <button>搜索</button>
        </div>
        <div class="cc">我是出差</div>
      </div>
  </div>
</template>
<script>

export default {
  name: 'zhusu',
  data(){
    return {
      num:this.$store.state.num,
    
      nums:this.$store.state.nums
    }
  },
  components: {
  },
  computed:{
    // count(){
    //   this.num=this.$store.state.count
    // }
  },
  methods:{
    numsjian:function(){
      this.$store.dispatch('numsjian')
      this.nums = this.$store.state.nums
    },
    numsjia:function(){
      this.$store.dispatch('numsjia')
      this.nums = this.$store.state.nums
    },
    numjian:function(){
      this.$store.dispatch('numjian')
      this.num = this.$store.state.num
    },
    numjia:function(){
      this.$store.dispatch('numjia')
      this.num = this.$store.state.num
    },
    values:function(e){
      // console.log(1)
      // console.log(e.target.value)
      if( e.target.value == "目的地？"){

        e.target.value = ''
        
      }else{
      e.target.value = e.target.value
        
      }
    },
    out:function(e){
      // console.log(e.target.value)
      if(e.target.value != ''){
        e.target.value = e.target.value
      }else{
         e.target.value = '目的地？'
      }
      
     
    }
  }
}
</script>

<style scoped>
  @import '../../css/zhuSu.css';
</style>
