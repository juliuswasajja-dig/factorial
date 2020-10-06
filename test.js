const assert = require('assert');
const factorial = require('./fa');


describe ('factorial', ()=>{
    
    it('factorial of 3 is 6', () =>{
        assert.equal(6, factorial(3));
   
})
it('factorial of 1 is 1', () =>{
    assert.equal(1, factorial(1)); 

})
it('factorial of 0 is 1', () =>{
    assert.equal(15, factorial(0)); 

})
it('factorial of 5 is 120', () =>{
    assert.equal(120, factorial(5)); 

})
})
