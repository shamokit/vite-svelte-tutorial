<script lang="ts">
	import Logo from "./components/Logo.svelte";
	import Counter from "./components/Counter.svelte";
	import HelloWorld from "./components/HelloWorld.svelte";
	import Paragraph from "./components/Paragraph.svelte";
	import HtmlTest from "./components/HtmlTest.svelte";
</script>

<main>
	<Logo />
	<h1>Hello Typescript!</h1>

	<Counter />
	<HelloWorld />
	<Paragraph />
	<HtmlTest />
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
