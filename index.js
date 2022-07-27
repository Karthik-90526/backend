/*const express =require('express')
const app=express()
const port =process.env.PORT || 3000
app.get('/',(req,res) =>{
    res.send('hello kumar')
 })

 app.listen(3000,()=>{
    console.log('App is listen')
 })*/
 const express =require('express');
 const app= express();
 const cors = require("cors");
 const helmet = require("helmet");
 const Blog =require('./db/blog')
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(helmet());
 app.use(cors());
 const port =process.env.PORT || 3000
 const mongoose=require("mongoose");
 //mongoose.connect('mongodb://localhost/my_database');
 mongoose.connect('mongodb+srv://Kumar_123:Karthik123@kumar.fhnzp.mongodb.net/Kumar?retryWrites=true&w=majority');
 
 
 app.post('/blog',(req,res)=>{
 Blog.create(req.body).then((blog)=>{
 res.status(201).send(blog);
 })
 .catch((error)=>{
     res.status(400).send(error);
 })
 });
 
 app.get('/', (req,res)=>{
      res.send("Hello world");
    
 })
 
 app.get('/:id',async (req,res)=>{
      
      result = await Blog.find()
      .then(result=>{
         res.status(200).json({
         data:result
         })
      })
 })
 
 /*
 app.get('/:id', (req,res,next)=>{
    result =Blog.findById(req.params.id)
    .then(result=>{
     res.status(200).json({
         data:result
         })
    })
 })*/
 
 app.delete('/delete/:id', async (req, res,next) => {
     try {
         const id = req.params.id;
         const data = await Blog.findByIdAndDelete(id)
         res.send(`Document with ${data.name} has been deleted..`)
     }
     catch (error) {
         res.status(400).json({ message: error.message })
     }
 })
 
 
 app.listen(port,(req,res)=>{
     console.log("app is running");
 })
 