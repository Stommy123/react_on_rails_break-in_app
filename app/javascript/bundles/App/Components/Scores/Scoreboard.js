import React, { Component } from 'react';
import { Card, CardBody } from 'mdbreact';
import Nav from '../NavBar.js';
import Topscores from './Topscores.js';
import CurrentUserScore from './Current_UserScoreboard.js';
import axios from 'axios';


export default class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = { points: props.score, badges: [], top_scores: [] };
  }

  async componentWillMount(){
    const { data } = await axios.get('/scoreboard.json')
    this.setState({ top_scores: data })
    this.state.points >=200 && this.state.badges.push(<i className="fas fa-chess-pawn fa-2x"></i>);
    this.state.points >=400 && this.state.badges.push(<i className="fas fa-chess-knight fa-2x"></i>);  
    this.state.points >=700 && this.state.badges.push(<i className="fas fa-chess-rook fa-2x"></i>);
    this.state.points >=900 && this.state.badges.push(<i className="fas fa-chess-queen fa-2x"></i>);
    this.state.points >=1100 && this.state.badges.push(<i className="fas fa-chess-king fa-2x"></i>);
    this.rank()
  }

  rank = () => {
    if (this.state.points >=1100)     this.setState({rank: "King"})
    else if (this.state.points >=900) this.setState({rank: "Queen"})
    else if (this.state.points >=700) this.setState({rank: "Rook"})
    else if (this.state.points >=400) this.setState({rank: "Knight"})
    else if (this.state.points >=200) this.setState({rank: "Pawn"})
    else                              this.setState({rank: "Unranked"})
  }

  render() {
    return (
      <div className="scoreboardPage">
        <Nav />
        <Card className="userInteraction">
          { new WOW().init() }
          <CardBody className="wow fadeInLeft">
            <CurrentUserScore points={this.state} />
          </CardBody>
        </Card>
        <Topscores />
        </div>
      )
  }
}
