import React, { useState } from "react";
import classes from './../../components/modal/modal.module.scss'
import { useHistory } from "react-router";

const Shop = () => {
    let userName = localStorage.getItem('name')
    
    const [isLoaded, setIsLoaded] = useState(false)
    const [exitModal, setExitModal] = useState(false)

    const history = useHistory()

    const openExitModal = () => {
        setExitModal(true)
    }
    const closeExitModal = () => {
        setExitModal(false)
    }
    const backToLogin = () => {
          localStorage.removeItem('name')
          localStorage.removeItem('token')
          history.push('/')
    }

    setTimeout(() => {
       setIsLoaded(true)  
    },5000)
    return (
        < >
        <div className={isLoaded ? classes.shop2 : classes.shop} >
        {isLoaded ?
        <>
           <div>{userName}</div>
           <div onClick={openExitModal}>Back</div>
           <div className={classes.modal}>
               <div className={exitModal ? classes.modal_window : classes.modal_none}>
                   <div>Ви упевнені?</div>
                   <div style={{display: 'flex'}}>
                       <div onClick={backToLogin} className={classes.modal_btn}>Так</div>
                       <div onClick={closeExitModal} className={classes.modal_btn}>Ні</div>
                   </div>
               </div> 
           </div>
        </> : 
        <div className={classes.loader}></div>  
        }
        </div>
        
        </>
    )
}

export default Shop