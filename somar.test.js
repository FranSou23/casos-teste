//somar.test.js
const somar = require("./somar")

test('somar 1 + 2 é igual a 3', ()=>{
    expect(somar(1,2)).toBe(3)
})
