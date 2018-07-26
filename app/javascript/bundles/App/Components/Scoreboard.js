import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Nav from './NavBar.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

export default class Scoreboard extends Component {

  constructor(props) {
    super(props);
    console.log(props.score);
    this.state = {points: props.score, badges: []};
  }

  componentDidMount(){
    if(this.state.points >=500) {
      this.state.badges.push(<i className="fas fa-chess-pawn fa-3x"></i>);
    }
    if(this.state.points >=1000 ) {
      this.state.badges.push(<i className="fas fa-chess-knight fa-3x"></i>);
    }
    if(this.state.points >=2000) {
      this.state.badges.push(<i className="fas fa-chess-rook fa-3x"></i>);
    }
    if(this.state.points >=5000) {
      this.state.badges.push(<i className="fas fa-chess-queen fa-3x"></i>);
    }
    if(this.state.points >=8000) {
      this.state.badges.push(<i className="fas fa-chess-king fa-3x"></i>);
    }
  }


  render() {
    return (
        <div>
        <Nav />
          <Paper style={{margin: 10}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    My level:{this.state.badges}
                  </TableCell>
                  <TableCell>
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  Rank Name
                </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>My Points</TableCell>
                  <TableCell></TableCell>
                  <TableCell>0</TableCell>
                </TableRow>
              </TableHead>
              <div id='everyone'>Everyone</div>
              <TableBody>
                    <TableRow>
                      <TableCell>Rank</TableCell>
                      <TableCell>Username</TableCell>
                      <TableCell>Points</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>User1</TableCell>
                    <TableCell>1000</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>User2</TableCell>
                    <TableCell>900</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>User3</TableCell>
                    <TableCell>800</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>User4</TableCell>
                    <TableCell>700</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>5</TableCell>
                    <TableCell>User5</TableCell>
                    <TableCell>600</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>6</TableCell>
                    <TableCell>User6</TableCell>
                    <TableCell>500</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>7</TableCell>
                    <TableCell>User7</TableCell>
                    <TableCell>400</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>8</TableCell>
                    <TableCell>User8</TableCell>
                    <TableCell>300</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>9</TableCell>
                    <TableCell>User9</TableCell>
                    <TableCell>200</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>10</TableCell>
                    <TableCell>User10</TableCell>
                    <TableCell>100</TableCell>
                    </TableRow>
              </TableBody>
            </Table>
          </Paper>
          </div>
      )
  }
}
