import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    timeContainer: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            fontSize: 18
        },
    },
    timeText: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            marginTop: '14px',
            marginLeft: '10px'
        },
    },
    timeValueText: {
        fontSize: '24px !important',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px !important',
            marginTop: '14px !important',
            marginLeft: '10px !important'
        },
    },
}));