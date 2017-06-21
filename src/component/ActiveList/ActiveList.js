import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

// 动画
import QueueAnim from 'rc-queue-anim';

// 引入list
import List from './AList.js';
import ActiveListDetail from './ActiveListDetail.js';

class ActiveList extends Component {
    render() {
        return (
            <QueueAnim delay={200}>
                <Route exact path="/home/active" component={List}/>
                <Route path="/home/active/:id" component={ActiveListDetail}/>
            </QueueAnim>
        );
    }
}

export default ActiveList;