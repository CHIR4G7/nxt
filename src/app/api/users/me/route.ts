import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";
import User from '@/models/userModel'
import { connect } from "@/dbConfig/db";
import { use } from "react";

connect();

export async function GET(request:NextRequest){
    try {
        const userid = await getDataFromToken(request);
        const user = await User.findOne({_id:userid}).select('-password');
        return NextResponse.json({
            messsage: "User Found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error:error,statur:400})
    }
}