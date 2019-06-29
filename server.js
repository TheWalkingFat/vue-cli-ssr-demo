const devServer = require("./build/dev-server.js");
const express = require("express");
const app = express();
const vueRender = require("vue-server-renderer");

app.get('*',(request,respones) => {
    respones.status(200);
    respones.setHeader("Content-Type","text/html;charset-utf-8;");
    devServer((serverBundle,clientBundle,template) => {
        let render = vueRender.createBundleRenderer(serverBundle,{
            template,
            clientManifest:clientBundle.data,
            //  每次创建一个独立的上下文
            renInNewContext:false
        }); 
        render.renderToString({
            url:request.url
        }).then((html) => {
            respones.end(html);
        }).catch(error => {
          respones.end(JSON.stringify(error));
        });
    });
})

app.listen(5001,() => {
    console.log("服务已开启")
});