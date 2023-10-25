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

