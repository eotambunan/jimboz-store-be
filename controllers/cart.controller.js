const cartModel = require("../models/cart.model");

class Cart {
    async getCart(req, res) {
        try {
            const { user_id } = req.params;
            const data = await cartModel.find({ user_id }).populate('products.item')
            res.status(200).json({
                message: "success",
                data,
            });
        } catch (error) {
            res.status(400).json({
                error: error.message,
            });
        }
    }

    async addCart(req, res) {
        try {
            const payload = req.body;
            const existingCart = await cartModel.findOne({user_id:payload.user_id})
            if(!existingCart){
                const data = await cartModel.create(payload);
                res.status(200).json({
                    message: "Cart Created",
                    data,
                });
    
            } else if (existingCart){
                const existingItem = existingCart.products.find(item=>{
                    return item.item.toString()===payload.products.item
                })
                if(existingItem){
                    existingItem.quantity+=1
                    console.log(existingCart)
                    await existingCart.save()
                    res.status(200).json({
                        message: "Quantity added",
                    });
                }else if(!existingItem){
                    existingCart.products.push(payload.products)
                    await existingCart.save()
                    res.status(200).json({
                        message: "Item added",
                    });
                }
            }
        } catch (error) {
            res.status(400).json({
                error: error.message,
            });
        }
    }
    async deleteCart(req,res){
        try {
            const payload = req.body
            console.log(payload)
            const response = await cartModel.findOne({user_id : payload.user_id})
            response.products.id(payload.item).deleteOne()
            await response.save()
            const data = await cartModel.find({ user_id : payload.user_id }).populate('products.item')
            res.json({
                message : "SUCCESS",
                data : data
            })
        } catch (error) {
            res.status(400).json({
                error: error.message,
            });
        }
    }
}

module.exports = Cart;
