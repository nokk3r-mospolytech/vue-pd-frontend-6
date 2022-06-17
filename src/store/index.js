import {createStore} from 'vuex'
import homeCard from "@/store/home-card/homeCard";
import homeCardPreview from "@/store/home-card/homeCardPreview";
import categoriesCard from "@/store/home-card/categoriesCard";
import user from "@/store/user/user";
import profile from "@/store/user/profile";


export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        user,
        profile,
        homeCard,
        homeCardPreview,
        categoriesCard
    }
})
