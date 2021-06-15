<template>
  <fullLayout :title="title" icon="search">
    <div class="shopList">
      <van-row>
        <van-col span="6">
          <div class="leftTab">
            <van-sidebar v-model="activeKey">
              <van-sidebar-item
                :title="item.name"
                v-for="(item,index) in categoryList"
                :key="index"
                @click="onChange(item)"
              />
            </van-sidebar>
          </div>
        </van-col>

        <van-col span="18">
          <div v-show="showEmpty">
            <van-empty description="暂无此物品">
              <van-button round type="info" class="bottom-button" @click="goBack">返回首页</van-button>
            </van-empty>
          </div>
          <div class="detail">
            <shopList :index="activeKey" @showEmpty="showEmptyHandler"></shopList>
          </div>
        </van-col>
      </van-row>
    </div>
  </fullLayout>
</template>

<script>
import fullLayout from "../../components/fullLayout";
import shopList from "../../components/shopList";
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeKey: 0,
      title: "",
      showEmpty: false
    };
  },
  computed: {
    ...mapState("home", ["shopList", "categoryList"])
  },
  methods: {
    onChange(item) {
      this.activeKey = item.index;
      this.title = item.name;
      sessionStorage.setItem("shopList", JSON.stringify(item));
    },
    getSession() {
      let item = JSON.parse(sessionStorage.getItem("shopList"));
      this.activeKey = item.index;
      this.title = item.name;
    },
    showEmptyHandler(val) {
      this.showEmpty = val;
    },
    goBack(){
      this.$router.go(-1)
    }
  },
  created() {
    this.getSession();
  },
  mounted() {},
  components: {
    fullLayout,
    shopList
  }
};
</script>

<style lang="less" scoped>
.shopList {
  height: 100%;
  > .van-row {
    height: 100%;
    > .van-col {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      > .leftTab {
        height: 100%;
        /deep/ .van-sidebar-item--select {
          border-color: black;
        }
      }
    }
  }
}
</style>