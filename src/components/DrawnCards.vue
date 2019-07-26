<template>
    <div>
        <button :disabled="sortBtnDisabled" @click="sortInit()" class="btnSortDrawnCards">Sort drawn cards</button>
        <div class="drawnCards">
            <div class="drawnCardsWrap" v-for="(item, index) in drawnCards" :key="index">
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
                sortSuitPriority: {
                    Clubs: 1,
                    Spades: 2,
                    Hearts: 3,
                    Diamonds: 4
                },
                sortCardPriority: {
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
                }
            }
        },
        props: {
            drawnCards: Array
        },
        methods: {
            sortInit() {
                this.drawnCards = this.sortBySuit(this.drawnCards, this.sortRule);
                this.drawnCards = this.sortByValue(this.drawnCards, this.sortCardPriority);
            },
            sortBySuit(arr, sortRule) {
                arr.sort(sortRule);
                return arr;
            },
            sortRule(a, b, sortSuitPriority = this.sortSuitPriority) {
                let aSuitLevel = sortSuitPriority[a.suit];
                let bSuitLevel = sortSuitPriority[b.suit];
                if (aSuitLevel > bSuitLevel) return 1;
                if (aSuitLevel < bSuitLevel) return -1;
            },
            sortByValue(arr, sortCardPriority) {
                let flagToContinue = true;

                // I could use array methods like (sort, concat, filter) but this idea came to me first.
                while (flagToContinue) {
                    let counter = 0;
                    for (let i = 0; i < arr.length - 1; i++) {
                        let curEl = arr[i];
                        let nextEl = arr[i + 1];

                        let curElCardLevel = sortCardPriority[curEl.card];
                        let nextElCardLevel = sortCardPriority[nextEl.card];

                        if (curEl.suit === nextEl.suit) {
                            if (curElCardLevel < nextElCardLevel) {
                                arr[i] = nextEl;
                                arr[i + 1] = curEl;
                            } else {
                                counter++;
                            }
                        }
                    }
                    if (counter >= arr.length - 4) {
                        flagToContinue = false;
                    }
                }
                return arr;
            }
        },
        computed: {
            sortBtnDisabled() {
                return this.drawnCards.length <= 1;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drawnCards {
    margin: 15px 0 0 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.cardItem {
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
