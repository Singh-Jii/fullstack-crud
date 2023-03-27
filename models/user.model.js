const mymongoose=require("mongoose");

const mysecondschema=mymongoose.Schema({


    myname: String,

    myemail: String,

    mygen: String,

    mypass: String,

    myage: Number,

    mycity: String,

    i_marry: Boolean,


},

{

    versionkey: false

}


);


const mysecond_model=mymongoose.model("users",mysecondschema);


module.exports={

    mysecond_model

}