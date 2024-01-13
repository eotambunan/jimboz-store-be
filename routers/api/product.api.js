const express = require('express')
const productApi = express.Router()
const productController = require('../../controllers/product.controller')
const product = new productController



productApi.get("/product",product.getAll)
productApi.get("/product/:id",product.getOne)
productApi.post("/product",product.add)
productApi.delete("/product/:id",product.delete)
productApi.patch("/product/:id",product.edit)




module.exports = productApi