import React, { useState } from "react";
import DATA from './../../userData'
import classes from './auth.module.scss'
import { useHistory } from "react-router";

const Auth = () => {
   
    const [value, setValue] = useState({
        login: '',
        password: '',
        name: ''
    })
    const [authError, setAuthError] = useState(false)
    const history = useHistory()

const signIn = () => {
    const [user] = DATA.filter((elem) => {
        return  value.login === elem.login
    })
    if (!user) {
        setAuthError(true)
    } else {
        if (user.login === value.login) {
            setAuthError(false)
        } 
        if (user.password === value.password) {
            localStorage.setItem('token', 'TEST')
            localStorage.setItem('name', user.name)
            history.push('/shop')
        } else {
            alert('bad')
        }
    }
}    

    return (
        <div className={classes.auth}>
            <form>
                <div>
                    <input 
                        value={value.login}
                        onChange={(e) => setValue({
                            ...value,
                        login: e.target.value
                        })}
                    />
                   {!authError ? 
                   <></> :
                   <div>error</div>
                   }
                </div>
            
                <input value={value.password} onChange={(e) => setValue({
                   ...value,
                   password: e.target.value
                })} />
                <div onClick={signIn}>XXX</div> 
            </form>
        </div>
    )
}

export default Auth