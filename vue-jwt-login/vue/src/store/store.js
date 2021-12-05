import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './types';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        user: null
    },

    mutations: {
        [types.LOGIN]: (state, token) => {
            localStorage.setItem('token', JSON.stringify(token));
            state.token = token;
        },

        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            state.token = null;
        },

        [types.USER]: (state, user) => {
            localStorage.setItem('user', JSON.stringify(user))
            state.user = user;
        }
    }
})