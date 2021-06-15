<template>
  <div class="shopListComponent">
    <van-row>
      <van-col span="8" v-for="(item,index) in searchDetail" :key="index">
        <div>
          <div class="icon">
            <van-icon :name="item.icon" />
          </div>
          <div class="name">{{ item.name }}</div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["index"],
  data() {
    return {};
  },
  computed: {
    ...mapState("home", ["searchDetail"])
  },
  watch: {
    index: function(val) {
      this.getShopHandler(val);
    }
  },
  methods: {
    ...mapMutations("home", ["getShopById"]),
    // 获取数据
    getShopHandler() {
      let index = this.index;
      this.getShopById(index);
      if(this.searchDetail.length > 0) {
        this.$emit("showEmpty",false)
      }else {
        this.$emit("showEmpty",true)
      }
      
    }
  },
  created() {
    this.getShopHandler();
  }
};
</script>

<style lang="less" scoped>
.shopListComponent {
  > .van-row {
    > .van-col {
      display: flex;
      justify-content: center;
      align-items: center;
      &:first-child,
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 10px;
      }
      > div {
        padding: 10px;
        border: 1px solid #dedede;
        margin-bottom: 10px;
        > div {
          text-align: center;
        }
        > .icon {
          font-size: 30px;
        }
        > .name {
          font-size: 14px;
          font-weight: 700;
          color: #666;
        }
      }
    }
  }
}
</style>