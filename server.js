const express = require('express');
const app = express();
const path = require('path');

app.use('/app', express.static(__dirname + '/app'));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + '/app/index.html'));
    console.log(path.join(__dirname ));

});


app.listen(8080);
console.log(
    "Server is running",
    __dirname + "/app/index.html"
)