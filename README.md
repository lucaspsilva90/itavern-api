# iTavern - Objetivo
* Plataforma para organização de partidas presenciais de RPG
#### Features
* Encontro de jogadores/grupos por proximidade.
* Encontro de jogadores/grupos de acordo com características definidas.
* Portfólio de suas últimas aventuras.

# Stack
* Backend
    * [NodeJs](https://nodejs.org/en/)
    * [Express](https://expressjs.com/pt-br/)
    * [Postgres](https://www.postgresql.org/)
    * [Sequelize](https://sequelize.org/master/)
* Frontend
    * [React Js](https://pt-br.reactjs.org/)
# Instalação
#### Na raiz do projeto rodar o comando:
```bash
$ npm install
```
# Rodando
#### Na raiz do projeto rodar o comando:
```bash
$ npm start
```
# Equipe
* @lucaspsilva90
* @AndradeMatheus
* @derickbenites
* @JosePaes
* @lmioki
# DOCUMENTAÇÃO
## Rota de Usuários
### CRIAR
* ROTA: [https://itavern-api.herokuapp.com/users](https://itavern-api.herokuapp.com/users)
* MÉTODO HTTP: **POST**
* PAYLOAD: 
```json
{
	"name": "STRING",
	"address": "STRING",
	"birthdate": "STRING: YYYY-MM-DD",
	"email": "STRING",
	"password":"STRING",
	"nickname":"STRING",
	"address_code": "STRING",
	"complement": "STRING",
	"district": "STRING",
	"city": "STRING",
	"state": "STRING"
}
```
* RETORNO EXEMPLO:

```json
  {
    "id": 2,
    "user_type": 1,
    "name": "Iriss",
    "birthdate": "1990-03-31",
    "email": "asdsdsdasds@hotmail.com",
    "nickname": "izima",
    "img_url": "../img/imagemPadrao.jpeg",
    "user_activated": false,
    "address_code": 4822102,
    "address": "Rua Jablauski",
    "number": "13",
    "complement": "casa rosa",
    "district": "São Paulo",
    "city": "São Paulo",
    "state": "SP",
    "createdAt": "2021-04-24T15:50:14.574Z",
    "updatedAt": "2021-04-24T15:50:14.574Z"
  }
```
### LISTAR
* ROTA: [https://itavern-api.herokuapp.com/users](https://itavern-api.herokuapp.com/users)
* MÉTODO HTTP: **GET**
* RETORNO EXEMPLO: 
```json
[
  {
    "id": 1,
    "user_type": 1,
    "name": "Iriss",
    "birthdate": "1990-03-31",
    "email": "asdsdsdasd@hotmail.com",
    "nickname": "izima",
    "img_url": "../img/imagemPadrao.jpeg",
    "user_activated": false,
    "address_code": 4822102,
    "address": "Rua Jablauski",
    "number": null,
    "complement": "casa rosa",
    "district": "São Paulo",
    "city": "São Paulo",
    "state": "SP",
    "createdAt": "2021-04-24T15:49:39.482Z",
    "updatedAt": "2021-04-24T15:49:39.482Z"
  },
  {
    "id": 2,
    "user_type": 1,
    "name": "Iriss",
    "birthdate": "1990-03-31",
    "email": "asdsdsdasds@hotmail.com",
    "nickname": "izima",
    "img_url": "../img/imagemPadrao.jpeg",
    "user_activated": false,
    "address_code": 4822102,
    "address": "Rua Jablauski",
    "number": "13",
    "complement": "casa rosa",
    "district": "São Paulo",
    "city": "São Paulo",
    "state": "SP",
    "createdAt": "2021-04-24T15:50:14.574Z",
    "updatedAt": "2021-04-24T15:50:14.574Z"
  }
]
```
### UPDATE POR ID
* ROTA: [https://itavern-api.herokuapp.com/users/id](https://itavern-api.herokuapp.com/users)
* PARÂMETRO: id
* MÉTODO HTTP: **PUT**
* PAYLOAD:
```json
{
	"name": "STRING"
}
```
* RETORNO EXEMPLO:
```json
{
  "message": "O usuário de id: 2 teve as seguintes alterações:",
  "changes": {
    "user_activated": 1
  }
}
```
### BUSCA POR PARÂMETROS
* ROTA: [https://itavern-api.herokuapp.com/users/search?email=asdsdsdas](https://itavern-api.herokuapp.com/users)
* ROTA: [https://itavern-api.herokuapp.com/users/search?nickname=izima](https://itavern-api.herokuapp.com/users)
* PARÂMETROS: email ou nickname
* MÉTODO HTTP: **GET**
* RETORNO EXEMPLO: 
```json
  {
    "id": 2,
    "user_type": 1,
    "name": "Iriss",
    "birthdate": "1990-03-31",
    "email": "asdsdsdasds@hotmail.com",
    "password": "$2b$12$GUrCW/KNrK8h18V.dk7lcex9eKN79bP23M8soP.4RhkaIUw8ZrSZW",
    "nickname": "izima",
    "img_url": "../img/imagemPadrao.jpeg",
    "user_activated": true,
    "address_code": 4822102,
    "address": "Rua Jablauski",
    "number": "13",
    "complement": "casa rosa",
    "district": "São Paulo",
    "city": "São Paulo",
    "state": "SP",
    "createdAt": "2021-04-24T15:50:14.574Z",
    "updatedAt": "2021-04-24T16:07:19.788Z"
  }
```
### DELETAR
* ROTA: [https://itavern-api.herokuapp.com/users/id](https://itavern-api.herokuapp.com/users)
* PARÂMETRO: id
* MÉTODO HTTP: **DELETE**
* RETORNO: 
```json
{
  "id": 4,
  "user_type": 1,
  "name": "Iriss",
  "birthdate": "1990-03-31",
  "email": "asdsdsdasd@hotmail.com",
  "password": "$2b$12$Ybs2kI16JcEITgynEkjN4.vU6/IKnU1S28Aq0UKY2KBNzWw.5OBhK",
  "nickname": "izima",
  "img_url": "../img/imagemPadrao.jpeg",
  "user_activated": false,
  "address_code": 4822102,
  "address": "Rua Jablauski",
  "number": null,
  "complement": "casa rosa",
  "district": "São Paulo",
  "city": "São Paulo",
  "state": "SP",
  "createdAt": "2021-04-24T15:40:55.212Z",
  "updatedAt": "2021-04-24T15:40:55.212Z"
}
```
## Rota de Jogos
### CRIAR
* ROTA: [https://itavern-api.herokuapp.com/games](https://itavern-api.herokuapp.com/games)
* MÉTODO HTTP: **POST**
* PAYLOAD: 
```json
{
	"name":"Dungeons & Dragons"
}
```
* RETORNO EXEMPLO: 

```json
{
  "id": 1,
  "name": "Dungeons & Dragons",
  "updatedAt": "2021-04-24T16:15:41.967Z",
  "createdAt": "2021-04-24T16:15:41.967Z"
}
```
### LISTAR
* ROTA: [https://itavern-api.herokuapp.com/games](https://itavern-api.herokuapp.com/games)
* MÉTODO HTTP: **GET**
* RETORNO EXEMPLO:
```json
[
  {
    "id": 1,
    "name": "Dungeons & Dragons"
  }
]
```
### UPDATE POR ID
* ROTA: [https://itavern-api.herokuapp.com/games/id](https://itavern-api.herokuapp.com/games/id)
* MÉTODO HTTP: **PUT**
* PARÂMETRO: id
* PAYLOAD:
```json
{
	"name":"STRING"
}
```
* RETORNO: 
```json
{
  "message": "O jogo de id 2 teve as seguintes mudanças: ",
  "changes": {
    "name": "Dungeons & Trab"
  }
}
```
### DELETAR
* ROTA: [https://itavern-api.herokuapp.com/games/id](https://itavern-api.herokuapp.com/games/id)
* MÉTODO HTTP: **PUT**
* PARÂMETRO: id
* RETORNO EXEMPLO: 
```json
{
  "message": "O jogo de id 1 e nome Dungeons & Dragons foi deletado com sucesso."
}
```
## Rota de Grupos
### CRIAR
* ROTA: [https://itavern-api.herokuapp.com/group](https://itavern-api.herokuapp.com/group)
* MÉTODO HTTP: **POST**
* PAYLOAD:
```json
{
	"owner_user": "NUMBER",
	"master_id": "NUMBER",
	"name": "STRING",
	"game_id": "NUMBER",
	"max_players": "NUMBER MIN: 2, MAX: 15" ,
	"chat_integration": "JSON"
}
```
* RETORNO EXEMPLO:
```json
{
  "message": "O grupo Jablauzeiros foi criado com sucesso."
}
```
### LISTAR
* ROTA: [https://itavern-api.herokuapp.com/group](https://itavern-api.herokuapp.com/group)
* MÉTODO HTTP: **GET**
* RETORNO EXEMPLO: 
```json
[
  {
    "id": 2,
    "owner_user": 1,
    "master_id": 1,
    "name": "Jablauzeiros",
    "max_players": 5,
    "chat_integration": {},
    "createdAt": "2021-04-24T16:42:18.703Z",
    "Game": {
      "name": "Dungeons & Trab"
    },
    "Users": [
      {
        "id": 1,
        "name": "Iriss",
        "nickname": "izima",
        "img_url": "../img/imagemPadrao.jpeg",
        "userGroup": {
          "userId": 1,
          "groupId": 2,
          "status": "active",
          "createdAt": "2021-04-24T16:42:18.710Z",
          "updatedAt": "2021-04-24T16:42:18.710Z"
        }
      }
    ]
  }
]
```
### UPDATE POR ID
* ROTA: [https://itavern-api.herokuapp.com/group/id](https://itavern-api.herokuapp.com/group/id)
* MÉTODO HTTP: **GET**
* PAYLOAD:
```json
{
	"max_players": 5,
	"name": "jasdsd"
}
```
* RETORNO EXEMPLO:
```json
{
  "message": "O grupo de id: 2 teve as seguintes alterações:",
  "changes": {
    "max_players": 5,
    "name": "jasdsd"
  }
}
```
### BUSCA POR PARÂMETRO
* FALTA IMPLEMENTAÇÃO
### ENTRAR NO GRUPO
* ROTA: [https://itavern-api.herokuapp.com/group/join](https://itavern-api.herokuapp.com/group/join)
* MÉTODO HTTP: **POST**
* PAYLOAD:
```json
{
	"userId": "NUMBER",
	"groupId": "NUMBER",
}
```
* RETORNO EXEMPLO:
```json
{
  "message": "O usuario STRING foi adicionado com sucesso."
}
```
### SAIR DO GRUPO
* FALTA IMPLEMENTAÇÃO
### DELETE
* ROTA: [https://itavern-api.herokuapp.com/group/id](https://itavern-api.herokuapp.com/group/id)
* MÉTODO HTTP: **DELETE**
* RETORNO EXEMPLO:
```json
{
  "id": 2,
  "owner_user": 1,
  "master_id": 1,
  "name": "jasdsd",
  "game_id": 2,
  "max_players": 5,
  "chat_integration": {},
  "createdAt": "2021-04-24T16:42:18.703Z",
  "updatedAt": "2021-04-24T16:47:54.122Z"
}
```
## Rota de Encontros
* Falta implementação