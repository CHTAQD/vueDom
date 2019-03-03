import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)


    const state={
      num: 1,
      nums:2
    }
    const mutations={
       NUMJIA (state) {
        state.num++
      },
      NUMJIAN (state) {
        state.num--
      },
      NUMSJIA (state) {
        state.nums++
      },
      NUMSJIAN (state) {
        state.nums--
      }
    }
    const actions ={
      numjia(e){
        e.commit('NUMJIA')
      
      },
      numjian({commit}){
        commit('NUMJIAN')
      },
      numsjia(e){
        e.commit('NUMSJIA')
      
      },
      numsjian({commit}){
        commit('NUMSJIAN')
      }
    }
  
  export default new Vuex.Store({
    state,
    mutations,
    actions,
  
})