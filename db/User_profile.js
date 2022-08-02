const mongoose=require("mongoose")

const userprofileSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
    },
    gender:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    occupation:{
        type:String,
        required:true,
    },
    height:{
        type:Number,
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    }
})

const Blog = mongoose.model("user_Profile",userprofileSchema);
module.exports=Blog;





