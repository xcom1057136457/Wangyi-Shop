<template>
  <div class="complete">
    <div class="empty" v-show="emptyShow">
      <van-empty description="暂无商品" />
    </div>
    <div class="goodsWrapper">
      <van-card
        v-for="(item,index) in receveGoodsList"
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
      emptyShow: true
    };
  },
  computed: {
    ...mapState("order", ["receveGoodsList"])
  },
  methods: {
    setEmpty() {
      let data = this.receveGoodsList;
      if (data.length == 0) {
        this.emptyShow = true;
      } else {
        this.emptyShow = false;
      }
    }
  },
  mounted() {
    this.setEmpty();
  }
};
</script>

<style lang="less" scoped>
.complete {
  .empty {
    height: 100vh;
  }
}
</style>