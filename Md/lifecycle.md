라이프사이클중 주의사항


라이프사이클은 서버 사이드렌더링에선 실행되지 않는다

서버사이드 렌더링 즉 ssr에서 onMounted나 등등 원할때 DOM과 관련 코드를 클라이언트에서만 실행하도록 제한하는 데 사용됩니다.

onUpdated는

부모 컴포넌트의 updated 훅은 자식 컴포넌트의 훅 이후에 호출됩니다.

이 훅은 상태 변경에 영향을 받을 컴포넌트의 DOM 업데이트 후에 호출됩니다. 특정 상태 변경 후 업데이트된 DOM에 접근해야 하는 경우, nextTick()을 사용해야 합니다.


updated 훅에서 컴포넌트 상태를 변경하면 안되는데, 무한 업데이트 루프가 발생할 수 있기 때문입니다! -> updated에선 해당 감시하는 dom이 업데이트 확인용으로만? 수정은 다른곳에서
ex) onMounted는 상관없고 등등