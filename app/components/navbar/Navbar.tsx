"use client"
import Container from "../container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import {User} from "@prisma/client"

interface NavbarProps{
  currentUser?: User | null
}

const Navbar:React.FC<NavbarProps> = ({currentUser}) => {
  console.log({currentUser})
  return (
    <header className='w-full fixed bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]'>
            <Container>
                <div className="flex justify-between items-center gap-3 md:gap-0">
                    <Logo />
                    <Search />
                    <UserMenu currentUser={currentUser} />
                </div>
            </Container>
        </div>
    </header>
  )
}

export default Navbar