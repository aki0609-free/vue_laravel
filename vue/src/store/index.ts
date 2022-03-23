import { InjectionKey } from "vue";
import { createStore } from "vuex";

type Data = {
    data: {
        name: string;
    };
};

type User = {
    data: Data;
    token: string;
};

export const mainStoreKey: InjectionKey<User> = Symbol();

export const store = createStore({
    state: {
        user: {
            data: { name: "Aki" },
            token: null,
        },
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {},
});
