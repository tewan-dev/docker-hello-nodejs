
const express = require('express')
const morgan  = require('morgan')
const fs = require('fs')
const path = require('path')

const app = express();

const logFolder = path.join(__dirname,'logs');
if (!fs.existsSync(logFolder)) {
    fs.mkdirSync(logFolder);
}

const logPath = path.join(__dirname,'logs', 'log.log');
const accessLogStream = fs.createWriteStream(logPath, { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))

const products = [
    {id:1,name:'mouse',price: 299},
    {id:2,name:'keyboard',price: 699}
];

app.get('/products', (req, res) => {
    res.json(products)
});
 
app.get('/products/:id', (req, res) => {
    res.json(products.find(m=>+m.id === +req.params.id))
});

const port = process.env.PORT || 8080
app.listen(port,  () =>
  console.log(`Example app listening on port ${port}!`),
);
