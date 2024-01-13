const jwt = require('jsonwebtoken');
const jwk = "password"

const createToken = (payload)=>{
    const data = {
        id : payload._id,
        name : payload.name
    }
    const expire = 60*60*1
    const token = jwt.sign(data,jwk,{expiresIn:expire})
    return token
}

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(!token){
        res.status(400).json({
            error : "Need Token"
        })
    }
    try {
        const jwtDecoded = jwt.verify(token,jwk)
        req.userData = jwtDecoded
    } catch (error) {
        res.status(400).json({
            error : "Unauthorized"
        })
    }
    next()
}


module.exports = {
    createToken,
    verifyToken
}