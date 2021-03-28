import { Card, Col, Row } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import FadeLoader from 'react-spinners/FadeLoader'


export default function Product() {

    const state = useSelector(state => state.cartReducrStore)
    const history = useHistory();
    const [Data, setData] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setData(state.data)
        setTimeout(() => {
            setLoader(false);
        }, [500]);
    }, [])

    const details = (id) => {
        history.push(`/details/${id}`);
    }

    return (
        <>{loader === true ? <div className='App'><FadeLoader /></div> : <div >
            <Row>
                {
                    Data.map((data, index) => {
                        return (
                            <div onClick={() => details(index)} key={index}>
                                <Col sm={12} style={{display:'flex'}}>
                                    <Card border="white" style={{ height: '250px', width: '350px', marginTop: '20px', textAlign: 'center',justifyContent:'center' }}>
                                        <div >
                                            <Card.Img style={{ width: '100px', height: '100px' }} src={data.image} alt="Card image" />
                                            <Card.Title>
                                                Title: {data.title}
                                            </Card.Title>
                                            <Card.Title>
                                                price: {data.price} $
                                            </Card.Title>

                                        </div>
                                    </Card>
                                </Col>

                            </div>
                        )
                    })
                }
            </Row>
        </div>
        }
        </>
    )
}

//
// 