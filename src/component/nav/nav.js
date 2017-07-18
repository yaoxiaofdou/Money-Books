import React, { Component } from 'react';
import {
  Link,
  Redirect,
} from 'react-router-dom';

import loginService from '../../services/loginService.js';

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavComponent extends Component {

    constructor(){
        super()
        this.state = {
            current: 'home',
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    navSignOut(){
        loginService.signOut();
    }

    render() {
        return (
            <div className="MoBik-nav" style={{ position: 'fixed', width: '100%', zIndex:99 }}>
               
                <Menu defaultSelectedKeys={[this.state.current]} 
                        mode="horizontal"
                        style={{ lineHeight: '64px', background:'linear-gradient(to right, #403773 , #724ca5)' }}>
                    {
                        this.props.data.map((li,index)=>{
                            if(li.list){
                                return(
                                    <SubMenu key={ li.name } title={<span style={{ color:'rgba(242,238,255,0.6)' }}><Icon type="setting" />li.name</span>}>
                                        <MenuItemGroup>
                                            {
                                                li.list.map((item,indx)=>{
                                                    return(
                                                        <Menu.Item key={item.name} style={{ color:'rgb(64, 55, 115)' }}>
                                                            <Link to={ item.link }></Link>
                                                            <Icon type={ item.icon } />
                                                            { item.name }
                                                        </Menu.Item>
                                                    )
                                                })
                                            }
                                        </MenuItemGroup>
                                    </SubMenu>
                                )
                            }else{
                                return(
                                    <Menu.Item key={ li.name } style={{ color:'rgba(242,238,255,0.6)' }}>
                                        <Link to={ li.link }></Link>
                                        <Icon type={ li.icon } />{ li.name }
                                    </Menu.Item>
                                )
                            }
                        })
                    }
                </Menu>
                <Link to="/home" className="MoBik-nav__signOut" onClick={this.navSignOut.bind(this)}>
                    <i className="iconfont icon-signout"></i>
                </Link>
            </div>
        );
    }
}

export default NavComponent