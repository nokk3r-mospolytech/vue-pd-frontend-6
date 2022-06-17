import axios from "axios";
import router from "@/router";

export default {
    state: {
        auth: true,
        token: ''
    },
    getters: {
        getAuth(state) {
            return state.auth
        },
        getToken(state) {
            return state.token
        }
    },
    mutations: {
        updateAuth(state, args) {
            state.auth = args
        },
        updateToken(state, args) {
            state.token = args
        },
        logout(state) {
            state.auth = false
            state.token = ''
        }
    },
    actions: {
        async login(ctx, form) {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": form.login,
                    "password": form.pass,
                    "remember": false
                })
            };
            const response = await fetch("http://skprods.std-950.ist.mospolytech.ru/api/v1/login", requestOptions);
            const data = await response.json();

            console.log(response)
            console.log(data)

            if (response.status !== 200) {
                return 'Не правильно введен логин или пароль'
            }
            const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcmV0ZWJsb2ctYXBpLnN0ZC05NTAuaXN0Lm1vc3BvbHl0ZWNoLnJ1L2FwaS92MS9sb2dpbiIsImlhdCI6MTY1NTQzMzI5OCwibmJmIjoxNjU1NDMzMjk4LCJqdGkiOiJic3hvSmJQdzZyeVEwb1puIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.gMUZnNNN1aukyeVFc8-8dzl2aa_vTRC4u3WF5tYigJ0"
            localStorage.setItem('token', token)
            // axios.defaults.headers.common['Authorization'] = token

            ctx.commit('updateToken', token)
            ctx.commit('updateAuth', true)
        },

        async register(ctx){
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": "asdasd",
                    "email": "dsadasd@mail.com",
                    "password": "amoamoamo",
                    "password_confirmation": "amoamoamo",
                    "first_name": "nokk3r",
                    "last_name": "akok3r"
                })
            };
            const response = await fetch("http://skprods.std-950.ist.mospolytech.ru/api/v1/register", requestOptions);
            const data = await response.json();
            console.log(response)
            console.log(data)
        },

        async logout(ctx) {
            localStorage.removeItem('token')
            // delete axios.defaults.headers.common['Authorization']
            ctx.commit('logout')
            await router.push('/')
        },

        async checkValidToken(ctx) {
            const token = localStorage.getItem('token')
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            };
            const res = await fetch("http://reteblog-api.std-950.ist.mospolytech.ru/api/v1/profile", requestOptions)
            if (res.status !== 200) {
                ctx.dispatch('logout')
                return 'Недействительный токен'
            }

            console.log('Авторизация прошла успешна')

            ctx.commit('updateToken', token)
            ctx.commit('updateAuth', true)
        }
    },
    modules: {}
}