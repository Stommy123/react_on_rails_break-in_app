import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


export default class Topscores extends Component {

  constructor(props) {
    super(props);
    console.log(props.score);
    this.state = {points: props.score, badges: [], top_scores: []};
  }


  componentWillMount(){
    axios.get('/scoreboard.json')
    .then((response) => {
      this.setState({ top_scores: response.data})
    })

  }


render() {


  const { top_scores } = this.state;


  return (
    <div className="d-flex p-3" id="cardDiv">
        <Card className="rankingCard p-3">
          {
            new WOW().init()}
          <CardImage id="rankingBanner" className="wow fadeInRight img-fluid" src="https://lh3.googleusercontent.com/vwwSvpvcxnSjZ7RlTPavcLT6PMt8fFfFHGedTs09XkZT4UaqWrGr4SQLJQQ7kHOCOCMgnvQctjDKQonisoJS=w2362-h1318-rw" waves />
          <CardBody>

          <TableBody>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Points</TableCell>
                  </TableRow>
                  {
                      top_scores.map( (user, i) => {
                        return (
                      <TableRow>
                      <TableCell>{i+1}</TableCell>
                        <TableCell
                        key={user.id}
                        >{user.email}
                        </TableCell>
                        <TableCell
                        key={user.id}
                        >{user.points}
                        </TableCell>
                      </TableRow>
                      )})
                    }
            </TableBody>
            </CardBody>
          </Card>
        </div>
    )
  }
}
