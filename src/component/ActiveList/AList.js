import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { Card, BackTop, Col, Row, Button } from 'antd';

// 引入列表服务
import ListService from '../../services/listService.js';

// 动画
import QueueAnim from 'rc-queue-anim';

class AList extends Component {
    render() {
        const activelist = ListService.getActive().map((item,index)=>{
            return(
                <Col span={16} offset={4} key={item.id} className="active-list__li">
                    <Link to={`/home/active/${item.id}`}>
                        <h1 key="a0">{ item.title }</h1>
                        <div className="active-list__liuser" key="a1">
                            <p> 
                                <span className="active-list__liICO">文章</span>
                                <span>{item.time}</span>&nbsp;&nbsp;·&nbsp;&nbsp;
                                <span>{item.user}</span>
                            </p>
                        </div>
                        <div className="active-list__licontent" key="a2">
                            <p>
                                {item.content}
                            </p>
                        </div>
                        <Button type="primary" className="active-list__liBtn">阅读更多</Button>
                    </Link>
                    <hr/>
                </Col>
            )
        });
        return (
            <Row style={{ padding: '0 30px' }} className="active-list">
                <div className="active-list__leftBG" style={{ background:'url('+ process.env.PUBLIC_URL + '/images/active/active1.svg' +')'}}>
                </div>
                <div className="active-list__maskBG"></div>
                <div className="active-list__rightBG" style={{ background:'url('+ process.env.PUBLIC_URL + '/images/active/active2.svg' +')'}}>
                </div>
                <QueueAnim type={['bottom']} delay={200}>               
                    { activelist }
                </QueueAnim>

                <BackTop />

            </Row>
        );
    }
}

export default AList;