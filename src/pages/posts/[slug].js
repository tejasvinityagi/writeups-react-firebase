import ReadersNav from "components/readersnav"
import Recommendation from "components/recommendation"
import Postup from "components/postup"
import { WriteupsContext } from "context"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const style ={ 

    navCont:"flex gap-[2.5rem]",
    
}
const Post=()=>{
    const {articles, user}= useContext(WriteupsContext)
    const router = useRouter()
    const [article, setarticles] = useState([])
    const [author, setAuthor] = useState([])


    useEffect(()=>{
        if(articles.length === 0){
            return
        }

        setarticles(articles.find(article => article.id===router.query.slug))

        setAuthor(user.find(user => user.id === postMessage.data?.author))
    }, [article])

    return(
        <div className={style.navCont}>
        <ReadersNav/>
        <Postup article={article} author={author}/>
        <Recommendation/>
        </div>
    )
    
   
    }
    export default Post;