import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Link
} from 'react-router-dom';

import { Breadcrumb } from 'antd';

// 动画
import QueueAnim from 'rc-queue-anim';

// 导航页
import HomeNav from '../component/home-nav/homeNav';

// 图标详情页
import IconDataList from '../component/DataList/IconDataList.js';
// 文章详情页
import ActiveList from '../component/ActiveList/ActiveList.js';
// PSD详情页
import PSDList from '../component/PSDList/PSDList.js';

class HomeView extends Component {
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
        let url = str.substr(str.indexOf('me')+3);
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
            <QueueAnim type={['right', 'left']}
                    ease={['easeOutQuart', 'easeInOutQuart']}>
                <Breadcrumb style={{ margin: '12px 0',position:'relative',zIndex:'98' }} key="a">
                    <Breadcrumb.Item>
                        <Link to="/home">
                        home
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
                                        <Link to={`/home/${item}`}>
                                        { item }
                                        </Link>
                                    </Breadcrumb.Item>
                                )
                            }
                        })
                    }
                </Breadcrumb>

                {/* 默认显示导航列表 */}
                <Route exact path="/home" component={HomeNav}/>
                
                {/* 图标 */}
                <Route path="/home/icon" component={IconDataList}/>

                {/* 文章 */}
                <Route path="/home/active" component={ActiveList}/>
                
                {/* psd */}
                <Route path="/home/psd" component={PSDList}/>
                
            </QueueAnim>
        );
    }
}

export default HomeView;