<template>
    <div class="app_container">
        <CommonHeader :blue="true" />
        <div class="pay app_content clearfix">
            <div class="pay_left clearfix">
                <p class="pay_title">{{type === 0 ? 'CONFIRM PAYMENT' : 'PAYMENT FULFILLED'}}</p>
                <template v-if="type === 0">
                    <p class="pay_method_title">Payment Method</p>
                    <ul class="pay_methods">
                        <li class="pay_method_li" 
                            v-for="(method, methodIdx) in payMethodList"
                            @click="selectPayMethod(methodIdx)">
                            <span class="pay_method_radio" :class="methodIdx === payIdx ? 'active' : ''"></span>
                            <span class="pay_method_text">{{method}}</span>
                        </li>
                    </ul>
                    <p class="paypal"></p>
                    <p class="creditcard"><b></b>Debit or Credit Card</p>
                    <p class="powered">Powered by <b class="b_pay">Pay</b><b class="b_pal">Pal</b></p>
                </template>
                <template v-else-if="type === 1">
                    <p class="pay_result">
                        <span class="pay_result_title">Order Number:</span>
                        <span class="pay_result_price">000 000</span>
                        <span class="pay_result_method">Card Details</span>
                    </p>
                </template>
            </div>
            <div class="pay_right clearfix">
                <span class="pay_title">ORDER SUMMARY</span>
                <div class="pay_summary">
                    <p>
                        <span>Subtotal:</span>
                        <b>USD $299.97</b>
                    </p>
                    <p>
                        <span>Taxes:</span>
                        <b>USD $29.99</b>
                    </p>
                </div>
                <p class="pay_total">
                    <span>Order Total:</span>
                    <b>USD $329.96</b>
                </p>
            </div>
        </div>
        <CommonFooter />
    </div>
</template>
<script>
    import CommonHeader from '@/components/common/commonHeader';
    import CommonFooter from '@/components/common/commonFooter';
    export default {
        data() {
            return {
                payMethodList: [
                    'PayPal/Credit or Debit Card',
                    'Venom',
                    'WeChat/Alipay',
                ],
                payIdx: -1,
                type: 0,//0pay，1支付成功
            }
        },
        created() {
        },
        methods: {
            selectPayMethod(methodIdx) {
                this.payIdx = methodIdx;
            },
        },
        components: {
            CommonHeader,
            CommonFooter,
        }
    }
</script>
<style lang="less" scoped>
    @defaultWidth: 1000px;
    .pay {
        margin: 20px auto;
        width: @defaultWidth;
        color: #000;
        .pay_left {
            float: left;
            width: 690px;
            border-bottom: 1px solid #ccc;
            .pay_method_title {
                padding-left: 10px;
                width: 100%;
                height: 50px;
                line-height: 50px;
                font-size: 12px;
                font-weight: bold;
            }
            .pay_methods {
                padding: 0 10px;
                margin-bottom: 30px;
                width: 100%;
                .pay_method_li {
                    margin-bottom: 4px;
                    width: 100%;
                    height: 20px;
                    line-height: 20px;
                    font-size: 12px;
                    cursor: pointer;
                    span {
                        float: left;
                    }
                    .pay_method_radio {
                        margin-top: 3px;
                        width: 14px;
                        height: 14px;
                        border-radius: 50%;
                        border: 2px solid #000;
                        &.active:before {
                            margin-top: 2px;
                            margin-left: 2px;
                            content: '';
                            display: block;
                            width: 6px;
                            height: 6px;
                            background: #000;
                            border-radius: 50%;
                        }
                    }
                    .pay_method_text {
                        margin-left: 20px;
                    }
                }
            }
            .paypal, .creditcard {
                margin-left: 10px;
                margin-bottom: 10px;
                width: 210px;
                height: 34px;
                line-height: 34px;
                font-size: 12px;
                font-weight: bold;
                border-radius: 4px;
                text-align: center;
                cursor: pointer;
            }
            .paypal {
                background: #e4b946 url('../assets/images/icon_paypal_full.png') no-repeat center;
                background-size: 68px 14px;
            }
            .creditcard {
                padding-left: 20px;
                color: #fff;
                background: #313234 url('../assets/images/icon_card.png') no-repeat 30px center;
                background-size: 20px 20px;
            }
            .powered {
                margin-left: 10px;
                margin-bottom: 40px;
                width: 210px;
                height: 20px;
                line-height: 20px;
                font-size: 12px;
                color: #a3a4a8;
                text-align: center;
                font-style: italic;
            }
            .pay_result {
                padding: 10px;
                width: 100%;
                height: 200px;
                line-height: 40px;
                font-size: 12px;
                font-weight: bold;
                span {
                    float: left;
                    &.pay_result_price {
                        margin-left: 20px;
                    }
                    &.pay_result_method {
                        float: right;
                        width: 230px;
                    }
                }
            }
        }
        .pay_right {
            float: right;
            width: 280px;
            p {
                width: 100%;
                height: 30px;
                line-height: 30px;
                font-size: 12px;
                color: #000;
                span {
                    float: left;
                }
                b {
                    float: right;
                    font-weight: normal;
                }
            }
            .pay_summary {
                width: 100%;
                height: 60px;
                border-bottom: 1px solid #ccc;
                box-sizing: border-box;
            }
            .pay_total {
                font-weight: bold;
                b {
                    font-weight: bold;
                }
            }
        }
        .pay_title {
            display: block;
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 12px;
            color: #000;
            text-align: center;
            border-bottom: 1px solid #ccc;
            font-weight: bold;
        }
        .b_pay {
            color: #071f82;
        }
        .b_pal {
            color: #478bbd;
        }
    }
    .header_wrap {
    }
</style>