import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/app/lib/prismadb"

interface Iparams {
    reservationId: string
}

export async function DELETE(req:Request,
    {params}:{params:Iparams})
    {
    const currentUser = await getCurrentUser();
    if(!currentUser){
        return NextResponse.error();
    }
    const {reservationId} = params
    if(!reservationId || typeof reservationId !== 'string'){
        throw new Error('Invalid ID')
    }
    const reservation = await prisma.reservation.deleteMany({
        where:{
            id: reservationId,
            OR: [
                {userId: currentUser.id},
                {Listing: {userId: currentUser.id}}
            ]
        }
    })
    return NextResponse.json(reservation);
}