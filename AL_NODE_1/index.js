const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // necessário para ler JSON no body

let minhas_notas = [20, 10, 15, 17];

// a. devolve todas as notas
app.get('/', (req, res) => {
  res.status(200).json(minhas_notas);
});

// b. devolve a nota na posição (parametro)
app.get('/:posicao', (req, res) => {
  const pos = parseInt(req.params.posicao);
  if (isNaN(pos) || pos < 0 || pos >= minhas_notas.length) {
    return res.status(400).json({ erro: 'Posição inválida' });
  }
  res.status(200).json(minhas_notas[pos]);
});

// c. adiciona uma nota do body
app.post('/', (req, res) => {
  let nota = parseInt(req.body.nota);
  if (isNaN(nota)) {
    return res.status(400).json({ erro: 'Nota inválida' });
  }
  minhas_notas.push(nota);
  res.status(200).json({ mensagem: 'Nota adicionada com sucesso', notas: minhas_notas });
});

// d.adiciona uma nota mas passada na URL
app.post('/adicionar/:nota', (req, res) => {
  let nota = parseInt(req.params.nota);
  if (isNaN(nota)) {
    return res.status(400).json({ erro: 'Nota inválida!' });
  }
  minhas_notas.push(nota);
  res.status(200).json({ mensagem: 'Nota adicionada com sucesso através de parâmetro', notas: minhas_notas });
});

// e. aualiza a nota na posição
app.patch('/atualizar/:posicao', (req, res) => {
  const pos = parseInt(req.params.posicao);
  const novaNota = parseInt(req.body.nota);

  if (isNaN(pos) || pos < 0 || pos >= minhas_notas.length || isNaN(novaNota)) {
    return res.status(400).json({ erro: 'Parâmetro inválido' });
  }

  minhas_notas[pos] = novaNota;
  res.status(200).json({ mensagem: 'Nota atualizada com sucesso', notas: minhas_notas });
});

// f. apaga uma nota específica
app.delete('/apagar/:posicao', (req, res) => {
  const pos = parseInt(req.params.posicao);

  if (isNaN(pos) || pos < 0 || pos >= minhas_notas.length) {
    return res.status(400).json({ erro: 'Posição inválida!' });
  }

  minhas_notas.splice(pos, 1);
  res.status(200).json({ mensagem: 'Nota apagada com sucesso', notas: minhas_notas });
});

// g. apaga tudo
app.delete('/', (req, res) => {
  minhas_notas = [];
  res.status(200).json({ mensagem: 'Todas as notas foram apagadas' });
});

// inicalizar sv
app.listen(port, () => {
  console.log('Notas- feito por Bruno Correia e Alexandre Santos at http://localhost:' + port);
});



/* TESTAR na extensão

Método	URL	                                  Body	           Ação
GET	    http://localhost:3000/          		                Mostra todas as notas
GET	    http://localhost:3000/2		                          Mostra nota da posição 2
POST  	http://localhost:3000/	        { "nota": 18 }      Adiciona nota pelo body
POST	  http://localhost:3000/adicionar/19	    	          Adiciona nota pelo URL
PATCH	  http://localhost:3000/atualizar/1	  { "nota": 20 }	Atualiza nota da posição 1
DELETE	http://localhost:3000/apagar/0	                  	Apaga a nota na posição 0
DELETE	http://localhost:3000/		                          Apaga todas as notas */