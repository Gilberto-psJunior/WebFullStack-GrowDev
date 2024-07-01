import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import { UserRoutes } from './routes/user.routes';
import {AuthRoutes} from './routes/auth.routes';
import { TweetRoutes } from './routes/tweets.router';
import { LikeRoutes } from './routes/like.routes';







const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(_,res)=>{
res.status(200).json({message:"hello world!",
    ok: true
});

})
app.use("/user",UserRoutes.execute());
app.use("/auth",AuthRoutes.execute());
app.use("/tweet", TweetRoutes.execute());
app.use("/like", LikeRoutes.execute());





app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});

