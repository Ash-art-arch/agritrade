const express= require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.listen(4000, () => console.log('Server started on port 4000'))

const DB_URL='mongodb+srv://ashishsaikia092:Ashish@123@cluster0.b7gznne.mongodb.net/agritrade'
mongoose.connect(DB_URL).then(()=>{console.log("Db connected")})
