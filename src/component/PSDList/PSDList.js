import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

// 动画
import QueueAnim from 'rc-queue-anim';

// 引入list
import PList from './PList.js';
import PSDListDetail from './PSDListDetail.js';

class PSDList extends Component {
    render() {
        return (
            <QueueAnim delay={200}>
                <Route exact path="/home/psd" component={PList}/>
                <Route path="/home/psd/:id" component={PSDListDetail}/>
            </QueueAnim>
        );
    }
}

export default PSDList;