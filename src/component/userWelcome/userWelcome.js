import React, { Component } from 'react';

import { Card} from 'antd';

// 动画
import QueueAnim from 'rc-queue-anim';

class UserWelcome extends Component {
    render() {
        return (
            <div className="UserWel">
                <QueueAnim type={['right']}>
                    <div className="UserWel_Li" key="a1">
                        <Card bordered={false}>
                            <div className="UserWel__liLeft">
                                <div className="UserWel__title">
                                    Icon
                                </div>
                                <div className="UserWel__content">
                                    12
                                </div>
                            </div>
                            <i className="iconfont icon-shitidian- UserWel__liIcon"></i>
                        </Card>
                    </div>
                    <div className="UserWel_Li" key="a2">
                        <Card bordered={false}>
                            <div className="UserWel__liLeft">
                                <div className="UserWel__title">
                                    Article
                                </div>
                                <div className="UserWel__content">
                                    24
                                </div>
                            </div>
                            <i className="iconfont icon-tubiao UserWel__liIcon"></i>
                        </Card>
                    </div>
                    <div className="UserWel_Li" key="a3">
                        <Card bordered={false}>
                            <div className="UserWel__liLeft">
                                <div className="UserWel__title">
                                    PSD
                                </div>
                                <div className="UserWel__content">
                                    4
                                </div>
                            </div>
                            <i className="iconfont icon-ps-copy UserWel__liIcon"></i>
                        </Card>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}

export default UserWelcome;