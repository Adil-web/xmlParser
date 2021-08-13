const express = require('express');
const mongoose = require('mongoose');
const api = require('./api')
const xml2json = require('xml2json')
const path = require('path')
// const xml2js = require('xml2js');
const util = require('util')
const fs = require("fs");
const parser = require('xml2json');
const jsonToXml = require('./utils/jsonToXml');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));  
const startParse = (url) =>{
    fs.readFile(url, (err, data)=>{
      const obj = parser.toJson(data, { object: true }); //с буффера в json
        let body = (obj['S:Envelope']['S:Body']['ns2:sendMessage'].request) // объект body
        console.log(util.inspect(body, false, null, true)) // утилита что бы видить весь обьект в консоли
    })
    
}
startParse(path.join(__dirname, 'first_resp.xml') ) 
app.use('/api', api)
const start = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/atray', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        app.listen(8001, () => console.log('run'))
    }catch(e){
        console.log(e)
    }
}

const jsonData = { // пример json из mongo
    token: "example token",
    messageId: "example messageId",
    correlationId: "example correlationId",
    serviceId: "example serviceId",
    messageType: "example messageType",
    messageDate: "example messageDate",
    senderId: "example senderId",
    password: "example password",
}
// функция jsonToXml возвращает xml принимая в аргумент json
fs.writeFile("example.xml", jsonToXml(jsonData), function(error){
    if(error) throw error; // если возникла ошибка
    console.log("Файл example.xml создан");
});

start();