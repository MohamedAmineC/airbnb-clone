"use client"
import {AiOutlineMenu} from "react-icons/ai"
import Avatar from "../Avatar"
import {TfiWorld} from "react-icons/tfi"
import { useCallback, useState,useRef,useEffect } from "react"
import MenuItem from "./MenuItem"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import useLoginModal from "@/app/hooks/useLoginModal"
import useRentModal from "@/app/hooks/useRentModal"
import {signOut} from "next-auth/react"
import { SafeUser } from "@/app/types"
import { useRouter } from "next/navigation"

interface UserMenuProps{
    currentUser?: SafeUser | null
}
const UserMenu:React.FC<UserMenuProps> = ({currentUser}) => {
    const [isOpen,setIsOpen] = useState<Boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    },[])

    const onRent = useCallback(() => {
        if(!currentUser){
           return loginModal.onOpen();
        }

        //OPEN RENT MODAL
        rentModal.onOpen();
    },[currentUser,loginModal,rentModal])

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, []);

    // add event listener on mount
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

  return (
    <div className='relative' ref={menuRef}>
       <div className='flex items-center gap-3'>
            <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
            onClick={onRent}>
                Airbnb your home
            </div>
            <div className="font-semibold rounded-full p-2 hover:bg-neutral-100 transition cursor-pointer hidden sm:block">
                <TfiWorld />
            </div>
            <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            onClick={toggleOpen}
            >
                <AiOutlineMenu />
                <div className="hidden md:block">
                    <Avatar src={currentUser?.image} /> 
                </div>
            </div>
       </div> 
       {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
            <div className="flex flex-col cursor-pointer">
                <div className="border-b-[1px] border-gray-300 py-2">
                    {currentUser ? (
                        <>
                        <MenuItem onClick={() => router.push('/trips')} label="My trips" />
                        <MenuItem onClick={() => router.push('/favorites')} label="My favorites" />
                        <MenuItem onClick={() => router.push('/reservations')} label="My reservations" />
                        <MenuItem onClick={() => router.push('/properties')} label="My properties" />
                        <MenuItem onClick={rentModal.onOpen} label="Airbnb my home" />
                        <hr />
                        <MenuItem onClick={() => signOut()} label="Logout" />

                        </>
                    ) : (
                    <>
                        <MenuItem onClick={loginModal.onOpen} label="login" />
                        <MenuItem onClick={registerModal.onOpen} label="Sign up" />
                        <hr />
                        <MenuItem onClick={() => {}} label="Put My rental on Airbnb" />
                        <MenuItem onClick={() => {}} label="Help" />
                    </>
                    )}
                    
                </div>
            </div>
        </div>
       )}
    </div>
  )
}

export default UserMenu