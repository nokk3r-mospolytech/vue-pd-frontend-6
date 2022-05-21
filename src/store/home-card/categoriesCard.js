export default {
    state: {
        categoriesCards: [
            {
                id: 1,
                title: 'Животный мир',
                subscribe: '32941',
                themes: 'животные'
            },
            {
                id: 2,
                title: 'Meditopia',
                subscribe: '2941',
                themes: 'отдых'
            },
            {
                id: 3,
                title: 'О психологии',
                subscribe: '16541',
                themes: 'учеба'
            },
            {
                id: 4,
                title: 'О психологии',
                subscribe: '231',
                themes: 'учеба'
            },
            {
                id: 5,
                title: 'О Meditopia',
                subscribe: '444',
                themes: 'учеба'
            },
            {
                id: 6,
                title: 'О Животный',
                subscribe: '1541',
                themes: 'животные'
            },
        ]
    },
    getters: {
        allCategoriesCards(state) {
            return state.categoriesCards
        }
    },
    mutations: {},
    actions: {},
    modules: {}
}