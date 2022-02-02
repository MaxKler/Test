import React, { useState } from "react";
import classes from './header.module.scss'
import ExitModal from "../../components/modal/ExitModal";

const Header = () => {

    let userName = localStorage.getItem('name')
    
    const [exitModal, setExitModal] = useState(false)

    const openExitModal = () => {
        setExitModal(true)
    }

    return (
        <>  
            <div className={classes.header}>
                <div>{userName}</div>
                <div className={classes.header__back} onClick={openExitModal}>Back</div>
            </div>
            <ExitModal 
                exitModal={exitModal}
                setExitModal={setExitModal}
            />
        </>  
    )
}

export default Header