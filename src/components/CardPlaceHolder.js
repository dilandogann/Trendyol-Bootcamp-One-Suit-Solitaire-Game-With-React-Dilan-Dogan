
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    placeholder: {
      width: 124,
      height: 143,
      background: 'transparent',
      border: '2px solid rgb(0 0 0 / 87%)',
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
const CardPlaceHolder = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.placeholder}></div>
          </>
    );
}

export default CardPlaceHolder;
