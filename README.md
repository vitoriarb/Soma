# Tcc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Projeto Soma.

O projeto se consiste em ser um gerenciador de produtos, metas, finanças do microenpreendedor individual, o usuário poderá cadastrar produtos, suas finanças despesas e receita, metas/objetivos, e também poderá preencher seu perfil com dados pessoais e da empresa.


## Baixar dependências do projeto.

Rodar o comando `npm install` irá baixar todas as dependências do projeto.

## Rodando aplicação.

Como mencionado mais acima, ao rodar o comando `ng serve` no terminal na pasta do projeto, o mesmo irá rodar em localhost `http://localhost:4200/`.

## Rodando o db.

A aplicação funciona com uma "fake API" para simular o CRUD de uma banco. Basta rodar o comando `json-server --watch metas.json` no terminal aonde consta o arquivo metas.json, src/app/db/metas.json , vai rodar em localhost `http://localhost:3000`.
