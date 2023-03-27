// const { request, response } = require("express");
const myexpress = require("express");

const {mysecond_model}=require("../models/user.model");

const mysecond_router=myexpress.Router();

const myjwt=require("jsonwebtoken");

const bcrypting=require("bcrypt");
const { request, response } = require("express");



///for registering part///

mysecond_router.post("/register",async(request,response)=>{

    const {myname,myemail,mygen,mypass,myage,mycity,i_marry}=request.body;

    try{

        bcrypting.hash(mypass,5,async(error,hash)=>{

            if(error){

                response.send(`wrong:${error}`);


            }

            else{

                const myusers=new mysecond_model({

                    myname,myemail,mygen,mypass:hash,myage,mycity,


                });

                await myusers.save();

                response.send("registration completed");


            }



        });

    }

    catch(error){

        response.send(`wrong:${error}`);

    }

});





/////login part////

mysecond_router.post("/login",async(request,response)=>{

    const {myemail,mypass}=request.body;

    try{

        const myuser=await mysecond_model.find({myemail});

        console.log("myuser:",myuser);

        if(myuser.length>0){

            bcrypting.compare(mypass,myuser[0].mypass,(error,decrypting_pass)=>{

                if(error){

                    response.send(`wrong:${error}`);


                }

                else{

                    const mytoken=myjwt.sign({myu_id:myuser[0]._id},"key");

                    response.send({message:"loged in",token: mytoken});

                }

            });


        }

        else{

            response.send("error");

        }
    }

    catch(error){

        response.send(`wrong: ${error}`);

    }


});


module.exports={

    mysecond_router

    
}






module.exports={

    myfirst_router
    
}

