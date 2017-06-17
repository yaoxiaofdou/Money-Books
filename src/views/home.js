import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Link
} from 'react-router-dom';

import { Breadcrumb } from 'antd';

import DataList from '../component/DataList/DataList.js';

import ListDetail from '../component/DataList/ListDetail';

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

    componentWillMount () {
        console.log(this.state.Breadcrumb)
    }

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>
                        <Link to="/home">
                        home
                        </Link>
                    </Breadcrumb.Item>
                    {
                        this.state.Breadcrumb.map((item,index)=>{
                            return(
                                <Breadcrumb.Item key={index} >
                                    <Link to={`/home/${item}`}>
                                    { item }
                                    </Link>
                                </Breadcrumb.Item>
                            )
                        })
                    }
                </Breadcrumb>    

                {/* 默认显示列表 */}
                <Route exact path="/home" component={DataList}/>
                
                {/* 列表详情页 */}
                <Route path="/home/:id" 
                    onEnter={
                        ({params}) => {
                            console.log(params.id)
                        }
                    }
                component={ListDetail}/>
                
            </div>
        );
    }
}

export default HomeView;