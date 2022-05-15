<script lang="ts">
	import Logo from "./components/Logo.svelte";
	import Counter from "./components/Counter.svelte";
	import HelloWorld from "./components/HelloWorld.svelte";
	import Paragraph from "./components/Paragraph.svelte";
	import HtmlTest from "./components/HtmlTest.svelte";
	import List from "./components/List.svelte";
	import Answer from "./components/Answer.svelte";
	import Info from "./components/Info.svelte";
	import LoginButton from "./components/LoginButton.svelte";
	import NumberLength from "./components/NumberLength.svelte";
	import Cats from "./components/Cats.svelte";
	import RandomNumberMessage from "./components/RandomNumberMessage.svelte";
	import type { TypeInfo } from "./types/Info";
	let answer: string = "";
	$: answerWithExclamation = (): string => {
		if (answer) {
			console.log("test");
			return `${answer} !!`;
		} else {
			return answer;
		}
	};
	const setAnswer = (newAnswer: string) => {
		answer = newAnswer;
	};
	const info: TypeInfo = {
		name: "Svelte",
		version: "1.0.0",
		speed: 2,
		website: "https://svelte.jp",
	};

	import Thing, { emojis } from "./components/Thing.svelte";
	type Emoji = keyof typeof emojis;
	let things: {
		id: number;
		name: Emoji;
	}[] = [
		{ id: 1, name: "apple" },
		{ id: 2, name: "banana" },
		{ id: 3, name: "carrot" },
		{ id: 4, name: "doughnut" },
		{ id: 5, name: "egg" },
	];
</script>

<main>
	<Logo />
	<h1>Hello Typescript!</h1>

	<Counter />
	<HelloWorld />
	<Paragraph />
	<HtmlTest />
	<List />
	<hr />
	<Answer />
	<p>answerに値を渡さなかった場合初期値が表示される</p>
	<Answer answer={answerWithExclamation()} />
	<p>値を渡すとリアクティブに変更される</p>
	<hr />
	<button on:click={() => setAnswer("cat")}>set answer</button>
	<p>
		on:clickは値を返さないvoid関数をそのまま渡せないので、そういう時は即時関数で渡す
	</p>
	<hr />
	<Info {info} />
	<hr />
	<LoginButton />
	<hr />
	<NumberLength />
	<hr />
	<Cats />
	<hr />
	{#each things as thing (thing.id)}
	<Thing name={thing.name} />
	{/each}
	<Thing name="banana" />
	<hr />
	<RandomNumberMessage />
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		--main-color: 255, 62, 0;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: rgb(var(--main-color));
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 2rem auto;
		max-width: 14rem;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}
	}
</style>
