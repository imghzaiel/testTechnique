
import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import CloseIcon from '@material-ui/icons/Close'
import Container from '@material-ui/core/Container'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import { addTask } from '../service/ApiTask';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }

}))

const initialValue = {
  title: '',
  content: '',
  status: ''
}
const TaskAdd = (props) => {
  
  const [task, setTask] = useState(initialValue);
  const { title, content, status } = task;

 
  const onValueChange = (e) => {
    console.log(e.target.value);
    setTask({...task, [e.target.name]: e.target.value})
}
const addTask = async() => {
  await addTask(task);
  
}
  const classes = useStyles()

  return (

    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Add Task
        </Typography>
        <form className={classes.form} noValidate >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                type="text"
                autoFocus
                fullWidth
                label="Title"
                name="title"
               value="title"
               onChange={(e) => onValueChange(e)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="content"
                label="Content"
                name="content"
                autoComplete="content"
                value="content"
                onChange={(e) => onValueChange(e)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                
                fullWidth
                name="status"
                label="Status"
                id="status"
                autoComplete="status"
                value="status"
                onChange={(e) => onValueChange(e)}
                required
              />
            </Grid>
            
              
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => addTask()}
          >
            submit
          </Button>
        </form>
      </div>

    </Container >

  )
}
export default TaskAdd