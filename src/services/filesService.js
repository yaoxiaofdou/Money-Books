// branch test
import $ from 'jquery';

const uploadUrl = 'http://220.160.111.78:59459/file/upload/fileupload.do';
const downloadUrl = 'http://220.160.111.78:59459/file/download/downloadFile.do?filePath=/ISSActive/iss_ActiveDetail/1.jpg';

class FilesService {

    /**
    * 创建新图标
    * @param  { Object } icon 新图标对象
    */
    uploadIcon(newIcon,callback){
        let icon = newIcon;
        let data = new FormData();
        data.append("file", newIcon.files);
        data.append("fileSource", "sumer");
        data.append("saveDirectory", "/iss_sumer");
        $.ajax({
            data: data,
            type: "POST",
            url: uploadUrl,
            cache: false,
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                // console.log(data)
                icon.src = 'http://220.160.111.78:59459/file/download/downloadFile.do?filePath=/' + data.result[0].fileSource + data.result[0].filePath +  '/' + data.result[0].fileName;
                // 成功后，把图片路径组装整到数组去
            },
            error: function (error) {
                console.log('上传失败',error)
            }
        })
        // 返回调用方法
        callback(icon);
    }

}
// 实例化后再导出
export default new FilesService()