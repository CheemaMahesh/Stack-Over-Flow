import express from 'express';

import {getAllquestions, AskQuestion, deleteQuestion} from  '../controllers/Questions.js';
// import {getAllquestions} from  '../controllers/Questions.js'


const router=express.Router();

router.post('/Ask',AskQuestion);
router.get('/get', getAllquestions);
router.delete('/delete/:id' , deleteQuestion)


export default router;