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

const userlist = [
    {
        id:'10240001',
        username:'111',
        password:'111'
    },{
        id:'10240002',
        username:'222',
        password:'222'
    }
]

const login = {
    isAuthenticated:false   // false 未登陆 true 登陆
}

class LoginService {
    
    /**
    * 登陆方法
    */
    login = (obj) => {
        //console.log(obj)
        // 验证账号密码的正确性
        userlist.forEach((item,index)=>{
            if(item.username == obj.userName){
                if(item.password == obj.password){
                    // 是不是保存下用户信息
                    if(obj.remember){
                        this.setLoginCookie(item);
                    }
                    login.isAuthenticated = true; // 登陆
                }
            }
        })
        //console.log(login)
        return login.isAuthenticated
    }

    /**
    *   登陆的信息写入本地存储
    **/
    setLoginCookie(usr){
        let uuu = {
            "uid" : usr.id,
            "userName" : usr.username,
            "password" : usr.password
        }
        console.log(uuu)
        sessionStorage.setItem('MBUser',JSON.stringify(uuu));
    }

    /**
    * 获取 登陆状态
    */
    getLoginState = () => {
        return login
    }

    /**
    * 退出 登陆
    */
    signOut = () => {
        sessionStorage.removeItem('MBUser');
        login.isAuthenticated = false;
    }

}
// 实例化后再导出
export default new LoginService()