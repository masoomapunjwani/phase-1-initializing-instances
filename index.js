// Write your code here
class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;

    }
}

const breakfast = new Breakfast("egg", "tea");
breakfast;

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

const lunch = new Lunch("cabbage", "chicken-soup", "passion-juice");
lunch;

class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}

const dinner = new Dinner("carrot", "meat", "chicken", "cake");
dinner;
