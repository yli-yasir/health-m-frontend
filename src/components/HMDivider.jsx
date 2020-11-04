import {makeStyles} from '@material-ui/core/styles'
import {Divider} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    divider:{
        margin: theme.spacing(2,0)
      }

}
));
function HMDivider(){
    const classes = useStyles();
    return <Divider classes={{root:classes.divider}} light={true}/>

}


export default HMDivider;