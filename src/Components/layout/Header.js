import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color='secondary'>
            <Toolbar className={classes.toolbar}>
              <AssignmentTurnedInIcon />
                <Typography variant="h6" className={classes.title}>
                    Todo List
                </Typography>
                </Toolbar>
            </AppBar>
        </div>

    )
}
export default Header;