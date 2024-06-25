<script lang="ts" setup>

  // toRaw - Vue에서 만든 프락시의 원시 원본 객체를 반환합니다.
  // 즉 원본꺼랑 같은지를 비교해서 같은 값으로 새로 생성한거도 같지않다고 나온다 원본에서 생성될때의 메모리 생성된거랑 비교한듯 원본이
  
import Inject from '@/components/Inject.vue'


const a = defineProps({
  test : Number,
})

console.log('inject1', a.test)
  // 제공: 반응형 값
// const count = ref(0)
// provide('count', count)

// // 제공: 심볼(Symbol) 키
// provide('test', count)


</script>

<template>
  <Inject :test2="a.test" />
</template>


<style lang="scss" scoped>

</style>