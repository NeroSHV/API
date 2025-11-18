import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);


app.get("/", (req, res) => {
  res.send("¡API corriendo! Usa /api/usuarios para ver los datos.");
});


app.listen(3000, () => {
  console.log("API corriendo en http://localhost:3000");
});
