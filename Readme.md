# BI-CYCLE-STORE

### Assignment Set : 4

BI-CYCLE-STORE is a backend project built on express.js,mongodb, mongoose and typescript. This Project offers to do some CRUD and some advance mongodb operations. This project provides api for creating a product, updating a product, deleting a product, saving ordered product details and get the total revenue generated from ordered products. Besides, data validations are also implemented. This project is built based on Modular Pattern, there are two modules, one is product module and another one is order modules. For better work flow prettier and eslint is used here.

### Live Link :

- [BI-CYCLE-STORE](https://bi-cycle-store-b4-a2-v4.vercel.app/)

### PROJECT OPERATION STEPS

- As it is a backend project and there is no frontend, you have to use the postman to check the outcomes.

#### CREATE A PRODUCT

**ENDPOINT URL** : **`/api/products`**
**METHOD** : `POST`
**Body Data**:

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

- This will also add creation time
- If any data field is missing it will show error message since all the fields are made required

#### GET ALL THE PRODUCTS

**ENDPOINT URL** : **`/api/products`**
**METHOD** : `GET`

- Hit this link in postman for finding all the product data in database

```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/products
```

- Hit this link to get specific category data base on name, brand, type. This will take the searchTerm and match with those fields of data and give the data relevant to the searchTerm

```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/products?searchTerm=Mountain
```

- Here search term can be anything
- Regex is used to partially match any thing that is searched

#### GET A PRODUCT

**ENDPOINT URL** : **`/api/products/:productId`**
**METHOD** : `GET`

- Hit this link with the desired productId to get specific product

```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/products/6740bf78d95e6dd49804f02e
```

- Here the id is not fixed add your own desired id to get result. and this is just an example

#### UPDATE A PRODUCT

**ENDPOINT URL** : **`/api/products/:productId`**
**METHOD** : `PUT`

- Hit this url with the desired id and the desired parameter in the body that we want to update
- This will return the desired updated output

```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/products/6740bf78d95e6dd49804f02e
```

- Update parameter body

```json
{
  "price": 350,
  "quantity": 15
}
```

- This will record the updating time as well
- As put method is used this will take partial parameter to update, like if we add any one of all field this will update the specific data.

#### DELETE A PRODUCT

**ENDPOINT URL** : **`/api/products/:productId`**
**METHOD** : `DELETE`

- If we want to delete the specific data we have to hit this link with desired it.

```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/products/6740c2eb2e09631f60bf7b53
```

- hit with the desired id, this id is not fixed

- This will completely delete the product from the database.

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
