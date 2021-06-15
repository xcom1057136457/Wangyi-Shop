<template>
  <fullLayout title="基础设置">
    <div class="setIndex">
      <div class="cellWrapper"></div>
      <div class="logoutWrapper">
        <van-button block size="small" type="danger" @click="logoutHandler">退出登录</van-button>
      </div>
    </div>
  </fullLayout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import fullLayout from "../../components/fullLayout";
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    logoutHandler(){
      localStorage.removeItem("userConfig");
      localStorage.removeItem("token");
      sessionStorage.removeItem("permission");
      this.$router.push({
        name: 'login'
      })
    }
  },
  components: {
    fullLayout
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.setIndex {
  .logoutWrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>