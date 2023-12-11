import React from "react";
import classes from "./post.module.css"
import PostCard from "../UI/postCard";

const Post = (props) =>{

   const {title , para , author} = props


   return <>
         <PostCard>
            <div className={classes.title}>
               <p>{title}</p>
            </div>

            <div className={classes.para}>
                  <p>{para}</p>
            </div>

            <div className={classes.author}>
                  <p>
                    <span>-</span>
                     {author}
                  </p>
            </div>
         </PostCard>
      </>

}

export default Post