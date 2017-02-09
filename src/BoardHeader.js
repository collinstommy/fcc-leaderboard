/*jshint esversion: 6 */

import React, { Component } from 'react';
import { Icon, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import './Board.css';


class BoardHeader extends Component {

    render() {
        return (
            <div className="top">
                <Header as='h2'>
                    <Icon name="trophy" />
                    <Header.Content>
                        freeCodeCamp - Leaderboard
                    </Header.Content>
                </Header>
            </div>
        )
    }
}

export default BoardHeader;