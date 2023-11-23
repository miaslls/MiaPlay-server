This page is in <img src="assets/img/flag-en.png" width="14" alt="English"> English.
Para visualizar essa página em <img src="assets/img/flag-pt-br.png" width="14" alt="Português"> Português, [clique aqui](./README-ptbr.md).

---

# <img src="assets/img/server.png" width="20" alt="Server icon"> MiaPlay (server)

![Static Badge: Study](https://img.shields.io/badge/study-blue)
![Static Badge: NestJS](https://img.shields.io/badge/NestJS-5a5a5a?logo=nestjs)
![Static Badge: TypeScript](https://img.shields.io/badge/TypeScript-5a5a5a?logo=typescript)
![Static Badge: Prisma](https://img.shields.io/badge/Prisma-5a5a5a?logo=prisma)
![Static Badge: PostgreSQL](https://img.shields.io/badge/PostgreSQL-5a5a5a?logo=postgresql)

## 📄 Docs

- [miaplay-01-server.fly.dev/api-docs](https://miaplay-01-server.fly.dev/api-docs)

## 🌐 API Reference

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

## ⚙️ Install and Run

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

## 👩‍💻 Authors

- [@miaslls](https://www.github.com/miaslls)

## 📑 Related Projects

- [MiaPlay](https://github.com/miaslls/MiaPlay#readme)

## 🫶 Acknowledgements

- [flaticon](https://flaticon.com)
