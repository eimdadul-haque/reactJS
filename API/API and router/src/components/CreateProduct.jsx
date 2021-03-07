import React, { useEffect, useState } from 'react'
import Loader from 'react-spinners/FadeLoader'
import '../App.css'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

export default function CreateProduct() {
    const history = useHistory()
    const [loader, setLoader] = useState(true)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image] = useState('https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg')

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 200);
    }, [])

    //http://localhost:3000/products/

    const submit = () => {
        if (title && price && description && image && category) {

            axios.post(`https://fakestoreapi.com/products/`, {
                title, price, description, image, category
            }).then((res) => {
                alert(res.data + " Success")
            }).catch((err) => {
                alert(err.response)
            })
            history.push(`/`)
        } else {
            alert('Form Empty');
        }
    }



    return (
        <>{loader ? <div className='App'><Loader /></div> : <div className='container'>
            <div className='mb-5 mt-3'><h1 className='text-info'>Product Create Page</h1></div>
            <form >
                <div className="form-group">
                    <input className="form-control" value={title} placeholder='Title' onChange={(eve) => {
                        setTitle(eve.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <input className="form-control" value={description} placeholder="Description" onChange={(eve) => {
                        setDescription(eve.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <input className="form-control" value={category} placeholder="Category" onChange={(eve) => {
                        setCategory(eve.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <input className="form-control" value={price} placeholder="Price" onChange={(eve) => {
                        setPrice(eve.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <input type='file' className="form-control" placeholder="Image" />
                </div>
                <div className="form-group">
                    <button onClick={() => submit()} className='btn badge-info'>Submit</button>
                </div>
            </form>
        </div>}
        </>
    )
}
