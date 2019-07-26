<template>
    <div>
        <button :disabled="sortBtnDisabled" @click="sortInit()" class="btnSortDrawnCards">Sort drawn cards</button>
        <div class="drawnCards">
            <div class="drawnCardsWrap" v-for="(item, index) in drawnCards" :key="index">
                <div class="cardItem" v-bind:class="[item.card.toString(), item.suit]">
                    Card: {{ item.card }}<br>
                    Suit: {{ item.suit }}
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
                    A: 1,
                    K: 2,
                    Q: 3,
                    J: 4,
                    10: 5,
                    9: 6,
                    8: 7,
                    7: 8,
                    6: 9,
                    5: 10,
                    4: 11,
                    3: 12,
                    2: 13
                }
            }
        },
        props: {
            drawnCards: Array
        },
        methods: {
            sortInit() {
                this.drawnCards = this.sortBySuit(this.drawnCards, this.sortRule);
                this.drawnCards = this.sortByValue(this.drawnCards);
            },
            sortBySuit(arr, sortRule) {
                arr.sort(sortRule);
                return arr;
            },
            sortRule(a, b) {
                let aSuitLevel = this.sortSuitPriority[a.suit];
                let bSuitLevel = this.sortSuitPriority[b.suit];
                if (aSuitLevel > bSuitLevel) return 1;
                if (aSuitLevel < bSuitLevel) return -1;
            },
            sortByValue(arr) {
                let flagToContinue = true;

                //Code below will be a little hard to read, sorry but I did my best.
                //Looping until no one element will be swapped - this is the trigger to stop the loop
                while (flagToContinue) {
                    let counter = 0;
                    for (let i = 0; i < arr.length - 1; i++) {
                        let curEl = this.drawnCards[i];
                        let nextEl = this.drawnCards[i + 1];

                        let curElCardLevel = this.sortCardPriority[curEl.card];
                        let nextElCardLevel = this.sortCardPriority[nextEl.card];

                        if (curEl.suit === nextEl.suit) {
                            if (curElCardLevel < nextElCardLevel) {
                                this.drawnCards[i] = nextEl;
                                this.drawnCards[i + 1] = curEl;
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
    border: gray solid 1px;
    margin: 10px 5px 0 5px;
}
.btnSortDrawnCards {
    height: 50px;
}
.btnSortDrawnCards:hover {
    cursor: pointer;
}
</style>
