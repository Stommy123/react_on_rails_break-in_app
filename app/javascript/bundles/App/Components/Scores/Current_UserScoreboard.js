import React, { Component } from 'react';
import { Button, Card, CardGroup, Fa, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
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
  <CardGroup className="CardGroup">
  <Card className="UserCard1">
    <div className="text-white text-center d-flex align-items-center rgba-cyan-strong py-5 px-4" id="cyan">
      <div className="cardBody">

        <CardTitle tag="h3" className="pt-3"><strong>Badges</strong></CardTitle>
        <Button color="pink">{points.badges}</Button>
      </div>
    </div>
  </Card>
  <Card className="UserCard" style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"}}>
    <div className="text-white text-center d-flex align-items-center rgba-grey-strong py-5 px-4" id="cyan">
      <div className="cardBody">

        <CardTitle tag="h3" className="pt-3"><strong>Rank Name</strong></CardTitle>
        <p></p>
        <Button color="deep-orange">{points.rank}</Button>
      </div>
    </div>
  </Card>
  <Card className="UserCard">
    <div className="text-white text-center d-flex align-items-center rgba-cyan-strong py-5 px-4" id="cyan">
      <div className="cardBody">

        <CardTitle tag="h3" className="pt-3"><strong>My Points</strong></CardTitle>
        <Button color="pink"><Fa icon="clone left" />{points.points}</Button>
      </div>
    </div>
  </Card>
  </CardGroup>
)

export default CurrentUserScore;
