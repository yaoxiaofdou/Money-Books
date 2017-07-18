import React, { Component } from 'react';

// 引入列表服务
import ListService from '../../services/listService.js';

// 动画
import QueueAnim from 'rc-queue-anim';

import { Col, Row } from 'antd';

// 引入留言组件
import MessageComponent from '../message/Message.js';

class IListDetail extends Component {
    
    constructor(){
        super()
        this.state = {
            item:{},
        }
    }

    componentWillMount(){
        const { match } = this.props;
        this.setState({
            item : ListService.getDetail('icon',match.params.id)
        })
    }

    handleInputChangeValue(event){
        this.setState({
            item:{
                id:this.state.item.id,
                content : event.target.value,
                title:this.state.item.title,
                time:this.state.item.time,
                user:this.state.item.user
            }
        })
    }

    handleEditActive(){
        const { match } = this.props;
        ListService.setDetail(match.params.id,this.state.item.content)
    }

    render() {
        const { match } = this.props;
        const iconlist = this.state.item.iconlist.map((item)=>{
            const { id,name,icon } = item;
            return(
                <Col xs={5} sm={4} md={3} lg={2} xl={1} className="IListDetail_Icon" key={id}>
                    <p>
                        <i className={`iconfont ${icon}`}></i>
                    </p>
                    <p>
                        {name}
                    </p>
                </Col>
            )
        });
        return (
            <div className="iconDetail">
                <QueueAnim delay={200}>
                    <h1 key="a0">{this.state.item.title}</h1>
                    <div className="iconDetail_user" key="a1">
                        <p> 
                            <span>{this.state.item.time}</span>&nbsp;&nbsp;·&nbsp;&nbsp;
                            <span>{this.state.item.user}</span>
                        </p>
                        <hr/>
                    </div>
                </QueueAnim>

                
                <Row className="iconDetail__content">
                    <QueueAnim delay={200}>
                        {iconlist}
                    </QueueAnim>
                </Row>
                
                <QueueAnim delay={200}>
                    <MessageComponent key="a4"/>
                </QueueAnim>
                

            </div>
        );
    }
}

export default IListDetail;