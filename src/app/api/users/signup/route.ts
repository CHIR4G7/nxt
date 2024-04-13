import {connect} from '@/dbConfig/db'
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'
import bcrypt from 'bcrypt';

connect();

export async function POST(request: NextRequest){
    try {
        
        const reqBody = await request.json();
        const {username,email,password} = reqBody;
        console.log(reqBody);
        

        //check if user exists
        const user = await User.findOne({email});
        if(user)
        {
            return NextResponse.json({error:"User Already Exists",status:400})
        }
        
       
        //hash passs
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password,salt);
       

        const newUser = await User.create({
            username:username,
            email:email,
            password: pass
        })
        
       
        return NextResponse.json({message:"User Created",status:200,success:true})
        
    } catch (error:any) {
        return NextResponse.json({error:error,status:500})
    }
}