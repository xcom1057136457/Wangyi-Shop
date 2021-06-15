<template>
  <div class="shipped">
    <div class="empty" v-show="emptyShow">
      <van-empty description="暂无商品" />
    </div>
    <div class="goodsDetail" v-show="!emptyShow">
      <van-card
        v-for="(item,index) in sendCompleteData"
        :key="index"
        :num="item.total"
        :price="item.price"
        :desc="item.description"
        :title="item.name"
        :thumb="item.photo"
      >
        <template #footer>
          <van-button size="small" class="shouButton" block @click="receivedHandler(item.id)">已收货</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      emptyShow: true,
      sendCompleteData: []
    };
  },
  computed: {
    ...mapState("order", ["sendCompleteList"])
  },
  methods: {
    ...mapActions("order",["receveGoods"]),
    setEmpty() {
      let data = this.sendCompleteList;
      if (data.length == 0) {
        this.emptyShow = true;
      } else {
        this.emptyShow = false;
      }
    },
    findAll() {
      this.sendCompleteData = this.sendCompleteList;
    },
    receivedHandler(id){
      this.setEmpty()
      this.receveGoods(id)
    }
  },
  mounted() {
    this.setEmpty();
    this.findAll();
  }
};
</script>

<style lang="less" scoped>
.shipped {
  .empty {
    height: 100vh;
  }
  .shouButton {
    margin-top: 10px;
  }
}
</style>