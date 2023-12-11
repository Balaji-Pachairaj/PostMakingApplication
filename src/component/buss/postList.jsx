import React , {useEffect, useState} from "react";

import classes from "./postList.module.css"
import Post from "./post";


const dummyList = [
    {
        title : "Thing",
        para : `Lorem ipsum dolor sit amet co
                nsectetur adipisicing elit. Doloribus 
                suscipit dolores voluptatibus alias tenetur
                delectus sequi molestiae qui exercitationem,
                reiciendis impedit praesentium autem porro dol
                orum mollitia nemo error amet itaque`,
        author : "Balaji"
    },
    {
        title : "Thing",
        para : `Lorem ipsum dolor sit amet co
                nsectetur adipisicing elit. Doloribus 
                suscipit dolores voluptatibus alias tenetur
                delectus sequi molestiae qui exercitationem,
                reiciendis impedit praesentium autem porro dol
                orum mollitia nemo error amet itaque`,
        author : "Balaji"
    },
    {
        title : "Thing",
        para : `Lorem ipsum dolor sit amet co
                nsectetur adipisicing elit. Doloribus 
                suscipit dolores voluptatibus alias tenetur
                delectus sequi molestiae qui exercitationem,
                reiciendis impedit praesentium autem porro dol
                orum mollitia nemo error amet itaque`,
        author : "Balaji"
    }

]
const PostList = (props) =>{
    const [isLoading , setIsLoading] = useState(false)
   
    const [postData , setPostData] = useState([])
    useEffect(()=>{


        async function fetchingPostData (){
            setIsLoading(true)
            const response = await fetch("https://postmaking-default-rtdb.firebaseio.com/post.json")
    
            
            const responseData = await response.json()
        
           
            const postsList = []
            for (const post in responseData){
                postsList.push({
                  
                    title : responseData[post].title,
                    author : responseData[post].author,
                    para : responseData[post].para
                })
            }
           
            setPostData(postsList)
            setIsLoading(false)
        }   
    
        fetchingPostData()
    },[])
  
    return <>
    {
        isLoading && <p className={classes.loading}>Loading . . .</p>
    }
    {
        !isLoading &&   <div className={classes.postList}>
        {

            postData.map((post) =>{
                return <Post
                title = {post.title}
                para = {post.para}
                author = {post.author}
                />
            })
        }
    </div>
    }
    </> 
    
  
}


export default PostList