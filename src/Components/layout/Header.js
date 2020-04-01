import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appbar: {
    color: grey
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <AppBar position="static" className={classes.appbar}> */}
      <AppBar
        position='static'
        className={classes.appbar}
        style={{
          // backgroundColor: '#303030',
          backgroundColor: 'rgb(25,25,25)',
          color: 'rgba(132.0, 201.0, 251.0, 1.0)'
          // boxShadow: '0px 15px 29px #bfc3ca'
        }}
      >
        <Toolbar className={classes.toolbar}>
          <AssignmentTurnedInIcon style={{ marginRight: '8px' }} />
          <Typography variant='h6' className={classes.title}>
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
