import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Loader from 'react-spinners/FadeLoader'

export default function Products(props) {

    const [Data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {

        //http://localhost:3000/products/

        axios.get(`https://fakestoreapi.com/products/`).then((res) => {
            var data = res.data;
            setdata(data)
            setTimeout(() => {
                setloading(false)
            }, []);

        }).catch((err) => {
            console.log(err, "ERROR");
        })
    }, [])

    const history = useHistory()
    const click = (id) => {
        history.push(`/details/${id}`)
    }

    return (
        <>
            {loading === true ? <div className="App"><Loader /></div> : <div>
                <div onClick={() => click(props.Value)}>
                    <div className="pl-lg-5 pt-lg-5">
                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={Data[props.Value].image} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{Data[props.Value].title}</h5>
                                        <p className="card-text"><small className="text-muted"><b>{Data[props.Value].price}</b> USD</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

        </>
    )
}
