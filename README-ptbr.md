Essa página está em <img src="assets/img/flag-pt-br.png" width="14" alt="Português"> Português.
To view this page in <img src="assets/img/flag-en.png" width="14" alt="English"> English, [click here](./README.md).

---

# <img src="assets/img/server.png" width="20" alt="Server icon"> MiaPlay (server)

![Static Badge: Study](https://img.shields.io/badge/study-blue)
![Static Badge: Version - 2.0.0](https://img.shields.io/badge/version-2.0.0-green)
![Static Badge: NestJS](https://img.shields.io/badge/NestJS-5a5a5a?logo=nestjs)
![Static Badge: TypeScript](https://img.shields.io/badge/TypeScript-5a5a5a?logo=typescript)
![Static Badge: Prisma](https://img.shields.io/badge/Prisma-5a5a5a?logo=prisma)
![Static Badge: PostgreSQL](https://img.shields.io/badge/PostgreSQL-5a5a5a?logo=postgresql)

## 📄 Documentação

- [miaplay-01-server.fly.dev/api-docs](https://miaplay-01-server.fly.dev/api-docs)

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
