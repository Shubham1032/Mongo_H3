const express = require('express');
const app = express();
const Connection = require('./Databse/database')
const route = require('./routes/route')


app.use(route)
app.listen(4001,async()=>{
    console.log("server on port 4001")
  await Connection()
})