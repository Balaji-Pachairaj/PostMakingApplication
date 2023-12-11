import React , {useContext} from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css"
import ModalContext from "../context/context";



const Modal = (props)=>{

    let modalCtx = useContext(ModalContext)
    
    let display  = modalCtx.isModal
    return createPortal(
        <>
            {display &&
                <div>
                  <div className={classes.backdrop} onClick={modalCtx.onClose}></div>
                  <div className={classes.overlay}>
                      {
                          props.children
                      }
                  </div>
              </div>
            }
        </>
        ,
        document.getElementById("overlay")
    )
}


export default Modal
  