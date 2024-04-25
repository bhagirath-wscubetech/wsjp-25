const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const CategoryRouter = require('./routers/category_router');
const ProductRouter = require('./routers/product_router');
require('dotenv').config();

const app = express();
app.use(cors()); // middleware
app.use(express.json());

app.use("/category", CategoryRouter);
app.use("/product", ProductRouter);

mongoose.connect(
    process.env.MONGODB_URL,
    {
        dbName: process.env.DB_NAME
    }
).then(
    () => {
        console.log('DB connected');
        app.listen(
            process.env.PORT,
            () => console.log('Server chalu hai')
        )
    }
).catch(
    () => {
        console.log('kuch toh gadbad hai daya');
    }
)


