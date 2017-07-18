import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

// 导航
import NavComponent from '../component/nav/nav.js';

// 组件路径

// home 视图页
import HomeView from '../views/home.js';

// user 视图页
import User from '../views/user.js';
import PrivateRoute from '../component/login/PrivateRoute.js';

// login
import Login from '../component/login/login.js';

// 欢迎
import WelcomeView from '../component/Welcome.js';

// 404
// import FourZeroFourView from '../component/404.js';

// antd
import { Row, Layout } from 'antd';

const { Content,Footer } = Layout;

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Protected = () => <h3>Protected</h3>

class MyRoutes extends Component {
  
    render() {
        return (
            <Router>
              <Layout className="layout" style={{ backgroundColor:'#fff' }}>

                <NavComponent data={this.props.navData}/>
                
                <Content style={{ padding: '0  50px',marginTop: 64 }}>
                    <Row>
                        <Switch>
                            <Route exact path="/" component={WelcomeView}/>
                            <Route path="/home" component={HomeView}/>
                            <Route path="/topics" component={Topics}/>
                            {/* 登陆判断 */}
                            <PrivateRoute path="/user" component={User}/>
                            {/*<Route path="/user" component={User}/>*/}
                            <Route path="/login" component={Login}/>
                            <Route component={WelcomeView}/>
                        </Switch>
                    </Row>
                </Content>
                <Footer style={{ width:'100%',position:'fixed',bottom:'0',textAlign: 'center' }}>
                  create by xiaofeng.yao ~ 2017.06.14
                </Footer>
              </Layout>
            </Router>
        );
    }
}

export default MyRoutes