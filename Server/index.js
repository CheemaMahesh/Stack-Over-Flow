import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';

const app=express();
app.use(express.json({limit:"30mb", extend:true }));
app.use(express.urlencoded({limit:"30mb", extend:true}));
app.use(cors());

app.get('/',(req,res)=>{
    res.send("This is a stackoverflow clone API");
})

app.use('/user', userRoutes);



const PORT=process.env.PORT || 5000;

const CONNECTION_URL="mongodb+srv://MaheshCK:MaHeSh7893@stack-overflow-clone.itsy6as.mongodb.net/";



mongoose.connect(CONNECTION_URL ,{useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=>app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)}))
    .catch((err)=>{console.log(err.message)})