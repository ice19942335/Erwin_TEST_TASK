import App from '../../src/App.vue';

describe('App methods', () => {
    it('init addAllCardsBySuit', () => {
        const suitMap = {
            Diamonds: 'Diamonds',
            Hearts: 'Hearts',
            Spades: 'Spades',
            Clubs: 'Clubs'
        };
        const addAllCardsBySuit = App.methods.addAllCardsBySuit;

        expect(addAllCardsBySuit(suitMap.Diamonds).length).toBe(13);
        expect(addAllCardsBySuit(suitMap.Diamonds)[12]).toEqual({card: 2, suit: "Diamonds"});
    });
    it('removeCardFromCardArr', () => {
        let cardArr = [{card: 'K', suit: 'Clubs'},{card: 'K', suit: 'Spades'},{card: 'K', suit: 'Hearts'}];
        const removeCardFromCardArr = App.methods.removeCardFromCardArr;

        cardArr = removeCardFromCardArr(0, cardArr);

        expect(cardArr.length).toBe(2);
        expect(cardArr[0]).toEqual({card: 'K', suit: 'Spades'});
    });
    it('putCardToTheDrawnCardsList', () => {
        let drawnList = [];
        const putCardToTheDrawnCardsList = App.methods.putCardToTheDrawnCardsList;

        drawnList = putCardToTheDrawnCardsList({card: 'K', suit: 'Diamonds'}, drawnList);

        expect(drawnList.length).toBe(1);
    });
    it('shuffleTheDeck', () => {
        let array = [];
        let array2 = [];
        const shuffleTheDeck = App.methods.shuffleTheDeck;

        for (let i = 0; i < 10; i++) {
            array.push(i);
            array2.push(i);
        }

        array = shuffleTheDeck(array);
        array2 = shuffleTheDeck(array2);

        let result = false;
        for (let i = 0; i < 10; i++) {
            if (array[i] !== array2[i]) {
                result = true;
            }
        }

        expect(result).toBe(true);
    });
});