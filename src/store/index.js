import {createStore} from 'vuex'
import homeCard from "@/store/home-card/homeCard";
import categoriesCard from "@/store/home-card/categoriesCard";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        homeCard,
        categoriesCard
    }
})
