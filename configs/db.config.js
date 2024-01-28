const mongoose = require('mongoose')

const connection = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/jimboz-store')
        console.log("Database Connected")
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = connection