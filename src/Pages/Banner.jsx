import React from 'react'
import IMG from '../Const/home.jpg'
import { makeStyles } from '@material-ui/core'

export default function Banner() {

    const style = useStyle();

    return (
        <div className={style.root}>
            <div className={style.text}>
                <p className={style.p}>Welcome to my react site....</p>
            </div>
        </div>
    )
}


const useStyle = makeStyles({
    root: {
        backgroundImage: `url(${IMG})`,
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },
    p: {
        color: 'white',
        fontSize:'35px',
        marginTop:'35%',
        fontFamily:'robot',
        color: 'rgb(255, 255, 255)',
        fontWeight:'bold',
        marginRight:'55%'
    }
})