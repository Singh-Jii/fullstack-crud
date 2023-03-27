const myexpress=require("express");

const {myconnection}= require("./database");

const {myauthorization}=require("./middleware/auth.middleware");

const {mysecond_router}=require("./routes/user.router");

const {myfirst_router}=require("./routes/post.router");



require("dotenv").config();

const my_ser=express();

const mycor=require("cors");

my_ser.use(cors());

my_ser.use(myexpress.json());



my_ser.use("/users",mysecond_router);

my_ser.use(myauthorization);

my_ser.use("/post",myfirst_router);



my_ser.listen(process.env.myport, async()=>{

    try{

        await myconnection;

        console.log("connected");

    }

    catch(error){


        console.log(`wrong credential : ${error.message}`);


    }


    console.log(`port: ${process.env.myport}`);

    
})