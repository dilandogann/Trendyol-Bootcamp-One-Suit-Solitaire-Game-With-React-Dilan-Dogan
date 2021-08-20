
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    placeholder: {
      width: 124,
      height: 143,
      background: 'transparent',
      border: '6px solid rgb(174,220,249)',
      borderRadius: 8,
      marginRight: 5,
      [theme.breakpoints.down('md')]: {
        width: 90,
        height: 100,
        marginTop: 20,
      },
      [theme.breakpoints.down('sm')]: {
        width: 40,
        height: 70,
        marginTop: 20,
      },
      [theme.breakpoints.down('xs')]: {
        width: 30,
        height: 50,
        marginTop: 20,
      },
    },
  }));
const PlaceHolder = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.placeholder}></div>
          </>
    );
}

export default PlaceHolder;
