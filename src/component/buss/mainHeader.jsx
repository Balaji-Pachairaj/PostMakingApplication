import React , {useContext} from "react";
import classes from "./mainHeader.module.css"
import Button from "../UI/Button";
import ModalContext from "../context/context";


const MainHeader = (props) =>{
    
    const modalCtx = useContext(ModalContext)

    const clickHandler = () =>{
        modalCtx.onOpen()    
    }
    return <div className={classes.header}>
        <h1>PostMaking</h1>
     
        <Button onClick={clickHandler} >New Post</Button>
   
    </div>

}

export default MainHeader