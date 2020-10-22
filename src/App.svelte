<script lang="ts">
	import Card from "./Card.svelte";
	import { onMount } from 'svelte';
	import store from './store';
import type { CardData } from "./Structs";

	let cards: CardData[] = [];

	onMount(() => {
		store.subscribe(data => {
			cards = data;
		});
	});
</script>

<main>
	<div class="field">
		{#each cards as card}
			{#if card.container == "FIELD"}
				<Card cardData={card}/>
			{/if}
		{/each}
	</div>

	<div class="hand">
		{#each cards as card}
			{#if card.container == "HAND"}
				<Card cardData={card}/>
			{/if}
		{/each}
	</div>

</main>

<style>
	main {
		background-color: #100e17;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.field {
		position: absolute;
		height: 300px;
		width: 600px;
		top: calc(50% - 360px);
		left: calc(50% - 370px);
		display: flex;
	}

	.hand {
    	font-family: 'Open Sans', sans-serif;
		position: absolute;
		height: 300px;
		width: 600px;
		top: calc(100% - 360px);
		left: calc(50% - 300px);
		display: flex;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	:global(body) {
		background-color: #100e17;
	}
</style>