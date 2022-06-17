export default {
    state: {
        homeCardsPreview: []
    },
    getters: {
        allHomeCardsPreview(state) {
            return state.homeCardsPreview
        },
        homeCardIndex: (state) => (index) => {
            return state.homeCardsPreview[index]
        }
    },
    mutations: {
        updateHomeCardsPreview(state, cards) {
            state.homeCardsPreview = cards
        }
    },
    actions: {
        async fetchHomeCardPreview(ctx) {
            const res = await fetch("http://reteblog-api.std-950.ist.mospolytech.ru/api/v1/articles")
            const data = await res.json();
            console.log(data.data)

            ctx.commit('updateHomeCardsPreview', data.data)
        }
    },
    modules: {}
}