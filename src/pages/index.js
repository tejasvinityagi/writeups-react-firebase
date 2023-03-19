import Header from "components/header"
import Banner from "components/banner"
import Postcard from "components/postcard"
import {WriteupsContext} from "context"
import {useContext} from "react"



export default function Home() {
const {articles} =useContext(WriteupsContext)
console.log(articles, 'fir')


  const styles = {
    poststyles:"flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3",

    container:"max-w-7xl flex-1",

    main:"flex justify-center",

  
  }
  return (
    <div className={styles.wraper}>       
        <Header/>
    <Banner/>
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.poststyles}>
          {articles.map(article => {     
            <Postcard article={article} key={article.id}/>
          })
        }

        <Postcard/>
          
    
    </div>
    </div>
    </div>
    </div>
  )

}
