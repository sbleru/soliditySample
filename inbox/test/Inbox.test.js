const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // uppercase because constructor function
const web3 = new Web3(ganache.provider());

class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

let car;

// setup
beforeEach(() => {
    car = new Car();
});

// grouping 'it' functions
describe('Car', () => {
    // run a test and make an assertion
    it('can park', () => {
        assert.equal(car.park(), 'stopped');
    });
    it('can drive', () => {
        assert.equal(car.drive(), 'vroom');
    });
});