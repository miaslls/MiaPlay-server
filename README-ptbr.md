Essa página está em <img src="assets/img/flag-pt-br.png" width="14" alt="Português"> Português.
To view this page in <img src="assets/img/flag-en.png" width="14" alt="English"> English, [click here](./README.md).

---

# <img src="assets/img/server.png" width="20" alt="Server icon"> MiaPlay (server)

![Static Badge: Study](https://img.shields.io/badge/study-blue)
![Static Badge: Version - 1.0.0](https://img.shields.io/badge/version-1.0.0-green)
![Static Badge: Node.js](https://img.shields.io/badge/Node.js-5a5a5a?logo=nodedotjs)
![Static Badge: Express](https://img.shields.io/badge/Express-5a5a5a?logo=express)
![Static Badge: Mongoose](https://img.shields.io/badge/Mongoose-5a5a5a?logo=mongoose)
![Static Badge: MongoDB](https://img.shields.io/badge/MongoDB-5a5a5a?logo=mongodb)

## 🌐 Referência da API

### 🎭 Genres

#### Create genre

```http
POST /genres
```

#### Get all genres

```http
GET /genres
```

#### Get genre

```http
GET /genres/${id}
```

#### Update genre

```http
PATCH /genres/${id}
```

#### Remove genre

```http
DELETE /genres/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of genre to fetch |

### 🎲 Games

#### Create game

```http
POST /games
```

#### Get all games

```http
GET /games
```

#### Get game

```http
GET /games/${id}
```

#### Update game

```http
PATCH /games/${id}
```

#### Remove game

```http
DELETE /games/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of game to fetch |

### 📃 Genre Game Lists

#### Get all genre-game-lists

```http
GET /genre-game-lists
```

## ⚙️ Instalação

Clone the project

```bash
> git clone https://github.com/miaslls/MiaPlay-server.git
```

Go to the project directory

```bash
> cd MiaPlay-server
```

Install dependencies

```bash
> npm install
```

Run the project

```bash
> npm run start
```

## 👩‍💻 Autoria

- [@miaslls](https://www.github.com/miaslls)

## 📑 Projetos Relacionados

- [MiaPlay](https://github.com/miaslls/MiaPlay#readme)

## 🫶 Recursos / Agradecimentos

- [flaticon](https://flaticon.com)
