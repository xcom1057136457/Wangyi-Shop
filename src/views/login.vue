<template>
  <div class="login">
    <div class="logo">
      <van-image
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1521722355,149999211&fm=26&gp=0.jpg"
      ></van-image>
    </div>

    <div class="formWrapper">
      <van-form>
        <van-field
          v-model="formData.username"
          name="userName"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="formData.password"
          type="password"
          name="passWord"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-form>
    </div>

    <div class="iconWrapper">
      <van-icon name="after-sale" />
      <van-icon name="certificate" />
      <van-icon name="free-postage" />
      <van-icon name="logistics" />
      <van-icon name="music-o" />
      <van-icon name="shopping-cart-o" />
    </div>

    <div class="btnsWrapper">
      <van-button round block type="info" @click="onSubmit">提交</van-button>
      <van-button round block @click="registerHandler">注册</van-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    onSubmit() {
      if (this.formData.username && this.formData.password) {
        this.login(this.formData).then(res => {
          if (res) {
            this.$router.push({ name: "index" });
            this.$notify({
              type: 'primary',
              message: '登陆成功'
            })
          } else {
            this.$toast.fail("请输入正确的用户名或密码");
            this.formData = {}
          }
        });
      } else {
        this.$toast.fail("请输入相关信息");
      }
    },
    registerHandler() {
      this.$router.push({ name: "register" });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.login {
  > .formWrapper {
    margin-top: 40px;
    padding: 10px;
    background-color: #fff;
  }
  > .iconWrapper {
    margin-top: 40px;
    display: flex;
    > .van-icon {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      color: #1989fa;
    }
  }
  > .btnsWrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 16px;
    > .van-button {
      margin-top: 20px;
    }
  }
}
</style>