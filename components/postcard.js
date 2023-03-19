import Image from 'next/image'
import Photo from '../images/photo.jpeg'
import {FiBookmark} from 'react-icons/fi'
import Thumbnail from '../images/thumbnail.png'
import Link from 'next/Link'
import { useEffect, useState } from 'react'
// import Slug from '../posts/[slug]'
import {db} from '../firebase'
import {doc, getDoc} from 'firebase/firestore'


const styles = {
wrapper:"flex max-w-[46rem] h-[10rem] items-center gap-[1rem]",
authorContainer:"",
onlyauthor:"flex",
authorImageContainer:" rounded-full overflow-hidden h-[2.4rem] w=[1.4rem] ",
authorImage:"object-cover rounded-full ",
authorName:"font-semibold py-2",
titleContainer:"max-w-5xl text-[2rem] font-bold curser-pointer ",
descriptionCont:"text-[#787878]",
attributesContainer:" flex items-center justify-between gap-[2rem] text-[#787878]",
category:"rounded bg-[#808080] text-white",
bookmarkContainer:"curser-pointer px-9 py-3",
articlesDetails:"my-2 flex"
}

const Postcard = ({article})=>{
    const [authorData, setAuthorData]= useState(null)

    useEffect(()=>{
        const getAuthorData = async ()=>{
            setAuthorData(
                await(await getDoc(doc(db, 'user', post.data.author))).data()
            )
        }
        getAuthorData()
    })
    return(
        <Link href={'/posts/${article.id}'}> 
    <div className={styles.wrapper}>


        <div className={styles.authorContainer}>
            <div className={styles.onlyauthor}>

            <div className={styles.authorImageContainer}>
                <Image
                src = {author.data.imageUrl}
                className = {styles.authorImage}
                width = {40}
                height = {40}
                />
            </div>
            <div className={styles.authorName}>
                <h1>{author.data.name}</h1>

            </div>
            </div>
        
            <div className={styles.titleContainer}>
            <h1>{post.data.title}</h1>
            </div>
            <div className={styles.descriptionCont}>
                <h1>{article.data.brief}</h1>
            </div>



            <div className={styles.attributesContainer}>
                <div className={styles.articlesDetails}>
                <span className={styles.articlesDetails}>{new Date(article.data.postedon).toLocalString(
                    'en-US',
                    {day:'numeric',
                    month:'short',
                                  
                })} <span className={styles.category}>{article.data.category}</span></span>
                 <span className={styles.bookmarkContainer}>
                    <FiBookmark className='h-5 w-5'/>
                 </span>
                </div>
            </div>
        </div>


        <div>
            <Image className='h-67 w-67'
            src = {article.data.banner}
            width = {100}
            height= {100}
            />
        </div>
    </div>
    </Link>
    )
    

}

export default Postcard