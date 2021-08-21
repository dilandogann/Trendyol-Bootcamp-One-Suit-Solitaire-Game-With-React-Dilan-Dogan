import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    imageBox: {
      borderRadius: '10px',
      marginLeft: '-50px',
      boxShadow: '10px 10px 6px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '10px 10px 6px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '10px 10px 6px 0px rgba(0,0,0,0.75)',
      width: '90px',
      [theme.breakpoints.down('md')]: {
          width: '75px',
        },
    },
  }));