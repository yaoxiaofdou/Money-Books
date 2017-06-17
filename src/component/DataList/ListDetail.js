import React, { Component } from 'react';

// 引入列表服务
import ListService from '../../services/listService.js';

class ListDetail extends Component {
    
    constructor(){
        super()
        this.state = {
            item:{},
        }
    }

    componentWillMount(){
        const { match } = this.props;
        this.setState({
            item : ListService.getDetail(match.params.id)
        });
        const Breadcrumb = this.props.Breadcrumb;
        console.log(Breadcrumb)
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
        return (
            <div>
                <h1>{this.state.item.title}</h1>
                <p> {this.state.item.user} {this.state.item.time}</p>
                <p>
                    {this.state.item.content}
                </p>

                <hr/>
                
                <div>
                    <div>
                        <label htmlFor="">id:</label>{ this.state.item.id }
                    </div>
                    <div>
                        <label htmlFor="">name:</label>{ this.state.item.user }
                    </div>
                    <div>
                        <label htmlFor="">标题</label>{this.state.item.title}
                    </div>
                    <div>
                        <label htmlFor="">内容</label><input type="text" value={this.state.item.content} onChange={this.handleInputChangeValue.bind(this)} />
                    </div>
                    <input type="button" value="提交修改" onClick={ this.handleEditActive.bind(this) } />
                </div>
                
            </div>
        );
    }
}

export default ListDetail;