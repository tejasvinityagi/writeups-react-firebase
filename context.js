import {createContext,useEffect, useState} from 'react'
import {collection, getDocs, setDocS, doc} from 'firebase/firestore'
import {db} from './firebase'
import React from 'react'
import {auth, provider} from './firebase'
import { signInWithPopup } from 'firebase/auth'

const WriteupsContext = React.createContext()


const WriteupsProvider = ({children})=>{
    const [users, setUsers] = useState([])
    const [articles, setArticles] = useState([])


    useEffect(()=>{
        const getUsers = async ()=>{
            const querySnapshot = await getDocs(collection(db, 'articles'))
    
    
            setArticles(querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                data: {
                    article:doc.data().article,
                    brief: doc.data().brief,
                    category: doc.data().category,
                    // postLength: doc.data().postLength,
                    // bannerImage: doc.data().bannerImage,
                    title: doc.data().title,
                    // comments: doc.data().comments,
                    postedon: doc.data().postedon,
                    author: doc.data().author,
                    // authorImage: doc.data().authorImage
                }
            }
                
            }))
        }
        getarticles()
    
    
    },[])

    const handleUserAuth = async ()=>{
        userData = await signInWithPopup(auth, provider)
        const user = userData.user
    }

    return (
        <WriteupsContext.Provider
        value={{articles, users, handleUserAuth}}>
            {children}

        </WriteupsContext.Provider>
    )

}



export {WriteupsContext, WriteupsProvider}