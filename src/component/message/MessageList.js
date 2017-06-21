import React, { Component } from 'react';

// 动画
import QueueAnim from 'rc-queue-anim';

class MessageList extends Component {
    constructor(){
        super()
        this.state = {
            timeString:'',
        }
    }

    componentWillMount(){
        this._updateTimeString();
        // 定时执行评论计时
        this._timer = setInterval(this._updateTimeString.bind(this),5000)
    }

    componentWillUnmount(){
        clearInterval(this._timer)
    }

    _updateTimeString(){
        let { li } = this.props;
        const duration = ( Date.now() - li.date ) / 1000;
        if(duration/3600/24 > 1){
            this.setState({
                timeString : Math.floor(duration/3600/24) + "天前"
            })
        }else if(duration/3600 > 1){
            this.setState({
                timeString : Math.floor(duration/3600) + "小时前"
            })
        }else{
            this.setState({
                timeString : duration > 60 ? Math.round(duration/60)+'分钟前' : Math.round(Math.max(duration, 1))+'秒前'
            })
        }
    }
    
    // code 转义，预防 XSS 漏洞攻击
     _getProcessedContent(content){
         return content
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;")
             .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
     }

    deleteUserMsg(){
        if (this.props.onDeleteMsg) {
            this.props.onDeleteMsg(this.props.index)
        }
    }

    render() {
        const { li } = this.props;
        return (
            <div className="comment">
                <div className="comment-user">
                    <a>{ li.name }</a>：
                </div>
                <div className="comment-msg">
                    { /* 往页面动态插入 HTML 结构我们只能用 dangerouslySetInnerHTML */ }
                    <p dangerouslySetInnerHTML={{
                        __html: this._getProcessedContent(li.msg)
                    }} />
                </div>
                <a className="comment-delete" onClick={ this.deleteUserMsg.bind(this) }>删除</a>
                <b>{ this.state.timeString }</b>
            </div>
        );
    }
}

export default MessageList;