import React, { Component } from 'react';

import UserService from '../../services/userService.js';
import FileService from '../../services/filesService.js';

// 动画
import QueueAnim from 'rc-queue-anim';

import {Form,message,Button,Input,Icon,Select} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class iconFileFrom extends Component {

    constructor(){
        super()
        this.state = {
            cls:'',
            imgSrc:'',
            files:'',
            title:'',
            submitDisabled:true,
            newcls:false,
            alert:{},
        }
    }

    // 获取上传的文件
    getUploadFiles(e){
        // 没有选择图片
        if(!e.target.files[0]){
            return false
        }       
        var _that = this;
        // 本地预览图片
        var reader = new FileReader();
        reader.onload = function(evt){
            _that.setState({
                imgSrc : evt.target.result      // 本地预览图片
            })
        }
        reader.readAsDataURL(e.target.files[0]);
        // console.log(e.target.files[0])
        // 判断：名字跟图片是否都存在
        if(_that.state.title){
            _that.setState({
                submitDisabled : false,
                files : e.target.files[0]           // 设置上传图片
            })
        }else{
            _that.setState({
                files : e.target.files[0]           // 设置上传图片
            })
        }
    }


    // 上传方法
    upload(){
        // 上传检测，是否有选择分组
        if(this.state.cls == ''){
            message.error('请选择分类!');
            this.setState({clsValidate:'error'})
            return false
        }
        this.setState({clsValidate:'success'});

        // 新图标对象
        let newicon = {
            cls:this.state.cls,       // 当前分类
            name:this.state.title,    // 当前图片名
            files:this.state.files,   // 当前图片文件
            src:''                    // 当前图片上传后返回的路径
        };
        FileService.uploadIcon(newicon,(data)=>{
            // console.log(data)
            newicon.src = data.src;
        })
        // 上传图片服务器后，获取到的路径再组织后上传野狗云。
        UserService.newIcon(newicon);
        message.success('图片上传成功!');
    }

    // title 改变事件
    handleIconTitleChange(e){
        if(e.target.value.length > 0 && this.state.files){
            this.setState({
                title : e.target.value,
                submitDisabled : false
            })
        }else{
            this.setState({
                title : e.target.value,
                submitDisabled : true
            })
        }
    }

    // cls 分类改变事件
    handleIconNewClsChange = (e) =>{
        this.setState({
            cls : e.target.value
        })
    }

    // 新建分类
    newClass(){
        this.setState({
            cls:'',
            newcls: !this.state.newcls
        })
    }

    // 保存新建分类
    saveNewCls = () =>{
        if(this.state.cls==''){
            message.error('创建分组不能为空!');
            return false
        }
        UserService.createIconCls(this.state.cls);
        message.success('分组创建成功!');
        this.setState({newcls: false});
    }

    // 设置当前选中分类
    handleSelectChange = (value) => {
        // 设置当前选中分类
        // console.log(value);
        this.setState({
            cls : value
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return(
            <Form className="NewIcon_div">
                <p>逻辑：最终分为上中下三层，上是选择分类，中是显示当前分类已有的图标，下是创建新图标。</p>
                <QueueAnim>
                    <FormItem className="NewIcon_class" validateStatus={this.state.clsValidate} key="a1">
                        <div className={ this.state.newcls ? "NewIcon_class_mul NewIcon_class_mul--new" : "NewIcon_class_mul" }>
                            <div className="NewIcon_class__select">
                                <i className="iconfont icon-new"  onClick={this.newClass.bind(this)}></i>
                                <Select onChange={this.handleSelectChange} placeholder="选择分组">
                                    {
                                        UserService.getIconCls().map((item,index)=>{
                                            return (
                                                <Option value={item.name} key={item.id}>
                                                    {item.name}
                                                </Option>
                                            )
                                        })
                                    }
                                </Select>
                            </div>
                            <div className="NewIcon_class__newclass">
                                <div>
                                    <i className="iconfont icon-fanhui" onClick={this.newClass.bind(this)}></i>
                                    <Input value={this.state.cls} onChange={this.handleIconNewClsChange.bind(this)} placeholder="创建分组" />
                                </div>
                                <div>
                                    <Button type="primary" className="NewIcon_class__newclassBtn" onClick={this.saveNewCls.bind(this)}>
                                        保存
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </FormItem>
                    <FormItem className="NewIcon_section" key="a2">
                        <div className="NewIcon">
                            <i className="iconfont icon-shangchuan1"></i>
                            <input type="file" className="NewIcon__File" onChange={this.getUploadFiles.bind(this)} />
                            <img className={ this.state.imgSrc ? 'NewIcon__Img' : "NewIcon__Img NewIcon__Img--hide" } src={this.state.imgSrc}/>
                        </div>
                        <div className="NewIcon__title">
                            <input type="text" className="NewIcon__title-txt" value={this.state.title} onChange={this.handleIconTitleChange.bind(this)} placeholder="# Icon Name #"/>
                        </div>
                    </FormItem>
                    <FormItem key="a3">
                        <Button type="primary" onClick={this.upload.bind(this)} disabled={this.state.submitDisabled}>
                            发布
                        </Button>
                    </FormItem>
                </QueueAnim>
            </Form>
            
        )
    }


}

const newIcon = Form.create()(iconFileFrom);

export default newIcon;