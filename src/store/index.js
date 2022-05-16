import {createStore} from 'vuex'
import homeCard from "@/store/home-card/homeCard";

export default createStore({
    state: {
        homeCards: [
            {
                id: 0,
                title: 'Всего в столице обитает около 200 видов дневных и ночных бабочек, более 90 из них занесены в Красную книгу Москвы.',
                dateTime: '19 часов назад'
            },
            {
                id: 1,
                title: 'Компьютерные атаки и технологии их обнаружения',
                dateTime: '19 часов назад'
            },
            {
                id: 2,
                title: 'В Санкт-Петербурге началась реконструкция памятника',
                dateTime: '19 часов назад'
            },
            {
                id: 3,
                title: 'Список новых  бесплатных коворков в Москве',
                dateTime: '19 часов назад'
            },
            {
                id: 4,
                title: 'В Волгограде появились первые подснежники',
                dateTime: '19 часов назад',
            }
        ],
    },
    getters: {
        allCards(state){
            return state.homeCards
        },
        cardsCount(state){
            return state.homeCards.length
        }
    },
    mutations: {
        updateCards(state, cards){
            state.posts = cards
        }
    },
    actions: {},
    modules: {
        homeCard
    }
})
