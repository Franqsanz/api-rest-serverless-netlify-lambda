const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => res.send('Express with Netlify Lambda'));

const fruit = {
    "Fruit": [
        "Banana",
        "Apple",
        "Lemon",
        "Peach",
        "Grapefruit",
        "Plum"
    ]
}

router.get('/fruit', (req, res) => res.send(fruit));

app.use('/api', router)

module.exports.handler = serverless(app);