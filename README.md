# Poções & Soluções

Aplicação web desenvolvida para a disciplina **SCC0219 - Introdução ao Desenvolvimento Web (ICMC/USP)**.

O sistema simula a loja fictícia **Poções & Soluções**, fundada pela alquimista Annabelle Merigold em 1867. A aplicação é composta por uma vitrine para visualização das poções disponíveis e um painel administrativo para gerenciamento do catálogo.

---

## Visão Geral

O projeto foi dividido em duas partes:

- **Backend:** API REST responsável pelo gerenciamento das poções.
- **Frontend:** interface da loja e painel administrativo.

A comunicação entre as duas camadas é realizada por meio de requisições HTTP utilizando a Fetch API.

---

## Organização do Projeto

```text
backend/
│
├── src/
│   ├── database.js
│   ├── Pocao.js  
│   ├── routes/
│   ├── seed.js
│   └── server.js
│
├── package.json
└── package-lock.json


frontend/
│
├── css/
│   ├── style.css
│   └── admin.css
│
├── images/
|
├── js/
│   ├── admin.js
│   ├── api.js
│   └── home.js
|
├── admin.html
└── index.html
```

---

## Tecnologias Utilizadas

### Backend

- Node.js
- Express
- Sequelize
- SQLite

### Frontend

- HTML5
- CSS3
- JavaScript
- Fetch API

---

## Instalação

Entre na pasta do backend e instale as dependências:

```bash
cd backend
npm install
```

---

## Execução

Inicie o servidor com:

```bash
npm run dev
```

ou

```bash
node src/server.js
```

Após a inicialização, a API ficará disponível em:

```text
http://localhost:3000
```

---

## Banco de Dados

O sistema utiliza SQLite através do Sequelize.

Durante a inicialização:

1. A conexão com o banco é estabelecida.
2. O modelo de poções é sincronizado.
3. Os dados iniciais são inseridos automaticamente.

As poções fornecidas pelo enunciado são carregadas automaticamente para facilitar os testes da aplicação.

---

## Endpoints Disponíveis

### Listar todas as poções

```http
GET /pocoes
```

Retorna todas as poções cadastradas.

---

### Adicionar uma nova poção

```http
POST /pocoes
```

Exemplo de corpo da requisição:

```json
{
  "nome": "Poção da Sabedoria",
  "descricao": "Aumenta temporariamente a capacidade intelectual.",
  "imagem": "https://exemplo.com/imagem.png",
  "preco": 250
}
```

---

### Remover uma poção

```http
DELETE /pocoes/:id
```

Exemplo:

```http
DELETE /pocoes/5
```

---

## Funcionalidades

### Loja Virtual

- Exibição dinâmica das poções cadastradas.
- Seção de apresentação da loja.
- Seção histórica com imagens e descrições.
- Navegação por barra superior.
- Rolagem suave entre seções.
- Layout responsivo para diferentes tamanhos de tela.

### Painel Administrativo

- Cadastro de novas poções.
- Remoção de poções existentes.
- Atualização automática da listagem após alterações.
- Validação para impedir preços negativos.
- Navegação de retorno para a página principal.

---

## Interface

A identidade visual foi inspirada em uma loja de alquimia do século XIX, utilizando:

- Tema escuro.
- Tons dourados para destaque.
- Fonte Gill Sans.
- Imagens temáticas relacionadas à alquimia e fantasia.
- Componentes responsivos para dispositivos móveis.

---

## Como Utilizar

1. Inicie o backend.
2. Abra `index.html` para acessar a vitrine da loja.
3. Utilize o botão **Administração** para acessar o painel administrativo.
4. Cadastre ou remova poções pelo painel.
5. As alterações serão refletidas automaticamente na página principal.

---

## Autor

Pedro Rocha Dantas

Instituto de Ciências Matemáticas e de Computação (ICMC)  
Universidade de São Paulo (USP)

Disciplina: SCC0219 – Introdução ao Desenvolvimento Web