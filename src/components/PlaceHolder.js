
import { useStyles } from '../styles/styles.PlaceHolder';

const PlaceHolder = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.placeholder}></div>
          </>
    );
}

export default PlaceHolder;
