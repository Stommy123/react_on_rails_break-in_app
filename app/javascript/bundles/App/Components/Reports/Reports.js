import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';

export default class Reports extends Component {
  state = { page: 0, rowsPerPage: 5 }

  handleChangePage = (event, page) => {
    this.setState({ page });
  }

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  }

  handleClick = (event, task) => {
    event.preventDefault();
    this.props.deleteTask(task);
  }

  render(){
    const { tasks } = this.props;
    const { rowsPerPage, page } = this.state;
    return(
      <Paper style={{margin: 10}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task) => {
              return(
                <TableRow key={task.id}>
                  <TableCell>{task.name}</TableCell>
                  <TableCell>
                    {task.due_date !== null && <DueDate date={task.due_date}/>}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      style={{
                        float: 'right',
                        backgroundColor: red[500],
                        color: 'white'
                      }}
                      onClick={ (e) => { this.handleClick(e, task) } }
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={3}
                count={tasks.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    )
  }
}
