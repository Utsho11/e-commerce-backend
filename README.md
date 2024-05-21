
# E-Commerce Backend Node Server

It's a backend based e-commerce server which is connected to mongodb database. Mongodb is nosql database.
This server has only to section: product section and order section.


### Live Link

 - [E-Commerce-Backend-Node](https://e-commerce-backend-node.vercel.app/)


## Run Locally

### Clone the project:

```bash
  git clone https://github.com/Utsho11/e-commerce-backend.git
```

### Go to the project directory:

Please change my-project with the main directory here. 

```bash
  cd my-project
```

### Install dependencies:

```bash
  npm install
```
### Init npm:

```bash
npm init -y
```


### Start the server

```bash
  npm run start:dev
```


## API Reference (Demo)

#### Get all items

```http
  GET /api/products
```


#### Get item by ID

```http
  GET /api/products/:productId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



