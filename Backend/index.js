const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRoutes = require("./routes/UserRoutes");

const app = express();
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
dbUrl = `mongodb+srv://y74125:${process.env.DB_PASSWORD}@mycluster.gv0hwf0.mongodb.net/projectdb?retryWrites=true&w=majority`;

const connectdb = async ()=> {
    try{
        const con = await mongoose.connect(dbUrl)
        console.log("✅ Connected to Database ✅");
    }
    catch(error){
        console.error("❌ Connection Error to Database ❌");
    }
} 

connectdb()

app.get('/',(req,res) => {
    res.send('api kaam kr rha h')
})

app.use('/user',UserRoutes);
 
// Start server
app.listen(process.env.PORT, () => {
    console.log("🗃️  Server is started and running");
  });