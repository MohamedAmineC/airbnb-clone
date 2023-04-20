import bcrypt from "bcrypt";
import prisma from "@/app/lib/prismadb"
import { NextResponse } from "next/server";
export async function POST(
    req:Request
) {
    const body = await req.json();
    const {email,name,password} = body;
    const userExists = await prisma.user.findUnique({
        where:{
            email,
        }
    })
    if(userExists){
        return NextResponse.error();
    }
    const hashedPassword = await bcrypt.hash(password,12);
    const user = await prisma.user.create({
        data:{
            email,
            name,
            hashedPassword
        }
    });
    return NextResponse.json(user)
}