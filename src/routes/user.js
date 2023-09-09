import { Router } from "express";
import db from "../../db/db.js";

const router = Router();

router.get("/users", (req, res) => {
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) {
        console.error("Error al consultar los usuarios:", err.message);
        res.status(500).send("Error interno del servidor.");
        } else {
        res.json(rows);
        }
    });
});



export { router as userRouter}