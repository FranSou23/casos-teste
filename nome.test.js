//require do arquivo
const ValidarNome = require("./nome")

//criar o caso de test
test('Validação de nome com letras',()=>{
    expect(ValidarNome("João")).toBe(true)
})

test('Validação de nome com letras e numeros',()=>{
    expect(ValidarNome("João1")).toBe(false)
})