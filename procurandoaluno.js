const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedia =[alunos, media];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedia[0].includes(aluno)){
       console.log('${aluno} esta cadastrado');

        const indice = listaDeAlunosEMedia[0].indexOf(aluno);

        const mediaDoAluno = listaDeAlunosEMedia[1][indice];

        console.log('${aluno} tem a media $(mediaDoAluno).');

    }else {
        console.log("Aluno não esta cadastrado")
    }
}

