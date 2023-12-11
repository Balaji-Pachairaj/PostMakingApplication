
import ModalContext from "../context/context"
import classes from "./NewPost.module.css"
import React , {useContext , useReducer , useState} from "react"

const errorMessage = {
    title : "***title field cannot be empty",
    name: "***name is must",
    article : "it should have more than 100words"
}
const titleReducer = (state , action) =>{
    const valid = (value) =>{
        if (value.length === 0 ){
            return false
        }
        else {
            return true
        }
    }
    switch (action.move){
        case "CHANGE" : {
         
            return {
                ...state,
                value : action.valueChange,
                isValid : valid(action.valueChange),
                isTouched : true,
              
            }
        }
    }
}

const nameReducer = (state , action ) =>{
    const valid = (value) =>{
        if (value.length === 0 ){
            return false
        }
        else {
            return true
        }
    }
    switch (action.move){
        case "CHANGE" : {
          
            return {
                ...state,
                value : action.valueChange,
                isValid : valid(action.valueChange),
                isTouched : true,
              
            }
        }
    }
}

const ArticleReducer = (state , action) =>{
    const valid = (value) =>{
        if (value.length < 100 ){
            return false
        }
        else {
            return true
        }
    }
    switch (action.move){
        case "CHANGE" : {
           
            return {
                ...state,
                value : action.valueChange,
                isTouched : true,
                isValid : valid(action.valueChange)
            }
        }
    }
}

const NewPost = (props) =>{
    const modalCtx = useContext(ModalContext)
    const [isLoading , setIsLoading] = useState(false)
    
    const [isDone , setIsDone] = useState(false)
    
    const [titleInput , dispatchTitle] = useReducer(titleReducer , {
        value : "",
        isValid : false , 
        isTouched : false,
    })
    const [nameInput , dispatchName] = useReducer(nameReducer , {
        value : "",
        isValid : false , 
        isTouched : false
    })
    const [articleInput , dispatchArticle] = useReducer(ArticleReducer , {
        value : "",
        isValid : false , 
        isTouched : false
    })
    

    const titleError = (titleInput.isTouched && !titleInput.isValid)
    const nameError = (nameInput.isTouched && !nameInput.isValid)
    const articleError = (articleInput.isTouched && !articleInput.isValid)

    const isFormVaild = (titleInput.isValid && nameInput.isValid && articleInput.isValid)
    const closeHandler = () =>{
        modalCtx.onClose()
    }

    const titleChangleHandler = (event) =>{
   
        dispatchTitle({
            move : "CHANGE",
            valueChange : event.target.value
        })
    }
    
    const nameChangeHandler = (event) =>{
        dispatchName({
            move :"CHANGE",
            valueChange : event.target.value
        })
    }
    const articleChangeHandler  = (event) =>{
        dispatchArticle({
            move : "CHANGE",
            valueChange : event.target.value
        })
    }
    
    const submitHandler = (event) =>{
        event.preventDefault()

        console.log(titleInput , nameInput , articleInput)
        console.log(isFormVaild)
        if (!isFormVaild){
            
            return false;
        }

        let post  = {
            title : titleInput.value ,
            author : nameInput.value ,
            para : articleInput.value  
        }
        async function fetchPostData(){

            setIsLoading(true)
            const response = await fetch("https://postmaking-default-rtdb.firebaseio.com/post.json",{
                method : "POST",
                body : JSON.stringify(post),
                header : {
                    "Content-Type" : "application/json"
                  }
            })
            console.log(response)
            const dataId = await response.json();
            setIsLoading(false)
            setIsDone(true)
            console.log(dataId)
        }
        fetchPostData()
    }

    return <div className={classes.bigBox}>
        {isLoading && !isDone &&
        <p className={classes.loading}>Loading.....</p>}
       
        {
        !isLoading && isDone && 
        
        <div className={classes.done}>
            <p>Done. Your article got updated refresh to see your article</p>
            <button onClick={closeHandler}>Close me</button>
        </div>
        }
        {!isLoading && !isDone &&
            <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.title}>
                <label>Title  </label>
                <input type="text" onChange={titleChangleHandler} value={titleInput.value}  />
            </div>
            {titleError && <p className={classes.error}>{errorMessage.title}</p>}
            <div className={classes.title}>
                <label>Name: </label>
                <input type="text" onChange={nameChangeHandler} value={nameInput.value} />
            </div>
            {nameError && <p className={classes.error}>{errorMessage.name}</p> }
            <div className={classes.article}>
                <label>Article: </label>
                <textarea rows={10} onChange={articleChangeHandler} value={articleInput.value}></textarea>
            </div>
            {articleError && <p className={classes.error}>{errorMessage.article}</p>}
            <div className={classes.buttonBox}>
                <button className={classes.cancel} onClick={closeHandler}>Cancel</button>
                <button className={classes.submit}>Submit</button>
            </div>
        </form>
        
        }
     

    </div>
    
   
}

export default NewPost