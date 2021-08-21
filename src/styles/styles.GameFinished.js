import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      // backgroundColor: 'transparent',
      border: '2px solid white',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      // color: 'white',
      textAlign: 'center',
    },
  }));