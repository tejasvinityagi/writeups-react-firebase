import Image from 'next/image'
import Photo from '../images/imagew.png'

const styles = {
banner:"max-w-xl text-[6rem] font-mediumSerif bg-[#FDD817] ",
accentedButton:"curser-pointer object-contain text-white bg-black px-4 py-2 rounded-full ",
content:"max-w-29xl flex-8 flex item-center"
}


const Banner = ()=>{
    return (
        <div className={styles.content}>
         <div className="space-y-5 bg-[#fdd817] item-center px-9">
            <h1 className={styles.banner}>Write Your Way</h1>
            <h3 className="bg-[#fdd817] text-2xl">Discover Stories, thinking and expertise from writers on any topic.</h3>
            <button className={styles.accentedButton}>Start reading</button>
            </div>
            <Image 
            className='px-7 hiden h-46 md:inline-flex object-content flex-9 bg-[#fdd817]'
            src={Photo}
            height={300}
            width={550}/>
         
        </div>
        
)
}

export default Banner