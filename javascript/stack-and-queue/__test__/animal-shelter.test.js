'use strict';


const AnimalShelter = require('../animal-shelter/animal-shelter');
const newAnimalShelter = new AnimalShelter();


describe('test AnimalShelter', () => {
    it('add to AnimalShelter', () => {
        const catAnimalShelter = { name: 'kity', kind: 'cat' };
        const dogAnimalShelter = { name: 'huss', kind: 'dog' };
        newAnimalShelter.enqueue(catAnimalShelter);
        expect(newAnimalShelter.length).toEqual(1);
        newAnimalShelter.enqueue(dogAnimalShelter);
        expect(newAnimalShelter.enqueue({ name: 'abc', kind: 'bird'})).toEqual('only cats or dogs are allowed');
    })
    it('enqueue from AnimalShelter', () => {
        newAnimalShelter.enqueue({ name: 'huss', kind: 'dog'});
        expect(newAnimalShelter.dequeue('cat')).toEqual({ name: 'kity', kind: 'cat'})
        newAnimalShelter.dequeue('cat');
        expect(newAnimalShelter.dequeue('cat')).toEqual('empty');
        newAnimalShelter.dequeue('dog');
        newAnimalShelter.dequeue('dog');
        expect(newAnimalShelter.dequeue('dog')).toEqual('empty');
    });
});