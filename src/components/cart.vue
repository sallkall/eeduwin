<template>
    <div class="app_container">
        <CommonHeader :blue="true" />
        <div class="cart app_content clearfix">
            <div class="cart_left clearfix">
                <p class="cart_title">SHOPPING CART</p>
                <ul class="cart_list clearfix">
                    <li v-for="(cart, cartIdx) in cartList">
                        <img :src="require(`../assets/images/course_${cart.type}.png`)" />
                        <p class="cart_intro desc">
                            <span class="cart_intro_title">Description</span>
                            <span class="cart_intro_cont">{{cart.desc}}</span>
                        </p>
                        <p class="cart_intro price">
                            <span class="cart_intro_title">Price</span>
                            <span class="cart_intro_cont">USD ${{cart.price}}</span>
                        </p>
                        <p class="cart_intro remove">
                            <span class="cart_intro_title">Remove</span>
                            <span class="cart_intro_cont remove" @click="removeCart(cartIdx)"></span>
                        </p>
                    </li>
                </ul>
                <p v-show="!cartList.length" class="cart_empty">Cart Empty</p>
            </div>
            <div class="cart_right clearfix">
                <span class="cart_title">ORDER SUMMARY</span>
                <div class="cart_summary">
                    <p>
                        <span>Subtotal:</span>
                        <b>USD $299.97</b>
                    </p>
                    <p>
                        <span>Taxes:</span>
                        <b>USD $29.99</b>
                    </p>
                </div>
                <p class="cart_total">
                    <span>Order Total:</span>
                    <b>USD $329.96</b>
                </p>
                <span class="checkout_btn">PROCEED TO CHECKOUT</span>
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
                cartList: [],
            }
        },
        created() {
            this.getCartList();
        },
        methods: {
            getCartList() {
                this.cartList = [
                    {
                        type: 'Math',
                        desc: 'Demo Math course. Lorem ipsum dolor sit amet, consetetur sadipscing telitr',
                        price: 99.99,
                    }, {
                        type: 'Research',
                        desc: 'Demo Math course. Lorem ipsum dolor sit amet, consetetur sadipscing telitr',
                        price: 99.99,
                    }, {
                        type: 'Business',
                        desc: 'Demo Math course. Lorem ipsum dolor sit amet, consetetur sadipscing telitr',
                        price: 99.99,
                    }
                ]
            },
            removeCart(cartIdx) {
                let cartList = this.cartList;
                cartList.splice(cartIdx, 1);
                this.cartList = cartList;
            }
        },
        components: {
            CommonHeader,
            CommonFooter,
        }
    }
</script>
<style lang="less" scoped>
    @defaultWidth: 1000px;
    .cart {
        margin: 20px auto;
        width: @defaultWidth;
        .cart_left {
            float: left;
            width: 690px;
            .cart_list {
                width: 100%;
                li {
                    width: 100%;
                    height: 130px;
                    border-bottom: 1px solid #ccc; 
                    color: #000;
                    img {
                        float: left;
                        margin-left: 10px;
                        margin-top: 15px;
                        margin-right: 20px;
                        width: 150px;
                        height: 100px;
                    } 
                    .cart_intro {
                        float: left;
                        width: 140px;
                        span {
                            display: block;
                            width: 100%;
                            font-size: 12px;
                        }
                        .cart_intro_title {
                            height: 40px;
                            line-height: 40px;
                            font-weight: bold;
                        }
                        .cart_intro_cont {
                            line-height: 16px;
                            &.remove {
                                float: right;
                                width: 16px;
                                height: 16px;
                                background: url('../assets/images/icon_close.png') no-repeat center;
                                background-size: 10px;
                                cursor: pointer; 
                            }
                        }
                        &.price, &.remove {
                            text-align: right;
                        }
                        &.desc {
                            width: 220px;
                        }
                    } 
                }
            }
            .cart_empty {
                width: 100%;
                height: 130px;
                line-height: 40px;
                font-size: 12px;
                text-align: center;
                border-bottom: 1px solid #ccc;
            }
        }
        .cart_right {
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
            .cart_summary {
                width: 100%;
                height: 60px;
                border-bottom: 1px solid #ccc;
                box-sizing: border-box;
                p {
                    font-weight: bold;
                }
            }
            .checkout_btn {
                display: inline-block;
                margin-top: 10px;
                width: 100%;
                height: 40px;
                line-height: 40px;
                font-size: 12px;
                font-weight: bold;
                text-align: center;
                color: #fff;
            }
        }
        .cart_title {
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
    }
</style>