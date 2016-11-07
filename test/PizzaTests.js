import { expect, assert }from 'chai'
import { Pizza } from '../src/Pizza'

suite('When in pizzeria', function() {
    suite('Client orders pizza', function() {
        test('and pizza is ordered', function() {
            let pizza = new Pizza();

            pizza.order();

            expect(pizza.ordered).to.be.true;
        });
        test('with thin base and gets pizza with thin base', function() {
            let pizza =
                new Pizza()
                    .withBase('thin')
                    .build();

            pizza.order();

            expect(pizza.baseType).to.equal('thin');
        });
        test('with chicken and gets pizza with thin chicken', function() {
            let pizza =
                new Pizza()
                .withIngredient('chicken')
                .build();

            pizza.order();

            expect(pizza.ingredient).to.equal('chicken');
        });
        test('without olives and gets pizza without olives', function() {
            let pizza =
                new Pizza()
                    .withoutToping('olives')
                    .build();

            pizza.order();

            expect(pizza.toping).not.to.equal('olives');
        });
        suite('and pays for his pizza', function() {
            test('pizza is payed for', function() {
                let pizza = new Pizza();
                pizza.order();

                pizza.pay();

                expect(pizza.payed).to.be.true;
            });
            test('payed pizza is given out', function() {
                let pizza = new Pizza();
                pizza.order();
                pizza.pay();

                pizza.giveOut();

                expect(pizza.givenOut).to.be.true;
            });
            test('pizza is NOT given out if NOT payed for', function() {
                let pizza = new Pizza();
                pizza.order();

                pizza.giveOut();

                expect(pizza.givenOut).to.be.false;
            });

        });
    });
});