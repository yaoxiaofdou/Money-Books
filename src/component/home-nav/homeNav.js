import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

// 动画
import QueueAnim from 'rc-queue-anim';

import { Col, Row, Icon } from 'antd';

// 引入导航数据
import navData from '../../data/homeNav.js';

class HomeNav extends Component {
    render() {
        const navlist = navData.map((item,index)=>{
            return(
                <Col xs={24} sm={12} md={12} lg={6} xl={6} key={item.id} className="homeNav-panel">
                    <Link to={ item.link }>
                        <div className="homeNav-li">
                            <Icon type={item.icon} style={{ marginRight:3 }}/>
                            <i>{ item.name }</i>
                        </div>
                    </Link>
                </Col>
            )
        });
        return (
            <Row>
                <QueueAnim type={['bottom']}
                    style={{ maxWidth:1200,margin:'auto',padding:15 }}>
                    { navlist }
                </QueueAnim>
            </Row>
        );
    }
}

export default HomeNav;