// symbol - js의 원시타입 중 하나로 고유함을 보장하는 값을 나타낸다
// 즉 각각의 변수에 같은 값을 넣고 비교해도 각 symbol은 고유값을 반환하기 때문에 false가 나온다

// symbol.for - 전역 symbol 레지스트리에(런타임) 저장되어 위처럼 각각 같은값 넣어 비교하면 true가 나온다 (symbol처럼 고유값이 아닌가?) 
  

// symbol 은 고유값이라 같은값 넣어 비교해도 false지만
// symbol.for는 symbol이랑 비교해도 같은값이어도 false이다(symbol은 애초에 같은값끼리 비교해도 false지만 symbol.for는 같은값이면 true지만 같은 symbol.for만 비교가 가능하다) -> symbol <-> symbol.for 같아도 false (symbol 고유값이기 때문)


// symbol 설명(ts꺼도) - https://velog.io/@ehgks0000/TS-Symbol 


import type { InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<string>


export default key