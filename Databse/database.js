const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/Human_Resource";

const Connection = async ()=>{
    try {
        console.log("connecting to db");
        const dbConn = await mongoose.connect(url);
        console.log("connection done")
    } catch (error) {
        console.log(error)
    }
}
module.exports = Connection