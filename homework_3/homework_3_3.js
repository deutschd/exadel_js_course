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
            throw Error('The number of workers should not be empty')
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
    setWeight(kgs){
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

class CatLike extends Animal {
    constructor(type, placeOfOrigin, weight, isSafeToPet){
        super(type, placeOfOrigin, weight)
        this.isSafeToPet = isSafeToPet;
    }
}

class Birds extends Animal {
    constructor(type, color, placeOfOrigin, isFlying){
        super(type, color, placeOfOrigin)
        this.isFlying = isFlying;
    }
}

class Worker extends Animal {
    constructor(height, firstName, lastName){
        super(height)
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = [];
    }
    setPhoneNumber(phoneNumber){
        if(setPhoneNumber.length > 1){
            this.setPhoneNumber.push(phoneNumber)
        } else {
            throw Error('The phone number should not be empty')
        }
    }
}

