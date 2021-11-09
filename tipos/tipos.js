"use strict";
//string
var nome = 'Renan';
console.log(nome);
//nome = 43
// mesmo sem declarar o tipo da variavel, ao inicia-la como string 
//ela recebe o tipo implicitamente, por isso não é possível mudar seu tipo
//numbers
var idade = 27;
// idade = 'Ana'
idade = 34.7;
console.log(idade);
//boolean
var possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
// tipos explicitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = '27'
//console.log(typeof minhaIdade)
// array
var hobbies = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300, 400];
// hobbies = 100
console.log(hobbies);
// tuplas
// em TS as tuplas são arrays com um tipo de dado específico e pré definido
var endereco = ['Av Principal', 99, 'Centro'];
console.log(endereco);
endereco = ['Rua dos bobos', 0, 'bloco B'];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
