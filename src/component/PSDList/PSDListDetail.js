import React, { Component } from 'react';

// 引入列表服务
import ListService from '../../services/listService.js';

// 引入留言组件
import MessageComponent from '../message/Message.js';

// 动画
import QueueAnim from 'rc-queue-anim';

class PSDListDetail extends Component {
    
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
            item : ListService.getDetail('psd',match.params.id)
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
            <QueueAnim delay={200} className="psdDetail">
                <h1 key="a0">{this.state.item.title}</h1>
                <div className="psdDetail_user" key="a1"> 
                    <p>
                        <span>{this.state.item.time}</span> · 
                        <span>{this.state.item.user}</span>
                    </p>
                    <hr/>
                </div>
                <div className="psdDetail_content" key="a2">
                    {/* 这种引用图片的方法不推荐，一般是在有数百张图片，并且逐个导入它们比较麻烦，
                    才选择这个，缺点是必须要去考虑缓存会被破坏，并且需要注意图片的路径 */}
                    <img src={process.env.PUBLIC_URL + this.state.item.imgUrl} alt={this.state.item.title}/>
                    {/* a 链接下载psd 文件 */}
                    <div className="psdDetail_content__download">
                        <a href={process.env.PUBLIC_URL + this.state.item.psdUrl} download={this.state.item.title}>点击下载</a>
                    </div>
                    <p>
                        {this.state.item.content}
                    </p>
                </div>
                
                <MessageComponent />
                
            </QueueAnim>
        );
    }
}

export default PSDListDetail;