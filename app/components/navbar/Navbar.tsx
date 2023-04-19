"use client"
import Container from "../container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"

const Navbar = () => {
  return (
    <header className='w-full fixed bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]'>
            <Container>
                <div className="flex justify-between items-center gap-3 md:gap-0">
                    <Logo />
                    <Search />
                    <UserMenu />
                </div>
            </Container>
        </div>
    </header>
  )
}

export default Navbar