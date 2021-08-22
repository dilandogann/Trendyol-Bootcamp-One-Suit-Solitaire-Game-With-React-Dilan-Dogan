import { useStyles } from '../styles/styles.PlaceHolder';

const PlaceHolder = ({ empty }) => {
  const classes = useStyles();

  return (
    <>
      <div
        className={
          empty
            ? `${classes.placeholder} ${classes.emptyPlaceholder}`
            : classes.placeholder
        }
      ></div>
    </>
  );
};

export default PlaceHolder;
