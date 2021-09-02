import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import boySvg from "../../assets/boy.svg";
import girlSvg from "../../assets/girl.svg";
import {makePatientLink} from "../../utils/URLUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    width: 250,
    margin: theme.spacing(2),
  },
  cardImg: {
    objectFit: "contain",
    backgroundColor: theme.palette.grey[200],
    padding: "2px",
  },
}));

export default function PatientCard({ patient, style }) {
  const classes = useStyles();

  return (
    <Card style={style} className={classes.root}>
      <CardActionArea component={Link} to={makePatientLink(patient._id)}>
        <CardMedia
          component="img"
          alt="Patient Image"
          height="140"
          image={patient.gender === "male" ? boySvg : girlSvg}
          classes={{ img: classes.cardImg }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {patient.fullName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {patient.email}
            <br />
            {patient.phoneNumber}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
