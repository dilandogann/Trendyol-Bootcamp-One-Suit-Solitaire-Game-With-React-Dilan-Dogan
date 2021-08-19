export default class Card {

    constructor(value,nextValue, image, id) {
        this.value = value;
        this.nextValue =nextValue
        this.image = image
        this.id = id
        this.showFront = false
    }
}