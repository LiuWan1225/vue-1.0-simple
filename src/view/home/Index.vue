<template>
  <div>
    <p>HomeIndex</p>
    <HelloWorld />
    <p>-------</p>
    <p>data: {{ data }}</p>
  </div>
</template>

<script>
import HelloWorld from '@/components/helloWorld.vue'
import { axiosPhoneEx } from '@/services/homeIndex.js'

export default {
  name: 'HomeIndex',
  data () {
    return {
      data: null
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    axiosPhoneEx({id: 1})
  }
}
</script>

<style>
</style>
