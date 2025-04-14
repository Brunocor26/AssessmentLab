const express = require('express');
const cors = require('cors');  //serve para permitir que o browser aceite pedidos entre as ports diferentes
const app = express();
const PORT = 3000;

app.use(cors());

//dados do cliente
const cliente1 = {
  clienteId: "12345",
  nome: "João Silva",
  endereco: {
    rua: "Rua Exemplo",
    numero: "42",
    cidade: "Lisboa",
    codigoPostal: "1234-567"
  },
  consumo: [
    {
      mes: "Janeiro",
      ano: 2023,
      kWhConsumido: 250,
      custoTotal: 35.50,
      dataLeitura: "2023-01-31"
    }
  ],
  informacoesAdicionais: {
    tipoTarifa: "Residencial",
    fornecedorEnergia: "Empresa XYZ",
    contratoAtivo: true
  }
};

const cliente2 = {
  clienteId: "11113",
  nome: "Alexandre Pedro",
  endereco: {
    rua: "Rua das Flores",
    numero: "12",
    cidade: "Covilhã",
    codigoPostal: "6234-567"
  },
  consumo: [
    {
      mes: "Janeiro",
      ano: 2023,
      kWhConsumido: 270,
      custoTotal: 39.50,
      dataLeitura: "2023-01-31"
    }
  ],
  informacoesAdicionais: {
    tipoTarifa: "Residencial",
    fornecedorEnergia: "EDP",
    contratoAtivo: true
  }
};

const clientes = [cliente1, cliente2]; //lista com os 2 clientes

//deolver os dados
app.get('/cliente', (req, res) => {
  res.json(clientes);
});

app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
