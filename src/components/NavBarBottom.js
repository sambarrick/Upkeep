import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import NavBarBottom from '../styles/NavBarBottom.css'

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(3, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundImage: 'linear-gradient(90deg, #6f4ffc, #654ae1)',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography edge="start" color="inherit" aria-label="open drawer">
          Expired Tasks
        </Typography>
        <Fab id="addbuttonbackground" aria-label="add" className={classes.fabButton}>
          <AddIcon className="addsymbol" />
        </Fab>
        <div className={classes.grow} />
        
        <Typography edge="end" color="inherit">
          Upcoming Tasks
        </Typography>
      </Toolbar>
    </AppBar>
    </React.Fragment>
  );
}