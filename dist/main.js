"use strict";

var alunosAprovados = [];
var alunosReprovados = [];
alunosAprovados.push({
  nome: 'Marcos',
  nota: 6
});
alunosAprovados.push({
  nome: 'Felipe',
  nota: 9
});
alunosAprovados.push({
  nome: 'Maria',
  nota: 10
});
alunosAprovados.push({
  nome: 'Bia',
  nota: 6
});
alunosAprovados.push({
  nome: 'André',
  nota: 8
});
alunosReprovados.push({
  nome: 'Lucas',
  nota: 4
});
alunosReprovados.push({
  nome: 'Eva',
  nota: 3
});
alunosReprovados.push({
  nome: 'Henrique',
  nota: 5
});
alunosReprovados.push({
  nome: 'José',
  nota: 5
});
var alunos = [].concat(alunosAprovados, alunosReprovados);
function filtraAlunosAprovados(aluno) {
  return aluno.nota >= 6;
}
var alunosQueForamAprovados = alunos.filter(filtraAlunosAprovados);
console.log(alunosQueForamAprovados);