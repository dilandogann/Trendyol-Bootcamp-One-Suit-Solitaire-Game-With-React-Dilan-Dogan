import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    newGameButton: {
        [theme.breakpoints.down('xs')]: {
            height: '40px',
            width: '20px',
            fontSize: '12px',
        }
    }
}));