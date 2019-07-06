import axios from 'axios'

const state = {
  loginResult: {}
}

const getters = {
  loginResultGetter: state => state.loginResult
}

const actions = {
  login ({ commit }, data) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    console.log(data);
    axios.post('https://localhost:5000/api/auth', data, config).then((res) => {
      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }
}

const mutations = {

}

export default{
  state,
  getters,
  actions,
  mutations
}
  