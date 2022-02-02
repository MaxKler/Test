import React, { useState } from "react";
import classes from './../../components/modal/modal.module.scss'


const Shop = () => {
   
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)  
     },5000)

    return (
        < >
           <div>
           {isLoaded ?
            <>
              <div>Shop</div>
            </> : 
           <div className={classes.loader}></div>  
           }
           </div>
        </>
    )
}

export default Shop