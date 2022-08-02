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
 const Userprofile =require('./db/User_profile')
const Userr =require('./db/User')
const UsermealActivity =require('./db/User_meal_Activity')
 const port =process.env.PORT || 3000
 
 
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
 app.get('/data7/:id',async (req, res)=>{
    const user = await Userr.findById(req.params.id)
    const userprofilee = await Userprofile.findOne({"userid":req.params.id})
    const usermeal = await UsermealActivity.findOne({"userid":req.params.id})
    a=user.height/(user.weight*user.weight)
    if(a<18.5){
        console.log("Underweight")
    }
    else if(a>18.5 && a<24.9){
        console.log("good Health")
    }
    else if(a>25 && a<29.9 ){
        console.log("Overweight")
    }
    else if(a>30 && a<39.9){
        console.log("Obese range")
    }
    console.log(a)
    res.send({
        "name":user.firstName,
        "phone":user.phone,
        "sleep_per_week":usermeal.sleep_per_week,
        "allergies":usermeal.allergies,
        "height":userprofilee.height,
        "weight":userprofilee.weight
    });
    
    });


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
 