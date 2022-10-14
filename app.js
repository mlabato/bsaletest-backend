const express = require('express');
const app = express();
const path = require('path');
const router = require("./api/routes/index")

const publicPath = path.resolve(__dirname, "./public"); 
app.use(express.static(publicPath)); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 


app.listen((process.env.PORT || 3000), () =>{
    console.log('listening on 3000');
  });

app.use("/", router);