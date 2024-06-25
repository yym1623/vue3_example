v- html - 싱글 파일 컴포넌트(SFC)에서 scoped(범위를 지정한) Style은 v-html 내부 컨텐츠에 적용되지 않습니다. 왜냐하면 해당 HTML은 Vue의 템플릿 컴파일러에서 처리되지 않기 때문입니다. 범위를 지정한 CSS로 v-html 컨텐츠를 대상으로 지정하려는 경우, CSS 모듈 또는 BEM과 같은 수동 범위 지정 방법과 함께 전역 <style> 엘리먼트를 사용할 수 있습니다.

즉 scropt로 style먹이면 v-html쪽에는 스타일 안 걸림 (스타일 넣어도)