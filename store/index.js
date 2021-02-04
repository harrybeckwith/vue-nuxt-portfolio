import Vuex from "vuex";


export const state = () => ({
    devToData:[]
  })
  
  export const mutations = {
    ADD_DEV_TO_DATA(state, data) {
      state.devToData = data
    }
  }

  export const actions = {
    storeDevToData({ commit }, data) {
        commit('ADD_DEV_TO_DATA', data);
      },
  }

  export const getters = {
    devToData: (state) => {
      return state.devToData
    }
  }
