import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!,{dbName:'next-test'}).then(()=>{
            console.log('connected');
        }).catch((err)=>{
            console.log(err);
            process.exit();
        })
    } catch (error) {
        console.log('Something went Wrong!',error);
    }
}