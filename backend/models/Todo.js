const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    todo:{
        required:true,
        type:String
    },
    description: {
        default: "no description",
        type:String
    }
})


module.exports = mongoose.model("Todo",Schema)