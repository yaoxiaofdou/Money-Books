import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { Card, BackTop, Col, Row } from 'antd';

// 引入列表服务
import ListService from '../../services/listService.js';

// 动画
import QueueAnim from 'rc-queue-anim';

class AList extends Component {
    render() {
        const activelist = ListService.getActive().map((item,index)=>{
            return(
                <Col span={16} offset={4} key={item.id}>
                    <Link to={`/home/active/${item.id}`}>
                        <Card loading title={ item.title }
                                extra={<b>{ item.time }</b>} 
                                bordered={false}
                                style={{ margin:'10px 5px' }}>
                            <p>{ item.content }</p>
                        </Card>
                    </Link>
                </Col>
            )
        });
        return (
            <Row style={{ padding: '0 30px' }}> 
                
                <QueueAnim type={['bottom']} delay={200}>               
                    { activelist }
                </QueueAnim>

                <BackTop />

            </Row>
        );
    }
}

export default AList;