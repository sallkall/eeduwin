<template>
    <div class="curd clearfix">
        <Menu />
        <div class="curd_right">
            <a-button type="primary" @click="showAddModal">
                新增
            </a-button>
            <a-table :columns="tableHeader" :data-source="noticeList">
                <a slot="name" slot-scope="text">{{ text }}</a>
                <span slot="customTitle">Name</span>
                <span slot="tags" slot-scope="record">
                    <a-tag color="green" @click="edit(record)">修改</a-tag>
                    <a-tag color="red" @click="del(record)">删除</a-tag>
                </span>
            </a-table>
        </div>
        <a-modal
            :title="(editRow.newsNo ? '修改' : '新增') + '通告'"
            :visible="addVisible"
            @ok="handleOk"
            @cancel="handleCancel"
            :footer="null"
            :width="800"
            >
            <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
                <a-form-item label="通告标题（中文）">
                    <a-input
                        v-decorator="[
                            'noticeTitleZh',
                            { 
                                rules: [{ required: true, message: '请输入中文标题' }],
                                initialValue: editRow.noticeTitleZh 
                            },
                        ]"
                        />
                </a-form-item>
                <a-form-item label="通告标题（英文）">
                    <a-input
                        v-decorator="[
                            'noticeTitleEn',
                            { 
                                rules: [{ required: true, message: '请输入英文标题' }],
                                initialValue: editRow.noticeTitleEn 
                            },
                        ]"
                        />
                </a-form-item>
                <a-form-item label="报名截止时间">
                    <a-date-picker
                        placeholder="报名截止时间"
                        show-time
                        :allowClear="true"
                        :format="'yyyy-MM-DD HH:mm:ss'"
                        :valueFormat="'yyyy-MM-DD HH:mm:ss'"
                        v-decorator="[
                            'endTs',
                            { 
                                rules: [{ required: true, message: '请选择报名截止时间' }],
                                initialValue: editRow.endTs
                            },
                        ]"
                        />
                </a-form-item>
                <a-form-item label="通告内容（中文）">
                    <a-textarea  :autoSize="true"
                        :allowClear="true"
                        placeholder="多段数据用#分隔"
                        v-decorator="[
                            'noticeContentZh',
                            { 
                                rules: [{ required: true, message: '请输入中文通告内容' }],
                                initialValue: editRow.noticeContentZh
                            },
                        ]"
                        />
                </a-form-item>
                <a-form-item label="通告内容（英文）">
                    <a-textarea :autoSize="{minRows:2, maxRows: 6}"
                        :allowClear="true"
                        placeholder="多段数据用#分隔"
                        v-decorator="[
                            'noticeContentEn',
                            { 
                                rules: [{ required: true, message: '请输入英文通告内容' }],
                                initialValue: editRow.noticeContentEn
                            },
                        ]"
                        />
                </a-form-item>
                <a-form-item label="通告图片">
                    <img class="news_pic" v-if="editRow.noticePic" :src="editRow.noticePic" @click="handlePreview(editRow.noticePic)" />
                    <input class="file_btn" name="file" type="file" 
                        accept="image/png,image/gif,image/jpeg" 
                        @change="handleChange"/>
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                    <a-button type="primary" html-type="submit">
                        {{editRow.id ? '修改' : '新增'}}
                    </a-button>
                </a-form-item>
            </a-form>
        </a-modal> 

        <a-modal :visible="previewVisible" :footer="null" 
            @cancel="handlePreview()">
            <img alt="example" style="width: 100%" :src="previewImgUrl" />
        </a-modal>
    </div>
</template>
<script>
    import {Request} from '@/api/request';
    import axios from 'axios';
    import Menu from '@/components/common/menu';
    import {Modal} from 'ant-design-vue';
    import {getFormParams} from '@/assets/js/public';
    const columns = [
        {
            title: '通知编号',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '中文标题',
            dataIndex: 'noticeTitleZh',
            key: 'noticeTitleZh',
        }, {
            title: '英文标题',
            dataIndex: 'noticeTitleEn',
            key: 'noticeTitleEn',
        }, {
            title: '中文内容',
            key: 'noticeContentZh',
            dataIndex: 'noticeContentZh',
        }, {
            title: '英文内容',
            key: 'noticeContentEn',
            dataIndex: 'noticeContentEn',
        }, {
            title: '截止时间',
            key: 'endTs',
            dataIndex: 'endTs',
        }, {
            title: '操作',
            key: 'action',
            scopedSlots: { customRender: 'tags' }
        }
    ];
    export default {
        data() {
            return {
                formLayout: 'horizontal',
                form: this.$form.createForm(this, { name: 'notice' }),
                file: null,

                noticeList: [],
                editRow: {},
                tableHeader: columns,

                addVisible: false,
                previewVisible: false,
                previewImgUrl: '',
            };
        },
        created() {
            this.initData();
        },
        methods: {
            initData() {
                Request({
                    url: 'notice/query',
                }).then(res => {
                    let list = res.notices ? res.notices : [];
                    list = list.map(item => {
                        item.key = item.id;
                        return item;
                    });
                    this.noticeList = list;
                });
            },
            edit(record) {
                this.editRow = record;
                this.addVisible = true;
            },
            del(record) {
                let _this = this;
                Modal.confirm({
                    title: '确认删除?',
                    content: '删除后数据不可恢复!',
                    cancelText: '取消',
                    okText: '确认',
                    onOk() {
                        return new Promise((resolve, reject) => {
                            Request({
                                url: 'notice/delete',
                                params: {
                                    id: record.id
                                }
                            }).then(res => {
                                if (res.code == 200) {
                                    _this.$message.success('删除成功!');
                                    _this.initData();
                                }
                                resolve();
                            })
                        }).catch(() => console.log('Oops errors!'));
                    },
                    onCancel() {},
                });
            },
            showAddModal() {
                this.addVisible = true;
            },
            handleOk() {},
            handleCancel() {
                this.addVisible = false;
                this.editRow = {};
                this.form.resetFields();
                this.file = null;
            },
            handleSubmit(e) {//size
                e.preventDefault();
                let file = this.file;
                if (file && file.size > 1024 * 1024) {
                    this.$message.error('图片过大，请选择小于1M的图片!');
                    return;
                }
                this.form.validateFields((err, values) => {
                    if (!err) {
                        let formData = getFormParams(values);
                        if (this.file) {
                            formData.append('file', file);
                        }
                        let url = 'notice/add';
                        let msg = '新增成功!';
                        if (this.editRow.id) {
                            url = 'notice/update';
                            formData.append('id', this.editRow.id);
                            msg = '修改成功!';
                        }
                        Request({
                            method: 'post',
                            url: url,
                            params: formData,
                        }).then(res => {
                            if (res.code == 200) {
                                this.$message.success(msg);
                                this.initData();
                                this.handleCancel();
                            }
                        })
                    }

                });
            },
            handleChange(e) {
                this.file = e.target.files[0];
            },
            beforeUpload(file) {
                return false;
                let reader = new FileReader();
                reader.readAsText(file);
                reader.onload = e => {
                    let uids = e.target.result.split('\r\n');
                    return false;
                }
            },
            handlePreview(imgUrl = '') {
                this.previewImgUrl = imgUrl;
                this.previewVisible = imgUrl ? true : false;
            },
        },
        components: {
            Menu,
        }
    }
</script>
<style lang="less">
    .news {
        .ant-upload-list {
            display: none !important;
        }
        .ant-upload {
            float: left;
        }
        .file_list {
            float: left;
            margin-left: 10px;
        }
        .file_btn {
            float: left;
            width: 80px;
            height: 30px;
        }
    }
    .news_pic {
        float: left;
        margin-right: 10px;
        width: 80px;
        height: 80px;
        cursor: pointer;
    }
</style>