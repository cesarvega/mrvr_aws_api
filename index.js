const express  = require("express");
const app      = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());



app.get("/item", (req, res) => {
  res.status(200).send({
    item: "🧮",
    price: "💰",
  });
});

app.post("/item/:id", (req, res) => {

  const { id } = req.params;
  const { logo } = req.body;

  res.status(200).send({
    id,
    logo,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});