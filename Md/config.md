### package.json 및 설정파일에 대한 설정들

package.json

.env별로 실행

기본 dev, build는 해당 설정된

dev -> .env.developer
build -> .env.production

자동 연결 이름으로 등등 해당 개발쪽이나 배포쪽에 설정해놨을거다 기본이 (이름 연결이던가)



내가 만든 커스텀 .env.test 연결 ->

dev나 build scripts쪽 끝에  (dotenv 패키지 설치) -> env쓸때 보통 설치되어져있다 그래야 사용 -> 

quasar build(빌드 옵션) --dotenv -e .env.production.V4

-> --dotenv -e (env 파일명) -> 해당 빌드 옵션으로 해당 .env 커스텀 파일로 적용하여 실행할 수 있다 -> 해당 커스텀 env의 옵션들로 process.env가 설정댐 -> process.env는 dotenv이고 해당 dotenv를 설치해야 process.env로 전역에서 쓸 수 있는거? 아니면 기본 전역꺼면서 dotenv는 그걸 도와주느 패키지? 전자일거 같다 -> 검색



    "start": "quasar dev  --port 8077",
port -> 



