export function cardData(
    id: String,
    name: String,
    attk: String,
    health: String) {
    return {
        id: id,
        name: name,
        attk: attk,
        health: health,
        isSelected: false,
        isFaceUp: true,
    }
}

export class CardData {
    id: String;
    name: String;
    attk: number;
    health: number;
    isSelected = false;
    isFaceUp = true;

    constructor (name: String) {
        this.id = "1",
        this.name = name,
        this.attk = 1,
        this.health = 1,
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
    
