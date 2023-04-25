import Image from 'next/image'
import { Inter } from 'next/font/google'
import ClientOnly from './components/ClientOnly'
import Container from './components/container'
import EmptyState from './components/EmptyState'
import getListings, { IlistingsParams } from './actions/getListings'
import ListingCard from './components/listings/ListingCard'
import { getCurrentUser } from './actions/getCurrentUser'

const inter = Inter({ subsets: ['latin'] })

interface HomeProps{
  searchParams: IlistingsParams
}

const Home =  async ({searchParams}:HomeProps) => {
  const currentUser = await getCurrentUser();
  const listings = await getListings(searchParams);

  if(listings.length === 0){
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <Container>
        <div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md: grid-clos-3 lg:gird-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {listings.map(listing => (
            <ListingCard 
            key={listing.id}
            data={listing}
            currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  )
}
export default Home
