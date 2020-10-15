<script lang="ts">
    import { CardData } from "./Structs";
    export let onField = false;
    export let cardData: CardData = new CardData("DEFAULT_NAME");

    function toggleSelect() {
        cardData.isSelected = !cardData.isSelected;
        cardData.isFaceUp = true;
    }
</script>

<div class="card" 
class:selected={cardData.isSelected} 
class:field={onField}
on:click={toggleSelect}>
    {#if cardData.isFaceUp}
        <p>{cardData.name}</p>
        <p>{cardData.attk}</p>
        <p>{cardData.health}</p>
    {:else}
        <p>Hidden</p>
    {/if}
</div>

<style>
    .card{
        background: #fff;
        padding: 20px;
        border-radius: 6px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    .selected{
        border-color: blue;
    }
    .field{
        background: grey;
    }
</style>