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

    //const itemsRef = fire.firestore().collection('categoria').get().then((doc) => {
    const itemsRef = fire.firestore().collection("categoria")
        .get()
        .then((querySnapshot) => {
            //var items = doc.data();
            let newItems = [];
            console.log("List retrieved, saving " + querySnapshot + " locally")
            querySnapshot.forEach(function(doc) {
                const item = doc.data();
                console.log(doc.id, " => ", doc.data());
                newItems.push({
                    id: doc.id,
                    nombre: item.nombre,
                    imagen: item.imagen,
                    descripcion: item.descripcion
                });
                console.log("Saving: " + item.nombre + ", "+ item.imagen + ", "+ item.descripcion)
                state.items = newItems;
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Categoria nombre={"Categoria 1"} imagen={"https://firebasestorage.googleapis.com/v0/b/softwarecommerce23.appspot.com/o/imagen%2F9jLFvFSzCSZhE33dTLA9RJ-1200-80.jpg?alt=media&token=37419c4b-b130-4a59-a712-84de1635befe"}/>
                </Grid>
                <Grid item xs={4}>
                    <Categoria nombre={"Categoria 2"} imagen={"https://firebasestorage.googleapis.com/v0/b/softwarecommerce23.appspot.com/o/imagen%2FBest-smartphone-you-can-buy-in-2018.jpg?alt=media&token=bcb78636-4c41-43a3-a20c-7027d529876c"}/>
                </Grid>
                <Grid item xs={4}>
                    <Categoria nombre={"Categoria 3"} imagen={"https://firebasestorage.googleapis.com/v0/b/softwarecommerce23.appspot.com/o/imagen%2FP1073874.1419980229.0.jpg?alt=media&token=5a4ac9bf-5f8f-432c-9658-7c71bddc9b84"}/>
                </Grid>
                <Grid item xs={4}>
                    <Categoria nombre={"Categoria 4"} imagen={"https://firebasestorage.googleapis.com/v0/b/softwarecommerce23.appspot.com/o/imagen%2Fdc-Cover-0ka5la6aaburq6um01vgq508j0-20170112202310.Medi.jpeg?alt=media&token=d97a799b-20f1-4877-8ffe-3fa95ce15d8a"}/>
                </Grid>
                <Grid item xs={4}>
                    <Categoria nombre={"Categoria 5"} imagen={"https://firebasestorage.googleapis.com/v0/b/softwarecommerce23.appspot.com/o/imagen%2Fnokia-7-plus-07.jpg?alt=media&token=0d6351da-d1ab-4027-8ff2-20ce2d4c97e3"}/>
                </Grid>
                <Grid item xs={4}>
                    <Categoria nombre={"Categoria 6"} imagen={"https://firebasestorage.googleapis.com/v0/b/softwarecommerce23.appspot.com/o/imagen%2Ftecnologia.jpg?alt=media&token=bc14d7a3-86a2-4058-86fa-74635d25d720"}/>
                </Grid>
            </Grid>
        </div>
    );
}