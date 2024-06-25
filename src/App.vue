<script lang="ts" setup>
  import { provide, ref, shallowRef, reactive, computed, nextTick, readonly, watchEffect } from 'vue';
  
  // components
  // import test from './components/Test.vue'
  // import Transition from '@/components/Transition.vue'
  import vueApiTest from '@/components/vueApiTest.vue'
  // const refTest = shallowRef(Transition);
  import tt from '@/components/tt.vue'





  
  
  import key from '@/modules/Symbol'

const a = ref(1)

// symbol로 연결하면 2개면 마지막껄로 연결 -> 하나일때만 symbol? 2개이상이면 문자열로 지정해서?


provide(key, 'foo') // 문자열이 아닌 값을 제공하면 에러가 발생합니다
provide(key, 'doo') // 문자열이 아닌 값을 제공하면 에러가 발생합니다

</script>


<template>
  <!-- <button @click="titlePlus">버튼</button> -->
  <!-- <Transition></Transition> -->
  <vueApiTest :test="a"></vueApiTest>
  <!-- <component :is="Transition">t</component> -->
  <!-- <tt /> -->
</template>




<style lang="scss">

</style>
