/*const mongoose=require("mongoose");
//mongoose.connect('mongodb://localhost/my_database');
mongoose.connect('mongodb+srv://Kumar_123:Karthik123@kumar.fhnzp.mongodb.net/Kumar?retryWrites=true&w=majority');*/
const mongoose=require("mongoose");
//mongoose.connect('mongodb://localhost/my_database');
mongoose.connect('mongodb+srv://Kumar_123:Karthik123@kumar.fhnzp.mongodb.net/Kumar?retryWrites=true&w=majority');

/*
mongoose.connect(
  `mongodb+srv://Kumar_123:<password>@kumar.fhnzp.mongodb.net/?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);*/
const schema = new mongoose.Schema({
    
    displayName:String,
    email:String,
    password:String,
    ConformPassword:String
});
const Blog =mongoose.model('kumar',schema);
module.exports=Blog;
