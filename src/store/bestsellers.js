const bestsellers = {
    state: {
        bestsellers: [
            {
                id: 0,
                image: 'coffee-1.jpg',
                name: 'Solimo Coffee Beans 22kg',
                price: 10.73,
                className: 'best__item',
            },
            {
                id: 1,
                image: 'coffee-2.jpg',
                name: 'Presto Coffee Beans 1kg',
                price: 15.99,
                className: 'best__item',
            },
            {
                id: 2,
                image: 'coffee-3.jpg',
                name: 'AROMISTICO Coffee 1kg',
                price: 7.99,
                className: 'best__item',
            },
        ]
    },
    actions: {
        setSestsellersData({ commit }, data) {
            console.log(data);
            commit('setSestsellersData', data)
        }
    },
    mutations: {
        setSestsellersData(state, data) {
            state.bestsellers = data
        }
    },
    getters: {
        getBestseller(state) {
            return state.bestsellers
        },
    }
}
export default bestsellers    



