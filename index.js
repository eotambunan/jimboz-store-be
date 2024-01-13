const express = require('express')
const corss = require('cors')
const PORT = 3000

const app = express()



app.use(express.json())
app.use(corss())
app.use(express.urlencoded({
    extended: true
}))
// Router
const router = require('./routers/routes')
app.use(router)

// Mongoose
const mongoose = require("./configs/db.config")
mongoose()


app.listen(PORT,()=>{
    console.log(`Server running on port : ${PORT}`)
})