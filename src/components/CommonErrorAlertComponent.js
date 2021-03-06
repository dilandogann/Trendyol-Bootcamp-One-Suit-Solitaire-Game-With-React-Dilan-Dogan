import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { CommonErrorContext } from '../context/CommonErrorContext';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

export default function CommonErrorAlertComponent () {
    const classes = useStyles();
    const { commonError, updateError } = useContext(CommonErrorContext);

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        const error = { show: false, message: "" }
        updateError(error);
    };

    return (
        <div className={classes.root} data-testid="error-modal">
            <Snackbar open={commonError.show} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <Alert onClose={handleClose} severity="error">{commonError.message}</Alert>
            </Snackbar>
        </div>
    );
}