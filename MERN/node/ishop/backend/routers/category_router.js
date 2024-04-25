const express = require('express');
const CategoryController = require('../controllers/category_controller');


const CategoryRouter = express.Router();
// http://localhost:5000/category/create
CategoryRouter.post(
    "/create",
    (req, res) => {
        const result = new CategoryController().create(req.body);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
)

CategoryRouter.get(
    "/:id?",
    (req, res) => {
        const result = new CategoryController().read(req.params.id ?? null);
        // null safe operator
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
)

CategoryRouter.delete(
    "/delete/:id",
    (req, res) => {

    }
)


CategoryRouter.put(
    "/update/:id",
    (req, res) => {

    }
)


module.exports = CategoryRouter;