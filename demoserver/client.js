let http = require('http');

let util = require('util');

http.get('http://www.imooc.com/u/loading',(res)=>{
    let data = '';
    res.on('data',(chunk)=>{
        data += chunk;//这里变成了字符串方式逐个拼接
    });
    res.on('end',()=>{
        let result =JSON.parse(data);
        console.log(`result:${util.inspect(result)}`);
    });
});