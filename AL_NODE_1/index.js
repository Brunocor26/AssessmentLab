const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // necessário para ler JSON no body

let minhas_notas = [20, 10, 15, 17];

// a. devolve todas as notas
app.get('/', (req, res) => {
  res.status(200).json(minhas_notas);  //status 200-> bem sucedido
});

// b. devolve a nota na posição (parametro)
app.get('/:posicao', (req, res) => {
  const pos = parseInt(req.params.posicao); //vai buscar a posiçao ao request e guarda no pos
  if (isNaN(pos) || pos < 0 || pos >= minhas_notas.length) {
    return res.status(400).json({ erro: 'Posição inválida' }); //status 400-> erro se a posicao nao é valida (maior do que o tamanho ou nao é um numero)
  }
  res.status(200).json(minhas_notas[pos]); //da a resposta como json (da nota na posicao pedida)
});

// c. adiciona uma nota do body
app.post('/', (req, res) => {
  let nota = parseInt(req.body.nota);  //tenta ir buscar a nota ao corpo da request e converte para int | usamos o body porque é passado por json
  if (isNaN(nota)) { //se nao é numero
    return res.status(400).json({ erro: 'Nota inválida' });
  }
  minhas_notas.push(nota);
  res.status(200).json({ mensagem: 'Nota adicionada com sucesso', notas: minhas_notas });
});

// d.adiciona uma nota mas passada pelo URL
app.post('/adicionar/:nota', (req, res) => {  //:nota é parametro de rota
  let nota = parseInt(req.params.nota); //req.params porque o que queremos ir buscar faz parte do caminho
  if (isNaN(nota)) {
    return res.status(400).json({ erro: 'Nota inválida!' });
  }
  minhas_notas.push(nota); //push na lsita
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

  minhas_notas.splice(pos, 1); //splice remove n elementos(neste caso 1) a partir da posicao pos
  res.status(200).json({ mensagem: 'Nota apagada com sucesso', notas: minhas_notas });
});

// g. apaga tudo
app.delete('/', (req, res) => {
  minhas_notas = []; //passa a ser vazio
  res.status(200).json({ mensagem: 'Todas as notas foram apagadas' });
});

// inicalizar sv
app.listen(port, () => {
  console.log('Notas- feito por Bruno Correia e Alexandre Santos em http://localhost:' + port);
});
