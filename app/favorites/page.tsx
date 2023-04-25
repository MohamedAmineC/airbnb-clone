import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import { getCurrentUser } from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";


const page = async () => {
    const listings = await getFavorites();
    const currentUser = await getCurrentUser();

    if(listings.length === 0){
  return (
    <ClientOnly>
        <EmptyState
        title="No favorites found"
        subTitle="Looks like you have no favorite listings"
        />
    </ClientOnly>
  )
    }
    return (
        <ClientOnly>
            <FavoritesClient 
            listings={listings}
            currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default page