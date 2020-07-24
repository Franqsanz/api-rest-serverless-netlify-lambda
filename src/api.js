const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const typeDefs = gql`
//     type users {
//         name: String
//     }

//     type Query {
//         users: [users]
//     }
// `

// const resolvers = {
//     Query: {
//         users: () => 'franco'
//     }
// }

// const server = new ApolloServer({
//     resolvers,
//     typeDefs,
//     introspection: true,
//     playground: true
// });

router.get('/', (req, res) => res.send('Express with Netlify Lambda'));

router.get('/user', (req, res) => res.send({
    users: {
        "name": "Franco"
    }
}));

app.use('/api', router)

module.exports.handler = serverless(app);