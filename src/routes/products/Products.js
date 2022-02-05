import React, {useState} from "react";

const Products = () => {

    const [products, setProducts] = useState([])

    const [itemName, setItemName] = useState('')
    const [itemDescription, setItemDescription] = useState('')
    const [image, setImage] = useState()
   

    const uploadImage = () => {
        const formData = new FormData()
        formData.append('file', image)
    }

    console.log(image)
    const addItem = () => {
        const newItem = {
            id: Math.floor(Math.random() * 100),
            name: itemName,
            desc: itemDescription,
        }
        setProducts([...products, newItem])
        setItemName('')
        setItemDescription('')
    }

    return (
        <>
        <div>
            <input 
            type="text"
               value={itemName}
               onChange={(e) => setItemName(e.target.value)}
            />
            <input 
            type="text"
               value={itemDescription}
               onChange={(e) => setItemDescription(e.target.value)}
            />
            <button type="button" onClick={addItem}>ADD</button>

            <input 
            type="file"
               
               onChange={(e) => setImage(e.target.files[0])}
               
            />
            <button type="button" onClick={uploadImage}>ADD</button>
        </div>
        {products.map((elem, idx) => {
            return (
                <div key={idx + elem.id}>
                     <div>{elem.name}</div>
                     <div>{elem.desc}</div>
                </div>
            )
        })}
        </>
        
    )
}

export default Products