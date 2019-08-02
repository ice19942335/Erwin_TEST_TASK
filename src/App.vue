<template>
  <div id="app">
    <div class="center">
      <div class="deckWrap">
        <img v-if="deckIsEmpty" src="./assets/card-back.png" alt="card">
        <img v-else="" src="./assets/card-back-empty.png" alt="card">
        <button class="shuffleTheDeck" :disabled="!deckIsEmpty" @click="shuffleTheDeck(cardArr)">Shuffle the deck</button>
      </div>
      <card-selector :card-array-length="cardArr.length"/>
    </div>
    <drawn-cards :drawn-cards-props="drawnCardsProps"/>
  </div>
</template>

<script>
  import CardSelector from './components/CardSelector.vue'
  import DrawnCards from './components/DrawnCards.vue'

  export default {
    name: 'app',
    components: {
      CardSelector,
      DrawnCards
    },
    data: function() {
      return {
        cardArr: [],
        drawnCardsProps: [],
        suitMap: {
          Diamonds: 'Diamonds',
          Hearts: 'Hearts',
          Spades: 'Spades',
          Clubs: 'Clubs'
        }
      }
    },
    methods: {
      initCards() {
        this.cardArr = this.cardArr.concat(this.addAllCardsBySuit(this.suitMap.Diamonds));
        this.cardArr = this.cardArr.concat(this.addAllCardsBySuit(this.suitMap.Hearts));
        this.cardArr = this.cardArr.concat(this.addAllCardsBySuit(this.suitMap.Spades));
        this.cardArr = this.cardArr.concat(this.addAllCardsBySuit(this.suitMap.Clubs));
        //this.shuffleDeck();
      },
      addAllCardsBySuit(suit) {
        let arr = [];
        for(let i = 14; i > 1; i--) {
          if (i === 14) { arr.push({card: 'A', suit: suit}); }
          else if (i === 13) { arr.push({card: 'K', suit: suit}); }
          else if (i === 12) { arr.push({card: 'Q', suit: suit}); }
          else if (i === 11) { arr.push({card: 'J', suit: suit}); }
          else arr.push({card: i, suit: suit});
        }
        return arr;
      },
      drawSelectedCard(card, suit) {
        let find = this.cardArr.find(el => el.card == card && el.suit === suit);
        let findIndex = this.cardArr.findIndex(el => el === find);

        if (find !== undefined) {
          this.cardArr = this.removeCardFromCardArr(findIndex, this.cardArr);
          this.putCardToTheDrawnCardsList({card, suit}, this.drawnCardsProps);
        } else {
          alert('There is no such card in the deck');
        }
      },
      takeCardFromTopOfTheDeck() {
        if (this.cardArr.length > 0) {
          let lastCard = this.cardArr[this.cardArr.length - 1];
          this.cardArr = this.removeCardFromCardArr(this.cardArr.length - 1, this.cardArr);
          this.putCardToTheDrawnCardsList({card: lastCard.card, suit: lastCard.suit}, this.drawnCardsProps);
        } else {
          alert('There is no more cards in the deck')
        }
      },
      removeCardFromCardArr(index, arr) {
        arr.splice(index, 1);
        return arr;
      },
      putCardToTheDrawnCardsList(card, drawnList) {
        drawnList.push(card);
        return drawnList;
      },
      shuffleTheDeck(arr) {
        arr.sort(() => Math.random() - 0.5);
        return arr;
      }
    },
    computed: {
      deckIsEmpty() {
        return this.cardArr.length > 0;
      }
    },
    created() {
      this.initCards();
    }
  }
</script>

<style>
  #app {
    min-height: calc(100vh - 60px);
    background: url("assets/back-green.jpg");
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .deckWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 30px 0 0;
  }
  .shuffleTheDeck {
    margin: 10px 0 10px 0;
  }.shuffleTheDeck:hover {
    cursor: pointer;
  }
  img {
    border-radius: 7px;
  }

  button {
    font-family: Arial, sans-serif;
    font-weight: 600;
    padding: 0 5px;
    width: 100%;
    height: 25px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 8px;
  }
  button:hover {
    background: white;
  }
  @media (max-width: 550px) {
    .center {
      flex-direction: column;
    }
    button {
      width: 50%;
    }
    .deckWrap {
      margin: 0 0 0 0;
    }
  }
</style>
