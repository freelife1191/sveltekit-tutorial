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


## 23. Server Load Function
Load function 비교 (Universal vs Server)

- Universal load function: **Client**, **Server** 양쪽에서 모두 실행됨
- Server load function: **Server** 에서만 실행됨
- 데이터를 불러오는 작동 방식은 똑같음
- 그러나 아예 똑같진 않고 **universal**이 더 많은 종류의 데이터를 return 할 수 있음

![[attachments/Pasted image 20231029163640.png]]

### Server Load 함수는 언제 활용?

![[attachments/Pasted image 20231029163847.png]]


## 24. Loading Data Using URL Params
- https://kit.svelte.dev/docs/load#using-url-data

`serverLoadEvent`에서 `params`, `url`, `route` 데이터 확인
```JSON
GET http://localhost:5173/products/2

// result
{
  params: { productId: '2' },
  url: URL {
    href: 'http://localhost:5173/products/2',
    origin: 'http://localhost:5173',
    protocol: 'http:',
    username: '',
    password: '',
    host: 'localhost:5173',
    hostname: 'localhost',
    port: '5173',
    pathname: '/products/2',
    search: '',
    searchParams: URLSearchParams {},
    hash: ''
  },
  route: '/products/[productId]'
}
```


## 25. error & redirect
- [$app/stores](https://kit.svelte.dev/docs/modules#$app-stores)
- [Prefix stores with $ to access their values](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values)

`$app/stores`에서 `page` 정보를 받아와서 사용가능