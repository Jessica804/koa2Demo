# koa2Demo
This repository is demo for mooc lesson *koa2 框架从0开始构建预告片网站*. 

##koa   Express
HTTP   接收     解析       响应

中间件，执行上下文
Application Context Request Response
Middlewares
Session Cookie
koa2 一切皆是中间件
读源码：第一步读README.md ，花个10min，了解基本作用。
       第二步删减法,把非主要代码删掉，不要陷入细节,不要陷入细节,不要陷入细节。



## 总结
 1.在koa中，一切流程皆是中间件
 2.一个http请求进入koa2后，都会流经预先配置好的中间件
 3.在中间件执行的策略中，是会先通过koa-compose（koa的洋葱模型），来吧中间件组合在一起，一个接一个把数组里的函数依次执行，通过next()函数不断地将控制权或者说执行权依次向下传递。
 4.每个中间件都会拿到http请求的上下文，即context，context可以访问request和response对象的属性和方法。
 5.贯穿中间件的请求上下文，context和request还有response这三个对象互相引用，方便调用，
 6.request、response在koa2是专门拓展出的对象，并非node原生的对象。在访问时要注意。
 7.解读源码的四个核心概念Context，Resquest，Response，中间件。但真正复杂的是http协议，资源，TCP/IP协议等网络通信知识，前后端请求策略设定，请求流程的性能优化，这些都不是属于koa web服务框架的知识。






