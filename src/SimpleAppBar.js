import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    timeInput: {
        color: 'white',
    }
};

function SimpleAppBar(props) {
    
    const { classes } = props;

    function switchTimer() {
        console.log('The link was clicked.');
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Photos
                    </Typography>
                    <div className={classes.grow} />
                    <TextField
                        type="text"
                        defaultValue="0:00:00"
                        InputProps={{
                            classes: { input: classes.timeInput }
                        }}
                    />
                    <Fab size="small" aria-label="Switch timer" className={classes.fab} onClick={switchTimer}>
                        <PlayArrowIcon />
                    </Fab>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
