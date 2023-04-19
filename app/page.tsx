import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className='text-zinc-400 text-3xl'>My airbnb clone</h1>
    </div>
  )
}
