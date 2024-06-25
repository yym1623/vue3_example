  <!-- 반복문같이 여러개면 TransitionGroup, 하나면 - Transition (루트 element로만 반응 (중첩 css도 가능 - 중첩 css할려면 durations으로 실제 중첩 css부분의 시간이랑 맞춰야함 durations을)) -->

<!-- 전역 컴포넌트 -->

Transition - element, 요소에 대해 루트 element에 대해 transiton 적용 (중첩에 대해 :durations 설정)
TransitionGroup - v-for같은 반복 items에 transition 적용 (중첩에 대해 transition에 ui적용 및 반복 중첩 데이터에 대해 :data-index 설정)
transiton & group life cylce (css, js) - css, js 둘 다 라이프사이클처럼 적용 가능하지만 js 사용할때는 :css="false"로 둘 다 선언되면 중첩 방지

```js
// transition
<Transition>
  <p v-if="show">show_data</p>
</Transition>


// transition group
<button @click="randomBtn">random_data</button>

<TransitionGroup name="list" tag="ui">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</TransitionGroup>
```


KeepAlive - 여러 컴포넌트 간에 동적으로 전환될 때, 컴포넌트 인스턴스를 조건부로 캐시할 수 있는 빌트인 컴포넌트(캐시 저장으로 초기화 안함)
KeppAlive options - include, excloude, max
```js
// ex
<KeepAlive>
  <component :is="activeComponent" />
</KeepAlive>

// keep alive hook
export default {
  activated() {
    // 초기 마운트 시 또는
    // 캐시상태에서 다시 삽입될 때마다 호출됨.
  },
  deactivated() {
    // DOM에서 제거되고 캐시로 전환될 시 또는
    // 마운트 해제될 때마다 호출됨.
  }
}
```

Teleport - 컴포넌트 템플릿의 일부를 해당 컴포넌트의 DOM 계층 외부의 DOM 노드로 "이동"할 수 있게 해주는 빌트인 컴포넌트 (position 꼬임 해결)
Telport options - :disabled (비활성화)
```js
<Teleport to="body">
   // modal
</Teleport>

```

Suspense - 비동기관련 정의 (구현중)