import cors from 'cors';
import express from 'express';
import 'dotenv/config';


const app = express();

app.use(express.json());
app.use(cors())

//definicao das rotas

app.get("/",(_,res)=>{
res.status(200).json({message:"201",
    ok: true
})

})






app.listen(process.env.PORT, () => {
    console.log(`servidor rodando na porta ${process.env.PORT}`)});