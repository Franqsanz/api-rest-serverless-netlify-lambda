const express = require('express');
const apollo = require('apollo-server-express');
const serverless = require('serverless-http');

const app = express();

module.exports.handler = serverless(app);