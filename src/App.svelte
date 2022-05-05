<script lang="ts">
	import Logo from "./components/Logo.svelte";
	import Counter from "./components/Counter.svelte";
	import HelloWorld from "./components/HelloWorld.svelte";
	import Paragraph from "./components/Paragraph.svelte";
	import HtmlTest from "./components/HtmlTest.svelte";
	import List from "./components/List.svelte";
	import Answer from "./components/Answer.svelte";
	let answer: string = ''
	$: answerWithExclamation = ():string => {
		if(answer) {
			console.log('test')
			return `${answer} !!`
		} else {
			return answer
		}
	}
	const setAnswer = (newAnswer: string) => {
		answer = newAnswer
	}

</script>

<main>
	<Logo />
	<h1>Hello Typescript!</h1>

	<Counter />
	<HelloWorld />
	<Paragraph />
	<HtmlTest />
	<List />
	<hr>
	<Answer />
	<p>answerに値を渡さなかった場合初期値が表示される</p>
	<Answer answer={answerWithExclamation()} />
	<p>値を渡すとリアクティブに変更される</p>
	<hr>
	<button on:click={() => setAnswer('cat')}>set answer</button>
	<p>on:clickは値を返さないvoid関数をそのまま渡せないので、そういう時は即時関数で渡す</p>
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		--main-color: 255, 62 ,0;
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
