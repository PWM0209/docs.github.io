# Vuepress搭建静态博客

## 1.快速开始

1.安装
```
npm install -g vuepress  // 或者 yarn global add vuepress 
```

2.新建一个项目文件夹,并且初始化
```
// 创建一个目录 叫 myVuepress
mkdir myVuepress
// 进入这个目录
cd myVuepress
// 初始化项目
npm init -y
```

3.创建博客相关目录
在myVuepress目录下新建docs目录，在docs目录里新建.vuepress文件夹，然后在里面创建config.js文件 用于存放配置信息
```javascript
module.exports = {
  title: '螺钉博客',
  description: '欢迎来到我的博客'
}
```

4.在docs目录里面创建一个README.md的文件，输入内容
```
---
home: true
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

5.运行博客
在package.json里面添加脚本
```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
}
```
然后在终端(命令行工具)输入启动命令
```
npm run dev
```

## 2.设置导航栏
基础设置
```javascript
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ]
  }
}
```
我的nav配置
```javascript
nav:[
    {
        text: 'Home', link: '/home/'
    },
    {
        text: 'Mr.P',
		items: [
            {
                text: 'Vue',
                items: [                    
                    {text: 'vue.js', link: '/mr.p/vue.js/vue'},
                    {text: 'vuepress', link: '/mr.p/vue.js/vuepress'},
                ]
            },
            {text: 'Notes', link: '/mr.p/notes/'},
        ]
    },
    {
        text: 'Mrs.L', 
		items: [
            {
                text: 'Notes', link: '/mrs.l/notes/',
            },
            {text: 'Works', link: '/mrs.l/works/'},
        ]
    },
    {
        text: 'About', link: '/about/'
    },
]
```
对应上面的导航栏，我们需要在docs文件夹下去新建对应的文件夹

## 3.侧边栏设置
```
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar/
   ├─ README.md
   ├─ three.md
   └─ four.md
```
配置：

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
```

## 4.添加head配置和自定义样式
静态文件要放到.vuepress/public目录下
```javascript
// 添加浏览器图标
head: [
    ["link", { rel: "icon", href: "/logo.png" }],
]
```
自定义样式可以放到.vuepress/styles/index.styl下
```css
.theme-default-content 
  h1
    border-bottom  3px solid rgb(0, 172, 193)
    padding 20px 0px 20px 0px
    font-size 24px

 
.theme-default-content 
  h2
    border-bottom  2px solid rgb(0, 172, 193)
    padding 15px 0px 15px 0px;
    font-size 20px
 
.theme-default-content 
  p 
    margin: 15px 0px 15px 0px;


/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript */
/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #f8f8f2;
	background: none;
	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #f8f8f2;
}

.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: #f92672;
}

.token.boolean,
.token.number {
	color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
	color: #e6db74;
}

.token.keyword {
	color: #66d9ef;
}

.token.regex,
.token.important {
	color: #fd971f;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
```

## 5.添加百度统计代码
第一步，你需要去百度统计添加一个网站，然后获取到统计代码

第二步，把统计代码添加到head配置项里面

```javascript
module.exports = {
  title: "myVuepress",
  description: "myVuepress test",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?e2bd54b8015cec977c6f30d0896b8a1b";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  ...
}
```

## 6.部署上线
我们将代码部署到coding上，需要完成的步骤有

1、使用`<username>.github.io`的方式创建git仓库

2、开启`github`的静态page服务（如有需要可以绑定私有域名）

生成ssh的过程：

1、进入到自己home目录下的.ssh目录，如果没有就自己新建一个
```
windows一般在这个位置： c:\Users\用户名\.ssh
Mac： ~\.ssh
```

2.生成ssh key，在终端执行命令
```
# "-t rsa"表示使用密钥的加密类型，还可以为dsa；-C设置注释文字，
比如你的邮箱“YourEmail”，不一定要是github注册邮箱

$ssh-keygen -t rsa -C "${YourEmail}"                                    

# 直接回车
Enter file in which to save the key (/Users/faner/.ssh/id_rsa): 
# 输入密钥文件授权密码
Enter passphrase (empty for no passphrase):  
# 确认密钥文件授权密码                        
Enter same passphrase again:                                           
Your identification has been saved in /Users/faner/.ssh/id_rsa.
Your public key has been saved in /Users/faner/.ssh/id_rsa.pub.
```
生成好以后，你需要将你 .ssh目录下的.pub文件打开，里面有公钥，你需要把这个公钥配置到coding上面

接下来，需要在.ssh里面新增一个config文件，文件配置格式如下：

```
# Host自己填一个名称 不要带中文就行
Host nodeing666
# 这里是网站地址
HostName e.coding.com
# github对应的email或者用户名
User git
# coding对应的私钥
IdentityFile ~/.ssh/id_rsa_nodeing666_github_io
```
编写一个deploy.sh的脚本文件
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo '这里填你需要绑定的域名' > CNAME


git init
git config user.name "这里填你coding的名字"
git config user.email "这里填你coding的邮箱"
git add -A
git commit -m 'deploy-coding'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@dadifeihong:dadifeihong/dadifeihong.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@dadifeihong-coding:dadifeihong/nodeingfe.git master
cd -
```


## 7.进阶优化
...