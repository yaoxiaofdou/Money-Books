import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class UserMenu extends Component {

    constructor(){
        super()
        this.state = {
            current: '0',
            openKeys: ['sub1'],
        }
    }

    handleClick = (e) => {
        // console.log('Clicked: ', e);
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
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                selectedKeys={[this.state.current]}
                style={{ width: 180 }}
                onOpenChange={this.onOpenChange}
                onClick={this.handleClick}
                className="userMenu"
                key="b"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>发布新资源</span></span>}>
                    <Menu.Item key="1">
                        <Link to="/user/newIcon">新 图标</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/user/newArticle">新 文章</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/user/newPsd">新 PSD</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>管理资源</span></span>}>
                    <Menu.Item key="5">图标</Menu.Item>
                    <Menu.Item key="6">PSD</Menu.Item>
                    <Menu.Item key="7">
                        <Link to="/user/editActive">文章</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default UserMenu;