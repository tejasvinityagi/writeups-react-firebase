import Image from 'next/image'
import Logo from '../images/logo.png'
import { WriteupsContext } from 'context'
import { useContext } from 'react'

const styles = {
  wrapper: 'flex justify-center gap-10 p-5 bg-[#Fcc817]',
  content: 'max-w-7xl flex-1 flex justify-between gap-18',
  logoContainer:'flex items-center flex-start',
  logo:'cursor-pointer  object-contain ',
  bannerNav: 'flex cursor-pointer items-center space-x-5',
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full'
}

const Header = ()=>{
  const {handleUserAuth}=useContext(WriteupsContext)
    return(
        <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
          <Image
          className={styles.logo}
          src={Logo}
          height={1800}
          width={100}
          />
          </div>
          <div className={styles.bannerNav}>
            <div>Our story</div>


            <div>Membership</div>
            
        
            <div onClick={handleUserAuth}>Sign In</div>
            

            <Link href={'/signup/signup'}>
            <div className={styles.accentedButton}>Get started</div>
            </Link>
           
          </div>
    
        </div>
       </div>
    )
}
       

export default Header 

