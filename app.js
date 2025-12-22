// Import express
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from /public folder
app.use(express.static(path.join(__dirname, "public")));

// Health check route (VERY IMPORTANT in real systems)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
