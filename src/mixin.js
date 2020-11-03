import Vue from 'vue'

const mixin = Vue.mixin({
  data() {
    return {
      img_url: process.env.VUE_APP_IMG_URL
    }
  }
})

export default mixin
