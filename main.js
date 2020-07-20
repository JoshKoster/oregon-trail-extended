class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []

    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        let quarantine = this.passengers.some(traveler => traveler.isHealhy === false)
        return quarantine
    }
    totalFood() {
        let foodSum = this.passengers.reduce((sum, travler) => {
            let result = sum + traveler.food
            console.log(result)
            return result
        }, 0)
        return foodSum
    }


}

class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealhy = true
    }
    hunt() {
        return this.food = this.food + 2
    }
    eat() {
        if (this.food > 0) {
            this.food = 1
        } else {
            this.isHealhy = false
        }
    }
}

class Doctor extends Traveler {
    constructor(name, gender) {
        super(name, gender)
    }
    heal(traveler) {
        return traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor(name, gender) {
        super(name, gender)
        this.food = 2
        this.isHealhy = true
    }
    hunt() {
        return this.food = this.food + 5
    }
    eat() {
        if (this.food >= 2) {
            this.food = this.food - 2
            return
        } else {
            this.food = 0
            this.isHealhy = false
        }

    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food > numOfFoodUnits) {
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits
        }
    }
}    

// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);
