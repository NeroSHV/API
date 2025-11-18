import { Router } from "express";
import db from "./db.js";

const router = Router();

// GET todos los usuarios
router.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// GET por id
router.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
});

// POST crear usuario
router.post("/usuarios", (req, res) => {
  const { nombre, email } = req.body;
  db.query(
    "INSERT INTO usuarios (nombre, email) VALUES (?, ?)",
    [nombre, email],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Usuario creado", id: result.insertId });
    }
  );
});

// PUT actualizar usuario
router.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;

  db.query(
    "UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?",
    [nombre, email, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Usuario actualizado" });
    }
  );
});

// DELETE eliminar usuario
router.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM usuarios WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Usuario eliminado" });
  });
});

export default router;
