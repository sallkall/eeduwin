<template>
    <ul class="pagn_wrap clearfix">
        <li v-for="(refItem, refIdx) in refList"
            :class="refIdx === idx ? 'active' : ''"
            @click="toPositionByRef(refItem)"
            ></li>
    </ul>
</template>
<script>
    export default {
        props: {
            refList: Array,
            idx: Number,
        },
        methods: {
            toPositionByRef(refName) {
                this.$emit('toposition', refName);
            },
        }
    }
</script>
<style lang="less" scoped>
    .pagn_wrap {
        position: absolute;
        left: 40px;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        li {
            margin: 0 auto 10px;
            display: block;
            width: 6px;
            height: 6px;
            background: #666;
            border-radius: 50%;
            cursor: pointer;
            &.active {
                width: 8px;
                height: 8px;
                background: #000;
            }
        }
    }
</style>