const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',require('./routers/todos'))


mongoose.connect(process.env.mognodb_Link, {
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=> {
    console.log('connected bro');
})
app.listen("500" , () => {
    console.log("server is up and running");
})