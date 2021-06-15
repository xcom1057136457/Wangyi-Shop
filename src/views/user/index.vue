<template>
  <div class="user">
    <div class="header">
      <div>
        <div class="headerIcon">
          <van-image
            round
            width="6rem"
            height="6rem"
            src="http://xiaomiao.club/images/header.jpeg"
          />
        </div>
        <div class="userName">{{ name }}</div>
      </div>
    </div>

    <div class="settings">
      <van-cell title="地址管理" icon="location-o" clickable center is-link />
      <van-cell title="历史订单" icon="coupon-o" clickable center is-link />
      <van-cell title="欢乐购" icon="gift-o" clickable center is-link />
      <van-cell title="基础设置" icon="setting-o" clickable center is-link @click="goSet"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      name: ''
    };
  },
  computed: {},
  methods: {
    getUserInfo() {
      let userInfo = JSON.parse(localStorage.getItem("userConfig"));
      this.userInfo = userInfo;
      if(userInfo.username == 'admin') {
        this.name = "Dioa X"
      }
    },
    goSet(){
      this.$router.push({
        name: 'setIndex'
      })
    }
  },
  created() {
    this.getUserInfo();
  }
};
</script>

<style lang="less" scoped>
.user {
  height: 100vh;
  > .header {
    height: 25%;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    > div {
      > .userName {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        margin-top: 20px;
        color: #666;
      }
    }
  }
  > .settings {
    margin-top: 30px;
    > .van-cell {
      line-height: 30px;
    }
  }
}
</style>