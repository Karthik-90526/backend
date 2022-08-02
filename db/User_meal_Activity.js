const mongoose=require("mongoose")

const usermealactivitySchema=new mongoose.Schema({
    user_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
    },
    pre_breakfast:{
        type:String,
        required:true,
    },
    breakfast:{
        type:String,
        required:true,
    },
    lunch:{
        type:String,
        required:true,
    },
    snacks:{
        type:String,
        required:true,
    },
    supper:{
        type:String,
        required:true,
    },
    physical_activity:{
        type:Number,
        required:true,
    },
    sleep_per_week:{
        type:Number,
        required:true,
    },
    activity_level:[{
        type:String,
        required:true,
    }],
    activity_description:{
        type:String,
        required:false,
    },
    preferred_activity:{
        type:String,
        required:false,
    },
    exercise_frequency:{
        type:Number,
        required:false,
    },
    dietary_preference:{
        type:String,
        required:false,
    },
    allergies:[{
        type:String,//once check this, if it is an array or string
        required:false,
    }],
    appetite_description:{
        type:String,
        required:true,
    },
    eatout_frequency:{
        type:Number,
        required:true,
    },
    water_consumption:{
        type:Number,
        required:true,
    },
})

const Blog = mongoose.model("user_meal_activitie",usermealactivitySchema);
module.exports=Blog;

