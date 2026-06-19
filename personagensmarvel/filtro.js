const herois = require("./personagemmarvel.json");

function filtrarApartamentoSemComplementos(heroi){
    return herois.filter((heroi) => {
         return(
           heroi.endereco.apartamento && !heroi.endereco.hasOwnProperty("complemento")
         );
    });
}

const filtrados = filtrarApartamentoSemComplementos(herois);

console.log(filtrados);