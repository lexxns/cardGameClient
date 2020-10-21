<script lang="ts">
    import { CardData } from "./Structs";
    export let cardData: CardData = new CardData("DEFAULT_NAME");

    function toggleSelect() {
        cardData.isSelected = !cardData.isSelected;
        cardData.isFaceUp = true;
    }
</script>

<div class="card" 
class:selected={cardData.isSelected} 
class:field={cardData.container == "FIELD"}
class:hand={cardData.container == "HAND"}
on:click={toggleSelect}>
    {#if cardData.isFaceUp}
        <h3 class="title">{cardData.name}</h3>
        <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
        </div>
        <div class="attk">
            <h2>{cardData.attk}</h2>
        </div>
        <div class="def">        
            <h2>{cardData.health}</h2>
        </div>

    {:else}
        <p>Hidden</p>
    {/if}
</div>

<style>
    .hand:not(:first-child) {
        margin-left: -50px;
    }
    .card{
        display: flex;
        height: 280px;
        width: 200px;
        background-color: #17141d;
        border-radius: 10px;
        box-shadow: -1rem 0 3rem #000;
        transition: 0.4s ease-out;
        position: relative;
        left: 0px;
    }
    .card:hover {
        transform: translateY(-20px);
        z-index: 1;
        transition: 0.4s ease-out;
    }
    .card:hover ~ .card {
        position: relative;
        left: 50px;
        transition: 0.4s ease-out;
    }
    .title {
        color: white;
        font-weight: 300;
        position: absolute;
        left: 20px;
        top: 15px;
    }
    .bar {
        position: absolute;
        top: 100px;
        left: 20px;
        height: 5px;
        width: 150px;
    }
    .emptybar {
        background-color: #2e3033;
        width: 100%;
        height: 100%;
    }
    .filledbar {
        position: absolute;
        top: 0px;
        z-index: 3;
        width: 0px;
        height: 100%;
        background: rgb(0,154,217);
        background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);
        transition: 0.6s ease-out;
    }
    .card:hover .filledbar {
        width: 120px;
        transition: 0.4s ease-out;
    }
    svg {
        fill: #17141d;
        stroke-width: 2px;
    }
    .card:hover .stroke {
        stroke-dashoffset: 100;
        transition: 0.6s ease-out;
    }
    .selected {
        border-color: blue;
    }
    .attk {
        position: absolute;
        top: 200px;
        left: calc(50% - 80px);
        color: red;
    }
    .def {
        position: absolute;
        top: 200px;
        right: calc(50% - 80px);
        color: blue;
    }
</style>