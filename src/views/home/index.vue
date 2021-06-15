<template>
  <div class="home">
    <div class="bannerWrapper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :height="180">
        <van-swipe-item v-for="(item,index) in photoList" :key="index">
          <van-image :src="item" />
        </van-swipe-item>
      </van-swipe>
      <input type="text" placeholder="请输入您要搜索的内容" />
    </div>

    <div class="countDetail" v-show="permission == 'admin'">
      <van-cell title="具体销量整合" is-link @click="goAdmin"/>
    </div>

    <div class="gridWrapper">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(item,index) in categoryList"
          :key="index"
          icon="photo-o"
          :text="item.name"
          @click="goListHandler(item)"
        />
      </van-grid>
    </div>

    <div class="hotSale">
      <h2>热销商品</h2>
      <div v-for="(item,index) in shopList" :key="index">
        <div class="image">
          <van-image height="200px" :src="item.photo"></van-image>
        </div>
        <div class="goodsDetail">
          <div class="name">{{ item.name }}</div>
          <div class="price">${{ item.price }}</div>
          <div class="description">{{ item.description }}</div>
          <div class="btns">
            <van-button
              color="black"
              block
              size="small"
              type="primary"
              @click="addShopcar(item)"
            >加入购物车</van-button>
            <van-button block size="small" type="info" @click="buyHandler(item)">立即购买</van-button>
          </div>
        </div>
      </div>
    </div>

    <div class="floatBall" v-show="permission == 'admin'">
      <van-icon name="plus" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      photoList: [
        "http://img4.imgtn.bdimg.com/it/u=1525497158,1651929206&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3119489917,3387922805&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3028625566,440293990&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=2280168432,2423843262&fm=26&gp=0.jpg"
      ],
      permission: ''
    };
  },
  methods: {
    ...mapActions("order", ["addShopCar","buyGoods"]),
    goListHandler(item) {
      this.$router.push({
        path: "/index/shopList"
      });
      sessionStorage.setItem("shopList", JSON.stringify(item));
    },
    removeItem() {
      sessionStorage.removeItem("shopList");
    },
    buyHandler(item) {
      this.buyGoods(item)
      this.$router.push({
        name: 'confirmOrder'
      })
    },
    addShopcar(item) {
      this.$dialog
        .confirm({
          title: "提示",
          message: "您确定将此物品加入购物车吗"
        })
        .then(() => {
          // on confirm
          this.addShopCar(item);
        })
        .catch(() => {
          // on cancel
          this.$toast.fail("已取消")
        });
      
    },
    goAdmin(){
      this.$router.push({
        name: 'adminIndex'
      })
    },
    getPermission(){
      this.permission = sessionStorage.getItem("permission")
    }
  },
  computed: {
    ...mapState("home", ["shopList", "categoryList"])
  },
  created() {
    this.removeItem();
    
  },
  mounted() {
    this.getPermission()
  }
};
</script>

<style lang="less" scoped>
.home {
  > .bannerWrapper {
    .van-image {
      width: 100%;
      height: 100%;
    }
    > input {
      position: absolute;
      top: 20px;
      width: 90%;
      border: none;
      height: 35px;
      border-radius: 20px;
      left: -50%;
      margin-left: 55%;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 14px;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
  > .countDetail {
    margin-top: 20px;
  }
  > .gridWrapper {
    margin-top: 20px;
  }
  > .hotSale {
    margin-top: 10px;
    padding: 10px;
    > h2 {
      padding-bottom: 20px;
      font-size: 20px;
    }
    > div {
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      > .goodsDetail {
        padding: 10px;
        > div {
          margin-bottom: 10px;
        }
        > .name {
          font-size: 20px;
          font-weight: 700;
          color: #666;
        }
        > .price {
          font-size: 16px;
          color: #a6a6a6;
          font-weight: bold;
        }
        > .description {
          line-height: 30px;
        }
        > .btns {
          > .van-button:first-child {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  > .floatBall {
    position: fixed;
    right: 30px;
    bottom: 80px;
    background-color: #000;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    > .van-icon {
      color: #fff;
      font-size: 25px;
    }
  }
}
</style>