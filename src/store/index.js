import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'
import request from './modules/request'

const plugins = [];

if (process.env.NODE_ENV === 'development') {
    plugins.push(createLogger());
}

export default createStore({
    plugins,
    state() {
        return {
            message: null,
            sidebar: false
        }
    },
    mutations: {
        setMessage(state, message) {
            state.message = message;
        },
        clearMessage(state) {
            state.message = null;
        },
        openSidebar(state) {
            state.sidebar = true;
        },
        closeSidebar(state) {
            state.sidebar = false;
        }
    },
    actions: {
        setMessage({commit, state}, message) {
            commit('setMessage', message);
            const clearMessageTimer = setTimeout(() => {
                if (state.message) {
                    commit('clearMessage');
                } else {
                    clearTimeout(clearMessageTimer);
                }
            }, 5000);
        }
    },
    modules: {
        auth,
        request
    }
})
