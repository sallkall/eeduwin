import Vue from 'vue';
import Vuex from 'vuex';
import {decodeStr} from '@/assets/js/public';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: '',
        userName: localStorage[window.btoa('userName')] ? decodeStr(localStorage[window.btoa('userName')], true) : '',
        showContactFlag: false, //是否显示联系我们弹窗
        showLoginFlag: false, //是否显示登录弹窗
        showRegisterFlag: false, //是否显示注册弹窗
        showNewFlag: false, //是否显示新闻弹窗
        loading: false, //是否显示加载状态
    },
    getters: {
        showContactFlag: state => state.showContactFlag,
        showLoginFlag: state => state.showLoginFlag,
        showRegisterFlag: state => state.showRegisterFlag,
        showNewFlag: state => state.showNewFlag,
        token: state => state.token,
        userName: state => state.userName,
        loading: state => state.loading,
    },
    actions: {//异步，
        setUserName({commit, state}, name) {
            if (name) {
                commit('setUserName', name);
            } else {
                commit('clearUserName');
            }
        },
        setToken({commit, state}, token) {
            commit('setToken', token);
        },
        handleContactModel({commit, state}, flag) {
            commit('setShowContactFlag', flag);
        },
        handleLoginModel({commit, state}, flag) {
            commit('setShowLoginFlag', flag);
        },
        handleRegisterModel({commit, state}, flag) {
            commit('setShowRegisterFlag', flag);
        },
        handleNewModel({commit, state}, flag) {
            commit('setShowNewFlag', flag);
        },
        handleLoading({commit, state}, flag) {
            commit('setLoading', flag);
        },
    },
    mutations: {
        setUserName(state, name) {
            if (!name) {
                let userNameKey = window.btoa('userName');
                if (localStorage[userNameKey]) {
                    name = window.atob(localStorage[userNameKey]);
                } else {
                    name = '';
                }
            }
            state.userName = name;
        },
        clearUserName(state) {
            state.userName = '';
        },
        setShowContactFlag(state, flag) {
            state.showContactFlag = flag;
        },
        setShowLoginFlag(state, flag) {
            state.showLoginFlag = flag;
        },
        setShowRegisterFlag(state, flag) {
            state.showRegisterFlag = flag;
        },
        setShowNewFlag(state, flag) {
            state.showNewFlag = flag;
        },
        setToken(state, token) {
            state.token = token;
        },
        setLoading(state, flag) {
            state.loading = flag;
        },
    },
});

export default store;