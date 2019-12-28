import Vue from "vue";
import Vuex from "vuex";
import { submissionsCollection } from "../config/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    submissions: [],
    liked: []
  },
  mutations: {
    setSubmissions: (state, array) => (state.submissions = array),
    setLiked: (state, array) => (state.liked = array)
  },
  actions: {
    getLiked({ commit }) {
      if (localStorage.getItem("votes")) {
        commit("setLiked", JSON.parse(localStorage.getItem("votes")));
      }
    },
    addToLiked({ state, commit }, postData) {
      let { id, votes } = postData;
      const liked = state.liked;
      submissionsCollection.doc(id).update({
        votes: ++votes
      });
      liked.push(id);
      localStorage.setItem("votes", JSON.stringify(liked));
      commit("setLiked", liked);
    },
    removeFromLiked({ state, commit }, postData) {
      let { id, votes } = postData;
      const liked = state.liked;
      submissionsCollection.doc(id).update({
        votes: --votes
      });
      liked.splice(liked.indexOf(id), 1);
      localStorage.setItem("votes", JSON.stringify(liked));
      commit("setLiked", liked);
    }
  },
  getters: {
    checkLiked: state => id => {
      return state.liked.find(liked => {
        return liked === id;
      });
    }
  },
  modules: {}
});
