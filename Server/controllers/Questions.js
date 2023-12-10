import Questions from '../models/Questions.js';
import  mongoose  from 'mongoose';

export const AskQuestion=async (req,res)=>{
    const postQuestionData=req.body;
    const postQuestion=new Questions({ ...postQuestionData , userId:req.userId})
    try{

        await Questions.save();

        return res.status(200).json("posted successfully");



    }catch(error){
        console.log(error);
        return res.status(409).json("Something went wrong..............................!")
    }

}