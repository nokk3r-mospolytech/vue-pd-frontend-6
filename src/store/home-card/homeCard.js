export default {
    state: {
        homeCard:
            {
                // "id": 1,
                // "title": "asdasd",
                // "slug": "testus",
                // "content": "what u now about rollin down",
                // "user_id": 1,
                // "file_id": 1,
                // "poster_link": "http://reteblog-api.std-950.ist.mospolytech.ru/storage/article/poster/$2y$10$UnPXjVKJTGpZ5dBGJXvCGeZhc8cKlnOhvgyyMwGbqr.icSYmmbgC.png",
                // "views": 5,
                // "likes": 0,
                // "dislikes": 0,
                // "created_at": "2022-06-16T22:56:33.000000Z",
                // "updated_at": "2022-06-17T01:09:18.000000Z",
                // "author": "Admin Admin"
            }
    },
    getters: {
        allHomeCard(state) {
            return state.homeCard
        }
    },
    mutations: {
        updateHomeCard(state, cards) {
            state.homeCard = cards
        }
    },
    actions: {
        async fetchHomeCard(ctx, slug) {
            const res = await fetch("http://reteblog-api.std-950.ist.mospolytech.ru/api/v1/articles/" + slug)
            const data = await res.json();
            console.log(data)

            ctx.commit('updateHomeCard', data)
        }
    },
    modules: {}
}