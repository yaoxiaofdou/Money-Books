import React, { Component } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { MegadraftEditor, editorStateFromRaw } from '../../../node_modules/megadraft/lib/Megadraft';
import './newActive.css';
import '../../../node_modules/megadraft/dist/css/megadraft.css';

import LoadJSON from './setting/LoadJSON/LoadJSON.js';
import Preview from './setting/Preview/Preview.js';

import UserService from '../../services/userService.js';
import ListService from '../../services/listService.js';

// antd
import { Button,message } from 'antd';

// 动画
import QueueAnim from 'rc-queue-anim';

class NewArticle extends Component {
    constructor(props) {
        super(props);

        // const editorState = editorStateFromRaw(sample);
        // const raw = convertToRaw(editorState.getCurrentContent());

        const editorState = editorStateFromRaw();
        const raw = convertToRaw(editorState.getCurrentContent());

        this.state = {
            editorState,
            raw,
        };
    }

    componentWillMount = () => {
        const { match } = this.props;
        // console.log(match.params.id)
        // 判断：存在这个id 就为修改页面，不存在则是新建页面内容
        this.getActiveDetailData(match.params.id)
    }

    // 修改：页面加载获取文章
    getActiveDetailData = (id) => {
        if(id){
            let act = ListService.getDetail('active',id).content;
            this.setState({
                editorState : editorStateFromRaw(JSON.parse(act)),
                raw : JSON.parse(act)
            })
        }else{
            this.setState({
                editorState : editorStateFromRaw()
            })
        }
    }

    // 实时预览
    handleUpdate = (editorState) => {
        this.setState({
            editorState,
            raw: convertToRaw(editorState.getCurrentContent()),
            paste: false,
        });
    }

    // 新建：保存方法，创建新文章
    saveActive = () => {
        // 空值检测
        // 问题:数据回车检测没有弄，就是就算只是敲回车也能提交保存，理论上不行。
        if(this.state.raw.blocks[0].text == '' && this.state.raw.blocks.length < 2){
            message.error('请输入内容再保存!');
            return false
        }
        // 数据发往服务
        UserService.newActive(JSON.stringify(this.state.raw))
    }

    // 粘贴实现方法
    // handleLoad = (raw) => {
    //     this.setState({
    //         editorState: EditorState.createWithContent(convertFromRaw(raw)),
    //         raw,
    //         paste: false,
    //     });
    // }

    // togglePaste = () => {
    //     this.setState({
    //         paste: !this.state.paste,
    //     });
    // }
    render() {
        return (
            <QueueAnim className="newActive">
                <div className="newActive-column-left" key="a1">
                    <div className="newActive-label">编辑</div>
                    <MegadraftEditor editorState={this.state.editorState} onChange={this.handleUpdate} />
                    <div className="newActive-column-left__btn">
                        {/* 打印数据对象 */}
                        <Button type="primary" onClick={this.saveActive} >保存</Button>
                        {/*
                            粘贴功能
                            <Button type="primary" onClick={this.togglePaste} >Paste raw JSON</Button>
                        */}
                        {this.state.paste && <LoadJSON handleLoad={this.handleLoad} />}
                    </div>
                </div>
                <div className="newActive-column-right" key="a2">
                    <div className="newActive-label">预览</div>
                    <Preview raw={this.state.raw} />
                </div>
            </QueueAnim>
        );
    }
}

export default NewArticle;