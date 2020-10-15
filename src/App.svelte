<script lang="ts">
	import Card from "./Card.svelte";
	import type { FieldData, HandData } from "./Structs";

	import { onMount } from 'svelte';
	import store from './store';

	let handData: HandData = {hand:[]};
	let fieldData: FieldData = {field:[]};
	let message;

	onMount(() => {
		store.subscribe(currentMessage => {
			handData = currentMessage;
		});
	});

	// function onSendMessage() {
	// 	if (message.length > 0) {
	// 		store.sendMessage(message);
	// 	}
	// }
</script>

<main>
	{#each fieldData.field as card}
		<Card cardData={card} onField={true}/>
	{/each}
	{#each handData.hand as card}
		<Card cardData={card}/>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>