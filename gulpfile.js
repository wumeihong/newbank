var gulp = require("gulp");
var webserver = require("gulp-webserver");
var mock = require("mock");
gulp.task("userinfo",function(){
    gulp.src("./")
        .pipe(webserver({
            host:"localhost",
            port:8080,
            middleware:function(req,res){
                  var data = [
                      {
                        "img":"images/c_03.gif",
                        "title":"掌上银行下载"
                      },
                      {
                        "img":"images/d_03.gif",
                        "title":"行情数据"
                      },
                      {
                        "img":"images/e_03.gif",
                        "title":"图说农行"
                      },
                      {
                        "img":"images/f_03.gif",
                        "title":"营业机构查询"
                      },
                      {
                        "img":"images/g_03.gif",
                        "title":"在线预约排队"
                      },
                     {
                        "img":"images/h_03.gif",
                        "title":"信用卡申请"
                      },
                     {
                        "img":"images/i_03.gif",
                        "title":"智能客服"
                     },
                     {
                        "img":"images/j_03.gif",
                        "title":"WAP网银登录"
                     }


                ]
                    res.writeHead(200,{
                        "Content-type":"text/json;charset=utf8",
                        "Access-Control-Allow-Origin":"*"
                    });
                if(req.url === "/userinfo"){
                    res.end(JSON.stringify(data))
                }   
            }
        }));
});
gulp.task("default",function(){
    gulp.start("userinfo");
})