
import Header from '../src/skeleton/Header'
import SideBar from '../src/skeleton/SideBar'

import React from 'react'
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import TasksList from '../src/task/TasksList'
import TaskAdd from '../src/task/TaskAdd'
import UsersList from '../src/user/UsersList'

import CommentsList from '../src/comment/CommentsList'
const theme = createMuiTheme({
  palette: { 
    primary: {
            main: '#333996',
            light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
}
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '230px',
    width: '100%'
  }
})

function App () {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <SideBar />
      <div className={classes.appMain}>
        <Header />
        <div>
        <Route exact path="/" component={UsersList} />
        <Route exact path="/task" component={TasksList} />
        <Route exact path="/comment" component={CommentsList} />
        

        </div>

      </div>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider >

  )
}
export default App