const mark = require ('../index')

test('testing if the mark is a number', ()=>{
    // expect(typeof(mark.marks)).toBe ('number')
    expect(mark.isValidate()).toBe (true)
  
})

test('testing if the mark is A', ()=>{
    expect(mark.computeScore()).toBe ("A")
})


