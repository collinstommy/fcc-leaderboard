/*jshint esversion: 6 */

import React, { Component } from 'react';
import './Board.css';
import BoardHeader from './BoardHeader';
import User from './User';
import { Icon, Grid, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';


class Board extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    fetch(url).then(res => res.json())
      .then(array => this.setState({ users: array }))
      .catch(err => console.log(err));
  }



  eachUser(user, i) {
    return (<User key={user.username} index={i+1}>{user}</User>)
  }

  sortRecent(comparer) {
    this.setState({ users: this.state.users.sort(this.compareRecent) })
  }

  compareRecent(a, b) {
    if (a.recent > b.recent)
      return -1;
    if (a.recent < b.recent)
      return 1;
    return 0;
  }

  sortAllTime(comparer) {
    this.setState({ users: this.state.users.sort(this.compareAllTime) })
  }

  compareAllTime(a, b) {
    if (a.alltime > b.alltime)
      return -1;
    if (a.alltime < b.alltime)
      return 1;
    return 0;
  }



  render() {


    return (
      <div>
        <BoardHeader />
        <div className="board board-text">
          <Grid columns={3} divided='vertically'>
            <Grid.Row centered columns={3} className="header-row">
              <Grid.Column width={4}>
                <Header as='h3'>
                  <Icon name='student' />
                  <Header.Content>
                    Camper Name
                    </Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as='h3'>
                  <Icon name="sort descending" onClick={this.sortRecent.bind(this)} />
                  <Header.Content>
                    30 days
                    </Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as='h3'>
                  <Icon name="sort descending" onClick={this.sortAllTime.bind(this)} />
                  <Header.Content>
                    All Time
                  </Header.Content>

                </Header>
              </Grid.Column>
            </Grid.Row>
            {this.state.users.map(this.eachUser.bind(this))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Board;
