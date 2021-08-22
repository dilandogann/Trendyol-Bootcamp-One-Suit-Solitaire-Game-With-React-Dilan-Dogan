import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: 150,
      flexWrap: 'nowrap',
      [theme.breakpoints.down('sm')]: {
        marginTop: 100,
      },
    },
  }));