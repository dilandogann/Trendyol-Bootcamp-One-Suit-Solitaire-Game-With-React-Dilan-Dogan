import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    card: {
      borderRadius: 12,
      marginTop: -120,
      // width: '100%',
      width:100,
      zIndex: (cardIndex) => {
        return cardIndex;
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '120%',
      },
      [theme.breakpoints.down('xs')]: {
        width: '300%',
        height:80
      },
    },
    showFront: {
      width:100,
      borderRadius: 12,
      cursor: 'pointer',
      transition: 'transform 0.2s ease-in-out',
      marginTop: -110,
      '&:hover': {
        transform: 'scale(1.1)',
      },
      zIndex: (cardIndex) => {
        return cardIndex;
      },
      overflow: 'hidden',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '120%',
      },
      [theme.breakpoints.down('xs')]: {
        width: '300%',
        height:80
      },
    },
  }));