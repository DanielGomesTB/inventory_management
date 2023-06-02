# Inventory Management

## Descrição:
Este repositório contém uma solução para ajudar as lojas a controlar seu estoque e gerenciar seus produtos.

<br />

## Desenvolvido com:

**Front-end:**
- [`React`](https://react.dev/)
- [`Styled-components`](https://styled-components.com/)

**Back-end:**
- [`Node.js`](https://nodejs.org/en)
- [`Express`](https://expressjs.com/)
- [`MySQL`](https://www.mysql.com/)

<br />

## Diagrama Relacional do Banco de Dados:

![Diagrama Relacional](https://github.com/DanielGomesTB/inventory_management/assets/102492818/2f35c6b0-3128-4e37-9ccd-11e8d8126eaf)

<br />

## Como Instalar:
Estas instruções fornecerão a você uma cópia completa do projeto instalado e funcionando em sua máquina local, para fins de testes e desenvolvimento.

> :warning: Se você usa [`Docker`](https://www.docker.com/), pode facilmente criar um container com [`MySQL`](https://www.mysql.com/) para rodar um banco de dados de desenvolvimento para este projeto:
```sh
docker run --name mysql-dev-base -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=inventory -p 3306:3306 -d mysql:8
```

<br />

1. Clone o repositório:
```sh
git clone git@github.com:DanielGomesTB/inventory_management.git
```
2. Entre na pasta do repositório que você acabou de clonar:
```sh
cd inventory_management
```
3. Instale as dependências na raiz do projeto, dentro do front-end e do back-end:
```sh
npm i

cd frontend
npm i

cd ../backend
npm i
```
4. Para rodar o tanto o front quanto o back em modo de desenvolvimento, execute:
```sh
npm run dev
```
5. A aplicação irá rodar nos seguintes endpoints:
- front-end: [127.0.0.1:5173/](http://127.0.0.1:5173/)
- back-end: [127.0.0.1:3001/](http://127.0.0.1:3001/)

6. (opcional) Para rapidamente popular as tabelas com dados fictícios, execute o comando abaixo dentro do diretório do backend:
```sh
npm run db:seed
```
7. (opcional) Para realizar commits padronizados utilize o comando `cz` em vez de `git commit -m`

<br />

## Rotas da API:

Você pode testar a API com softwares como [`Insomnia`](https://insomnia.rest/download), [`Postman`](https://www.postman.com/) ou [`Thunder Client`](https://www.thunderclient.com/).

  - GET: `'/products'`
  > Este _endpoint_ retorna todos os produtos.

<br />

## Demonstração:

<details>
  <summary>
  </summary>
  
  1. #### imagem 1
  [imagem 1]()

</details>

<br />

---

2023 © developed by

<div>

  [**`Daniel Veiga`**](https://github.com/DanielGomesTB)

  <a href = "https://www.linkedin.com/in/dg-veiga/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" />
  </a>
  <a href="mailto:danielgomesveiga@hotmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Hotmail-0077B5?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</div>

<br />

<div>

  [**`Danilo Ribeiro`**](https://github.com/danilobarrosribeiro)

  <a href = "https://www.linkedin.com/in/danilo-de-barros-ribeiro/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" />
  </a>
  <a href="mailto:nilo22@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Gmail-c71610?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</div>

<br />

<div>

  [**`Marcelo Marques`**](https://github.com/marcelo-mls)

  <a href = "https://www.linkedin.com/in/marcelo-mls/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" />
  </a>
  <a href="mailto:marcelo-mls@hotmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Hotmail-0077B5?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</div>
