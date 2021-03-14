import { makeStyles, Button } from '@material-ui/core'
import React from 'react'

export default function Home() {

    const style = useStyle();

    return (
        <div>
            <div className={style.content}>
                <h1 className={style.h1}>I'm Eimdadul Haque</h1>
                <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     <br></br>Ipsa impedit alias et, aliquam cum aperiam consectetur quod! Adipisci, optio fugiat.</p>
                <div className={style.btn_group}>
                    <Button variant="contained" className={style.btn}>HIRE ME</Button>
                    <Button variant="contained" className={style.btn}>VIEW PORTFOLIO</Button>
                </div>
            </div>
        </div>
    )
}


const useStyle = makeStyles({

    content: {
        width: '100%',
        position: 'absolute',
        top: '50%',
        paddingLeft: '70px',
        color: '#fff',
        textAlign: 'left'
    },

    btn: {
        marginRight: "5px",
        fontWeight:'bold'

    },
    h1:{
        marginTop: '20px',
        fontSize:'50px'

    }


})