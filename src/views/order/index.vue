<template>
  <div class="oreder">
    <div class="tab">
      <van-tabs v-model="active" animated swipeable sticky color="black" @click="changeHandler">
        <van-tab v-for="(item,index) in tabTitle" :title="item.name" :key="index" :name="item.key">
          <router-view />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      tabTitle: [
        {
          index: 1,
          name: '未支付',
          key: 'notPay'
        },
        {
          index: 2,
          name: '已支付',
          key: 'pay'
        },
        {
          index: 3,
          name: '已发货',
          key: 'shipped'
        },
        {
          index: 4,
          name: '已完成',
          key: 'complete'
        },
      ]
    };
  },
  methods: {
    changeHandler(name,title){
      this.$router.push({name})
    },
    setIndex(){
      let href = window.location.href;
      let index = href.indexOf("#");
      let indexText = href.substring(index,href.length);
      indexText = indexText.split("/")[3];
      this.active = indexText
    }
  },
  created(){
    this.setIndex()
  },
  updated(){
    this.setIndex()
  }
};
</script>

<style lang="less" scoped>
</style>