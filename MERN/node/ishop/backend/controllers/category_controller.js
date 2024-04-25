const Category = require("../models/category_model");
class CategoryController {
    create(data) {
        return new Promise(
            (resolve, reject) => {
                try {
                    const category = new Category(
                        { name: data.name, slug: data.slug, image_name: "" }
                    )
                    category.save()
                        .then(
                            (success) => {
                                resolve({
                                    msg: "Category created",
                                    status: 1
                                })
                            }
                        ).catch(
                            () => {
                                reject({
                                    msg: "Unable to create category",
                                    status: 0
                                })
                            }
                        )
                } catch (err) {
                    reject({
                        msg: "Internal server error",
                        status: 0
                    })
                }
            }
        )
    }
    read(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    if (id) {
                        const category = await Category.findById(id);
                        res({
                            status: 1,
                            category
                        })
                    } else {
                        const categories = await Category.find();
                        res({
                            msg: categories.length + " records found",
                            status: 1,
                            categories
                        })
                    }

                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
}

module.exports = CategoryController;