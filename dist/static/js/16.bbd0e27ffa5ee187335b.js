webpackJsonp([16],{"9jNE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("//Fk"),i=n.n(a),s=n("l/JR"),r=(n("mtWM"),n("+EMp")),o=n("2vhu"),l=[{title:"新闻编号",dataIndex:"newsNo",key:"newsNo"},{title:"中文标题",dataIndex:"newsTitleCn",key:"newsTitleCn"},{title:"英文标题",dataIndex:"newsTitleEn",key:"newsTitleEn"},{title:"中文内容",key:"newsContextCn",dataIndex:"newsContextCn"},{title:"英文内容",key:"newsContextEn",dataIndex:"newsContextEn"},{title:"操作",key:"action",scopedSlots:{customRender:"tags"}}],d={data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"news"}),file:null,newsList:[],editRow:{},tableHeader:l,addVisible:!1,previewVisible:!1,previewImgUrl:""}},created:function(){this.initData()},methods:{initData:function(){var e=this;Object(s.a)({url:"news/query"}).then(function(t){console.log("news:",t);var n=t.news?t.news:[];n=n.map(function(e){return e.key=e.newsNo,e}),e.newsList=n})},edit:function(e){this.editRow=e,this.addVisible=!0},del:function(e){var t=this;o.a.confirm({title:"确认删除?",content:"删除后数据不可恢复!",cancelText:"取消",okText:"确认",onOk:function(){return new i.a(function(n,a){Object(s.a)({url:"news/delete",params:{newsNo:e.newsNo}}).then(function(e){200==e.code&&(t.$message.success("删除成功!"),t.initData()),n()})}).catch(function(){return console.log("Oops errors!")})},onCancel:function(){}})},showAddModal:function(){this.addVisible=!0},handleOk:function(){},handleCancel:function(){this.addVisible=!1,this.editRow={},this.form.resetFields(),this.file=null},handleSubmit:function(e){var t=this;e.preventDefault();var n=this.file;n&&n.size>1048576?this.$message.error("图片过大，请选择小于1M的图片!"):this.form.validateFields(function(e,a){if(!e){var i=new FormData;i.append("newsTitleCn",a.newsTitleCn),i.append("newsContextCn",a.newsContextCn),i.append("newsTitleEn",a.newsTitleEn),i.append("newsContextEn",a.newsContextEn),t.file&&i.append("file",n);var r="news/add",o="新增成功!";t.editRow.newsNo&&(r="news/update",i.append("newsNo",t.editRow.newsNo),o="修改成功!"),Object(s.a)({method:"post",url:r,params:i}).then(function(e){200==e.code&&(t.$message.success(o),t.initData(),t.handleCancel())})}})},handleChange:function(e){this.file=e.target.files[0]},beforeUpload:function(e){return!1},handlePreview:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.previewImgUrl=e,this.previewVisible=!!e}},components:{Menu:r.a}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"curd clearfix"},[n("Menu"),e._v(" "),n("div",{staticClass:"curd_right"},[n("a-button",{attrs:{type:"primary"},on:{click:e.showAddModal}},[e._v("\n            新增\n        ")]),e._v(" "),n("a-table",{attrs:{columns:e.tableHeader,"data-source":e.newsList},scopedSlots:e._u([{key:"name",fn:function(t){return n("a",{},[e._v(e._s(t))])}},{key:"tags",fn:function(t){return n("span",{},[n("a-tag",{attrs:{color:"green"},on:{click:function(n){return e.edit(t)}}},[e._v("修改")]),e._v(" "),n("a-tag",{attrs:{color:"red"},on:{click:function(n){return e.del(t)}}},[e._v("删除")])],1)}}])},[e._v(" "),n("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[e._v("Name")])])],1),e._v(" "),n("a-modal",{attrs:{title:(e.editRow.newsNo?"修改":"新增")+"新闻",visible:e.addVisible,footer:null,width:800},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:e.handleSubmit}},[n("a-form-item",{attrs:{label:"新闻标题（中文）"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["newsTitleCn",{rules:[{required:!0,message:"请输入中文标题"}],initialValue:e.editRow.newsTitleCn}],expression:"[\n                        'newsTitleCn',\n                        { \n                            rules: [{ required: true, message: '请输入中文标题' }],\n                            initialValue: editRow.newsTitleCn \n                        },\n                    ]"}]})],1),e._v(" "),n("a-form-item",{attrs:{label:"新闻标题（英文）"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["newsTitleEn",{rules:[{required:!0,message:"请输入英文标题"}],initialValue:e.editRow.newsTitleEn}],expression:"[\n                        'newsTitleEn',\n                        { \n                            rules: [{ required: true, message: '请输入英文标题' }],\n                            initialValue: editRow.newsTitleEn \n                        },\n                    ]"}]})],1),e._v(" "),n("a-form-item",{attrs:{label:"新闻内容（中文）"}},[n("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["newsContextCn",{rules:[{required:!0,message:"请输入中文新闻内容"}],initialValue:e.editRow.newsContextCn}],expression:"[\n                        'newsContextCn',\n                        { \n                            rules: [{ required: true, message: '请输入中文新闻内容' }],\n                            initialValue: editRow.newsContextCn\n                        },\n                    ]"}],attrs:{autoSize:!0,allowClear:!0,placeholder:"多段数据用#分隔"}})],1),e._v(" "),n("a-form-item",{attrs:{label:"新闻内容（英文）"}},[n("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["newsContextEn",{rules:[{required:!0,message:"请输入英文新闻内容"}],initialValue:e.editRow.newsContextEn}],expression:"[\n                        'newsContextEn',\n                        { \n                            rules: [{ required: true, message: '请输入英文新闻内容' }],\n                            initialValue: editRow.newsContextEn\n                        },\n                    ]"}],attrs:{autoSize:{minRows:2,maxRows:6},allowClear:!0,placeholder:"多段数据用#分隔"}})],1),e._v(" "),n("a-form-item",{attrs:{label:"新闻图片"}},[e.editRow.newsPic?n("img",{staticClass:"news_pic",attrs:{src:e.editRow.newsPic},on:{click:function(t){return e.handlePreview(e.editRow.newsPic)}}}):e._e(),e._v(" "),n("input",{staticClass:"file_btn",attrs:{name:"file",type:"file",accept:"image/png,image/gif,image/jpeg"},on:{change:e.handleChange}})]),e._v(" "),n("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[n("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("\n                    "+e._s(e.editRow.newsNo?"修改":"新增")+"\n                ")])],1)],1)],1),e._v(" "),n("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:function(t){return e.handlePreview()}}},[n("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImgUrl}})])],1)},staticRenderFns:[]};var u=n("VU/8")(d,c,!1,function(e){n("mivn")},null,null);t.default=u.exports},mivn:function(e,t){}});