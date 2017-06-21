import React, { Component } from 'react';

// 引入列表服务
import ListService from '../../services/listService.js';

// 引入留言组件
import MessageComponent from '../message/Message.js';

// 动画
import QueueAnim from 'rc-queue-anim';

class ActiveListDetail extends Component {
    
    constructor(){
        super()
        this.state = {
            item:{},
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
        const { match } = this.props;
        this.setState({
            item : ListService.getDetail('active',match.params.id)
        });
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
        const { match } = this.props;
        return (
            <QueueAnim delay={200} className="activeDetail">
                <h1 key="a0">{this.state.item.title}</h1>
                <p className="iconDetail_user" key="a1"> {this.state.item.user} {this.state.item.time}</p>
                <div className="iconDetail_content" key="a2">
                    <p>
                        {this.state.item.content}
                    </p>
                </div>
                
                <MessageComponent />
                
            </QueueAnim>
        );
    }
}

export default ActiveListDetail;