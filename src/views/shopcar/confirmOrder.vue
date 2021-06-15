<template>
  <fullLayout title="确认订单信息">
    <div class="confirmOrder">
      <div class="addressWrapper">
        <div class="name">
          <van-row>
            <van-col span="8">收货人姓名</van-col>
            <van-col span="16">{{ AddressInfo.name }}</van-col>
          </van-row>
        </div>

        <div class="adress">
          <van-row>
            <van-col span="8">收货地址</van-col>
            <van-col
              span="16"
            >{{ AddressInfo.province + AddressInfo.city + AddressInfo.country + AddressInfo.addressDetail}}</van-col>
          </van-row>
        </div>

        <div class="tel">
          <van-row>
            <van-col span="8">收货人电话号码</van-col>
            <van-col span="16">{{ AddressInfo.tel }}</van-col>
          </van-row>
        </div>

        <div class="postalCode">
          <van-row>
            <van-col span="8">邮政编码</van-col>
            <van-col span="16">{{ AddressInfo.postalCode }}</van-col>
          </van-row>
        </div>

        <div class="otherAdress">
          <van-button block plain size="small" color="black" icon="plus">选择其他地址</van-button>
        </div>
      </div>

      <div class="goodsDetail">
        <div v-for="(item,index) in shopCarDetail" :key="index">
          <van-card
            :num="item.total"
            :price="item.price"
            :desc="item.description"
            :title="item.name"
            :thumb="item.photo"
          ></van-card>
        </div>
      </div>

      <div class="countPrice" v-show="countPrice != 0">
        <span>合计：</span>
        <span>＄{{ countPrice }}</span>
      </div>

      <div class="btnsWrapper">
        <van-button block size="small" color="black" @click="buyHandler">立即购买</van-button>
        <van-button block size="small" type="info" @click="goBack">返回</van-button>
      </div>
    </div>
  </fullLayout>
</template>

<script>
import { mapState,mapActions } from "vuex";
import fullLayout from "../../components/fullLayout";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("order", ["shopCarDetail"]),
    ...mapState("address", ["AddressInfo"]),
    countPrice() {
      let price = 0;
      this.shopCarDetail.forEach(item => {
        price = price + item.total * item.price;
      });
      return price;
    }
  },
  methods: {
    ...mapActions("order",["emptyCar"]),
    goBack() {
      this.$router.go(-1);
    },
    buyHandler() {
      this.$dialog
        .confirm({
          title: "支付提示",
          message: "是否确认购买？"
        })
        .then(() => {
          this.$toast.loading({
            duration: 1000,
            message: "加载中...",
            forbidClick: true
          });
          setTimeout(() => {
            this.$router.go(-1);
            this.$toast.success("支付成功");
            this.emptyCar()
          },1000)
        })
        .catch(() => {
          this.$toast.fail("支付失败");
        });
    }
  },
  created() {},
  components: {
    fullLayout
  }
};
</script>

<style lang="less" scoped>
.confirmOrder {
  background-color: #fff;
  > .addressWrapper {
    padding: 10px;
    > div {
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;
      > .van-row {
        > .van-col:first-child {
          color: #666;
          font-size: 14px;
        }
        > .van-col:last-child {
          font-size: 14px;
        }
      }
    }
  }
  > .goodsDetail {
    > div {
      padding: 10px;
    }
  }
  > .countPrice {
    padding: 10px;
    font-size: 18px;
    text-align: right;
    > span:last-child {
      font-weight: 700;
      color: #666;
    }
  }
  > .btnsWrapper {
    position: fixed;
    padding: 20px 10px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    > .van-button:first-child {
      margin-bottom: 10px;
    }
  }
}
</style>