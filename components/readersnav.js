import Image from 'next/image'
import Logo from "../images/logo.png"
import Link from 'next/link'

import {HiOutlineHome}from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import {BiBookmarks} from  'react-icons/Bi'
import {RiArticleLine} from 'react-icons/ri'
import {BsPencilSquare} from 'react-icons/bs'
import Photo from '../images/photo.jpeg'

const styles = {
    navContainer:'w-[5.5rem] h-screen flex flex-col justify-between items-center p-[1rem]',
    iconsContainer: 'flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]',
    photoContainer:'w-[2.5rem] h-12 rounded-full ',
    logoContainer:"w-[5.5rem]",
}
const ReadersNav = ()=>{
    return(
        <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
            <Image 
            src = {Logo}
            height={140}
            width={140}
            />
        </div>


        <div className={styles.iconsContainer}>
        <HiOutlineHome/>

        <FiBell/>
        <BiBookmarks/>
        <RiArticleLine/>
        <BsPencilSquare/>
        </div>
        {/* --------- */}
        <div>
            <Image className={styles.photoContainer}
            src={Photo}
            />

        </div>


        </div>
    )

}
export default ReadersNav