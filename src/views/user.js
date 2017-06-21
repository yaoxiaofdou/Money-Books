import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Link
} from 'react-router-dom';

// 动画
import QueueAnim from 'rc-queue-anim';

import { Menu, Icon, Breadcrumb } from 'antd';

const SubMenu = Menu.SubMenu;

class User extends Component {
    static propTypes = {
        Breadcrumb: PropTypes.array
    }

    constructor(){
        super()
        this.state = {
            current: '1',
            openKeys: [],
            Breadcrumb:[],
        }
    }

    // 根路由组件中监听location.pathname的属性
    componentWillReceiveProps(nextProps){
        let str = nextProps.location.pathname;
        let urlId = str.substr(str.indexOf('me')+3);
        // 新增数据
        this.setState({
            Breadcrumb:[urlId]
        });
    }

    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState({ current: e.key });
    }

    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
        nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
        nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }

    getAncestorKeys = (key) => {
        const map = {
        sub3: ['sub2'],
        };
        return map[key] || [];
    }

    render() {
        return (
            <QueueAnim type={['left']}>
                <Breadcrumb style={{ margin: '12px 0' }} key="a">
                    <Breadcrumb.Item>
                        <Link to="/user">
                        user
                        </Link>
                    </Breadcrumb.Item>
                    {
                        this.state.Breadcrumb.map((item,index)=>{
                            return(
                                <Breadcrumb.Item key={index} >
                                    <Link to={`/user/${item}`}>
                                    { item }
                                    </Link>
                                </Breadcrumb.Item>
                            )
                        })
                    }
                </Breadcrumb>

                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    selectedKeys={[this.state.current]}
                    style={{ width: 180 }}
                    onOpenChange={this.onOpenChange}
                    onClick={this.handleClick}
                    key="b"
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>发布新资源</span></span>}>
                        <Menu.Item key="1">新 图标</Menu.Item>
                        <Menu.Item key="3">新 设计图</Menu.Item>
                        <Menu.Item key="2">新 文章</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>管理资源</span></span>}>
                        <Menu.Item key="5">图标</Menu.Item>
                        <Menu.Item key="6">设计图</Menu.Item>
                        <Menu.Item key="7">文章</Menu.Item>
                    </SubMenu>
                </Menu>

            </QueueAnim>
        );
    }
}

export default User;