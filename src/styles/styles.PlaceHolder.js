import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    placeholder: {
      width: 130,
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
    emptyPlaceholder: {
      marginTop: -120,
      width: 100,
      [theme.breakpoints.down('md')]: {
        marginTop: -100,
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: -75,
        width: 70,
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: -25,
        width: 35,
      },
    },
  }));