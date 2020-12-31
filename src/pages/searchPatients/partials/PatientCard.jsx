import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import boySvg from '../../../assets/boy.svg';
import girlSvg from '../../../assets/girl.svg';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 250,
      width: 250,
      margin:theme.spacing(2)
    },
    cardImg:{
      objectFit: 'contain',
      backgroundColor: theme.palette.grey[200],
      padding: '2px'
    }
  }));
  

export default function PatientCard({patient}){

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/patients/${patient._id}`}>
        <CardMedia
          component="img"
          alt="Patient Image"
          height="140"
          image={ patient.gender === 'male' ? boySvg : girlSvg}
          classes={{img:classes.cardImg}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {patient.fullName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Click for more details 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

}