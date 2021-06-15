<template>
  <div class="fullLayout">
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon :name="icon" size="18" />
      </template>
    </van-nav-bar>
    <slot />
  </div>
</template>

<script>
export default {
  props: ["title", "icon"],
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.fullLayout {
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #f6f6f6;
  /deep/ .van-nav-bar .van-icon {
    color: black;
  }
  /deep/ .van-nav-bar__text {
    color: black;
  }
  /deep/ .van-nav-bar {
    border-bottom: 1px solid #dedede;
  }
}
</style>