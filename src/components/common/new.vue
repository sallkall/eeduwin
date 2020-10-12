<template>
    <div v-show="showNewFlag" class="shadow_wrap">
        <div class="new clearfix">
            <p class="new_title">{{zh ? news.newsTitleCn: news.newsTitleEn}}</p>
            <p class="new_date">{{zh ? splitDate(news.crtTs) : news.crtTsEn}}</p>
            <div class="new_cont_wrap clearfix">
                <p class="new_cont" 
                    v-for="(list, listIdx) in newsContList"
                    :key="listIdx">{{list}}</p>
                <p class="new_img clearfix">
                    <img v-show="news.newsPic" :src="news.newsPic" />
                    <span v-show="!news.newsPic" class="img_empty"></span>
                    <!-- <span>Picture source/citation</span> -->
                </p>
            </div>
            <div class="new_btns">
                <span @click="nextNew" class="next" :class="{'active': this.currIdx < this.list.length - 1}"></span>
                <span @click="prevNew" class="prev" :class="{'active': this.currIdx > 0}"></span>
            </div>
            <span class="new_close" @click="closeNewModel"></span>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default {
        props: {
            list: {
                type: Array,
                required: true,
            },
            idx: {
                type: Number,
                required: true,
            }
        },
        data() {
            return {
                currIdx: this.idx,
            }
        },
        watch: {
            idx(val) {
                this.currIdx = val;
            }
        },
        methods: {
            nextNew() {
                if (this.currIdx < this.list.length - 1) {
                    this.currIdx = this.currIdx + 1;
                }
            },
            prevNew() {
                if (this.currIdx > 0) {
                    this.currIdx = this.currIdx - 1;
                }
            },
            closeNewModel() {
                this.$store.dispatch('handleNewModel', false);
            },
            splitDate(dateStr) {
                if (!dateStr) {
                    return '';
                }
                return dateStr.substring(0, 10);
            }
        },
        computed: {
            ...mapGetters(['showNewFlag']),
            news() {
                if (this.currIdx === -1) {
                    return {};
                }
                return this.list[this.currIdx];
            },
            newsContList() {
                let list = this.zh ? this.news.newsContextCn : this.news.newsContextEn;
                return list ? list.split('#') : '';
            },
            zh() {
                return this.$i18n.locale == 'zh';
            }
        }
    }
</script>
<style lang="less" scoped>
    @defaultColor: #374784;
    @borderColor: #25315E;
    .new {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 40px 70px 40px 40px;
        width: 700px;
        height: 600px;
        color: @defaultColor;
        background: #fff;
        border-radius: 4px;
        overflow-y: auto;
        .new_title {
            width: 100%;
            line-height: 60px;
            font-size: 26px;
            font-weight: bold;
            border-top: 5px solid @borderColor;
        }
        .new_date {
            margin-bottom: 10px;
            width: 100%;
            height: 20px;
            line-height: 20px;
            font-size: 12px;
        }
        .new_cont_wrap {
            width: 100%;
            border-top: 2px solid @borderColor;
            .new_cont {
                margin-top: 15px;
                width: 100%;
                line-height: 20px;
                font-size: 12px;
                text-indent: 2em;
            }
            .new_img {
                margin-top: 15px;
                width: 100%;
                img {
                    height: 270px;
                    width: 410px;
                    max-width: 520px;
                }
                .img_empty {
                    display: block;
                    height: 270px;
                    width: 410px;
                    background: url('../../assets/images/news_bg.jpg') no-repeat center;
                    background-size: 410px 270px;
                }
                span {
                    display: block;
                    width: 100%;
                    height: 16px;
                    line-height: 16px;
                    font-size: 12px;
                }
            }
        }
        .new_btns {
            position: absolute;
            right: 20px;
            top: 140px;
            width: 20px;
            height: 60px;
            span {
                display: block;
                width: 20px;
                height: 20px;
                border-top: 5px solid #f0f0f0;
                border-left: 5px solid #f0f0f0;
                cursor: pointer;
                &.next {
                    transform: rotate(135deg);
                }
                &.prev {
                    margin-top: 20px;
                    margin-left: 10px;
                    transform: rotate(-45deg);
                }
                &.active {
                    border-top-color: @borderColor;
                    border-left-color: @borderColor;
                }
            }
        }
        .new_close {
            position: absolute;
            top: 20px;
            right: 20px;
            display: block;
            width: 22px;
            height: 22px;
            border: 1px solid @borderColor;
            border-radius: 50%;
            background: url('../../assets/images/icon_close.png') no-repeat center;
            background-size: 10px 10px;
            cursor: pointer;
        }
    }
</style>