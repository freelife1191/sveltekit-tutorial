# Part2

## 20. Loading Data
- dummy Data 제공 사이트: https://dummyjson.com/
- dummy Data를 제공해주는 JSON Server NPM 패키지
	- https://www.npmjs.com/package/json-server

JSON Server 설치
```bash
$ npm i json-server
```

Sevelte 및 JSON Server 실행
```bash
$ npm run dev

$ npm run serve-json
```

- JSON Server에서 `db.json` 데이터 확인: http://localhost:4000/products


## 21. Page Data
- https://kit.svelte.dev/docs/load#page-data
- https://kit.svelte.dev/docs/load#making-fetch-requests
	- SvelteKit에서 제공하는 `fetch` 함수 사용

JSON API Server 에서 데이터를 가져와서 출력


## 22. Universal Load Function
- 링크를 타고 들어가면 클라이언트 쪽에서만 실행됨
- URL로 들어가거나 새로고침시에는 클라이언트, 서버 둘다 실행됨