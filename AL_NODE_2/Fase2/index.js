async function carregarDadosClientes() { //async e await para apenas
  const resposta = await fetch('http://localhost:3000/cliente'); // vai buscar os dados da API
  const clientes = await resposta.json(); //converte para json

  const dadosDiv = document.getElementById('dadosCliente');
  dadosDiv.innerHTML = ''; // limpar antes de carregar

  clientes.forEach(cliente => { //para cada cliente
    const clienteHTML = `
      <div class="cliente">
        <p><strong>ID Cliente:</strong> ${cliente.clienteId}</p>
        <p><strong>Nome:</strong> ${cliente.nome}</p>
        <p><strong>Endereço:</strong> ${cliente.endereco.rua}, ${cliente.endereco.numero}, ${cliente.endereco.cidade}, ${cliente.endereco.codigoPostal}</p>
        <p><strong>Consumo em ${cliente.consumo[0].mes}:</strong> ${cliente.consumo[0].kWhConsumido} kWh - ${cliente.consumo[0].custoTotal}€</p>
        <p><strong>Data de Leitura:</strong> ${cliente.consumo[0].dataLeitura}</p>
        <p><strong>Tipo de Tarifa:</strong> ${cliente.informacoesAdicionais.tipoTarifa}</p>
        <p><strong>Fornecedor:</strong> ${cliente.informacoesAdicionais.fornecedorEnergia}</p>
        <p><strong>Contrato Ativo:</strong> ${cliente.informacoesAdicionais.contratoAtivo}</p>
      </div>
      <hr>
    `;
    dadosDiv.innerHTML += clienteHTML;  //mete no html
  });
}

carregarDadosClientes(); //chama a funcao
