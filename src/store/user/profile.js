export default {
    state: {
        profile: {}
    },
    getters: {
        getProfile(state) {
            return state.profile
        }
    },
    mutations: {
        updateProfile(state, profile) {
            state.profile = profile
        }
    }
    ,
    actions: {
        async fetchProfile(ctx) {
            const token = localStorage.getItem('token')
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": token
                }
            };
            const res = await fetch("http://reteblog-api.std-950.ist.mospolytech.ru/api/v1/profile", requestOptions)
            const data = await res.json();
            console.log(data)

            ctx.commit('updateProfile', data)
        },
        async putAvatar(ctx, file) {
            const token = localStorage.getItem('token')

            const fData = new FormData();
            fData.set("file", file); // добавляем файл в объект FormData(
            fData.set("path", file.name)

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": token
                },
                body: fData,
            };
            const res = await fetch("http://reteblog-api.std-950.ist.mospolytech.ru/api/v1/profile/avatar", requestOptions)
            console.log(res.json())
        },
        async updateProfile(ctx, args){
            const token = localStorage.getItem('token')
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": token
                }
            };
            const res = await fetch("http://reteblog-api.std-950.ist.mospolytech.ru/api/v1/profile", requestOptions)
            const data = await res.json();
        }
    },
    modules: {}
}
