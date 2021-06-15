export default {
  namespaced: true,
  state: {
    shopList: [
      {
        id: 1,
        photo: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2613681810,3488057269&fm=26&gp=0.jpg',
        name: 'Air Jordan 1',
        price: "2134.00",
        description: "AJ1 的诞生标志着一个传奇的品牌开始，它既是功能卓越的鞋类产品，又是一种文化标志。"
      },
      {
        id: 2,
        photo: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1480478667,570478932&fm=111&gp=0.jpg',
        name: 'Air Jordan 2',
        price: "3134.00",
        description: "AJ2 是推出的第二代战靴，是历史50大鞋款之一，是乔丹系列中最珍贵的款型。"
      },
      {
        id: 3,
        photo: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1947208878,3228886446&fm=26&gp=0.jpg',
        name: 'Air Jordan 3',
        price: "1124.00",
        description: "AJ3 是耐克乔丹系列的第三款正代篮球鞋，诞生于 1987 年。"
      },
      {
        id: 4,
        photo: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1905569987,656871227&fm=26&gp=0.jpg',
        name: 'Air Jordan 4',
        price: "3341.00",
        description: "经典的可视化气垫窗口，犀利的跑车造型，经典的侧面撑片，所有的这些都能让你脑中脑补出 AJ4 的画面。"
      },
      {
        id: 5,
        photo: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3150199019,1954711100&fm=26&gp=0.jpg',
        name: 'Air Jordan 5',
        price: "2213.00",
        description: "想必很多篮球爱好者都有看过动漫《灌篮高手》，其中冷静而技术全面的流川枫正是穿着 aj5，那是多少鞋迷童年的梦想。"
      },
      {
        id: 6,
        photo: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2205951675,508908008&fm=26&gp=0.jpg',
        name: 'Air Jordan 6',
        price: "5432.00",
        description: "AJ6 是耐克乔丹系列的第六款正代篮球鞋，也是乔丹第一次夺取NBA总冠军时所穿着的篮球鞋。"
      },

    ],
    categoryList: [
      {
        index: 0,
        name: '全部商品',
        icon: 'photo-o',
        children: [
          {
            id: '0',
            name: '衣类频道',
            icon: 'shop-collect'
          },
          {
            id: '1',
            name: '鞋子频道',
            icon: 'shop-collect'
          },
          {
            id: '2',
            name: '饰品频道',
            icon: 'shop-collect'
          },
          {
            id: '3',
            name: '香水频道',
            icon: 'shop-collect'
          }
        ]
      },
      {
        index: 1,
        name: '服饰',
        icon: 'photo-o',
        children: [
          
        ]
      },
      {
        index: 2,
        name: '鞋类',
        icon: 'photo-o',
        children: [
          
        ]
      },
      {
        index: 3,
        name: '饰品',
        icon: 'photo-o',
        children: [
          
        ]
      },
      {
        index: 4,
        name: '流行款式',
        icon: 'photo-o',
        children: [
          
        ]
      },
      {
        index: 5,
        name: '香水',
        icon: 'photo-o',
        children: [
          
        ]
      }
    ],
    searchDetail: []
  },
  getters: {

  },
  mutations: {
    // 获取数据
    getShopById(state,params){
      let categoryList = state.categoryList;
      categoryList = (categoryList.filter(item => item.index == params))[0];
      state.searchDetail = categoryList.children;
    },

  },
  actions: {
    
  }
}