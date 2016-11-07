export class Pizza {
    constructor(baseType, ingredient, toping) {
        this.baseType = baseType;
        this.ingredient = ingredient;
        this.toping = toping;
        this.payed = false;
        this.givenOut = false;
    }

    withBase(baseType) {
        this.baseType = baseType;
        return this
    };

    withIngredient(ingredient) {
        this.ingredient = ingredient;
        return this

    };

    withoutToping() {
        this.toping = '';
        return this
    }

    order() {
        this.ordered = true;
    }

    pay() {
        this.payed = true;
    }

    giveOut() {
        if (this.payed) {
            this.givenOut = true;
        }
    }

    build() {
        return new Pizza(this.baseType, this.ingredient, this.toping)
    };
}
