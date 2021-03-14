import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CardActions, CardContent, Button } from '@material-ui/core';
import { Card } from '@material-ui/core'



export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <>
            <h3 className={classes.h1}>
                This is My Expertise, The Services I'll Provide My Clients
            </h3>
            <div className={classes.card}>
                <Grid container spacing={2} className={classes.grid}>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum repellendus labore laudantium eum sint iusto laborum velit obcaecati repellat voluptatum dolore assumenda veniam eligendi deleniti.</p>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.btn}>
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <h3>UI & UX Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum repellendus labore laudantium eum sint iusto laborum velit obcaecati repellat voluptatum dolore assumenda veniam eligendi deleniti.</p>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.btn}>
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <h3>Graphic Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum repellendus labore laudantium eum sint iusto laborum velit obcaecati repellat voluptatum dolore assumenda veniam eligendi deleniti.</p>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.btn}>
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </div>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    card: {
        padding: '0 100px',
        marginTop: '90px',
        display: 'flex',
        justifyContent: 'center'
    },
    grid: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    h1: {
        textAlign: 'center',
        color: '#fff',
        marginTop: '150px'
    },
    btn:{
        background: '#fff'
    }
}));