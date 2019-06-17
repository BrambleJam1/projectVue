<template>
  <div class="wrap main">
    <el-header :title="types =='overtime'?'办公室加班申请表':'办公室调休申请表'"></el-header>
    <div class="header">
      <p class="pic">
        <img :src="this.list.avatar" alt>
      </p>
      <p class="name">
        <span>申请人姓名</span>
        <span>直接主管</span>
        <!-- <span>申请单号</span>
        <span>发起时间</span> -->
      </p>
      <p class="long">
        <span>{{list.nickname}}</span>
        <span>秦以超</span>
      </p>
    </div>
    <div class="det">
      <h5>申请信息</h5>
      <p>
        <span>
          加班日期
          <i class="on">*</i>
        </span>
        <span>{{list.create_at.substring(0,10)}}</span>
      </p>
      <p>
        <span>加班类型</span>
        <span>{{showType($route.query.type,list.type)}}</span>
      </p>
      <p>
        <span>
          加班起始时间
          <i class="on">*</i>
        </span>
        <span>{{list.create_at.substring(11,16)}}</span>
      </p>
      <p>
        <span>
          加班截止时间
          <i class="on">*</i>
        </span>
        <span>{{list.endTime.substring(11,16)}}</span>
      </p>
      <p>
        <span>共计实数</span>
        <span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </span>
      </p>
    </div>
    <div class="yuanyin">
      <h5>
        加班事由
        <i class="on">*</i>
      </h5>
      <input type="textarea" placeholder="最多可输入200个字符。" v-model="list.describes">
    </div>
    <div class="fujian">
      <p>
        <i class="iconfont icon-jia1"></i>
        <span>附件</span>
      </p>
      <div class="imgBox">
        <div v-for="(val,i) in list.annex" :key="i">
          <img :src="'http://localhost:3000'+val" alt>
        </div>
      </div>
    </div>
    <div class="btn">
      <button class="cancle">取消</button>
      <button class="submit">提交</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import request from "@/utils/request";
export default {
  props: {
    types : String
  },
  components: {},
  data() {
    return {
      list: [],
      value1:''
    };
  },
  computed: {},
  methods: {
    showType(type, listType) {
      console.log(type);
      if (type === "overtime") {
        switch (listType) {
          case 1:
            return "双休日加班";
          case 2:
            return "节假日加班";
          case 3:
            return "工作日加班";
          default:
            return "加班";
        }
      } else {
        switch (listType) {
          case 1:
            return "年假";
          case 2:
            return "调休";
          default:
            return "休假";
        }
      }
    }
  },
  created() {
    //this.$route.query
    request
      .get(
        "/api/apply/" +
          this.$route.query.type +
          "?applicationNumber=" +
          this.$route.query.id
      )
      .then(res => {
        this.list = res.data;
      });
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../../static/scss/common.scss";
@import "../../static/scss/_minix.scss";
#app,
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(245, 241, 241);
}
.title {
  width: 100%;
  line-height: pxTorem(40px);
  color: white;
  background: rgb(4, 83, 4);
  text-align: center;
  font-size: pxTorem(16px);
  display: flex;
  justify-content: space-between;
  i {
    margin-left: pxTorem(10px);
    box-sizing: border-box;
  }
}
.on {
  color: red;
  font-size: pxTorem(14px);
}
.header {
  width: 100%;
  height: pxTorem(130px);
  background: rgb(4, 83, 4);
  display: flex;
  .pic {
    width: 10%;
    height: pxTorem(40px);
    background: yellow;
    border-radius: pxTorem(20px);
    margin: pxTorem(25px) 5%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .long {
    width: 25%;
    height: 100%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    span {
      display: block;
      line-height: pxTorem(30px);
      color: white;
    }
    span:nth-child(1) {
      margin-top: 13%;
    }
  }
}
.det {
  width: 90%;
  height: pxTorem(300px);
  background: white;
  margin-left: 5%;
  margin-top: -8%;
  border-radius: pxTorem(15px);
  h5 {
    line-height: pxTorem(44px);
    font-size: pxTorem(15px);
    margin-left: pxTorem(15px);
  }
  p {
    border-bottom: 1px solid #ccc;
    padding-left: pxTorem(20px);
    box-sizing: border-box;
    display: flex;
    height: pxTorem(44px);
    line-height: pxTorem(44px);
    span {
      display: inline-block;
      flex: 1;
    }
  }
}
.yuanyin {
  width: 90%;
  height: pxTorem(100px);
  background: white;
  margin-left: 5%;
  margin-top: 3%;
  border-radius: pxTorem(15px);
  h5 {
    margin-left: pxTorem(15px);
    font-size: pxTorem(15px);
    margin-top: pxTorem(5px);
    border-bottom: 1px solid #ccc;
  }
  input {
    padding-left: pxTorem(15px);
    box-sizing: border-box;
    margin-top: pxTorem(10px);
  }
}
.fujian {
  width: 85%;
  background: white;
  margin-left: 5%;
  margin-top: 3%;
  border-radius: pxTorem(15px);
  padding-left: pxTorem(15px);
  font-size: pxTorem(15px);
  display: flex;
  flex-direction: column;
  p {
    width: 100%;
  }
  .imgBox {
    width: 100%;
    display: flex;
    div {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  i {
    background: rgba(255, 208, 0, 0.986);
    color: #fff;
    margin-right: pxTorem(5px);
    font-size: pxTorem(20px);
    border-radius: 50%;
  }
}
.btn {
  width: 100%;
  height: pxTorem(55px);
  background: white;
  margin-top: 3%;
  display: flex;
  border-radius: pxTorem(15px);
  font-size: pxTorem(16px);
  .cancle {
    width: 30%;
    border: none;
    line-height: pxTorem(55px);
    text-align: center;
    color: rgb(4, 83, 4);
    font-size: pxTorem(15px);
    background: white;
  }
  .submit {
    width: 70%;
    border: none;
    line-height: pxTorem(55px);
    text-align: center;
    background: rgb(5, 87, 5);
    color: white;
    font-size: pxTorem(15px);
  }
}
</style>
