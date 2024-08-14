const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

//Middleware

app.use(express.json());

const cors = require("cors");

app.use(cors());

//define port

const PORT = 3002

const router = require("./Routes/patient-routes"); 
app.use("/patient", router)

//establish link to mongoDB Atlas Database

mongoose.connect("mongodb+srv://dranellwilson1:Dranell.1wilson@cluster0.x8ixxam.mongodb.net/MERN_Health").then(() => console.log("Connected To Database"))  

.then(()=>console.log("Backend Server Listening on PORT " + PORT))

.then(() =>{

    app.listen(PORT)

}).catch((err) => console.log(err));

