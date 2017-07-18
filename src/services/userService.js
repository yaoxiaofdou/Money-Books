// 引入wilddog
import * as wilddog from 'wilddog';

const wilddogRef = ()=>{
    const config = {
        syncURL: "https://mbscs.wilddogio.com"
    };
    wilddog.initializeApp(config);
    const ref = wilddog.sync().ref();
    return ref
}

// 文章模拟数据
const sample = [
    {
        id:'A10000001',
        data:{
            "entityMap": {},
            "blocks": [{
                "key": "8ofc8",
                "text": "哈怂的分身乏术烦恼",
                "type": "header-two",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
            }, {
                "key": "8ak65",
                "text": "斯蒂夫说的",
                "type": "blockquote",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
            }, {
                "key": "aq47f",
                "text": "是分身乏术斯蒂夫舒服是方式发斯蒂夫是",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
            }]
        }
    },
];

let cls = [
    {
        id:'CLS001',
        name:'时尚'
    },{
        id:'CLS002',
        name:'天启'
    }
];

// 保存下当前登陆的用户
let User = '';

class UserService {

    /**
    * 获取新图标分类
    */
    getIconCls(){
        // 设置当前登陆用户
        User = JSON.parse(sessionStorage.getItem('MBUser'));
        // 返回分类
        return cls
    }

    /**
    * 创建新分类
    * @param  { Object } nam 新分类
    */
    createIconCls(nam){
        let i = Math.random()*10000;
        cls.push({
            id:'CLS'+i,
            name:nam
        })
    }

    /**
    * 创建新图标
    * @param  { Object } icon 新图标对象
    */
    newIcon(icon){
        console.log(User)
        let Upload_OBJ = {
            name: icon.name,
            cls: icon.cls,
            src: icon.src,
            user: User.uid
        }
        console.log(Upload_OBJ)
    }

    /**
    * 创建新文章
    * @param  { Object } act 新文章对象
    */
    newActive(act){
        // 设置当前登陆用户
        let uu = User || JSON.parse(sessionStorage.getItem('MBUser'));

        let Upload_OBJ = {
            user : uu.uid,
            data : act
        }
        
        console.log(Upload_OBJ)
    }

}
// 实例化后再导出
export default new UserService()