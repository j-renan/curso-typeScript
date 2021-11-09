//string
let nome: string = 'Renan'
console.log(nome)
//nome = 43
// mesmo sem declarar o tipo da variavel, ao inicia-la como string 
//ela recebe o tipo implicitamente, por isso não é possível mudar seu tipo

//numbers
let idade: number = 27
// idade = 'Ana'
idade = 34.7
console.log(idade)

//boolean
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
//minhaIdade = '27'
//console.log(typeof minhaIdade)

// array
let hobbies: any[] = ['Cozinhar', 'Praticar esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300, 400]
// hobbies = 100
console.log(hobbies)

// tuplas
// em TS as tuplas são arrays com um tipo de dado específico e pré definido
let endereco: [string, number, string] = ['Av Principal', 99, 'Centro']
console.log(endereco)

endereco = ['Rua dos bobos', 0, 'bloco B']
console.log(endereco)

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 10, // 2
    Laranja,
    Amarelo,
    Vermelho = 100 
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }