import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const response = NextResponse.json({
            message: "LogOut Successful",
            success: true
        })

        response.cookies.set("token","",{
            httpOnly: true,
            expires: new Date(0)
        })
        return response;
    } catch (error:any) {
        console.log(error);
        return NextResponse.json({error:error});
    }
}