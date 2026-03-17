const express = require("express");
const router = express.Router();
const db = require("../db");

// 1. GET all
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM movies");
  res.json(rows);
});

// 2. GET by id
router.get("/:id", async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM movies WHERE id=?",
    [req.params.id]
  );
  res.json(rows[0]);
});

// 3. POST
router.post("/", async (req, res) => {
  const { title, description, image_url, rating } = req.body;
  await db.query(
    "INSERT INTO movies (title, description, image_url, rating) VALUES (?, ?, ?, ?)",
    [title, description, image_url, rating]
  );
  res.json({ message: "Movie added" });
});

// 4. UPDATE rating ⭐
router.put("/:id", async (req, res) => {
  const { rating } = req.body;
  await db.query(
    "UPDATE movies SET rating=? WHERE id=?",
    [rating, req.params.id]
  );
  res.json({ message: "Updated" });
});

// 5. DELETE
router.delete("/:id", async (req, res) => {
  await db.query("DELETE FROM movies WHERE id=?", [req.params.id]);
  res.json({ message: "Deleted" });
});

module.exports = router;