<template>
    <div class="controlPanel">
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

        <select class="selectedCard" v-model="selectedSuit">
            <option value="" disabled hidden>Select card suit</option>
            <option value="Diamonds">Diamonds</option>
            <option value="Hearts">Hearts</option>
            <option value="Spades">Spades</option>
            <option value="Clubs">Clubs</option>
        </select>

        <button :disabled="isCardSelected" @click="$parent.drawSelectedCard(selectedCard, selectedSuit)">Draw selected card</button>
        <br>
        <button class="btnFromTop" :disabled="isTheDeckEmpty" @click="$parent.takeCardFromTopOfTheDeck()">Draw card from top</button>
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
.btnFromTop {
    margin: 20px 0 0 0;
}
</style>
