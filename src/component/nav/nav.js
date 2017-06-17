import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

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

    render() {
        return (
            <div className="MoBik-nav" style={{ position: 'fixed', width: '100%', zIndex:99 }}>
               
                <Menu defaultSelectedKeys={[this.state.current]} 
                        mode="horizontal"
                        style={{ lineHeight: '64px' }}>
                    {
                        this.props.data.map((li,index)=>{
                            if(li.list){
                                return(
                                    <SubMenu key={ li.name } title={<span><Icon type="setting" />li.name</span>}>
                                        <MenuItemGroup>
                                            {
                                                li.list.map((item,indx)=>{
                                                    return(
                                                        <Menu.Item key={item.name}>
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
                                    <Menu.Item key={ li.name } >
                                        <Link to={ li.link }></Link>
                                        <Icon type={ li.icon } />{ li.name }
                                    </Menu.Item>
                                )
                            }
                        })
                    }
                </Menu>
            </div>
        );
    }
}

export default NavComponent