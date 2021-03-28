import React, { useState } from 'react';
import { Col, Row, Card, Button, Container, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import EmptyList from './EmptyList';
import Remove from '@material-ui/icons/Remove';


export default function Cart() {
    const cart = useSelector(state => state.cartReducrStore);
    const dispatch = useDispatch();
    const [state, setstate] = useState('');

    const removeCard = (id) => {
        dispatch({
            type: "REMOVE_PRODUCT_LIST",
            payload: id
        });
        setstate(state)
    }

    return (
        <>
            {cart.productList.length === 0 ? <div>
                <EmptyList />
            </div> :

                <div>
                    <Row style={{ marginTop: '50px' }}>
                        <Col sm={12}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {
                                    cart.productList.map((id, index) => {
                                        return (

                                            <tbody key={index}>
                                                <tr>
                                                    <td><img style={{ width: '50px', height: '50px' }} src={cart.data[id].image} alt="..." /></td>
                                                    <td>{cart.data[id].title}</td>
                                                    <td>{cart.data[id].price} $</td>
                                                    <td><Button onClick={() => removeCard(index)} variant='danger'><Remove /></Button></td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </Table>
                        </Col>
                    </Row>
                </div>
            }
        </>
    )
}


