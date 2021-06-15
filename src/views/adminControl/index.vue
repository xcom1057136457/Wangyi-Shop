<template>
  <fullLaout title="具体销量整合">
    <div class="adminIndex">
      <div class="echartsWrapper">
        <div id="main"></div>
      </div>

      <div class="sendWrapper">
        <div class="sendText">需发货</div>
        <van-empty
          class="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="暂无物品"
          v-show="emptyShow"
        />
        <div class="goodsDetail">
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
        <div class="btnsWrapper" v-show="buttonShow">
          <van-button type="info" block size="small" @click="sendHandler" >一键发货</van-button>
        </div>
      </div>

      <div class="completeWrapper">
        <div class="completeText">已发货</div>
        <van-empty
          class="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="暂无物品"
          v-show="emptyShow2"
        />
        <div class="goodsDetail">
          <van-card
            v-for="(item,index) in sendCompleteList"
            :key="index"
            :num="item.total"
            :price="item.price"
            :desc="item.description"
            :title="item.name"
            :thumb="item.photo"
          />
        </div>
      </div>

      <div class="completeWrapper">
        <div class="completeText">已完成</div>
        <van-empty
          class="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="暂无物品"
          v-show="emptyShow3"
        />
        <div class="goodsDetail">
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
    </div>
  </fullLaout>
</template>

<script>
import fullLaout from "../../components/fullLayout";
import echarts from "echarts";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          color: ["#F58080", "#47D8BE", "#F9A589"],
          data: ["新报", "流失", "续费"],
          left: "center",
          bottom: "bottom"
        },
        grid: {
          top: "middle",
          left: "3%",
          right: "4%",
          bottom: "3%",
          height: "80%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: [100, 200, 20, 30, 60, 89],
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          }
        },
        yAxis: {
          type: "value",

          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#DDD"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#333"
            }
          },
          nameTextStyle: {
            color: "#999"
          },
          splitArea: {
            show: false
          }
        },
        series: [
          {
            name: "新报",
            type: "line",
            data: [800, 900, 220, 130, 660, 289],
            color: "#F58080",
            lineStyle: {
              normal: {
                width: 5,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#FFCAD4" // 0% 处的颜色
                    },
                    {
                      offset: 0.4,
                      color: "#F58080" // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#F58080" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(245,128,128, 0.5)",
                shadowBlur: 10,
                shadowOffsetY: 7
              }
            },
            itemStyle: {
              normal: {
                color: "#F58080",
                borderWidth: 10,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                borderColor: "#F58080"
              }
            },
            smooth: true
          },
          {
            name: "流失",
            type: "line",
            data: [123, 568, 111, 222, 123, 56],
            lineStyle: {
              normal: {
                width: 5,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#AAF487" // 0% 处的颜色
                    },
                    {
                      offset: 0.4,
                      color: "#47D8BE" // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#47D8BE" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(71,216,190, 0.5)",
                shadowBlur: 10,
                shadowOffsetY: 7
              }
            },
            itemStyle: {
              normal: {
                color: "#AAF487",
                borderWidth: 10,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                borderColor: "#AAF487"
              }
            },
            smooth: true
          },
          {
            name: "续费",
            type: "line",
            data: [125, 568, 25, 36, 784, 56],
            lineStyle: {
              normal: {
                width: 5,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#F6D06F" // 0% 处的颜色
                    },
                    {
                      offset: 0.4,
                      color: "#F9A589" // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#F9A589" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(249,165,137, 0.5)",
                shadowBlur: 10,
                shadowOffsetY: 7
              }
            },
            itemStyle: {
              normal: {
                color: "#F6D06F",
                borderWidth: 10,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                borderColor: "#F6D06F"
              }
            },
            smooth: true
          }
        ]
      },
      emptyShow: true,
      emptyShow2: true,
      emptyShow3: true,
      buttonShow: true
    };
  },
  computed: {
    ...mapState("order", ["completeList","sendCompleteList","receveGoodsList"])
  },
  watch: {
  },
  methods: {
    ...mapActions("order",["sendGoods"]),
    initEcharts() {
      let myChart = echarts.init(document.getElementById("main"));
      myChart.setOption(this.option);
    },
    setEmpty(){
      let data = this.completeList;
      if(data.length == 0) {
        this.emptyShow = true;
        this.buttonShow = false
      }else {
        this.emptyShow = false;
        this.buttonShow = true
      }
    },
    setEmpty2(){
      let data = this.sendCompleteList;
      if(data.length == 0) {
        this.emptyShow2 = true
      }else {
        this.emptyShow2 = false
      }
    },
    setEmpty3(){
      let data = this.receveGoodsList;
      if(data.length == 0) {
        this.emptyShow3 = true
      }else {
        this.emptyShow3 = false
      }
    },
    sendHandler(){
      this.emptyShow = true;
      this.emptyShow2 = false;
      this.buttonShow = false
      this.sendGoods()
    }
  },
  mounted() {
    this.initEcharts();
    this.setEmpty3()
    this.setEmpty2()
    this.setEmpty()
  },
  components: {
    fullLaout
  }
};
</script>

<style lang="less" scoped>
.adminIndex {
  > .echartsWrapper {
    padding: 10px 0;
    padding-bottom: 20px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    > #main {
      height: 200px;
    }
  }
  > .sendWrapper {
    background-color: #fff;
    margin-top: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    > .sendText {
      font-size: 20px;
      font-weight: 700;
      color: #666;
      padding: 10px;
    }
    > .btnsWrapper {
      padding: 10px;
    }
  }
  > .completeWrapper {
    margin-top: 20px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    > .completeText {
      font-size: 20px;
      font-weight: 700;
      color: #666;
      padding: 10px;
    }
  }
}
</style>