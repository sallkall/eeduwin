<template>
    <div class="app_container">
        <CommonHeader :blue="true" />
        <div class="verify_wrap app_content">
            <a-card :title="title" style="width: 600px">
                <p>{{$t('verify.thansk')}}, {{$t('verify.confirmEmail')}}<span>{{loginId}}</span></p>
                <p><span @click="mailValidate">{{$t('verify.verifyEmail')}}</span></p>
            </a-card>
        </div>
        <CommonFooter />
    </div>
</template>
<script>
    import CommonHeader from '@/components/common/commonHeader';
    import CommonFooter from '@/components/common/commonFooter';
    import {Request} from '@/api/request';
    import {loginSave} from '@/assets/js/public';
    export default {
        data() {
            return {
                userNo: '',
                now: '',
                token: '',
                name: '',
                loginId: '',
            }
        },
        created() {
            let query = this.$route.query;
            let userNo = query.userNo,
                now = query.now, 
                token = query.token;
            if (userNo && now && token) {
                this.userNo = userNo;
                this.now = now;
                this.token = token;
                this.getUserInf();
            }
        },
        methods: {
            getUserInf() {
                Request({
                    url: 'userReg/userInf',
                    params: {
                        userNo: this.userNo,
                        now: this.now,
                        token: this.token,
                    }
                }).then(res => {
                    if (res.code == 200) {
                        let loginBean = res.loginBean ? res.loginBean : {};
                        let student = res.student ? res.student : {};
                        this.name = student.userNm;
                        this.loginId = loginBean.loginId;
                        let timer = setTimeout(() => {
                            clearTimeout(timer);
                            this.mailValidate();
                        }, 2000);
                    } else {
                        this.$message.error(res.desc);
                    }
                });
            },
            mailValidate() {//验证邮箱
                Request({
                    url: 'userReg/mailValidate',
                    params: {
                        userNo: this.userNo,
                        now: this.now,
                        token: this.token,
                    }
                }).then(res => {
                    if (res.code == 200) {
                        this.$message.success('验证成功!');
                        loginSave(res.token, this.name);
                        let timer = setTimeout(() => {
                            this.$router.replace({
                                path: '/'
                            });
                        }, 1000);
                    } else {
                        this.$message.error(res.desc);
                    }
                })
            },
        },
        computed: {
            title() {
                return this.$t('verify.verifyEmailTitle');
            }
        },
        components: {
            CommonHeader, CommonFooter,
        }
    }
</script>
<style lang="less">
    .verify_wrap {
        margin: 20px auto;
        width: 1000px;
        .ant-card {
            margin: 0 auto;
            background: #A8D0E6;
            .ant-card-head {
                border-bottom: 1px solid #24305E;
            }
            .ant-card-head-title {
                font-weight: bold;
                color: #24305E;
            }
            .ant-card-body p {
                color: #24305E;
            }
            span {
                color: #587FFF;
                cursor: pointer;
            }
        }
    }
</style>