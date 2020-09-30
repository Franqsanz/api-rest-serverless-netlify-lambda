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
      fruit: "Banana",
      climate: "Damp"
    },
    {
      id: 2,
      fruit: "Apple",
      climate: "Cold"
    },
    {
      id: 3,
      fruit: "Lemon",
      climate: "Semi Tropical"
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

  const fruitOne = fruits.Fruits.find((fruit) => fruit.id == id);
  if (!fruitOne) return res.status(404).send('Is fruit doesn′t exist');
  res.send(fruitOne);
});
router.put('/fruits/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const index = fruits.Fruits.find((fruit) => fruit.id == id);
  if (index) Object.keys(body).forEach((key) => (index[key] = body[key]));
  res.send(index);
});
router.post('/fruits/', (req, res) => {
  const body = req.body;

  const newFruit = {
    id: body.id,
    fruit: body.fruit,
    climate: body.climate
  }

  fruits.Fruits.push(newFruit);
  res.send(fruits);
});
router.delete('/fruits/:id', (req, res) => {
  const id = req.params.id;

  const deleteFruit = fruits.Fruits.findIndex((fruit) => fruit.id == id);
  if (deleteFruit > -1) fruits.Fruits.splice(deleteFruit, 1);
  res.send(fruits);
});

app.use('/api', router);

module.exports.handler = serverless(app);