import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function Categoria(parameters) {
  console.log("Creating Categoria with: ");
  const nombre = parameters.nombre;
  const imagen = parameters.imagen;

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={nombre}
          height="140"
          image={imagen}
          title={nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nombre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}