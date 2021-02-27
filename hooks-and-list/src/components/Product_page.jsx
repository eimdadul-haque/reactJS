import '../App.css';
import React, { useEffect } from 'react'


export default function Product_page(props) {

    useEffect(() => {
        return () => {
            console.log('Unmount')
        }
    }, [])

    return (

        <diV className='pt-4'>
            <div className="card text-center " style={{ width: '18rem' }}>
                <div class="card-header">
                    <b>Product {props.No}</b>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.Name}</h5>
                    <p className="card-text">Price: <b>{props.Price}</b> BDT</p>

                </div>
            </div>
        </diV>

    )
}
