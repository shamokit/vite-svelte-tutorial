<script lang="ts" context="module">
	// 型はsvelteファイル内に書きたいときはcontext="module"に分けて書く　分離したほうがよさそう。
	// export type TypeInfo = {
	// 	name: string;
	// 	version: string;
	// 	speed: number;
	// 	website: string;
	// };
</script>
<script lang="ts">
	import type { TypeInfo } from '../types/Info'
	export let info: TypeInfo = {
		//export const にするとpropsが反映されなくなる。
		name: "",
		version: "",
		speed: 0,
		website: "",
	};
	const { name, speed, version, website } = info;
	$: console.log($$props) //$$propsで全てのpropsを参照できるが非推奨
</script>

<p>
	The <code>{name}</code> package is {speed} fast. Download version {version} from
	<a href="https://www.npmjs.com/package/{name}">npm</a>
	and <a href={website}>learn more here</a>
</p>
