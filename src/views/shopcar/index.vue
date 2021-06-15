<template>
  <div class="shopcar">
    <div class="empty" v-show="emptyShow">
      <van-empty description="暂无商品" />
    </div>
    <div class="shopDetail">
      <div v-for="(item,index) in shopCarDetailData" :key="index">
        <van-swipe-cell>
          <van-card
            :num="item.total"
            :price="item.price"
            :desc="item.description"
            :title="item.name"
            :thumb="item.photo"
          >
            <template #footer>
              <van-stepper :value="item.total" @change="changeHandler" :name="item.id"/>
            </template>
          </van-card>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="deleteHandler(item)"/>
          </template>
        </van-swipe-cell>
      </div>
    </div>
    
    <div class="operationTab">
      <van-submit-bar :price="priceCount" button-text="提交订单" @submit="onSubmit" v-show="!emptyShow">
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      checked: false,
      emptyShow: false,
      shopCarDetailData: []
    };
  },
  computed: {
    ...mapState("order",["shopCarDetail"]),
    priceCount(){
      let price = 0
      this.shopCarDetailData.forEach((item) => {
        price = price + (item.total * item.price)
      })
      return price*100
    }
  },
  watch: {

  },
  methods: {
    ...mapActions("order",["deleteGoods","changeTotalHandler"]),
    onSubmit() {
      this.$router.push({
        name: 'confirmOrder'
      })
    },
    // 获取数据
    findAll(){
      this.shopCarDetailData = this.shopCarDetail;
    },
    onClickEditAddress() {},
    setEmpty(){
      let shopCarDetail = this.shopCarDetailData;
      if(shopCarDetail.length == 0) {
        this.emptyShow = true
      }else {
        this.emptyShow = false
      }
    },
    deleteHandler(item){
      this.deleteGoods(item);
      this.setEmpty()
    },
    changeHandler(value,detail){
      let stepDetail = {};
      stepDetail.id = detail.name;
      stepDetail.total = value;
      this.changeTotalHandler(stepDetail);
      this.findAll();
    }
  },
  created(){
    this.findAll()
    this.setEmpty();
  },
  mounted(){
    this.findAll()
    this.setEmpty();
  }
};
</script>

<style lang="less" scoped>
.shopcar {
  position: relative;
  > .empty {
    height: 100vh;
  }
  .delete-button {
    height: 100%;
  }
  > .operationTab {
    /deep/ .van-submit-bar {
      bottom: 50px;
      padding: 5px 0;
      border-top: 1px solid #dedede;
      border-bottom: 1px solid #dedede;
    }
  }
}
</style>