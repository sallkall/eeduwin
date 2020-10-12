# edu-plat

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## 项目结构
``` bash
src
    -- api
        -- request.js 公用请求方法
    -- assets
        -- css 
            -- style.less 页面共用样式 
        -- fonts 引入的字体文件
        -- images
        -- js
            -- public.js  一些公用方法
        -- lang  中英文切换内容，页面其它静态中英文切换内容可以写在里面，
            模板使用 $t('header.logo')
            方法中使用 this.$t('header.logo')
            -- en.js   英文表达
            -- zh.js   中文表达
    -- components
        -- common   公用组件
            -- commonHeader.vue 头部，登录、注册、联系我们在头部已引入，无需额外引入
                this.$store.dispatch('handleLoginModel', true|false)
                this.$store.dispatch('handleRegisterModel', true|false)
                this.$store.dispatch('handleContactModel', true|false)
            -- commonFooter.vue  
            -- contact.vue 联系我们
            -- login.vue 
            -- new.vue 新闻弹窗
                this.$store.dispatch('handleNewModel', true|false)
            -- menu.vue 管理页面，侧边栏菜单
            -- pagination.vue 我们的愿景页，分页导航
            -- register.vue 
        -- curd     管理页面
            -- activity.vue 竞赛及志愿者活动页
            -- activityDetail.vue 活动描述页
            -- course.vue 课程管理页
            -- courseDetil.vue  课程描述页
            -- news.vue 新闻管理页
            -- type.vue 学科领域管理页面
        -- aboutTeam.vue 我们的团队
        -- aboutUs.vue 我们的愿景
        -- account.vue 个人信息页
        -- course.vue 多维度线上学习
        -- detail.vue 课程详情页
        -- enhaDetail.vue 活动及竞赛详情页
        -- enhancement.vue 课外拓展机会页面
        -- home.vue 首页
        -- payment.vue 支付页面
        -- services.vue 大学录取服务页面
        -- stories.vue 我们的战绩页面
        -- verify.vue 注册验证邮箱页面

    -- router       路由
    -- store        vue状态管理
    -- utils        
        -- baseUrl.js   配置接口环境
        -- request.js   配置全局axios
    App.vue     
    main.js
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
