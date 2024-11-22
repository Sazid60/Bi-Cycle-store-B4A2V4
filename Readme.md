# BI-CYCLE-STORE

### Assignment Set : 4

BI-CYCLE-STORE is a backend project built on express.js,mongodb, mongoose and typescript. This Project offers to do some CRUD and some advance mongodb operations. This project provides api for creating a product, updating a product, deleting a product, saving ordered product details and get the total revenue generated from ordered products. Besides, data validations are also implemented. This project is built based on Modular Pattern, there are two modules, one is product module and another one is order modules. For better work flow prettier and eslint is used here.

### Live Link :

- [BI-CYCLE-STORE](https://bi-cycle-store-b4-a2-v4.vercel.app/)

### Project Operation Steps

- As it is a backend project and there is no frontend, you have to use the postman to check the outcomes.

#### Create a Product

- **ENDPOINT URL** : **`/api/products`**
- **METHOD** : `GET`
- **Body Data**:
  ```json
  {
    "name": "Roadster 5000",
    "brand": "SpeedX",
    "price": 300,
    "type": "Road",
    "description": "A premium road bike designed for speed and performance.",
    "quantity": 20,
    "inStock": true
  }
  ```
- Hit this Url and set the data in the body the product will be created
- Full URL format

  ```bash
  https://bi-cycle-store-b4-a2-v4.vercel.app/api/products
  ```

- If any data field is missing it will show error message since all the fields are made required

### Installation Steps

- Clone the Repository

  ```bash
  https://github.com/Sazid60/Bi-Cycle-store-B4A2V4.git

  ```

- Run This Command
  ```bash
  npm install
  ```
- Add These in .env File

  ```bash
  NODE_ENV=development
  PORT = 5000
  DATABASE_URL=<url from mongodb>

  ```

- To locally Run this Project locally run this command
  ```bash
  npm run start:dev
  ```
