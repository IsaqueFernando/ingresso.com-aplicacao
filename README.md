# Projeto ingresso.com

Aplicação simples feita com o framework `Angular` para consumir a api granvando um ingresso no banco de dados.

# Preparação do Ambiente

## Node JS

### Instalação do NodeJS e NPM
``` shell
sudo apt install nodejs npm
```

### Teste da instalação
``` shell
nodejs -v
npm -v
```

## Angular

### Instalação do Angular
Esse comando deve ser executado na pasta que se encontra o arquivo `package.json`.
``` shell
npm install
npm i @angular/core -s
npm i @angular/router -s
```

### Execução da aplicação
``` shell
ng serve
```
A partir desse momento a aplicação estará disponível no link `http://localhost:4200/`.

## Observações
A aplicação em questão apenas realiza a gravação dos dados no banco de dados, não sendo possível vizualizar os dados por ela. Para visualizar basta executar a aplicação servidor e acessar o link `http://localhost:3000/ingressos` em qualquer navegador.

Pedimos para que os campos sejam inseridos seguindo as recomendações da aplicação. Quanto as datas, solicitamos que sejam inseridos valores para `dia` e `mes` menores que 12, somente para garantir que nenhum erro aconteça durante a execução.

Para baixar o projeto no seu computador pedimos que execute os seguintes passos
``` shell
sudo apt install git
git clone git@github.com:IsaqueFernando/ingresso.com-aplicacao.git
```