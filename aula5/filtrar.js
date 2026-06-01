const clientes = require("./cliente.json");

function filtrarApartamentoSemComplementos(clientes){
    return clientes.filter((cliente) => {
         return(
           cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
         );
    });
}

const filtrados = filtrarApartamentoSemComplementos(clientes);

console.log(filtrados);