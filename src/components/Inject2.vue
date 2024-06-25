<script setup>
  import { inject } from 'vue'

  
import key from '@/modules/Symbol'

  
// const a = defineProps({
//   test3 : Number,
// })

const a = inject(key, 'foo')

console.log('inject -> a', a)
</script>



<template>
  <div>
    inject 2ek
  </div>
</template>


<style lang="scss" scoped>

</style>