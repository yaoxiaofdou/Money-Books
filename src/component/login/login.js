import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import loginService from '../../services/loginService.js';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const history = createHistory();
const location = history.location;

const FormItem = Form.Item;

class Login extends Component {

    state = {
        login:false   // 默认未登陆
    }

    componentWillMount(){
        this.changeLoginState();
    }

    changeLoginState = ( ) =>{
        // 页面加载判断是否可以直接登陆账户
        let user = sessionStorage.getItem('MBUser');
        if(user){
            // 判断是否登陆成功
            this.setState({
                login : loginService.login(JSON.parse(user))
            })
        }
    }

    handleSubmit = (e) => {

        var _that = this;

        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);

                loginService.login(values) ? (console.log('登陆成功')) : (console.log('账号密码错误'));

                _that.setState({
                    login: loginService.login(values)
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        
        // 这里是检测到已经登陆了，就跳转到预先设定的用户管理页
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { login } = this.state
        if (login) {
            return (
                <Redirect to={from}/>
            )
        }
        return (
            <div style={{ width:'300px',margin:'60px auto 200px' }}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </FormItem>
                    <FormItem>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>

            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;