<template>
  <div class="container">
    <div class="details">
      <router-view />
    </div>

    <div class="tab">
      <van-tabbar v-model="active" @change="onChange" inactive-color="rgba(0,0,0,.3)" active-color="black">
        <van-tabbar-item name="home" icon="home-o">主页</van-tabbar-item>
        <van-tabbar-item name="order" icon="bag-o">订单</van-tabbar-item>
        <van-tabbar-item name="shopcar" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item name="user" icon="manager-o">我</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      active: ""
    };
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    onChange(index) {
      this.$router.push({ name: index });
    },
    setIndex() {
      let index = this.$route.fullPath.split("/")[2];
      this.active = index;
    }
  },
  mounted() {},
  created() {
    this.getUserInfo();
    this.setIndex();
  },
  updated() {
    this.setIndex();
  }
};
</script>
<style lang="less" scoped>
.container {
  background: #f6f6f6;
  overflow-x: hidden;
  .slide-fade {
    position: absolute;
    left: 0;
    right: 0;
  }
  .slide-fade-enter-active {
    transition: all 1.2s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    left: 0;
    right: 0;
    transform: translateX(50px);
    opacity: 0;
  }

  .van-tabbar {
    border-top: 1px solid #dedede;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
}
</style>