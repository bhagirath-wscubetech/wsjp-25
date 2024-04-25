const express = require('express');

const ProductRouter = express.Router();

ProductRouter.post(
    "/create",
    (req, res) => {

    }
)

ProductRouter.get(
    "/",
    (req, res) => {

    }
)

ProductRouter.delete(
    "/delete/:id",
    (req, res) => {

    }
)


ProductRouter.put(
    "/update/:id",
    (req, res) => {

    }
)


module.exports = ProductRouter;