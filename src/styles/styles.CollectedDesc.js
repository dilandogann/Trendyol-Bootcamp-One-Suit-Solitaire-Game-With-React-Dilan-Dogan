import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    image: {
      width: 100,
      borderRadius: 12,
      [theme.breakpoints.down('md')]: {
        width: 70,
      },
      [theme.breakpoints.down('sm')]: {
        width: 60,
      },
      [theme.breakpoints.down('xs')]: {
        width: 40,
      },
    },
  }));