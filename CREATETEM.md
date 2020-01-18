#### 自定义React Template说明


- 1.  fork一份create-react-app项目

- 2. git clone出来一个本地的仓库

- 3. 修改代码 create-react-app/packages/react-scripts/scripts/init.js
```javascript
      // Change displayed command to yarn instead of yarnpkg
        const displayedCommand = useYarn ? 'yarn' : 'npm';

        console.log();
        console.log('自定义模板生效了！！'); // 我在这里加了一行代码
        console.log(`Success! Created ${appName} at ${appPath}`);
        console.log('Inside that directory, you can run several commands:');
        console.log();
        console.log(chalk.cyan(`  ${displayedCommand} start`));
        console.log('    Starts the development server.');
        console.log();
        console.log(
            chalk.cyan(`  ${displayedCommand} ${useYarn ? '' : 'run '}build`)
```
- 4. 把react-script发布到npm
    - 4.1 修改react-script的package.json信息
    - 4.2 修改如下
    ```javascript
    {
        "name": "zk-react-script",
        "version": "3.2.14",
        "description": "React自定义的项目模板",
         ......
    }
  ```
    - 4.3 修改版本号发布 npm version patch  npm publish

- 5. 检查是否发布成功 npm　package上检查一下

- 6. 验证创建项目　create-react-app test_react_template --scripts-version zk-react-script@latest
    - 6.1 test_react_template是项目名称
    - 6.2 --scripts-version是参数　千万别拼错了
    - 6.3 zk-react-script执行的自定义的脚本
    - 6.4 以下是创建项目的打印信息　(自定义模板生效了！！)成功打印了

![效果图](https://graph.baidu.com/resource/111d71484a9d0c7ddef6e01571114365.jpg '效果图')

- 7. 也可以添加项目的基础目录 以下是目录结构
            .
            ├── api
            │   └── index.js
            ├── App.css
            ├── App.js
            ├── App.test.js
            ├── asset
            │   ├── logo.svg
            │   └── style
            │       └── reset.css
            ├── components
            │   └── README.md
            ├── index.css
            ├── index.js
            ├── logo.svg
            ├── route
            │   ├── index.js
            │   └── routes
            │       ├── index.js
            │       └── routes.js
            ├── serviceWorker.js
            ├── setupProxy.js
            ├── store
            │   ├── index.js
            │   └── reducer
            │       ├── index.js
            │       └── reducre.js
            └── views
                └── main
                    ├── main.jsx
                    └── main.scss
            10 directories, 20 files
- 8. 如何增加默认项目依赖
```javascript
     let addPackage = { // 添加的项目dependencies
        "antd": "^3.23.2",
        "redux": "^4.0.4",
        "react-redux": "^7.1.1",
        "redux-persist": "^6.0.0",
        "history": "^4.10.1",
        "react-router": "^5.0.1",
        "react-router-dom": "^5.0.1"
     };
  appPackage.devDependencies =  {　// 项目的开发devDependencies
        "node-sass": "^4.12.0",
        "babel-plugin-import": "^1.12.1",
        "http-proxy-middleware": "^0.20.0"
     }
  appPackage.dependencies = Object.assign(appPackage.dependencies, addPackage);
  appPackage.dependencies = appPackage.dependencies || {};
  // 以上代码机上后初始化的package.json中就会有添加的dependencies　devDependencies
```
- 9. 运行效果

![运行效果](https://graph.baidu.com/resource/111776a63bd03213c39d101571116158.jpg "运行效果")


## 其他说明

所使用的npm install　package均为内网仓库　直接运行无法安装某些依赖包
### 如何使用
- 1. cd myproject 
- 2. npm install 
- 3. npm start