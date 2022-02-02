import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {

    const menu = [
        {
            id: 0,
            title: 'Продукти',
            link: '/products'
        },
        {
            id: 1,
            title: 'Магазин',
            link: '/shop'
        }
    ]
    return (
       <div>
           {menu.map((elem, idx) => {
               return (
                   <Link style={{fontSize: '30px' , display:"flex", flexDirection:"column"}}
                        to={elem.link} 
                        key={`${elem.id + idx}`}>
                            {elem.title}
                   </Link>
               )
           })}
       </div>
    )
}

export default Menu