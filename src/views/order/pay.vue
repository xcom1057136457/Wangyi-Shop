<template>
  <div class="pay">
    <div class="empty" v-show="emptyShpw">
      <van-empty description="暂无商品" />
    </div>
    <div class="detail" v-show="!emptyShpw">
      <van-card
        v-for="(item,index) in completeList"
        :key="index"
        :num="item.total"
        :price="item.price"
        :desc="item.description"
        :title="item.name"
        :thumb="item.photo"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      emptyShpw: true
    };
  },
  computed: {
    ...mapState("order", ["completeList"])
  },
  methods: {
    // 判断是否为空
    setEmpty() {
      let data = this.completeList;
      if (data.length == 0) {
        this.emptyShpw = true;
      } else {
        this.emptyShpw = false;
      }
    }
  },
  mounted() {
    this.setEmpty()
  },
  updated(){
    this.setEmpty()
  },
  created() {}
};
</script>

<style lang="less" scoped>
.pay {
  .empty {
    height: 100vh;
  }
}
</style>