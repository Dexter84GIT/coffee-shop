const coffee = {
    state: {
        coffee: []
    },
    mutations: {
        setCoffeeData(state, data) {
            state.coffee = data
        }
    },
    actions: {
        setCoffeeData({ commit }, data) {
            console.log(data);
            commit('setCoffeeData', data)
        }
    },
    getters: {
        getCoffee(state) {
            return state.coffee
        }
    },

}

export default coffee