import {
  setToken,
  getToken,
  removeToken
} from "../util/index"
export default {
  namespaced: true,
  state: {
    
  },
  mutations: {

  },
  actions: {
    // 获取信息，存入cookie
    register({
      commit,
      dispatch
    }, params) {
      let token = '';
      if (params.username == 'admin') {
        token = 'admin-token'
      } else {
        token = 'common-token'
      }
      setToken("userConfig", JSON.stringify(params))
      setToken("token", token);
    },
    // 登录
    login({
      commit
    }, params) {
      let userConfig = JSON.parse(localStorage.getItem("userConfig"));
      if (params.username == userConfig.username && params.password == userConfig.password) {
        return true;
      } else {
        return false;
      }
    },
    // 获取信息
    getUserInfo({
      commit
    }) {
      let token = localStorage.getItem("token")
      let permission = {}
      if (token == "admin-token") {
        permission = 'admin'
      } else {
        permission = 'common'
      }
      sessionStorage.setItem("permission", permission);
    },
    // 删除缓存
    logout() {
      removeToken("userConfig");
      removeToken("token");
      sessionStorage.removeItem("permission");
    }
  }
}