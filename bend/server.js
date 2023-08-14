const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const app=express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.get('/displaydata',(req,res)=>{
    res.json({message:"hello all we are successfully connect react and express using(express,cors,react)"})
});
app.listen(8000,()=>{
    console.log('successfully run bend server port 8000');
})