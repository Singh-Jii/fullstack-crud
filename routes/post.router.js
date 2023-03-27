// const { request, response } = require("express");
const myexpress = require("express");

const {myfirst_model}=require("../models/post.model");

const myfirst_router=myexpress.Router();

myfirst_router.get("/",async(request,response)=>{

    try{

        const mypost=await myfirst_model.find();

        response.send(mypost);

    }

    catch(error){

        response.send({message:"error",message:error.message,});

    }


});


myfirst_router.post("/create",async(request,response)=>{

    const myload=request.body;

    try{

        const mypost=new myfirst_model(myload);

        await mypost.save();

        response.send("create");

    }

    catch(error){

        response.send({message:"do not create", message:error.message});


    }

});



myfirst_router.patch("/update/:myp_id",async(request,response)=>{

    const myp_id = request.params.id;

    const mydiff=request.body;

    const mywrite=await myfirst_model({_id:myp_id});

    const myui_id=mywrite.myu_id;

    const myui_idrequest=request.body.myu_id;



    try{

        if(myui_idrequest!==myui_id){

            response.send({message:"not authorised"});

        }

        else{

            await myfirst_model.findByIdAndUpdate({_id:myp_id},mydiff);

            response.send("data updated");

        }

    }

    catch(error){

        response.send({message:"error",message:error.message});

    }

});



myfirst_router.delete("/delete/:myp_id",async(request,response)=>{

    const myp_id = request.params.id;

    const mywrite=await myfirst_model({_id:myp_id});

    console.log(mywrite);

    const myui_id=mywrite.myu_id;

    const myui_id_make_request=request.body.myu_id;



    try{

        if(myui_id_make_request!==myui_id){

            response.send({message:"not authorised"});

        }

        else{

            await myfirst_model.findByIdAndDelete({_id:myp_id});

            response.send("data deleted");

        }

    }

    catch(error){

        response.send({message:"error",message:error.message});

    }

});




module.exports={

    myfirst_router

}

