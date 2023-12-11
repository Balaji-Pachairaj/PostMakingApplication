import React, {useContext} from "react";


const ModalContext = React.createContext({
    isModal : false,
    onClose : (d) =>{

    },
    onOpen : (d) =>{

    }

})

export default ModalContext