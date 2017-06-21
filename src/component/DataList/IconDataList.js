import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

// 动画
import QueueAnim from 'rc-queue-anim';

// 引入list
import IList from './IList.js';
import IListDetail from './IListDetail';

class IconDataList extends Component {
    render() {
        
        return (
            <QueueAnim delay={200}>
                <Route exact path="/home/icon" component={IList}/>
                <Route path="/home/icon/:id" component={IListDetail}/>
            </QueueAnim>
        );
    }
}

export default IconDataList;