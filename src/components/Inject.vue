<script setup>
  import Inject2 from '@/components/Inject2.vue'

import { ref } from 'vue'

  
const a = defineProps({
  test2 : Number,
})


// props data -> 읽기모드다 -> props 받은 원본 데이터 변경은 못하고 따로 변수에 받아와서 변경은 가능 -> 새로 생성된 변수로 다른 메모리 참조로 다시 만드니까
// props 원본은 반응형이라 -> 바로 적용
// 다시 ref로 넣을때는 해당 페이지에서 재사용할때 해당 값으로 
a.test2 + 1
// console.log('inject2', test.value + 1)
</script>



<template>
  <div>
    <Inject2 :test3="a.test2"/>
  </div>
</template>


<style lang="scss" scoped>

</style>