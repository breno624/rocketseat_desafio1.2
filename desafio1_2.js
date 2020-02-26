// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.
//Os dados a serem armazenados são: nome, cor foco e endereco



const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    Foco: 'Programacao',
    endereco: {
        rua: 'Guilherme Gembala',
        numero: 260
    }
}
// imprima em tela utilizando console.log (usando template strings)

console.log(`A empresa ${empresa.nome} esta localizada em rua ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

const programador = {
    nome: 'Breno',
    idade: 22,
    tecnologias: [
 {nome: 'C++', especialidade: 'Desktop'},
 {nome: 'Python', especialidade: 'Data Science'},
 {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
};

console.log(`O usuario ${programador.nome} tem ${programador.idade} 
e usa a tecnologia ${programador.tecnologias[0].nome} 
com especialidade em ${programador.tecnologias[0].especialidade}`)