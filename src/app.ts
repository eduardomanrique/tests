import express from "express";

const app = express();
app.use(express.json());

app.get("/get", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.post("/", (req, res) => {
    res.status(200).send();
});

export default app;
