# BI-CYCLE-STORE

### Assignment Set : 4

BI-CYCLE-STORE is a backend project built on express.js,mongodb, mongoose and typescript. This Project offers to do some CRUD and some advance mongodb operations. This project provides api for creating a product, updating a product, deleting a product, saving ordered product details and get the total revenue generated from ordered products. Besides, data validations are also implemented. This project is built based on Modular Pattern, there are two modules, one is product module and another one is order modules. For better work flow prettier and eslint is used here.

### Live Link :

- [BI-CYCLE-STORE](https://bi-cycle-store-b4-a2-v4.vercel.app/)

### Video Demonstration :

- [Video Demonstration](https://drive.google.com/file/d/1wfNcEeD1VUL1_tlfrlwc3HGuo3lbLWFM/view)

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

- Hit with the desired id, this id is not fixed

- This will completely delete the product from the database.

#### PLACE AN ORDER

**ENDPOINT URL** : **`/api/orders`**
**METHOD** : `POST`

- This will place an order if we hit this route with the body data

```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/orders
```

- Body Data :

```json
{
  "email": "customer@examle.com",
  "product": "6740bf78d95e6dd49804f02e",
  "quantity": 32,
  "totalPrice": 40 // here the totalPrice is kept optional
}
```

- Here the total price is optional. Its added or not added in body does not matter system will automatically provide according to the quantity and unit price
- In product: the id of the product saved to look for the product while calculating totalPrice and Revenue.

#### GENERATE REVENUE

**ENDPOINT URL** : **`/api/orders/revenue`**
**METHOD** : `GET`

- To get the revenue based on the orders hit this link

```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/orders/revenue
```

- This will do aggregation going through all the documents and grabbing the total price.

#### WHAT EXTRA DOES THIS PROJECT OFFERS

- Type protection using typescript
- Mongoose Data Protection for validating Unwanted Data or Missing Data

### TECHNOLOGY used

- Typescript
- Mongoose
- MongoDB
- Express.js

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
