import '../App.css';
import React, { useState, useEffect } from 'react'
import App from '../App'
import FadeLoader from "react-spinners/FadeLoader";

export default function Product_detail_page(props) {

    const [count, setCount] = useState(0)
    const [loder, setloder] = useState(true)

    // For loding page & componentDidMount
    useEffect(() => {
        if (count == 0) {
            setTimeout(() => {
                setloder(false)
            }, 2000);
        }

        //componentWillUnmount
        return () => {
            alert('componentWillUnmount')
        }

    }, [])

    //componentWillUpdate
    useEffect(() => {
        if (count > 0) {
            alert('componentWillUpdate')
        }
    }, [count])

    const update = (value) => {
        setCount(count + 1)
    }

    //Sorry for this method
    const home = () => {
        alert('componentWillUnmount')
        window.location.reload()
    }

    return (
        <>{loder == true ? <div className='App'>
            <FadeLoader />
        </div> :

            <>
                <div className="border" style={{ backgroundColor: "steelblue", color: 'yellowgreen' }}>Product Details Page</div>
                <div className="pt-5">
                    <div class="card ">
                        <h5 class="card-header">Product No: {props.No}</h5>
                        <div class="card-body">
                            <h5 class="card-title">Product Name: {props.Name}</h5>
                            <p class="card-text">Desc: {props.Desc}</p>
                            <h5>Price: {props.Price}</h5>
                            <h6 className="card-text">Category: {props.Cate}</h6>
                            <a class="btn btn-primary " onClick={() => update('')}>State Update</a>
                            <a class="btn btn-info" onClick={() => home()}>Back to Home</a>
                        </div>
                    </div>
                </div>
            </>

        }
        </>
    )
}




