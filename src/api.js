const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Emulation Data Base
const fruits = {
    Fruits: [
        {
            id: 1,
            Fruit: "Banana",
            Climate: "Damp"
        },
        {
            id: 2,
            Fruit: "Apple",
            Climate: "Cold"
        },
        {
            id: 3,
            Fruit: "Lemon",
            Climate: "Semi Tropical"
        }
    ]
}

router.get('/', (req, res) => res.send(`
    <section>
        <h1>Express with Netlify Lambda</h1>
        <a href="http://localhost:9000/api/fruits">
            http://localhost:9000/api/fruits
        </a>
    </section>`
));
router.get('/fruits', (req, res) => res.send(fruits));
router.get('/fruits/:id', (req, res) => {
    const id = req.params.id;

    const search = fruits.Fruits.find((fruit) => fruit.id == id);
    res.send(search);
});
router.post('/fruits/', (req, res) => {
    const newFruit = {
        id: 4,
        Fruit: "Pear",
        Climate: "Warm and Humid"
    }

    fruits.Fruits.push(newFruit);
    res.send(fruits);
});

app.use('/api', router);

module.exports.handler = serverless(app);