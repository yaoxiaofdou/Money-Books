// import xhr from './xhr/'
// /**
//  * 对应后端的 /msg/* 所有 API
//  */
// class MsgService {
//   /**
//    * 取 msg（命名为 fetch 而非 get 主要是因为是远程操作）
//    * @param  {String} options.author   作者名
//    * @param  {Number} options.pageIdx  目标页码（默认是第 1 页）
//    * @param  {Number} options.quantity 单页请求 msg 的数量（默认每页显示 10 条）
//    * @param  {Number} options.msgId
//    * @return {Promise}
//    */
//   fetch ({ author = '', pageIdx = 1, quantity = 10, msgId } = {}) {
//     let url = '/msg/'
    
//     if (msgId) {
//       url += msgId
//     } else {
//       url = `${url}?author=${author}&pageIdx=${pageIdx}&quantity=${quantity}`
//     }

//     return xhr({ url })
//   }

//   /**
//    * 新增 msg
//    * @param  {Object} msgBody { title:{String}, content:{String} }
//    * @return {Promise}
//    */
//   add (msgBody) {
//     return xhr({
//       method: 'post',
//       url: '/msg',
//       body: msgBody
//     })
//   }

//   /**
//    * 修改 msg
//    * @param  {Object} msgBody { title:{String}, content:{String} }
//    * @return {Promise}
//    */
//   mod (msgBody) {
//     let msgId = msgBody.id
//     delete msgBody.msgId

//     return xhr({
//       method: 'put',
//       url: `/msg/${msgId}`,
//       body: msgBody
//     })
//   }

//   /**
//    * 删除 msg
//    * @param  {Number} msgId
//    * @return {Promise}
//    */
//   del (msgId) {
//     return xhr({
//       method: 'delete',
//       url: `/msg/${msgId}`
//     })
//   }

// }

// // 实例化后再导出
// export default new MsgService()


// 模拟列表数据
const listData = [
        {
            id:'1024001',
            title:'我爱我家，我爱学习！',
            content:'这是一篇关于爱的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'1024002',
            title:'我叫饶聪聪！',
            content:'这是一篇关于我叫饶聪聪的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'1024003',
            title:'我爱跟我喝酒！',
            content:'这是一篇关于我爱跟我喝酒的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'1024004',
            title:'是等等等手术室！',
            content:'这是一篇关于是等等等手术室的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'1024005',
            title:'11111111！',
            content:'这是一篇关于11111111的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'1024006',
            title:'22222222！',
            content:'这是一篇关于22222222的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'1024007',
            title:'3333333！',
            content:'这是一篇关于33333333的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'1024008',
            title:'4444444！',
            content:'这是一篇关于4444444的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },{
            id:'1024009',
            title:'55555555！',
            content:'这是一篇关于55555555的故事。。。',
            time:'2017.06.15',
            user:'xiaofeng.yao'
        },
    ];

class ListService {
    
    /**
    * 获取 列表 数据
    */
    get () {
        return listData
    }

    /**
    * 获取 详情 数据
    * @param  {Number} Listid
    */
    getDetail (id) {
        let detail = {};
        listData.map((item,index)=>{
            if(item.id === id){
                detail = item;
            }
        })
        return detail
    }

    /**
    * 修改单个 文章详情 数据
    * @param  {Number} Listid
    */
    setDetail (id,content) {
        listData.map((item,index)=>{
            if(item.id === id){
                item.content = content;
            }
        })
    }
    

}
// 实例化后再导出
export default new ListService()