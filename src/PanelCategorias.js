import fire from "firebase.config"

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Categoria from 'Categoria'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

var state = {
    items:[]
};

function setState(newState){
    state = newState
}

export default function PanelCategorias() {
    const classes = useStyles();

    const itemsRef = fire.firestore().collection('categoria').get().then((doc) => {
        var items = doc.data();
        console.log("List retrieved, saving " + items + " locally")
        let newItems = [];
        for (let item in items) {
            newItems.push({
                id: item,
                nombre: items[item].title,
                imagen: items[item].imagen,
                link: items[item].link
            });
        }
        setState({
            items: newItems
        });
    });

    return (
        <div className={classes.root}>
            <p>{state.items.length}</p>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Categoria params={state.items[0]}/>
                </Grid>
                <Grid item xs={4}>
                    <Categoria params={state.items[1]}/>
                </Grid>
                <Grid item xs={4}>
                    <Categoria params={state.items[2]}/>
                </Grid>
                <Grid item xs={4}>
                    <Categoria params={state.items[3]}/>
                </Grid>
                <Grid item xs={4}>
                    <Categoria params={state.items[4]}/>
                </Grid>
                <Grid item xs={4}>
                    <Categoria params={state.items[5]}/>
                </Grid>
            </Grid>
        </div>
    );
}