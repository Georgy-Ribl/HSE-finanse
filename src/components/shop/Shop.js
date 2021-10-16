import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Image from '../../img/bgDefault.png';
import { Container } from '@material-ui/core';
import {Button} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {Paper} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {Box} from "@material-ui/core";
import Balance from "./Balance";

const useStyles = makeStyles((theme) => ({
    img: {
        backgroundImage: `url(${Image})`,
        height: '100vh',
    },
    cont: {
        paddingTop: 12,
        paddingLeft: 15,
        margin: 0,
        width: 1,
        height: 55,
    },
    divSize: {
        height: '100vh',
    },
    balancePosition: {
        paddingRight: 10,
    },
}));

export default function Shop() {
    const classes = useStyles();
    const history = useHistory()
    const handleNavHome = () => history.push("/Home")

    return(
        <div className={classes.img}>
            <div className={classes.divSize}>
                <Container className={classes.cont} >
                    <Button variant="contained" color="secondary" onClick={handleNavHome} >
                        Назад
                    </Button>
                </Container>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={0} className={classes.balancePosition}>
                            <Grid item xs={12} md={4} lg={3} >
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Balance/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
        </div>
    )
}