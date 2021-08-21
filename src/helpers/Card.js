export default class Card {

    constructor(id,value,nextValue, image) {
        this.id = id
        this.value = value;
        this.nextValue =nextValue
        this.image = image
        this.showFront = false
    }
}