import '../App.css';
import React, { useState, useEffect } from 'react'
import App from '../App'
import FadeLoader from "react-spinners/FadeLoader";
import { useParams } from 'react-router-dom'
import data from '../Data/Data.json'

export default function Product_detail_page(props) {
    const param = useParams();
    var a = parseInt(param.id)
    const [loader, setloader] = useState(true)

    // For loding page & componentDidMount
    useEffect(() => {
        setTimeout(() => {
            setloader(false)
        }, 2000);
    }, [])




    return (
        <>{loader == true ? <div className='App'>
            <FadeLoader />
        </div> :

            <>
                <div className="border" style={{ backgroundColor: "steelblue", color: 'yellowgreen' }}>Product Details Page</div>
                <div className="pt-5">
                    <div class="card ">
                        <h5 class="card-header">Product No: {data[a].No}</h5>
                        <div class="card-body">
                            <h5 class="card-title">Product Name: {data[a].Name}</h5>
                            <p class="card-text">Desc: {data[a].Description}</p>
                            <h5>Price: {data[a].Price}</h5>
                            <h6 className="card-text">Category: {data[a].Category}</h6>
                           
                        </div>
                    </div>
                </div>
            </>

        }
        </>
    )
}




