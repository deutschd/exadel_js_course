class Zoo {
    constructor(address, area, establishedDate, ticketPrice){
        this.address = address;
        this.area = area;
        this.establishedDate = establishedDate;
        this.ticketPrice = ticketPrice;
        this.workers = [];
        this.animals = [];
    }
}

class Animal extends Zoo {
    constructor(area, type, color, placeOfOrigin){
        super(area)
        this.type = type;
        this.color = color;
        this.placeOfOrigin = placeOfOrigin;  
        this.weight = [];
        this.height = [];      
    }
    setweight(kgs){
        if(typeof kgs == 'number'){
            this.weight = kgs
        } else{
            throw new Error('Weight value should be a number')
        }
    }
}

class Snakes extends Animal {
    constructor(color, placeOfOrigin, weight, isPoisonous){
        super(color, placeOfOrigin, weight)
        this.isPoisonous = isPoisonous;
    }
}