"use client"
import {AiOutlineMenu} from "react-icons/ai"
import Avatar from "../Avatar"
import {TfiWorld} from "react-icons/tfi"
import { useCallback, useState } from "react"
import MenuItem from "./MenuItem"
import useRegisterModal from "@/app/hooks/useRegisterModal"
const UserMenu = () => {
    const [isOpen,setIsOpen] = useState<Boolean>(false);
    const registerModal = useRegisterModal();

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    },[])
  return (
    <div className='relative'>
       <div className='flex items-center gap-3'>
            <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
            onClick={() => {}}>
                Airbnb your home
            </div>
            <div className="font-semibold rounded-full p-2 hover:bg-neutral-100 transition cursor-pointer">
                <TfiWorld />
            </div>
            <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            onClick={toggleOpen}
            >
                <AiOutlineMenu />
                <div className="hidden md:block">
                    <Avatar /> 
                </div>
            </div>
       </div> 
       {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
            <div className="flex flex-col cursor-pointer">
                <div className="border-b-[1px] border-gray-300 py-2">
                    <MenuItem onClick={() => {}} label="login" />
                    <MenuItem onClick={registerModal.onOpen} label="Sign up" />
                </div>
                <div className="py-2">
                    <MenuItem onClick={() => {}} label="Put My rental on Airbnb" />
                    <MenuItem onClick={() => {}} label="Help" />
                </div>
            </div>
        </div>
       )}
    </div>
  )
}

export default UserMenu