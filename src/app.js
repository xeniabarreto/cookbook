require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const cookbook = require('./routes/cookbookRoutes');

const db = require('./database/dbConnect');

const app = express();

db.connect();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/cookbook', cookbook);

module.exports = { app };
