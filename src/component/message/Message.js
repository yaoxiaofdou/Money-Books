import React, { Component } from 'react';

// 引入列表服务
import ListService from '../../services/listService.js';

import ActiveListDetailMsg from './MessageList.js';
import ActiveMsgForm from './MessageForm';

// 动画
import QueueAnim from 'rc-queue-anim';

class MessageComponent extends Component {
    
    constructor(){
        super()
        this.state = {
            data:[
                {
                    id:'M10240000',
                    name:'lisi',
                    msg:'sdfsfsfsfsfsfsf',
                    date:'1232131313'
                },{
                    id:'M10240001',
                    name:'2222222',
                    msg:'4444434534534543535',
                    date:'212312313'
                }
            ]
        }
    }

    componentWillMount(){
        
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

    // 删除留言方法
    handleDeleteMsg(index){
        const list = this.state.data;
        list.splice(index, 1);
        this.setState({ list });
    }

    messageSubmit(obj){
        const arr = this.state.data;
        // 留言提交
        obj['id'] = "M1024000"+arr.length;
        console.log(obj)
        arr.unshift(obj);
        this.setState({
            data:arr
        })
        
    }

    render() {
        return (
            <QueueAnim delay={200} className="iconDetail_message">
                <ActiveMsgForm onSubmit={ this.messageSubmit.bind(this) }/>
                {
                    this.state.data.map((item,index)=>{
                        return(
                            <ActiveListDetailMsg 
                                key={item.id} 
                                index={ index } 
                                li={item}
                                onDeleteMsg={ this.handleDeleteMsg.bind(this) }
                            />
                        )
                    })
                }
            </QueueAnim>
        );
    }
}

export default MessageComponent;