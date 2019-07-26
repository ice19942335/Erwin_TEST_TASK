import DrawnCards from '../../src/components/DrawnCards.vue';

describe('App methods', () => {
    it('sortBySuit', () => {
        let arrToSort = [{card: 'K', suit: 'Diamonds'}, {card: 'K', suit: 'Spades'} ,{card: 'K', suit: 'Clubs'}];

        const sortRule = (a, b, sortSuitPriority = DrawnCards.data().sortSuitPriority) => {
            let aSuitLevel = sortSuitPriority[a.suit];
            let bSuitLevel = sortSuitPriority[b.suit];
            if (aSuitLevel > bSuitLevel) return 1;
            if (aSuitLevel < bSuitLevel) return -1;
        };

        const sortBySuit = DrawnCards.methods.sortBySuit;

        let sortedArr = sortBySuit(arrToSort, sortRule);

        expect(sortedArr[0]).toEqual({card: 'K', suit: 'Clubs'});
        expect(sortedArr[1]).toEqual({card: 'K', suit: 'Spades'});
        expect(sortedArr[2]).toEqual({card: 'K', suit: 'Diamonds'});

    });
    it('sortByValue', () => {
        let arrToSort = [
            {card: '5', suit: 'Clubs'},
            {card: 'K', suit: 'Clubs'},
            {card: 'A', suit: 'Clubs'},
            {card: 'A', suit: 'Hearts'},
            {card: 'K', suit: 'Hearts'},
            {card: '4', suit: 'Hearts'},
            {card: '3', suit: 'Diamonds'},
            {card: '2', suit: 'Diamonds'}
        ];

        const sortByValue = DrawnCards.methods.sortByValue;

        let sortedArr = sortByValue(arrToSort, DrawnCards.data().sortCardPriority);

        expect(sortedArr[0]).toEqual({card: 'A', suit: 'Clubs'});
        expect(sortedArr[1]).toEqual({card: 'K', suit: 'Clubs'});
        expect(sortedArr[2]).toEqual({card: '5', suit: 'Clubs'});
        expect(sortedArr[3]).toEqual({card: 'A', suit: 'Hearts'});
        expect(sortedArr[4]).toEqual({card: 'K', suit: 'Hearts'});
        expect(sortedArr[5]).toEqual({card: '4', suit: 'Hearts'});
        expect(sortedArr[6]).toEqual({card: '3', suit: 'Diamonds'});
        expect(sortedArr[7]).toEqual({card: '2', suit: 'Diamonds'});
    });
});