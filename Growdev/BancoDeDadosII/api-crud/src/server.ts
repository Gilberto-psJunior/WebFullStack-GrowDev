console.log("olá mundo");
import express from "express";
import cors from 'cors';
import 'dotenv/config';
const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log("Server running on port 3333.");
});