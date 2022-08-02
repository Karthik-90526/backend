const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {
    firstName:{
        type:String,
        required:[true,"Specify a valid first name"],
        minlength:3,
        maxlength:15
    },
    lastName:{
        type:String,
        required:false,
        minlength:3,
        maxlength:15
    },
    phone:{
        type:String,
        required:[true,"User phone number required"]
    },
    city:{
        type:String,
        required:false,
    },
    state:{
        type:String,
        required:false,
    },
    pincode:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:[true,"Specify a valid Email"],
        lowercase:true,
    },
    password_hash:{
        type:String,
        required:false,
    },
    created_by:{
        type:String,
        required:false,
    },
    accessed_failed_count:{
        type:Number,
        required:false,
    },
    is_locked_out:{
        type:Boolean,
        required:false,
    },
    lockout_end_date:{
        type:Date,
        required:false,
    },
    profile_pic_url:{
        type:String,
        required:false,
    },
    is_active:{
        type:Boolean,
        required:false,
    },
    },
    {
        timestamps :true
    }
);

const Blog = mongoose.model("User",userSchema);
module.exports=Blog;

