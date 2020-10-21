export function cardData(
    id: String,
    name: String,
    attk: String,
    health: String,
    container: String) {
    return {
        id: id,
        name: name,
        attk: attk,
        health: health,
        container: container,
        isSelected: false,
        isFaceUp: true,
    }
}

export class CardData {
    id: String;
    name: String;
    attk: number;
    health: number;
    container: String;
    isSelected = false;
    isFaceUp = true;

    constructor (name: String) {
        this.id = "1",
        this.name = name,
        this.attk = 1,
        this.health = 1,
        this.container = "DECK"
        this.isSelected = false,
        this.isFaceUp = false
    }
}

export class HandData {
    hand: CardData[];
}

export class FieldData {
    field: CardData[];
}

export class GameData {
    hand: HandData;
    field: FieldData;
}
    
