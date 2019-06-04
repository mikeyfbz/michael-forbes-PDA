var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('add 1 to 4 and get 5', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 5)
  })

  it('subtract 4 from 7 and get 3', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('multiply 3 by 5 and get 15', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('divide 21 by 7 and get 3', function(){
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    assert.strictEqual(calculator.runningTotal, 123)
  })

  it('can chain multiple operations together', function(){
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 18)
  })

  it('can clear the running total without affecting the calculation', function(){
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(10)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.clearClick()
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 20)
  })

});
