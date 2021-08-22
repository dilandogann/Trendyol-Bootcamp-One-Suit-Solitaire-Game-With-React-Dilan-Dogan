import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor:'rgba(255, 255, 255, 0.8)',
      border: '2px solid red',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      textAlign: 'center',
    },
    title:{
      fontWeight: 'bold',
      fontSize:36,
      letterSpacing:1,
      color:"tomato"
    },
    description: {
      fontSize:24,
    },
    reversed:{
      textDecoration: 'underline',
      color:"tomato",
      fontWeight: 'bold',
      fontSize:18,
    },
    rule:{
      fontSize:18
    }
  }));