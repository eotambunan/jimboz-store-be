const productModel = require('../models/product.model')


class Product{
    async getAll(req,res){
        try {
            const data = await productModel.find()
            res.status(200).json({
                message : "success",
                data : data
            })
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }
    async getOne(req,res){
        try {
            const {id} = req.params
            const data = await productModel.findById(id)
            res.status(200).json({
                message : "success",
                data : data
            })
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }
    async add(req,res){
        try {
            const payload = req.body
            const data = await productModel.create(payload)
            res.status(200).json({
                message : "success",
                data : payload
            })
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }
    async delete(req,res){
        try {
            const {id} = req.params
            const data = await productModel.findByIdAndDelete(id)
            res.status(200).json({
                message : "success",
                data : data
            })
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }
    async edit(req,res){
        try {
            const {id} = req.params
            const payload = req.body
            const data = await productModel.findByIdAndUpdate(id,payload)
            res.status(200).json({
                message : "success",
                data : payload
            })
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }
}

module.exports = Product