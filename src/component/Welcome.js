import React, { Component } from 'react';
import { Steps } from 'antd';

// 动画
import QueueAnim from 'rc-queue-anim';

const Step = Steps.Step;

class WelcomeView extends Component {
    render() {
        return (
            <QueueAnim type="bottom" delay={200} className="welcome">
                <h1>master</h1>
                <h2 key="a0">Welcome to My Honey Demo, "Money Books"! </h2>
                <Steps direction="vertical" size="small" current={0} key="a1">
                    <Step title="浏览" description="你可以浏览这里的所有帖子！"  />
                    <Step title="学习" description="然后学习其中一切有用的知识！" />
                    <Step title="进步" description="从而使你自身技能得到提升！" />
                </Steps>
            </QueueAnim>
        );
    }
}

export default WelcomeView;