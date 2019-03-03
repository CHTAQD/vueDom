<template>
  <div class="hello">
      <NavBox></NavBox>
      <router-view/>
  </div>
</template>

<script>
import NavBox from '@/dom/BODY/navBox';
export default {
  name: 'index',
  data () {
    return {
      // rou: this.$router.options.routes.children.push
    }
  },
  components:{
    NavBox
  }
}
</script>


<style scoped>

</style>
