const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Route utama
app.get("/", (req, res) => {
  res.json({
    message: "Hello from Docker!",
    timestamp: new Date(),
  });
});

// Route untuk testing
app.get("/api/test", (req, res) => {
  res.json({
    status: "success",
    message: "API is working properly",
  });
});

// Endpoint POST sederhana
app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json({
    message: "Data received",
    data: data,
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
});

// Jalankan server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});
