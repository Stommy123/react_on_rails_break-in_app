import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Nav from './NavBar.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


export default class Scoreboard extends Component {

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
    if(this.state.points >=200) {
      this.state.badges.push(<i className="fas fa-chess-pawn fa-3x"></i>);
    }
    if(this.state.points >=400 ) {
      this.state.badges.push(<i className="fas fa-chess-knight fa-3x"></i>);
    }
    if(this.state.points >=700) {
      this.state.badges.push(<i className="fas fa-chess-rook fa-3x"></i>);
    }
    if(this.state.points >=900) {
      this.state.badges.push(<i className="fas fa-chess-queen fa-3x"></i>);
    }
    if(this.state.points >=1100) {
      this.state.badges.push(<i className="fas fa-chess-king fa-3x"></i>);
    }
    this.rank()
  }

  rank = function(){
    if(this.state.points >=1100){
    this.setState({rank: "King"})
    }
    else if(this.state.points >=900){
    this.setState({rank: "Queen"})
    }
    else if(this.state.points >=700){
    this.setState({rank: "Rook"})
    }
    else if(this.state.points >=400){
    this.setState({rank: "Knight"})
    }
    else if(this.state.points >=200){
    this.setState({rank: "Pawn"})
  } else {
    this.setState({rank: "Unranked"})
  }
  }


  render() {


    const { top_scores } = this.state;


    return (
        <div>
        <Nav />
          <Paper style={{margin: 10}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    My level: {this.state.badges}
                  </TableCell>
                  <TableCell>
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  Rank Name : {this.state.rank}
                </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>My Points</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{this.state.points}</TableCell>
                </TableRow>
              </TableHead>
              <div id='everyone'>Everyone</div>
              <TableBody>
                    <TableRow>
                      <TableCell>Rank</TableCell>
                      <TableCell>Username</TableCell>
                      <TableCell>Points</TableCell>
                    </TableRow>
                    {
                        top_scores.map( (user) => {
                          return (
                        <TableRow>
                        <TableCell>1</TableCell>
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
            </Table>
          </Paper>
          </div>
      )
  }
}
