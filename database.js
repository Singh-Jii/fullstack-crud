const mymongoose=require("mongoose");

mymongoose.set("strictQuery",false);

require("dotenv").config();

const myconnection=mymongoose.connect(process.env.mymongolink);

module.exports={

    myconnection
    
}