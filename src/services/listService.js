// 引入wilddog
import * as wilddog from 'wilddog';

const wilddogRef = ()=>{
    const config = {
        syncURL: "https://mbs.wilddogio.com"
    };
    wilddog.initializeApp(config);
    const ref = wilddog.sync().ref();
    return ref
}

// 模拟icon数据
const iconData = [
        {
            id:'I1024001',
            title:'医疗类icon',
            summary:'突发灵感创作的一组图标...',
            iconlist:[
                {
                    id:'I10240010001',
                    name:'点滴',
                    icon:'icon-yiliao2'
                },{
                    id:'I10240010002',
                    name:'健康医疗',
                    icon:'icon-icon-test'
                },{
                    id:'I10240010003',
                    name:'听诊器',
                    icon:'icon-73316'
                },{
                    id:'I10240010004',
                    name:'胶囊',
                    icon:'icon-yiliao1'
                },{
                    id:'I10240010005',
                    name:'桃心医疗',
                    icon:'icon-yiliao'
                }
            ],
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'I1024002',
            title:'通用类icon-1',
            summary:'突发灵感创作的一组图标...',
            iconlist:[
                {
                    id:'I10240020001',
                    name:'001',
                    icon:'icon-iconfont-tongyong' 
                },{
                    id:'I10240020002',
                    name:'002',
                    icon:'icon-tongyong-fenchengtubiao' 
                },{
                    id:'I10240020003',
                    name:'003',
                    icon:'icon-currency' 
                },{
                    id:'I10240020004',
                    name:'004',
                    icon:'icon-xiaoyijianyi-tongyongtubiao' 
                },{
                    id:'I10240020005',
                    name:'005',
                    icon:'icon-yewuchanpinxiantongyongtubiao' 
                }
            ],
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'I1024003',
            title:'科技类icon',
            summary:'突发灵感创作的一组图标...',
            iconlist:[
                {
                    id:'I10240030001',
                    name:'001',
                    icon:'icon-keji3' 
                },{
                    id:'I10240030002',
                    name:'002',
                    icon:'icon-keji2' 
                },{
                    id:'I10240030003',
                    name:'003',
                    icon:'icon-keji1' 
                },{
                    id:'I10240030004',
                    name:'004',
                    icon:'icon-keji' 
                },{
                    id:'I10240030005',
                    name:'005',
                    icon:'icon-iconfontkeji1' 
                }
            ],
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'I1024004',
            title:'通用类icon-2',
            summary:'突发灵感创作的一组图标...',
            iconlist:[
                {
                    id:'I10240040001',
                    name:'001',
                    icon:'icon-iconfont-tongyong' 
                },{
                    id:'I10240040002',
                    name:'002',
                    icon:'icon-tongyong-fenchengtubiao' 
                },{
                    id:'I10240040003',
                    name:'003',
                    icon:'icon-currency' 
                },{
                    id:'I10240040004',
                    name:'004',
                    icon:'icon-xiaoyijianyi-tongyongtubiao' 
                },{
                    id:'I10240040005',
                    name:'005',
                    icon:'icon-yewuchanpinxiantongyongtubiao' 
                }
            ],
            time:'2017.06.15',
            user:'xiaofeng.yao'
        }
    ];

// 模拟文章数据
const activeData = [
        {
            id:'A1024005',
            title:'11111111！',
            content:'这是一篇关于11111111的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'A1024006',
            title:'22222222！',
            content:'这是一篇关于22222222的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'A1024007',
            title:'3333333！',
            content:'这是一篇关于33333333的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'A1024008',
            title:'4444444！',
            content:'这是一篇关于4444444的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'A1024009',
            title:'55555555！',
            content:'这是一篇关于55555555的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },
];

class ListService {
    
    /**
    * 获取 icon active psd 列表 数据
    */
    getIcon () {
        return iconData
    }
    getActive () {
        return activeData
    }
    /**
    * 获取 详情 数据
    * @param  {Number} Listid
    */
    getDetail (cls,id) {
        let detail = {};
        
        if(cls === 'icon'){
            iconData.map((item,index)=>{
                if(item.id === id){
                    detail = item;
                }
            })
        }else if(cls === 'active'){
            activeData.map((item,index)=>{
                if(item.id === id){
                    detail = item;
                }
            })
        }
        return detail
    }

    /**
    * 修改单个 文章详情 数据
    * @param  {Number} Listid
    */
    setDetail (id,content) {
        iconData.map((item,index)=>{
            if(item.id === id){
                item.content = content;
            }
        })
    }
    

}
// 实例化后再导出
export default new ListService()