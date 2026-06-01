const pessoa = {
    nome: "Luma",
    profissao: "Engenharia"
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "42 222333444";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log (pessoa);

const novaPessoa = {
    nome: "Pedro",
}

pessoa = novaPessoa;