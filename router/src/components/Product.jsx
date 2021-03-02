import '../App.css';
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom'
import data from '../Data/Data.json'

export default function Product_page(props) {


    const history = useHistory()

    const click = (id) => {
        history.push(`/details/${id}`)
    }
    return (

        <diV className='pt-4'>
            <div onClick={() => click(props.value)} className="card text-center " style={{ width: '18rem' }}>
                <div class="card-header">
                    <b>Product {data[props.value].No}</b>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data[props.value].Name}</h5>
                    <p className="card-text">Price: <b>{data[props.value].Price}</b> BDT</p>

                </div>
            </div>
        </diV>

    )
}
