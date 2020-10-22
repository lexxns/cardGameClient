export function cardData(
    id: string,
    name: string,
    attk: string,
    health: string,
    container: string) {
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
    id: string;
    name: string;
    attk: number;
    health: number;
    container: string;
    isSelected = false;
    isFaceUp = true;

    constructor (name: string) {
        this.id = "1";
        this.name = name;
        this.attk = 1;
        this.health = 1;
        this.container = "DECK";
        this.isSelected = false;
        this.isFaceUp = false;
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
    
