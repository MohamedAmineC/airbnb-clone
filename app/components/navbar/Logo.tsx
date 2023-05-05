"use client"
import Image from "next/image"
import { useRouter} from "next/navigation"
import {FaAirbnb} from "react-icons/fa"

const Logo = () => {
    const router = useRouter();
  return (
    <>
    <Image 
        src="/images/logo.png"
        alt="Logo "
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        onClick={() => {
          router.push('/')
        }}
        />
    <FaAirbnb
    className="md:hidden cursor-pointer text-rose-500"
    size={40}
    onClick={() => router.push('/')} 
    />
    </>
  )
}

export default Logo