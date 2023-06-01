backend server for delivery app https://github.com/JemiJe/delivery-app<br>

## install

before start should be set up link from https://cloud.mongodb.com/ in `.env` file<br>

```
DATABASE_URL = mongodb+srv://<username>:<password>@cluster0.gyio5qy.mongodb.net/delivery_app
```

then

```
npm install
nodemon index.js
```

## methods

- POST `/api/order` - post new order
- GET `/api/orders` - get brief info about all orders
- GET `/api/company` - get list of companies
- GET `/api/company/:id` - get one company by id
- GET `/api/product` - get all store products
- GET `/company/:id/product` - get all products belonging to a specific company (:id = companyId)

## additional

to fetch use https://corsproxy.io/
