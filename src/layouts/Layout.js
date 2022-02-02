import React from 'react'
import { Route } from 'react-router'
import Header from '../modules/header/Header'
import Menu from './../modules/menu/Menu'


const Layout = ({
    path,
    component
}) => {
    return (
        <div style={{display: 'flex', height: '100vh'}}>
            <div style={{width: '15%', background:'green', padding: '20px'}}>
                <Menu />
            </div>
            <div style={{width: '85%', height: '100vh'}}>
                <Header />
                <div style={{padding: '20px'}}>
                    <Route path={path} component={component} />
                </div>
            </div>
        </div>
    )
}

export default Layout