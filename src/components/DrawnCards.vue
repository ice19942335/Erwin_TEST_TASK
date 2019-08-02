<template>
    <div class="drawnCardsWrap">
        <button :disabled="sortBtnDisabled" @click="sortDeck()" class="btnSortDrawnCards">Sort drawn cards</button>
        <div class="drawnCards">
            <div class="drawnCardsWrap" v-for="(item, index) in deck" :key="index">
                <div class="cardItem"
                     v-bind:class="['card-' + item.card.toString(), item.suit, `${item.suit}-${item.card.toString()}`]">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'ControlPanel',
        data: function() {
            return {
                sortValuePriority: {
                    A: 13,
                    K: 12,
                    Q: 11,
                    J: 10,
                    10: 9,
                    9: 8,
                    8: 7,
                    7: 6,
                    6: 5,
                    5: 4,
                    4: 3,
                    3: 2,
                    2: 1
                },
                deck: this.drawnCardsProps
            }
        },
        props: {
            drawnCardsProps: Array
        },
        methods: {
            sortDeck() {
                let clubs = this.deck.filter(card => card.suit === 'Clubs').sort(this.sortRule);
                let spades = this.deck.filter(card => card.suit === 'Spades').sort(this.sortRule);
                let hearts = this.deck.filter(card => card.suit === 'Hearts').sort(this.sortRule);
                let diamonds = this.deck.filter(card => card.suit === 'Diamonds').sort(this.sortRule);

                console.dir(clubs);
                console.dir(spades);
                console.dir(hearts);
                console.dir(diamonds);

                this.deck = clubs.concat(spades.concat(hearts.concat(diamonds)));
            },
            sortRule(a, b, sortValuePriority = this.sortValuePriority) {
                let aSuitLevel = sortValuePriority[a.card];
                let bSuitLevel = sortValuePriority[b.card];
                if (aSuitLevel > bSuitLevel) return 1;
                if (aSuitLevel < bSuitLevel) return -1;
            }
        },
        computed: {
            sortBtnDisabled() {
                return this.drawnCardsProps.length <= 1;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drawnCardsWrap {
     margin: 30px 0 0 0;
}
button {
    font-family: Arial, sans-serif;
    font-weight: 600;
    padding: 0 5px;
    width: 150px;
    height: 25px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 8px;
}
button:hover {
    background: white;
}
.drawnCards {
    margin: 15px 0 0 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.cardItem {
    box-shadow: 0.3em 0.3em 3px rgba(14, 14, 14, 0.78);
    width: 54px;
    height: 81px;
    background: url("../assets/card-deck.png") no-repeat;
    margin: 10px 5px 0 5px;
    border-radius: 10px;
}
.btnSortDrawnCards {
    height: 50px;
}
.btnSortDrawnCards:hover {
    cursor: pointer;
}
.card-A {
    background-position-x: -15px;
    background-position-y: -5px;
}
.card-2 {
    background-position-x: -80px;
    background-position-y: -5px;
}
.card-3 {
    background-position-x: -147px;
    background-position-y: -6px;
}
.card-4 {
    background-position-x: -210px;
    background-position-y: -7px;
}
.card-5 {
    background-position-x: -275px;
    background-position-y: -6px;
}
.card-6 {
    background-position-x: -340px;
    background-position-y: -6px;
}
.card-7 {
    background-position-x: -407px;
    background-position-y: -7px;
}
.card-8 {
    background-position-x: -470px;
    background-position-y: -8px;
}
.card-9 {
    background-position-x: -536px;
    background-position-y: -5px;
}
.card-10 {
    background-position-x: -601px;
    background-position-y: -5px;
}
.card-J {
    background-position-x: -668px;
    background-position-y: -6px;
}
.card-Q {
    background-position-x: -731px;
    background-position-y: -7px;
}
.card-K {
    background-position-x: -797px;
    background-position-y: -5px;
}

.Clubls {
    background-position-y: -5px;
}
.Spades {
    background-position-y: -197px;
}
.Hearts {
    background-position-y: -104px;
}
.Diamonds {
    background-position-y: -296px;
}

.Spades-Q {
    background-position-y: -199px
}
.Spades-J {
    background-position-y: -198px;
}
.Spades-8 {
    background-position-y: -200px;
}
.Spades-7 {
    background-position-y: -199px;
}
.Spades-6 {
    background-position-y: -198px;
}
.Spades-5 {
    background-position-y: -198px;
}
.Spades-4 {
    background-position-y: -199px;
}
.Spades-3 {
    background-position-y: -198px;
}

.Hearts-Q {
    background-position-y: -106px;
}
.Hearts-J {
    background-position-y: -105px;
}
.Hearts-8 {
    background-position-y: -107px
}
.Hearts-7 {
    background-position-y: -106px;
}
.Hearts-6 {
    background-position-y: -105px;
}
.Hearts-5 {
    background-position-y: -105px;
}
.Hearts-4 {
    background-position-y: -106px;
}
.Hearts-3 {
    background-position-y: -105px;
}

.Diamonds-Q {
    background-position-y: -298px;
}
.Diamonds-J {
    background-position-y: -297px;
}
.Diamonds-8 {
    background-position-y: -299px;
}
.Diamonds-7 {
    background-position-y: -298px;
}
.Diamonds-6 {
    background-position-y: -297px;
}
.Diamonds-5 {
    background-position-y: -297px;
}
.Diamonds-4 {
    background-position-y: -298px;
}
.Diamonds-3 {
    background-position-y: -297px;
}

</style>
