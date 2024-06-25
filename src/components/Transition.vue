<!-- MyTransition.vue -->
<script lang="ts" setup>
import { ref, computed } from 'vue'
import gsap from 'gsap'


const items = ref([1,2,3,4,5])


const list = ref([
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' }
])

const query = ref('')



const computedList = computed(() => {
  // includes - 적은 문자열에 포함되어있는지
  // toLowerCase - 소문자 변환 (대문자는?)
  return list.value.filter((item : object) => item.msg.includes(query.value))
})



function randomBtn() {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, items.value.length)
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: '1.6em',
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}

function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.height = 0
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}

</script>

<template>
  <div>
      <button @click="randomBtn">랜덤추가</button>
    
      <TransitionGroup name="list" tag="ui">
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </TransitionGroup>


    <input v-model="query" />
    <TransitionGroup
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li v-for="(item, index) in computedList"
        :key="item.msg"
        :data-index="index" 
      >
      {{ item.msg }}
      <!-- <template v-if="index > 0">
        {{ item.msg }}
      </template> -->
      </li>
    </TransitionGroup>
  </div>
</template>

<style>
/* move - 움직이는 엘리먼트에 트랜지션 적용 */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>