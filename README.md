# Part 1

https://www.youtube.com/playlist?list=PL2Y878eUwQK4ZhfQfVdxS9yYdQlnfDInm

## 1. Project Create
## Creating a project
```bash
$ npm create svelte@latest sveltekit-tutorial
$ cd sveltekit-tutorial
$ npm install
$ npm run dev
```

상호작용
- `Ok to proceed? (y)`: y
- `Where should we create your project?`: Enter
- `Which Svelte app template?`: Skeleton project
- `Add type checking with TypeScript?`: No
- `Select additional options (use arrow keys/space bar)`
	- `Add ESLint for code linting`
	- `Add Prettier for code formatting`


## Routing Conventions
- 라우트는 `src` 폴더 안에 `routes` 폴더 안에 작성한다
- 라우트 파일은 `+page.svelte`라는 이름으로 작성한다
- `routes` 폴더안의 폴더는 URL 주소에서 경로 **segment**를 결정한다

![[attachments/part1/Pasted image 20231025161053.png]]

## File Based Routing
예시 1) 루트 URL
- localhost:5173/about

예시 2) about URL, profile URL
- localhost:5173/profile

## Nested Routes
blog 페이지 및 blog post 상세 페이지

- 블로그 리스트: `/blog`
- 첫번째 블로그 글: `/blog/first`
- 두번째 블로그 글: `/blog/second`

## Dynamic Routes
제품 페이지 (네이버 쇼핑?)

- 제품 리스트 페이지: `/products`
- 제품 상세페이지: `/products/id`
- 제품 1의 상세페이지: `/products/1`

- 참고: [app-stores](https://kit.svelte.dev/docs/modules#$app-stores)

## Nested Dynamic Routes
다이나믹 라우팅이 중첩으로 필요할 떄

- 제품 리스트 페이지: `/products`
- 제품 리뷰 페이지: `products/1/reviews/1`

## Catch All Routes
- 다이나믹 라우팅을 구현하는 다른 방법
- 언제 쓸모 있나?: docs 페이지 (mdn, w3schools, sveltekit API 사이트)
- 왜 쓸모있나?: docs 페이지 layout은 다 똑같이 생겼음 (주제에 따라 url만 다름)

- 도큐먼트 페이지: `/docs/item1/content1`

ex) 10개의 주제, 5개의 소항목을 가진 페이지
- 만약 다이나믹 라우팅이 없다면?
	- 10 items x 5 Content = 50개
- 다이나믹 라우팅 적용 시
	- 1 `[itemId]` x 1 `[contentId]`

## Optional Parameters
https://kit.svelte.dev/docs/advanced-routing#optional-parameters

옵셔널한 Path라 있어도되고 없어도됨

## Route Navigation
라우트 네비게이터 실습

스크립트에서 지정한 값을 백틱(\`)으로 감싸서 가져올 수 있음
```html
<script>
    export let productId = 100;
</script>

<a href={`/products/${productId}`}><li>제품 {productId}</li></a>
```

## Route Matching
https://kit.svelte.dev/docs/advanced-routing#matching

라우트 규칙을 정규식으로 정의하여 지정된 타입만 허용

## Route Layout
https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-layout

Page Layout

## Layout Group
https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-when-to-use-layout-groups

소괄호`()`는 Route에 영향을 미치지 않고 Layout의 계층 구조를 바꿀 수 있다

## API 서버 만들기
- 스벨트킷에서 API Endpoint를 구현하는 방법

![[attachments/part1/Pasted image 20231028224029.png]]