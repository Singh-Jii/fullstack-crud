const mymongoose=require("mongoose");

const myfirstschema=mymongoose.Schema({


    mytitle: String,

    mybody: String,

    mydevice: String,

    myn_o_c: Number,

},

{

    versionkey: false

}


);


const myfirst_model= mymongoose.model("post",myfirstschema);


module.exports={

    myfirst_model

}