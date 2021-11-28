import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '230px',
    height: '1000px',
    backgroundColor: '#253053'
  },
  liste: {
    color: 'white'

  },
  listeIcon: {
    color: 'white'

  },
  tabs: {

    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: 16
}
  
}))

const SideBar = (props) => {
  const classes = useStyles()
  

  return (
    <div className={classes.sideMenu}>
              <List className={classes.listeIcon}>
              <ListItem>
              <ListItemIcon className={classes.listeIcon}>
                <NavLink className={classes.tabs} to="/" exact>User</NavLink>
              </ListItemIcon>
              </ListItem>

              <ListItem>
              <ListItemIcon className={classes.listeIcon}>
                <NavLink  className={classes.tabs} to="/task" exact>Task</NavLink>
                </ListItemIcon>
              </ListItem>

              <ListItem>
              <ListItemIcon className={classes.listeIcon}>
                <NavLink className={classes.tabs}  to="/comment" exact>Comment</NavLink>
                </ListItemIcon>
              </ListItem>
                </List>
    </div>
  )
}

export default SideBar