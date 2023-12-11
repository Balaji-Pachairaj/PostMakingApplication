import React , {useState} from "react";
import ModalContext from "./context";



const ModalProvider = (props) =>{
    const [isModal , setIsModal] = useState(false)

    const closeHandler = ()=>{
        setIsModal(false)
    }
    const openHandler = () =>{
        setIsModal(true)
    }

    const modalContext = {
        isModal : isModal,
        onClose : closeHandler,
        onOpen : openHandler
    }
    return <ModalContext.Provider value={modalContext}>
        {props.children}
    </ModalContext.Provider>
}


export default ModalProvider