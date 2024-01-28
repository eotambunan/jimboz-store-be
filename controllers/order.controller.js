const orderModel = require("../models/order.model");

class Order {
    async getOrder(req, res) {
        try {
            const { user_id } = req.params;
            const data = await orderModel.find({ user_id }).populate("products.item");
            res.status(200).json({
                data : data,
            });
        } catch (error) {
            res.status(400).json({
                error: error.message,
            });
        }
    }

    async addOrder(req, res) {
        const payload = req.body
        try {
            const data = await orderModel.create({
                user_id : payload.user_id,
                products : payload.products,
                totalPrice : payload.totalPrice
            })
            res.status(201).json({
                message : "succes add order",
                data
            })
        } catch (error) {
            res.status(400).json({
                error: error.message,
            });
        }
    }
    async setOrderStatus(req,res){
        try {
            const {_id} = req.body
            const response = await orderModel.findOneAndUpdate({_id},{status:"success"})
            res.status(201).json({
                message : "update success"
            })            
        } catch (error) {
            res.status(400).json({
                error: error.message,
            });

        }
    }
}

module.exports = Order;
