import Chunk from "../helpers/Chunk";
import Game from "../helpers/Game";

const CardValues = [
    { value: 'A', nextValue: 2 },
    { value: 2, nextValue: 3 },
    { value: 3, nextValue: 4 },
];
const FirstChunk = new Chunk(5, 1);
const SecondChunk = new Chunk(4, 1);
const decCount = 5
const tableCardsCount = 9
const floorCardsCount = 6
const GameState = new Game(CardValues, decCount, tableCardsCount, floorCardsCount, FirstChunk, SecondChunk);

describe("tests for initialize game decs function", () => {

    GameState.initializeGameDecs()

    it('should initiliaze 15 cards totally', () => {

        expect(GameState.cards).toHaveLength(tableCardsCount + floorCardsCount);
    });

    it('all cards should have different id\'s', () => {

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        const uniqueIds = GameState.cards.filter(unique)
        expect(uniqueIds).toHaveLength(tableCardsCount + floorCardsCount);
    });

    it('all cards should have id ,value and next value properties', () => {

        const cardsWithProperties = GameState.cards.filter((card) => card.hasOwnProperty('id') && card.hasOwnProperty('value') && card.hasOwnProperty('nextValue'))
        expect(cardsWithProperties).toHaveLength(tableCardsCount + floorCardsCount)
    });

    it('should have 5 cards with value A and next value 2', () => {

        const cardsWithProperties = GameState.cards.filter((card) => card.value === 'A' && card.nextValue === 2)
        expect(cardsWithProperties).toHaveLength(decCount)
    });

    it('should have 5 cards with value 2', () => {

        const cardsWithProperties = GameState.cards.filter((card) => card.value === 2 && card.nextValue === 3)
        expect(cardsWithProperties).toHaveLength(decCount)
    });
    it('should have 5 cards with value 3', () => {

        const cardsWithProperties = GameState.cards.filter((card) => card.value === 3 && card.nextValue === 4)
        expect(cardsWithProperties).toHaveLength(decCount)
    });
})


describe("tests for shuffling game cards function", () => {

    const cards = GameState.cards

    it('should shuffle cards', () => {
        GameState.shuffleGameDecs()
        const sameValues = GameState.cards.filter((card, index) => card.value === cards[index].value)
        expect(sameValues.length).toBeLessThan(tableCardsCount + floorCardsCount);
    });
})

describe("tests for create random table card indexes function", () => {

    GameState.createRandomTableCardIndexes()
    let upperBound = GameState.tableCardsCount + GameState.floorCardsCount

    it('should create indexes with max value of upperbound', () => {
        const randomTableCardIndexes = GameState.randomTableCardIndexes
        expect(Math.max(...Array.from(randomTableCardIndexes))).toBeLessThan(upperBound);
    });

    it('should create different indexes', () => {

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        const randomTableCardIndexes = GameState.randomTableCardIndexes.filter(unique)
        expect(randomTableCardIndexes).toHaveLength(tableCardsCount);

    });
})
describe("tests for initialize table cards function", () => {

    GameState.initializeTableCards()

    it('should have create table cards array length of table cards count', () => {
        expect(GameState.tableCards).toHaveLength(GameState.firstChunk.quantity + GameState.secondChunk.quantity);
    });

})

describe("tests for initialize floor cards function", () => {

    GameState.initializeFloorCards()

    it('should have floorCardsLength', () => {
        expect(GameState.floorCards).toHaveLength(floorCardsCount);
    });
})

describe("tests for chunk playing cards function", () => {

    GameState.chunkPlayingCards()
    const chunkSize = GameState.firstChunk.quantity + GameState.secondChunk.quantity

    it('should create totaly chunkSize chunk and playing cards should have length chunkSize', () => {
        expect(GameState.tableCards).toHaveLength(chunkSize);
    });

    it('should create first chunk size of firstChunkSize', () => {
        expect(GameState.tableCards[0]).toHaveLength(GameState.firstChunk.size);
    });

    it('should create second chunk size of secondChunkSize', () => {
        expect(GameState.tableCards[1]).toHaveLength(GameState.secondChunk.size);
    });
})

describe("tests for show front side of last cards in chunks function", () => {

    GameState.showFrontSideOfLastCardsInChunks()
    it('should make showFront true of last item of chunks', () => {
        expect(GameState.tableCards[0][GameState.firstChunk.size - 1].showFront).toBe(true);
        expect(GameState.tableCards[1][GameState.secondChunk.size - 1].showFront).toBe(true);
    });
})
describe("should test init function", () => {

    it('should return true', () => {

        expect(GameState.init()).toEqual(true);
    });
})
