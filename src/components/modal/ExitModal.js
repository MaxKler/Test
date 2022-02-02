import React from "react";
import classes from './../modal/modal.module.scss'

import { useHistory } from "react-router";

const ExitModal = ({
    exitModal,
    setExitModal
}) => {
    const history = useHistory()

    const closeExitModal = () => {
        setExitModal(false)
    }
    const backToLogin = () => {
          localStorage.removeItem('name')
          localStorage.removeItem('token')
          history.push('/')
    }

    return (
        <div className={exitModal ? [classes.modal, classes.modal__active].join(' ') : classes.modal}>
            <div className={classes.modal_window}>
                <div>Ви упевнені?</div>
                <div style={{display: 'flex'}}>
                    <div onClick={backToLogin} className={classes.modal_btn}>Так</div>
                    <div onClick={closeExitModal} className={classes.modal_btn}>Ні</div>
                </div>
            </div> 
        </div>
    )
}

export default ExitModal