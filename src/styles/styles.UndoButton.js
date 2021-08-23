import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    undoButton: {
        [theme.breakpoints.down('xs')]: {

            marginLeft: '10px',
            height: '40px',
            width: '20px',
            marginRight: '10px',
            fontSize: '12px',

        }
    }
}));