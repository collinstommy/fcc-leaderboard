/*jshint esversion: 6 */

import React, { Component } from 'react';
import "./User.css";
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';

export default class User extends Component {
    render() {
        return (   
                    <Grid.Row centered columns={3}>
                        <Grid.Column width={1}>
                            {this.props.index}
                        </Grid.Column>   
                        <Grid.Column width={4}>
                            {this.props.children.username}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            {this.props.children.recent}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            {this.props.children.alltime}
                        </Grid.Column>
                    </Grid.Row>
                    
    );
    }
}

