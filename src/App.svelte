<script lang="ts">
	import Card from "./Card.svelte";
	import type { FieldData, HandData } from "./Structs";

	import { onMount } from 'svelte';
	import store from './store';

	let handData: HandData = {hand:[]};
	let fieldData: FieldData = {field:[]};

	onMount(() => {
		store.subscribeHand(hand => {
			handData = hand;
		});
		store.subscribeField(field => {
			fieldData = field;
		});
	});

	// function onSendMessage() {
	// 	if (message.length > 0) {
	// 		store.sendMessage(message);
	// 	}
	// }
</script>

<main>
	<div class="field">
		{#each fieldData.field as card}
			<Card cardData={card} onField={true}/>
		{/each}
	</div>

	<div class="hand">
		{#each handData.hand as card}
			<Card cardData={card}/>
		{/each}
	</div>

</main>

<style>
	main {
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
</style>