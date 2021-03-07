import React, { useEffect, useState } from 'react'
import Loader from 'react-spinners/FadeLoader'
import '../App.css'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'


export default function CreateProduct() {

    const [Data, setdata] = useState([])
    const [loader, setLoader] = useState(true)

    const history = useHistory()
    const param = useParams();
    var Id = parseInt(param.id)

    //http://localhost:3000/products/

    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products/`).then((res) => {
            var data = res.data;
            setdata(data)
            setTimeout(() => {
                setLoader(false)
            }, []);

        }).catch((err) => {
            console.log(err, "ERROR");
        })
    }, [])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image] = useState('https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg')

     //http://localhost:3000/products/

    const submit = (id) => {
        if (title && price && description && image && category) {
            axios.patch(`https://fakestoreapi.com/products/${id + 1}`, {
                title, price, description, image, category,

            }).then((res) => {
                alert(res.status+" Success")
            }).catch((err) => {
                console.log(err.response, "Error");
            })
            history.push(`/details/${id}`)
        } else {
            alert("Form Empty, please Update all value ");
        }
    }

    return (<>{loader ? <div className='App'><Loader /></div> : <div className='container'>
        <div className='mb-5 mt-3'><h1 className='text-info'>Product Editr Page</h1></div>
        <form >
            <div className="form-group">
                <input className="form-control" defaultValue={Data[Id].title} onChange={(eve) => {
                    setTitle(eve.target.value)
                }} />
            </div>
            <div className="form-group">
                <input className="form-control" defaultValue={Data[Id].description} onChange={(eve) => {
                    setDescription(eve.target.value)
                }} />
            </div>
            <div className="form-group">
                <input className="form-control" defaultValue={Data[Id].category} onChange={(eve) => {
                    setCategory(eve.target.value)
                }} />
            </div>
            <div className="form-group">
                <input className="form-control" defaultValue={Data[Id].price} onChange={(eve) => {
                    setPrice(eve.target.value)
                }} />
            </div>
            <div className="form-group">
                <input type='file' className="form-control" placeholder="Image" />
            </div>
            <div className="form-group">
                <button onClick={() => submit(Id)} className='btn badge-info'>Submit</button>
            </div>
        </form>
    </div>}
    </>
    )
}




