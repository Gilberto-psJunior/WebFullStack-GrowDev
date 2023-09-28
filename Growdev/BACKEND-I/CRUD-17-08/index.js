const express=require('express')
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
const app = express();

app.use(express.json());


const users=[];
const messages = [];
const emailAlreadyRegistered = users.find(user => user.email===email)
app.post("/signup",async (req, res) =>{
    const {name,email,password}=request.body;
    if(emailAlreadyRegistered){
        res.status(400).json({message:"Email já cadastrado"})
    }
    const newUser={
        id:uuidv4(),
        name,
        email,
        password
        
    }
    const hashedPassword = await bcrypt.hash(password,10);
    users.push(newUser);
    res.status(201).json({message:"Usuario criado com sucesso",newUser});
})




app.listen(3333,()=>{console.log("rodando")});

