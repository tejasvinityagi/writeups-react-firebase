import Image from 'next/image'
import Photo from '../images/photo.jpeg'
import Thumbnail from '../images/thumbnail.png'

const styles={
    content:"h-screen overflow-scroll w-[55rem] p-[2rem] border-l border-r",
authorcontainer:"flex gap-[0.4rem]",
authorNameContainer:"font-semibold mt-[2.5rem] ",
authorImageContainer:" rounded-full overflow-hidden w-[3.5rem] h-[3.5rem] mb-[0.5rem] mt-[1.5rem]",
postContainer:"flex-cols",
statusCon:"text-[WHITE] bg-[green] rounded-full overflow-hidden px-[.5rem] font-semibold mb-[1.5rem]",
dateinfo:"text-[#787878]",
postImageContainer:"mb-[1.5rem] ",
authorDetails:"flex justify-space-between gap-[20rem]",
socials:"mt-[2.5rem]",
titleContainer:"font-bold text-3xl mb-[0.5rem]",
}


const Postup = ({article, author})=>{
    return (
       <div className={styles.content}>
       <div className={styles.authorcontainer}>
        <div className={styles.authorImageContainer}>
            <Image
            src={Photo}
            />

        </div>
        <div className={styles.authorDetails}>
        <div className={styles.writeupinfo}>
            <div className={styles.authorNameContainer}>{author?.data?.name}</div>
            <div className={styles.dateinfo}>{new Date(article.data?.postedon).toLocaleString('en-US',{
                day: 'numeric',
                month:'short',
                year:'numeric'
            })}
            </div>
        </div>
        <div className={styles.socials}>twitter/insta/in</div>
        </div>

       </div>

        <button className={styles.statusCon}>Listen</button>


       {/* ---------- */}
       <div className={styles.postContainer}>
        <div className={styles.postImageContainer}>
            <Image
            src={Thumbnail}
            height={500}
            width={699}
            />

        </div>
        <div className={styles.wrtiteupContainer}>
            <div className={styles.titleContainer}>{article?.data?.title}
            </div>
            <div></div>
            <div className={styles.articleContainer}>{article?.data?.article}
                </div>
        </div>

       </div>
       </div>
    )

}
export default Postup