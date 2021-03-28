import React, { useEffect, useState } from 'react'
import Loader from 'react-spinners/FadeLoader'
import { useParams, useHistory } from 'react-router-dom'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'

export default function ProductDetails(props) {

    const dispatch = useDispatch();
    const state = useSelector(state => state.cartReducrStore)
    const [Data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const [render, setrender] = useState('')
    const history = useHistory()

    const param = useParams();
    var Id = parseInt(param.id)

    useEffect(() => {
        setData(state.data)
        setTimeout(() => {
            setLoader(false)
        }, [500]);
    }, [])


    if (Id >= state.data.length) {
        history.push('/404')
    }

    const ADD_cart = (id) => {
        dispatch({
            type: "ADD_PRODUCT_LIST",
            payload: id
        });
        setrender('')
    }

    return (
        <div>
            {loader === true ? <div className='App'><Loader /></div> :

                <Container>
                    <Row style={{ marginTop: '20px' }}>
                        <Col style={{ backgroundColor: "white" }}>

                            <Row>
                                <Col sm={4}>
                                    <img src={Data[Id].image} style={{ width: '100%', height: '100%' }} className="card-img-top" alt="..." />
                                </Col>
                                <Col sm={8}>
                                    <div style={{ width: '100%', height: '100%', backgroundColor: 'white' }} >
                                        <div style={{ paddingTop: '30px' }}>
                                            <h5 ><b>Title:</b> {Data[Id].title}</h5>
                                            <p ><b>Desc:</b> {Data[Id].description}</p>
                                            <p ><b>Category:</b> {Data[Id].category}</p>
                                            <p ><b>Price:</b> {Data[Id].price} $</p>
                                        </div>
                                        <button onClick={() => ADD_cart(Id)} className='btn btn-info mb-2'><AddShoppingCart /></button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            }
        </div>
    )
}

