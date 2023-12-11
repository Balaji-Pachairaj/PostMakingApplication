import React from "react";
import classes from "./postCard.module.css"

const PostCard = (props) =>{
    //Post Card Component
    return <div className={classes.postCard}>
        {
            props.children
        }
    </div>
}

export default PostCard