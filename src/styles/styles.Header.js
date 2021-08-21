import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    appBar: {
      background: 'transparent',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    solitare: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      marginRight: theme.spacing(1),
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));