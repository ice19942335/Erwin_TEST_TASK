<template>
    <div class="cardSelectionPanel">
        <select class="selectedSuitDropDown" v-model="selectedCard">
            <option value="" disabled hidden>Selected card</option>
            <option value="A">Ace</option>
            <option value="K">King</option>
            <option value="Q">Queen</option>
            <option value="J">Jack</option>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
        </select>
        <br>
        <select class="selectedCard" v-model="selectedSuit">
            <option value="" disabled hidden>Select card suit</option>
            <option value="Diamonds">Diamonds</option>
            <option value="Hearts">Hearts</option>
            <option value="Spades">Spades</option>
            <option value="Clubs">Clubs</option>
        </select>
        <br>
        <button :disabled="isCardSelected" @click="$parent.drawSelectedCard(selectedCard, selectedSuit)">Draw selected card</button>
        <br>
        <button class="btnTakeFromTop" :disabled="isTheDeckEmpty" @click="$parent.takeCardFromTopOfTheDeck()">Draw card from top</button>
    </div>
</template>

<script>
    export default {
        name: 'ControlPanel',
        data: function() {
            return {
                selectedSuit: '',
                selectedCard: ''
            }
        },
        props: {
            cardArrayLength: Number
        },
        computed: {
            isCardSelected() {
                return this.selectedSuit === '' || this.selectedCard === '' || this.cardArrayLength === 0;
            },
            isTheDeckEmpty() {
                return this.cardArrayLength === 0;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnTakeFromTop {
    margin: 30px 0 10px 0;
}
select, button {
    font-family: Arial, sans-serif;
    font-weight: 600;
    padding: 0 5px;
    width: 150px;
    height: 25px;
    cursor: pointer;
    outline: none;
}
select {
    margin: 0 0 5px 0;
    background: green;
    border-radius: 8px;
    border: none;
}
button {
    border: none;
    border-radius: 8px;
}
button:hover {
    background: white;
}
@media (max-width: 550px) {
    .cardSelectionPanel {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cardSelectionPanel select, button {
        width: 50%;
    }
    .btnTakeFromTop {
        margin: 0px 0 10px 0;
    }
}
</style>
