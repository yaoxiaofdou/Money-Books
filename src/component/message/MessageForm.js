import React, { Component } from 'react';

import { Form, Input, Button } from 'antd';

// 动画
import QueueAnim from 'rc-queue-anim';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

class MessageForm extends Component {
    state = {  }

    constructor(){
        super()
        this.state = {
            formName:'',
            formMsg:'',
            testName:{
                sta:'',
                title:'',
            },
            testMsg:{
                sta:'',
                title:'',
            }
        }
        
    }

    handleFormInputChange(cls,event){
        if(cls==='name'){
            this.setState({
                formName : event.target.value
            })
        }else if(cls==='msg'){
            this.setState({
                formMsg : event.target.value
            })
        }
    }

    msgSubmit(){
        // 校验输入是否正确(名字)
        if(this.state.formName === ''){
            this.setState({
                testName:{
                    sta:'error',
                    title:'留下你的大名！',
                },
            })
            return false
        }
        // 跑到这就是验证通过
        this.setState({
            testName:{
                sta:'success',
                title:'',
            }
        });
        // 校验输入是否正确(留言)
        if(this.state.formMsg === ''){
            this.setState({
                testMsg:{
                    sta:'error',
                    title:'不说点什么，你就下次再来吧',
                },
            })
            return false
        }else if(this.state.formMsg.length > 125){
            this.setState({
                testMsg:{
                    sta:'error',
                    title:'说那么多......我不听，我不听',
                },
            })
            return false
        }
        // 跑到这就是验证通过
        this.setState({
            testMsg:{
                sta:'success',
                title:'',
            }
        });

         const subObj = {
             name : this.state.formName,
             msg : this.state.formMsg,
             date : + new Date()
         }
         this.props.onSubmit(subObj);
        
        // antd 封装的input 组件问题，导致清空了state数据后，页面dom不回刷新，
        // 这里利用ref单独对表单的两个input进行清空
        this.refs.fname.refs['input'].value = '';
        this.refs.fmsg.refs['input'].value = '';
        // 清空表单
        this.setState({
            formName:'',
            formMsg:'',
            testName:{
                sta:'',
                title:'',
            },
            testMsg:{
                sta:'',
                title:'',
            }
        });
    }

    render() {
        return (
            <Form style={{ width:600,padding:'70px 15px' }}>
                <QueueAnim delay={200}>
                    <FormItem
                        {...formItemLayout}
                        label="名字"
                        hasFeedback
                        key="a1"
                        validateStatus={ this.state.testName.sta }
                        help={ this.state.testName.title }
                        >
                        <Input placeholder="写个称呼"  ref="fname" onChange={ this.handleFormInputChange.bind(this,'name') } />
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="留言"
                        hasFeedback
                        key="a2"
                        validateStatus={ this.state.testMsg.sta }
                        help={ this.state.testMsg.title }
                        >
                        <Input type="textarea" placeholder="留点话吧" ref="fmsg"
                            autosize={{ minRows: 2, maxRows: 6 }}
                            onChange={ this.handleFormInputChange.bind(this,'msg') }  />
                    </FormItem>

                    <FormItem
                        key="a3"
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 16, offset: 8 },
                        }}
                        >

                        <Button type="primary" key="a4" htmlType="submit" size="large"
                            onClick={ this.msgSubmit.bind(this) }
                            >
                            发表留言
                        </Button>
                    
                    </FormItem>
                </QueueAnim>
            </Form>
        );
    }
}

export default MessageForm;