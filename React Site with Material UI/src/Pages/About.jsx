import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../components/about.css'



export default function MediaCard() {
  const StyleT = useStyle();

  return (
    <>

      <body id='ab' className={StyleT.body}>
        <div className='about'>
          <div className={StyleT.inner}>
            <h1 className ={StyleT.h1}>About</h1>
            <p className={StyleT.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates ex debitis dolorem laudantium eos assumenda aliquid totam officiis quaerat.</p>
          </div>
        </div>
      </body>

    </>
  );
}


const useStyle = makeStyles({
  root: {
    margin: '0px',
    padding: '0px',
    boxSizing: 'border-box'
  },
  body: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1'
  },
  inner:{
    width: '55%',
    float: 'right',
    backgroundColor: '#fdfdfd',
    padding: '150px'
  },
  h1:{
    marginTop: '30px',
    fontSize: '30px',
    fontWeight: '900'
  },
text:{
  fontSize: '13px',
  color: '#545454',
  lineHeight: '30px',
  textAlign: 'justify',
  marginBottom: '40px'
},
skill:{
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 700,
  fontSize: '13px'
}

})