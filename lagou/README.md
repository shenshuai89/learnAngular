* src目录  所有的源文件
* dev目录  测试环境文件
* pro目录  生产环境文件（经过了gulp压缩）

使用npm安装gulp打包压缩工具的所有依赖文件也包括安装bower文件，安装在node_modules文件夹下
使用bower安装项目文件运行的依赖文件，安装在bower_components目录下，可以通过.bowerrc文件更改存放文件的名字。

 ** config 配置文件下的router,设置路由
 ** controller 配置控制器,主要是和router相关联
 ** directive指令,主要是给控制器下的视图（view下的html文件）文件使用。命名依据主要是view下的html中定义的指令来写。
 ** view下的template文件夹下的html文件是指令的视图模板文件