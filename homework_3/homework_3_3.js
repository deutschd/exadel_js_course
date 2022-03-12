class Zoo {
    constructor(address, area, establishedDate, ticketPrice){
        this.address = address;
        this.area = area;
        this.establishedDate = establishedDate;
        this.ticketPrice = ticketPrice;
        this.workers = [];
        this.animals = [];
    }
    getInfo(){
        return `The Address of Zoo is ${this.address}. It is located in ${this.area} and established in ${this.establishedDate}.
        The ticket price is ${this.ticketPrice}. There are ${this.workers} workers and ${this.animals} animals. 
        Thank you for your interest in our Zoo!`
    }
    setWorkers(numberOfWorkers){
        if(setWorkers.length > 1){
            this.setWorkers.push(numberOfWorkers)
        } else {
            throw Error('The number of workers should not be empty)
        }
    }
    setAnimals(numberOfAnimals){
        if(setAnimals.length > 1){
            this.setAnimals.push(numberOfAnimals)
        } else {
            throw Error('The number of animals should not be empty)
        }
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

