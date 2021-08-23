import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    scoreContainer: {
        marginLeft:10,
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            marginLeft:0,
            fontSize: 18
        },
    },
    scoreText: {
        fontSize:24,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            marginLeft: '10px'
        },
    },
    scoreValueText: {
        fontSize: '24px !important',
        [theme.breakpoints.down('xs')]: {
            marginBottom:'12px !important',
            fontSize: '14px !important',
            marginLeft: '10px !important'
        },
    },
}));