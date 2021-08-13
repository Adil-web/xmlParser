const express = require("express");
const mongoose = require("mongoose");
const api = require("./api");
const path = require("path");
const util = require("util");
const fs = require("fs");
const jsonToXml = require("./utils/jsonToXml");
const parser = new require("xml2js").Parser();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const startParse = (url) => {
  fs.readFile(url, (err, data) => {
    //чтение файла
    parser.parseString(data, function (err, result) {
      //xml > js object
      console.dir(util.inspect(result, false, null, true));
    });
  });
};
let url = path.join(__dirname, "notif_1.xml"); // путь к файлу
// startParse("notif_1.xml"); // закуск парсинг xml
app.use("/api", api);
const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/atray", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    app.listen(8001, () => console.log("run"));
  } catch (e) {
    console.log(e);
  }
};

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
