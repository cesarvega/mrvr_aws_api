const app = require("express")();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/item", (req, res) => {
  res.status(200).send({
    item: "🧮",
    price: "💰",
  });
});

app.post("/item/:id", (req, res) => {

//   const { id } = req.params;
//   const { logo } = req.body;

//   res.status(200).send({
//     id,
//     logo,
//   });
});
