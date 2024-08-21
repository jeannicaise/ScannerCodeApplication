require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const database = require ("./database");

const port = process.env.APP_PORT;

app
  .listen(port, () => {
    console.log(`Server is listening on ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });


app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

  app.get('/api/guests', async (req, res) => {
    try {
      const [results] = await database.query('SELECT * FROM guests');
      res.json(results);
    } catch (err) {
      console.error('Erreur lors de la récupération des invités:', err);
      res.status(500).send('Erreur lors de la récupération des invités');
    }
  });

