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
        width: 65,
        height: 105,
        marginTop: 20,
      },
      [theme.breakpoints.down('xs')]: {
        width: 45,
        height: 80,
        marginTop: 20,
      },
    },
    emptyPlaceholder: {
      marginTop: -120,
      width: 100,
      [theme.breakpoints.down('md')]: {
        marginTop: -90,
        width: 80,
        height: 110,
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: -70,
        width: 50,
        height: 80,
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: -15,
        width: 30,
        height: 80,
      },
    },
  }));