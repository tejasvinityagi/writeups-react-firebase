import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdMarkEmailUnread} from 'react-icons/md'
import Ghoomo from '../images/ghoomo.png'
import Tourism from '../images/tourism.png'
import Photo2 from '../images/photo2.png'
import Photo from '../images/photo.jpeg'
import Thumbnail from '../images/thumbnail.png'
// import Qazi from '../static/qazi.jpg'


const styles = {
    buttonContainer:'text-white bg-black rounded rounded-full py-2 px-[3rem]  text-[0.9rem] mb-[1.5rem] mt-[2.9rem] font-semibold',
    searchBarContainer:"flex items-center gap-[.6rem] h-[1.8rem] border mb-[.6rem] bg-white rounded-full py-3 curser-pointer",
    searchInput:"border-none outline-none bg-none rounded-full ",
    dpContainer:"h-[5rem] w-[5rem] rounded-full py-5 overflow-hidden ",
    logoContainer:"py-5 ",
    authorName:"font-semibold  mt-[.6rem]",
    authrFollowing:"text-[#787878] mb-[1.1rem]",
    connection:"flex gap-[.6rem] rounded-full text-white ",
    connectionButton:"bg-[green] rounded-full px-[0.6rem] py-[0.2rem] mb-[1.6rem]",
    writeupsCont:"font-semibold mb-[1.2rem]",
    moreArticles1:"flex-cols gap-[1.6rem] mb-[1.2rem] ",
    titles:"font-bold",
    authorCont:"flex",
    authorImage:"rounded-full overfow-hidden w-[1.8rem] h-[1.9rem]",
    authorName:"mb-[0.2rem] font-semibold",
    otherPosts:"flex gap-[0.6rem]"
   
}


const Recommendation = ()=>{
    return (
        <div className={styles.recommendationContainer}>

            <div className={styles.buttonContainer}>
                <button>GET UNLIMITED ACCESS</button>
            </div>

            <div>
                <Image/>
                <div className={styles.searchBarContainer}>
                <AiOutlineSearch/>
                <input
                className={styles.searchInput}
                placeholder="search"
                type={'text'}
                />

                </div>

               

                <div className={styles.logoContainer}>


                <div className={styles.dpContainer}>
                   <Image
                   src={Photo2}
                   />
                </div>

                <div className={styles.authorName}>Tejasvini Tyagi</div>
                <div className={styles.authrFollowing}>1M followers</div>

                <div className={styles.connection}>
                <button className={styles.connectionButton}>Follow</button>
                <button className={styles.connectionButton}><MdMarkEmailUnread/></button>
                </div>

                <div className={styles.writeupsCont}>More From Writeups</div>



                {recommendedPosts.map(post=>(

                <div className={styles.moreArticles1}>

                    <div className={styles.authorCont}>
                        <Image className={styles.authorImage}
                        src={Photo}
                        height={30}
                        width={30}
                        />

                        <div className={styles.authorName}>{post.author.name}</div>
                    </div>


                    <div className={styles.otherPosts}>
                        <div className={styles.titles}>{post.title}</div>


                        <div className={styles.imageContainer}>
                        <Image
                
                        src={post.Image}
                        height={60}
                        width={70}
                        />
               
                        </div>
                    </div>

               </div>

               ))}

                


            </div>
            </div>
        
        </div>
    )
}
export default Recommendation


const recommendedPosts = [
    {
        title:"learn about kubewrnetes",
        Image:Tourism,
        author:{
            name:"tejasvini tyagi",
            Image:""
        }

    },

    {
        title:"let's do some docker",
        Image:Ghoomo,
        author:{
            name:"champaign",
            Image:""
        }

    },

    {
        title:"difference between gcp and azure",
        Image:Thumbnail,
        author:{
            name:"fam group",
            Image:""
        }

    },
]