import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

// 动画
import QueueAnim from 'rc-queue-anim';

// 引入list
import NewArticle from '../newArticle/newArticle.js';
import EditActiveList from './editActiveList.js';

class EditActiveRouter extends Component {
    render() {
        return (
            <QueueAnim delay={200}>
                <Route exact path="/user/editActive" component={EditActiveList}/>
                <Route path="/user/editActive/:id" component={NewArticle}/>
            </QueueAnim>
        );
    }
}

export default EditActiveRouter;