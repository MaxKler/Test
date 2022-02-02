import React from "react";

import { Redirect} from 'react-router-dom'
import Layout from "../../layouts/Layout";

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
          {auths ? <Layout path={path} component={component}/> : <Redirect to="/" />}
       </>
     )
}

export default AuthSecurity