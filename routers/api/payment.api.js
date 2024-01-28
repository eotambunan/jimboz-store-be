const express = require('express')
const paymentApi = express.Router()
const PaymentController = require('../../controllers/payment.controller')
const payment = new PaymentController



paymentApi.post("/payment", payment.getToken)




module.exports = paymentApi