import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { Card, BackTop, Col, Row } from 'antd';

// 引入列表服务
import ListService from '../../services/listService.js';

// 动画
import QueueAnim from 'rc-queue-anim';

class IList extends Component {
    render() {
        const listDataArr = ListService.getIcon().map((item,index)=>{
            return(
                <Col xs={24} sm={12} md={12} lg={8} xl={6} key={item.id} className="iconNav__li">
                    <Link to={`/home/icon/${item.id}`}>
                        <Card title={ item.title }
                                extra={<b>{ item.time }</b>} 
                                bordered={false}
                                style={{ margin:'10px 5px' }}>
                            <p>{ item.summary }</p>
                        </Card>
                    </Link>
                </Col>
            )
        });
        return (
            <Row className="iconNav">
                <QueueAnim delay={200}
                    style={{ padding: '0 30px' }}
                    >
                    { listDataArr }
                    <BackTop />
                </QueueAnim>
            </Row>
        );
    }
}

export default IList;