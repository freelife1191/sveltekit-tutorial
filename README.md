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