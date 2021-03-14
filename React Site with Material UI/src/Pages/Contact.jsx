import { Grid, makeStyles, TextField, Button, Card } from '@material-ui/core'
import React from 'react'
import {JSS} from './ContactJSS' 

export default function Contact() {

    const style = useStyle();



    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <div className={style.container}>
                        <div className='box'>
                            <div className='icon-add'><i className='fa fa-map-marker' aria-hidden='true' /></div>
                            <div className='Address'>
                                <h3>Address</h3>
                                <p>Dhaka, Tangail,<br></br>Kalihati</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon-phn'><i className='fa fa-phone' aria-hidden='true' />  </div>
                            <div>
                                <h3>Phone</h3>
                                <p>017XXXXXXXX</p>
                            </div>

                        </div>
                        <div className='box'>
                            <div className='icon'><i className='fa fa-envelope' aria-hidden='true' /> </div>
                            <div>
                                <h3>Email</h3>
                                <p>eimdadulhaque@gmail.com</p>
                            </div>

                        </div>


                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={4} >

                        </Grid>
                        <Grid item xs={4}>
                            <Card className={style.card}>
                                <div className={style.f}>
                                    <form className={style.form}>
                                        <h2 className={style.font}>Name</h2>
                                        <div>
                                            <TextField className={style.in} />
                                        </div>
                                        <h2 className={style.font}>Subject</h2>
                                        <div>
                                            <TextField className={style.in} />
                                        </div>
                                        <h2 className={style.font}>Message</h2>
                                        <div>
                                            <TextField className={style.in} />
                                        </div>
                                        <div>
                                            <Button className={style.btn}>Send</Button>
                                        </div>
                                    </form>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}



const useStyle = makeStyles(JSS)