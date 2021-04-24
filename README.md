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
### LISTAR
* ROTA: [https://itavern-api.herokuapp.com/users](https://itavern-api.herokuapp.com/users)
* MÉTODO HTTP: **GET**
* PAYLOAD: 
```json
{
	"user_activated": 1,
	"name": "Iriss",
	"address":"Rua Jablauski",
	"birthdate": "1990-03-31",
	"email": "jabalau@hotmail.com",
	"password":"teste",
	"nickname":"izima",
	"address_code": "04822102",
	"complement": "casa rosa",
	"district": "São Paulo",
	"city": "São Paulo",
	"state": "SP"
}
```

### CRIAR
### DELETAR
### UPDATE POR ID
### BUSCA POR PARÂMETROS