const mongoose = require('mongoose')
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: String,
    email: {
      type : String,
      unique : true
    },
    password: String,
  });

const Users = mongoose.model('users', usersSchema);

module.exports =  Users