const express = require('express');
require('dotenv').config({ path: "./config/.env" });
require("./config/db");
const cors = require('cors');

const app = express();

const PORT = process.env.PORT | 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${PORT}`);
});