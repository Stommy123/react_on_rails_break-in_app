import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import Flash from './Flash';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';



export default class Report extends Component {

  handleClick = (event, report) => {
  event.preventDefault();
  this.props.deleteReport(report);
}

  render() {
    const { reports } = this.props
    return (
      <div>
        <Paper style={{margin: 10}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>Category</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((report) => {
                return(
                  <TableRow key={report.id}>
                    <TableCell>{report.description}</TableCell>
                    <TableCell>{report.category}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        style={{
                          float: 'right',
                          backgroundColor: 'red',
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
          </Table>
        </Paper>
      </div>
    )
  }
}
