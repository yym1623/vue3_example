<script lang="ts" setup>

  // toRaw - Vue에서 만든 프락시의 원시 원본 객체를 반환합니다.
  // 즉 원본꺼랑 같은지를 비교해서 같은 값으로 새로 생성한거도 같지않다고 나온다 원본에서 생성될때의 메모리 생성된거랑 비교한듯 원본이
  
import Inject from '@/components/Inject.vue'

import { ref, reactive } from 'vue'

// const a = defineProps({
//   test : Number,
// })

// console.log('inject1', a.test)
  // 제공: 반응형 값
// const count = ref(0)
// provide('count', count)

// // 제공: 심볼(Symbol) 키
// provide('test', count)

const msg = ref("<div style='color:red'>안녕</div>")

const arr = ref([
  { id : 1, item : '1'},
  { id : 2, item : '2'},
  { id : 3, item : '3'},
])
</script>

<template>
  <!-- v-bind -> : 가 요약어로  쓰이지만 해당 $props 인자 자체 넘길때처럼은 v-bind를 적어서 주자 :$props는 불가하니 어차피 해당 이름을 보내야한다 그럼 (그렇데해도 되고 props만 넘길거면 저럴때만 v-bind로 명시하자 : 요약어 말고) -->
  <Inject v-bind="$props" />
</template>


<style lang="scss" scoped>

</style>