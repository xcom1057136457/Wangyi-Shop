export default {
  namespaced: true,
  state: {
    shopCarDetail: [],
    completeList: [],
    sendCompleteList: [],
    receveGoodsList: []
  },
  getters: {

  },
  mutations: {
    // 立即购买
    buyGoodsHandler(state,data){
      state.shopCarDetail = [];
      data.total = 1
      state.shopCarDetail.push(data)
    },
    // 存入数据
    saveDetail(state, data) {
      data.total = 1;
      let idBoolean = [];
      idBoolean = state.shopCarDetail.filter(item => item.id == data.id);
      if (idBoolean.length > 0) {
        state.shopCarDetail.forEach((item) => {
          if (item.id == data.id) {
            item.total += 1;
          }
        })
      } else {
        state.shopCarDetail.push(data);
      }
    },
    // 删除数据
    deleteShop(state, data) {
      state.shopCarDetail.forEach((item, index, arr) => {
        if (item.id == data.id) {
          arr.splice(index, 1)
        }
      })
    },
    // 更改state数据
    changeTotal(state, data) {
      let id = data.id;
      state.shopCarDetail.forEach((item,index,arr) => {
        if(item.id == id) {
          item.total = data.total
        }
      })
    },
    // 清空购物车
    emptyCarHandler(state){
      state.completeList = state.shopCarDetail
      state.shopCarDetail = []
    },
    // 发货
    sendGoodsHandler(state){
      // state.sendCompleteList = state.completeList;
      state.sendCompleteList.push(...state.completeList)
      state.completeList = []
    },
    // 收货
    receveGoodsHandler(state,id){
      let data = state.sendCompleteList.filter(item => item.id == id);
      state.receveGoodsList.push(...data);
      state.sendCompleteList.forEach((item,index,arr) => {
        if(item.id == id) {
          arr.splice(index,1)
        }
      })
    }
  },
  actions: {
    // 立即购买
    buyGoods({commit},item){
      commit("buyGoodsHandler",item)
    },
    // 加入购物车
    addShopCar({
      commit
    }, params) {
      commit("saveDetail", params)
    },
    // 删除商品
    deleteGoods({
      commit
    }, params) {
      commit("deleteShop", params)
    },
    // 更改数据
    changeTotalHandler({
      commit
    }, params) {
      commit("changeTotal", params);
    },
    // 清空购物车
    emptyCar({commit}){
      commit("emptyCarHandler")
    },
    // 发货
    sendGoods({commit}){
      commit("sendGoodsHandler")
    },
    // 收货
    receveGoods({commit},id){
      commit("receveGoodsHandler",id)
    }
  }
}