import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Link
} from 'react-router-dom';

// 动画
import QueueAnim from 'rc-queue-anim';

import { Layout, Breadcrumb } from 'antd';

// menu
import UserMenu from '../component/user-menu/userMenu.js';

// user welcome
import UserWelcome from '../component/userWelcome/userWelcome';
// user newicon
import NewIcon from '../component/newIcon/newIcon';
// user NewArticle
import NewArticle from '../component/newArticle/newArticle';
// user NewPsd
import NewPsd from '../component/newPsd/newPsd';
// edit Active router
import EditActiveRouter from '../component/editActive/editActiveRouter.js';

const { Header, Footer, Sider, Content } = Layout;

class User extends Component {
    static propTypes = {
        Breadcrumb: PropTypes.array
    }

    constructor(){
        super()
        this.state = {
            Breadcrumb:[],
        }
    }

    componentWillMount(){
        // 页面加载的时候设置一次面包屑导航
        this.handleUrlSet();
    }

    // 根据路由信息，来设置 面包屑导航
    handleUrlSet(urlstr){
        let str = urlstr || this.props.location.pathname;
        let url = str.substr(str.indexOf('er')+3);
        let arr = url.split('/');
        this.setState({
            Breadcrumb : arr
        });
    }

    // 根路由组件中监听location.pathname的属性
    componentWillReceiveProps(nextProps){
        let str = nextProps.location.pathname;
        this.handleUrlSet(str);
    }

    render() {
        return (
            <div className="userController">
                <Layout>
                    <QueueAnim type={['left']}>
                        <div className="userblock-Breadcrumb" key="a">
                            <Breadcrumb style={{ margin: '12px 0' }} key="a">
                                <Breadcrumb.Item>
                                    <Link to="/user">
                                    user
                                    </Link>
                                </Breadcrumb.Item>
                                {
                                    this.state.Breadcrumb.map((item,index)=>{
                                        {/* 最后一个 a 去除链接 ,判断下标+1等于数组长度就行 */}
                                        if(this.state.Breadcrumb.length === (index+1)){
                                            return(
                                                <Breadcrumb.Item key={index} >
                                                { item }
                                                </Breadcrumb.Item>
                                            )
                                        }else{
                                            return(
                                                <Breadcrumb.Item key={index} >
                                                    <Link to={`/user/${item}`}>
                                                    { item }
                                                    </Link>
                                                </Breadcrumb.Item>
                                            )
                                        }
                                    })
                                }
                            </Breadcrumb>
                        </div>
                    </QueueAnim>
                    <QueueAnim type={['bottom']}>
                        <Layout key="b" style={{ paddingBottom:'70px' }}>
                            <Sider style={{ backgroundColor:'transparent' }}>
                                <div className="userblock-nav">
                                    <UserMenu />
                                </div>
                            </Sider>
                            <Content style={{ overflow:'initial' }}>
                                <div className="userblock-content">
                                    <Route exact path="/user" component={UserWelcome}/>
                                    {/*** new start ***/}
                                    <Route path="/user/newIcon" component={NewIcon}/>
                                    <Route path="/user/newArticle" component={NewArticle}/>
                                    <Route path="/user/newPsd" component={NewPsd}/>
                                    {/*** new end ***/}
                                    {/*** edit start ***/}
                                    <Route path="/user/editActive" component={EditActiveRouter}/>
                                    {/*** edit end ***/}
                                </div>
                            </Content>
                        </Layout>
                    </QueueAnim>
                </Layout>
            </div>
        );
    }
}

export default User;