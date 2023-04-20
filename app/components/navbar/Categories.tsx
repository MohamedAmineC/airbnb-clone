"use client"

import Container from "../container"
import {TbBeach, TbMountain, TbPool} from "react-icons/tb"
import { IconType } from "react-icons"
import {GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill} from "react-icons/gi"
import {MdOutlineVilla} from "react-icons/md"
import {IoDiamond} from "react-icons/io5"
import {BsSnow} from "react-icons/bs"
import CategoryBox from "../CategoryBox"
import { usePathname, useSearchParams } from "next/navigation"
import { FaSkiing } from "react-icons/fa"
interface Category {
    label: string,
    icon: IconType,
    description?: string
}
export const categories:Category[] = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has Windmills !'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is a modern Villa !'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has an amazing pool!'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is located in an island !'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a cool lake !'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities around it!'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is in a castle !'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activites close to it !'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is in the arctic !'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is situated next to a cave !'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in the middle of the desert !'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in the barn !'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is luxurious!'
    }

]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if(!isMainPage){
        return null;
    }

  return (
    <Container>
        <div className="pt-4 flex items-center justify-between overflow-x-auto">
            {categories.map(item => (
               <CategoryBox 
               key={item.label} 
               label={item.label} 
               icon={item.icon}
               selected={category === item.label}
               /> 
            ))}
        </div>
    </Container>
  )
}

export default Categories