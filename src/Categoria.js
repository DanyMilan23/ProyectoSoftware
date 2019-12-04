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

export default function Categoria(param) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={param.nombre}
          height="140"
          image={param.imagen}
          title={param.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {param.nombre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}