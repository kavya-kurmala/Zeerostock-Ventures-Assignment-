const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Keep process alive test
setInterval(() => {}, 1000);

const inventory = require("./data.json");

console.log("Server starting...");

app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/search", (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let results = inventory;

  if (q) {
    results = results.filter(item =>
      item.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (category) {
    results = results.filter(item =>
      item.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (minPrice) {
    results = results.filter(item => item.price >= Number(minPrice));
  }

  if (maxPrice) {
    results = results.filter(item => item.price <= Number(maxPrice));
  }

  if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    return res.status(400).json({ error: "Invalid price range" });
  }

  res.json(results);
});

// 🔥 USE DIFFERENT PORT (important)
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
