const bestsellers = {
    state: {
        bestsellers: []
    },
    actions: {
        setSestsellersData({ commit }, data) {
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



