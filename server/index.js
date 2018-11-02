const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');
const hiddenPort = process.env.SERVER_PORT;

const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => {
    console.log(err);
})

app.get(`/api/houselist`, controller.getHouseList)

app.post(`/api/property`, controller.addNewProperty)



app.listen(hiddenPort, () => {
    console.log(`Knock knock knockin' on port ${hiddenPort}'s door`)
})