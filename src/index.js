import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 导航
import navData from './data/nav';

import MyRoutes from './routes/routes';

import './index.css';

class App extends Component{

    render(){
        return(
          <div>
            <MyRoutes navData={navData}/>
          </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);