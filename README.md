# 📘 Projeto BD3 - Estudo de estruturas NoSQL com MongoDB

Este projeto foi desenvolvido como estudo prático sobre a estrutura de dados em um banco NoSQL, utilizando o MongoDB como tecnologia principal. A ideia central foi compreender como documentos JSON-like (BSON) armazenam informações em coleções, além de explorar operações de inserção, consulta, filtro e ordenação em um ambiente de banco de dados não relacional.

O arquivo principal do projeto, [bd3_atv3.mongodb.js](./bd3_atv3.mongodb.js), contém exemplos de criação de banco, estruturação de documentos e consultas realizadas em uma coleção de produtos. O projeto é voltado para fins acadêmicos e didáticos, visando demonstrar a lógica de modelagem e manipulação de dados em MongoDB.

## 🛠️ Objetivo do projeto

O objetivo deste repositório é:

- estudar a estrutura de um banco NoSQL;
- entender o conceito de coleção e documento no MongoDB;
- praticar a inserção de múltiplos registros em uma única operação;
- explorar filtros e buscas condicionais em documentos;
- analisar como ordenar e limitar resultados em consultas;
- comparar a lógica de modelagem de dados em bancos relacional e não relacional.

## 📦 Funcionalidades implementadas

O projeto inclui os seguintes pontos principais:

### 1. Criação do banco de dados

A estrutura inicial do arquivo define o banco `bd3_atv3` com a instrução:

```javascript
const database = 'bd3_atv3';
use(database);
```

Essa linha faz com que o MongoDB utilize o banco de dados especificado, permitindo a criação e manipulação de coleções dentro dele.

### 2. Criação da coleção de produtos

O projeto trabalha com uma coleção denominada `bd3_atv3_produtos`, que armazena registros de produtos de uma loja fictícia. Em bancos NoSQL, uma coleção é equivalente a uma tabela, mas cada documento pode ter uma estrutura independente dos demais.

```javascript
// db.createCollection('bd3_atv3_produtos');
```

Essa etapa demonstra como uma coleção pode ser criada manualmente no MongoDB, mesmo que, em muitos casos, a criação aconteça de forma automática ao inserir documentos.

### 3. Inserção de dados em massa

O arquivo contém uma operação de inserção múltipla com `insertMany`, preenchendo a coleção com diversos exemplos de produtos, como:

- camiseta;
- calça jeans;
- tênis esportivo;
- notebook;
- smartphone;
- cadeira ergonômica;
- mochila escolar;
- entre outros itens de diferentes categorias.

Cada documento possui campos como:

- `Nome do produto`;
- `Valor do Produto`;
- `Quantidade em Estoque de produto`;
- `Fabricante do Produto`;
- `Categoria do Produto`;
- `Descrição do Produto`.

Essa estrutura mostra um dos principais pontos do MongoDB: os documentos podem conter campos em formato textual, numérico e descritivo, sem necessidade de um esquema rígido como em bancos SQL tradicionais.

### 4. Consulta de todos os registros

A coleção pode ser consultada com:

```javascript
db['bd3_atv3_produtos'].find();
```

Esse comando retorna todos os documentos armazenados na coleção, permitindo a visualização do conjunto de dados como um todo.

### 5. Ordenação por valor

O projeto demonstra a ordenação dos produtos por preço.

Exemplos:

```javascript
db['bd3_atv3_produtos'].find().sort({ "Valor do Produto": 1 });
```

Essa consulta ordena os produtos do menor para o maior valor, enquanto:

```javascript
db['bd3_atv3_produtos'].find().sort({ "Valor do Produto": -1 });
```

ordena em ordem decrescente, mostrando o item mais caro primeiro.

Também são aplicados exemplos para pegar o maior e o menor valor individual com `limit(1)` após `sort()`.

### 6. Consulta por faixa de preço

Foi usado um filtro para buscar produtos que se encontram em um intervalo de preço específico:

```javascript
db['bd3_atv3_produtos'].find({
  "Valor do Produto": { $gte: 2000, $lte: 3500 }
});
```

Esse tipo de query é muito útil para cenários como:

- análise de estoque;
- comparação de produtos por faixa de preço;
- filtros em plataformas de e-commerce.

### 7. Filtro por categoria

O projeto também inclui consultas para retornar apenas itens de uma categoria específica:

```javascript
db['bd3_atv3_produtos'].find({
  "Categoria do Produto": "Eletrônicos"
});
```

Além disso, a coleção é consultada por mais de uma categoria ao mesmo tempo com operadores como `$or` e `$in`.

### 8. Exclusão de categorias de resultados

Há exemplos utilizando `$nin` (not in), ou seja, consulta todos os produtos que não pertencem a categorias específicas:

```javascript
db['bd3_atv3_produtos'].find({
  'Categoria do Produto': { $nin: ['Calçados', 'Casa e Cozinha'] }
});
```

Esse comando é útil quando se deseja remover categorias específicas da visualização, como por exemplo mostrar todos os produtos que não sejam calçados ou itens domésticos.

### 9. Ordenação por categoria e preço

Também foram criadas consultas combinando filtro por categoria e ordenação por valor:

```javascript
db['bd3_atv3_produtos'].find({
  'Categoria do Produto': 'Móveis'
}).sort({ "Valor do Produto": -1 });
```

Isso demonstra a possibilidade de montar consultas mais ricas, combinando seleção e organização dos dados.

## 🧱 Estrutura de dados no MongoDB

Uma característica central deste projeto é a modelagem documental. Em vez de usar tabelas com colunas fixas, cada produto é um documento com campos próprios.

Exemplo de documento:

```json
{
  "Nome do produto": "Notebook Ultra Fino",
  "Valor do Produto": 2499.00,
  "Quantidade em Estoque de produto": 25,
  "Fabricante do Produto": "CompuTech",
  "Categoria do Produto": "Informática",
  "Descrição do Produto": "Notebook leve com tela de alta resolução e processador potente."
}
```

Esse formato facilita a manipulação de dados heterogêneos e mostra uma das grandes vantagens do MongoDB em relação a bancos relacionais: flexibilidade estrutural.

## ⚙️ Tecnologias utilizadas

Este projeto utiliza as seguintes tecnologias:

- MongoDB: banco de dados NoSQL orientado a documentos;
- MongoDB Shell (mongosh): ambiente para executar scripts JavaScript diretamente no banco;
- JavaScript: linguagem usada para escrever as operações e consultas;
- BSON: representação binária dos documentos do MongoDB;
- JSON-like documents: estrutura de dados usada para armazenar os registros.

## 🚀 Como executar

Para usar o projeto, siga os passos abaixo:

1. Certifique-se de que o MongoDB está instalado e em execução;
2. Abra o terminal na pasta do projeto;
3. Execute o MongoDB Shell com o comando:

```bash
mongosh
```

4. Dentro do shell, selecione o arquivo JavaScript do projeto:

```javascript
load('bd3_atv3.mongodb.js')
```

5. As consultas e inserções serão executadas no banco `bd3_atv3`.

## 🎯 Conclusão

Este projeto foi utilizado como base para compreender o funcionamento de um banco NoSQL e a forma como os dados são armazenados e consultados no MongoDB. Ao longo da implementação, foi possível observar a diferença entre estruturas rígidas e flexíveis, além de praticar filtros, ordenação e organização de dados em coleções de documentos.

A atividade reforça conceitos importantes de modelagem de dados, estrutura de documentos e uso de bancos NoSQL em aplicações modernas.
