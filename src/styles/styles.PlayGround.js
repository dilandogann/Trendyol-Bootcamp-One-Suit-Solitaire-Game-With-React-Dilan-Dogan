import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    floorAndCollectedContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'no-wrap',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    newDeck: {
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      // marginLeft:20,
      '&:hover': {
        transform: 'scaleY(1.05)',
      },
    },
    collectedDecsGrid: {
      display: 'flex',
     // marginLeft: 'auto',
      flexWrap: 'no-wrap',
      [theme.breakpoints.up('md')]: {
        marginLeft: 'auto',
      },
    },
    container:{
      maxWidth:1200,
      marginLeft:"auto",
    }
  }));
