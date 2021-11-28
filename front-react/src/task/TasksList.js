

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AspectRatioIcon from '@material-ui/icons/AspectRatio'
// import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone'
import { lightGreen, red } from '@material-ui/core/colors'
import { blue } from '@material-ui/core/colors'
import  { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Grid, Typography, TablePagination, TableFooter, Toolbar } from '@material-ui/core'
import { ContactSupportOutlined, ContactSupportTwoTone } from '@material-ui/icons'
import CreateIcon from '@material-ui/icons/Create'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import PageHeader from '../skeleton/PageHeader'
import { getTasks, deleteTask } from '../service/ApiTask';
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px',
    maxWidth: 950
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
    fontWeight: 'bold',
    color: theme.palette.secondary.dark
  },
  status: {
    fontWeight: 'bold',
    fontSize: '0.75rem',
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: '3px 10px',
    display: 'inline-block'
  }
}))

const TasksList = () => {
    const [tasks, setTasks] = useState([]);
    const classes = useStyles()
   
    useEffect(() => {
        getAllTasks();
    }, []);

    const deleteTask = async (id) => {
        await deleteTask(id);
        getAllTasks();
    }

    const getAllTasks = async () => {
        let response = await getTasks();
        setTasks(response.data);
    }
  
  return (
    <div>
      <Toolbar>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Task
        </Button> 
      </Toolbar>
      <PageHeader
        title="Task"
        subTitle="Task details"
        icon={<AspectRatioIcon fontSize="large" />}
      />
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Title</TableCell>
              <TableCell className={classes.tableHeaderCell}>Content</TableCell>
              <TableCell className={classes.tableHeaderCell}>Status</TableCell>
              <TableCell className={classes.tableHeaderCell}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <Grid container>                      
                    <Grid item lg={10}>                        
                      <Typography color="textSecondary" variant="body2">{task.title}</Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>              
                  <Typography color="textSecondary" variant="body2">{task.content}</Typography>
                </TableCell>
                <TableCell>                   
                  <Typography color="textSecondary" variant="body2">{task.status}</Typography>
                </TableCell>
                
                
                <TableCell>
                  <Button
                    color="inherit"
                    component={Link} to={`/edit/${task.id}`}
                  >
                    <CreateIcon style={{ color: blue[900] }} />
                  </Button>  
                  <Button
                    color="inherit"
                    onClick={() => deleteTask(task._id)}
                  >
                    <DeleteIcon style={{ color: red[500] }} />
                  </Button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>

  )

}
export default TasksList