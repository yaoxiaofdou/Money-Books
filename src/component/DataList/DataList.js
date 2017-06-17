import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { Card, BackTop, Col, Row } from 'antd';

// 引入列表服务
import ListService from '../../services/listService.js';

class DataList extends Component {
    render() {
        
        return (
            <Row style={{ padding: '0 30px' }}>                
                {
                    ListService.get().map((item,index)=>{
                        return(
                            <Col xs={24} sm={12} md={12} lg={8} xl={6} key={item.id}>
                                <Link to={`/home/${item.id}`}>
                                    <Card loading title={ item.title }
                                            extra={<b>{ item.time }</b>} 
                                            bordered={false}
                                            style={{ margin:'10px 5px' }}>
                                        <p>{ item.content }</p>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    })
                }
                <BackTop />
            </Row>
        );
    }
}

export default DataList;