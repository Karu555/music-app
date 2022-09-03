const express = require("express");
const mongoose= require("mongoose");
const app =express();
const http = require("http");
const artistRoute = require("./Routes/artist")
const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


mongoose.connect("mongodb+srv://karunesh:qwerty123456@cluster0.hb1isfh.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(console.log("connected")).catch(err=>console.log(err))
app.use("/new",artistRoute);



const server =http.createServer(app);

server.listen(8080 ,
    console.log("listening on 8080")
)