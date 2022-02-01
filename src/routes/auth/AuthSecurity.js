import React from "react";

import {Route, Redirect} from 'react-router-dom'

const AuthSecurity = ({path, component}) => {
     const backToken = 'TEST'

     let auths = localStorage.getItem('token')
     if (auths === backToken) {
        auths = true
     } else {
         auths = false
     }

     return (
       <>
          {auths ? <Route path={path} component={component}/> : <Redirect to="/" />}
       </>
     )
}

export default AuthSecurity