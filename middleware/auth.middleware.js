const myjwt= require("jsonwebtoken");

require("dotenv".config());

const myauthorization=(request,response,next)=>{


    const mytoken = request.headers.myauthorization;

    if(mytoken){

        const mycoding=myjwt.verify(mytoken,"key");

        if(mycoding){

            const myu_id=mycoding.myu_id;

            console.log(mycoding);

            request.body.myu_id=myu_id;

            next();

        }

        else{

            response.send({message:"log in"});

        }

    }

    else{

        response.send({message:"log-in"});

    }
};


module.exports={

    myauthorization
    
}

