import React, { Component } from 'react';
import { Card, CardBody, CardImage } from 'mdbreact';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';

export default class Topscores extends Component {
  constructor(props) {
    super(props);
    this.state = {points: props.score, badges: [], top_scores: []};
  }

  async componentWillMount(){
    const { data } = await axios.get('/scoreboard.json')
    this.setState({ top_scores: data })
  }

render() {
  const { top_scores } = this.state;
  return (
    <div className="d-flex p-3" id="cardDiv">
        <Card className="rankingCard p-3">
          { new WOW().init() }
          <CardImage id="rankingBanner" className="wow fadeInRight img-fluid" src="https://i.imgur.com/P3oT1SZ.png" waves />
          <CardBody>
            <TableBody>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell></TableCell>
                <TableCell>Username</TableCell>
                <TableCell></TableCell>
                <TableCell>Points</TableCell>
              </TableRow>
              {
                  top_scores.map( (user, i) => {
                    return (
                      <TableRow>
                        <TableCell>{i+1}</TableCell>
                        <TableCell></TableCell>
                        <TableCell key={user.id}>{user.email}</TableCell>
                        <TableCell></TableCell>
                        <TableCell key={user.id}>{user.points}</TableCell>
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
