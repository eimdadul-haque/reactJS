import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Cartpng from '../Const/cart_png.png'

export default function EmptyList() {
    const histoty = useHistory();

    const backtohome = () => {
        histoty.push('/');
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Row >

                <Col sm={12}>
                    <div style={{ backgroundColor: 'rgb(235, 235, 229)',paddingTop:'50px' }}>
                        <img variant="top" src={Cartpng} style={{height:'60%',width:'60%'}} />
                        <Card.Body>
                            <Button onClick={() => backtohome()} variant="info">Back to List</Button>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
