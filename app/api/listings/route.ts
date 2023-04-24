import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

export async function POST(req:Request){
    const currentUser = await getCurrentUser();
    if(!currentUser){
        return NextResponse.error();
    }
    const body = await req.json();
    const {
        category,
        location,
        guestCount,
        roomCount,
        bathroomCount,
        imageSrc,
        price,
        title,
        description,
    } = body;

    const listing = await prisma.listing.create({
        data:{
            title,
            description,
            imageSrc,
            categorie: category,
            bathroomCount,
            roomCount,
            guestCount,
            price: parseInt(price,10),
            locationValue: location.value,
            userId: currentUser.id
        }
    });

    return NextResponse.json(listing)
}