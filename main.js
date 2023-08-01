const alunosAprovados = ['Maria', 'Joao', 'Marcos', 'Helena', 'Lucas']
const alunosReprovados = ['Henrique', 'Carla', 'Davi', 'Lucia']

const alunosQueForamAprovados = alunosAprovados.map(function(nome) {
    return {
        nome: nome,
        nota: 8
    }
})

const alunosQueForamReprovados = alunosReprovados.map(function(nome) {
    return {
        nome: nome,
        nota: 5
    }
})

const alunos = [...alunosAprovados, ...alunosReprovados, ...alunosQueForamAprovados, ...alunosQueForamReprovados];