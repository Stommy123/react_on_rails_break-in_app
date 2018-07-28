import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


const CurrentUserScore = ({points}) => (
                <TableHead>
                  <TableRow>
                    <TableCell>
                      My level: {points.badges}
                    </TableCell>
                    <TableCell>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                    Rank Name : {points.rank}
                  </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>My Points:</TableCell>
                    <TableCell></TableCell>
                    <TableCell>{points.points}</TableCell>
                  </TableRow>
                </TableHead>
)

export default CurrentUserScore;
