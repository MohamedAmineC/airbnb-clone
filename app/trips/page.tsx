import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import { getCurrentUser } from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

import React from 'react'

const TripsPafe = async () => {
  const currentUser = await getCurrentUser();
  if(!currentUser){
    return (
        <ClientOnly>
            <EmptyState
            title="Unauthorized"
            subTitle="Please log in to continue"
            />
        </ClientOnly>
    )
  }

  const reservations = await getReservations({userId: currentUser.id});
  if(reservations.length === 0){
    return (
        <ClientOnly>
            <EmptyState 
            title="No trips found"
            subTitle="Looks like you haven't reserved any trips"
            />
        </ClientOnly>
    )
  }
    return (
    <ClientOnly>
        <TripsClient 
        reservations={reservations}
        currentUser={currentUser}
        />
    </ClientOnly>
  )
}

export default TripsPafe