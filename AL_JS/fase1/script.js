//**var** 

var nome = "João";
console.log(nome);

nome = "Maria";
console.log(nome);

// **let**

let idade = 20;
console.log(idade);

idade = 21;
console.log(idade);

// **const**

const PI = 3.14;
console.log(PI);

// **Tipos de Dados**

// **String**

let frase= "Olá, mundo!";
console.log(typeof frase);

// Number
let numero = 10;
console.log(typeof numero);

// Boolean
let verdadeiro = true;
console.log(typeof verdadeiro)

// Array
let lista = ["banana", "maçã", "laranja"];
console.log(typeof lista);

// Object
let pessoa = { nome: "João", idade: 20 };
console.log(typeof pessoa);

// Null
let nulo = null;
console.log(typeof nulo);

// Undefined
let indefenido;
console.log(typeof indefenido);

let nacionalidade = "Portuguesa";
console.log(nacionalidade);
console.log(typeof nacionalidade);

//const PI = 3.14;
//console.log(PI);

//let array = [1, 2, 3, 4, 5];
let array = [
      10,                   // Número
      "Olá, mundo!",        // String
      true,                 // Booleano
      { nome: "João" },     // Objeto
      [1, 2, 3],            // Array
      null,                 // Null
      undefined,            // Undefined
  ];
console.log(array);
array.forEach(elemento => {
      console.log(elemento);
  });

  let pessoa1 = {
      nome: "João",
      idade: 20,
      nacionalidade: "Portuguesa",
  };
  console.log(pessoa1);
      console.log("Nome:", pessoa1.nome);
      console.log("Idade:", pessoa1.idade);
      console.log("Nacionalidade:", pessoa1.nacionalidade);