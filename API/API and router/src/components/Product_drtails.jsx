import React, { useEffect, useState } from 'react'
import Loader from 'react-spinners/FadeLoader'
import { useParams, useHistory } from 'react-router-dom'
import '../App.css'
import axios from 'axios'

export default function Product_drtails(props) {


    const history = useHistory()
    const [Data, setdata] = useState([])
    const [loader, setLoader] = useState(true)

    const param = useParams();
    var Id = parseInt(param.id)

    useEffect(() => {

        //http://localhost:3000/products/

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

    const edit = (id) => {
        history.push(`/edit/${id}`)
    }
    return (
        <div>
            {loader === true ? <div className='App'><Loader /></div> :

                <div className="card mb-3 pl-5 pt-5" >
                    <img src={Data[Id].image} style={{ width: '200px' }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><b>Title:</b> {Data[Id].title}</h5>
                        <p className="card-text"><b>Desc:</b> {Data[Id].description}</p>
                        <p className="card-text"><small className="text-muted"><b>Category:</b> {Data[Id].category}</small></p>
                        <p className="card-text"><small className="text-muted"><b>Price:</b> {Data[Id].price} USD</small></p>
                    </div>
                    <button onClick={() => edit(Id)} className='btn btn-info mb-2 ' style={{ width: '100px' }}>Edit</button>
                </div>

            }
        </div>
    )
}
