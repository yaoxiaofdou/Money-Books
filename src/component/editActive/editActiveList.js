import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Link
} from 'react-router-dom';

import ListService from '../../services/listService.js';

// 动画
import QueueAnim from 'rc-queue-anim';
import { Card, Row, Col, BackTop } from 'antd';

class EditActiveList extends Component {
    
    constructor(){
        super()
        this.state = {
            list:{}
        }
    }

    componentWillMount(){
        // 从服务中获取文章列表数据 all
        this.getActiveListData();
    }

    // 从服务中获取文章列表数据 all
    getActiveListData = () => {
        this.setState({
            list:ListService.getActive()
        })
    }

    render() {
        let activelist = this.state.list.map((item,index)=>{
                            return (
                                <Col xs={24} sm={24} md={12} lg={8} xl={6} key={item.id} className="EditActiveList__col">
                                    <Card title={item.title} className="EditActiveList__card"
                                        extra={
                                            <div className="EditActiveList__btn">
                                                <a className="EditActiveList__btn--remove">Remove</a>
                                                <Link className="EditActiveList__btn--edit" 
                                                      to={`/user/editActive/${item.id}`}>
                                                      edit
                                                </Link>
                                            </div>
                                        } style={{ width: 300 }}>
                                        {item.user} 发布于 {item.time}
                                    </Card>
                                </Col>
                            )
                        });
        return (
            <div className="EditActiveList" style={{ overflow:'hidden' }}>
                <Row gutter={8}>
                    <QueueAnim type={['bottom']}>
                        {activelist}
                    </QueueAnim>

                    <BackTop />
                    
                </Row>
            </div>
        );
    }
}

export default EditActiveList;