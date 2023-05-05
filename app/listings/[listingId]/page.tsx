import { getCurrentUser } from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById'
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import React from 'react'
import ListingClient from './ListingClient';
import getReservations from '@/app/actions/getReservations';
import { Metadata } from 'next';

interface Iparams{
    listingId?: string
}

export async function generateMetadata({ params }:{params:Iparams}): Promise<Metadata> {
  const listing = await getListingById(params);
  return { 
    title: listing?.title,
    description: listing?.description 
  }
}

const ListingPage = async  ({params}:{params:Iparams}) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params)
  const currentUser = await getCurrentUser();

  if(!listing){
    return (
        <ClientOnly>
            <EmptyState />
        </ClientOnly>
    )
  }
    return (
    <ClientOnly>
        <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser} 
        />
    </ClientOnly>
  )
}

export default ListingPage