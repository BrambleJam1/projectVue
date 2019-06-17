<template>
  <div class="wrap main">
    <h3>
      <span>
        <i class="iconfont icon-fanhui"></i>
      </span>
      <span>办公室加班申请表</span>
      <span></span>
    </h3>
    <div class="header">
      <p class="pic">
        <img src alt>
      </p>
      <p class="name">
        <span>申请人姓名</span>
        <span>直接主管</span>
      </p>
      <p class="long">
        <span></span>
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
        <span>
          <el-date-picker v-model="value0" type="date" placeholder="选择日期"></el-date-picker>
        </span>
      </p>
      <p>
        <span>加班类型</span>
        <span>
            <select name="" id="">
                <option value="1">默认</option>
                <option v-for="val in overtimeType" :key="val.id">默认</option>

            </select>
        </span>
      </p>
      <p>
        <span>
          加班起始时间
          <i class="on">*</i>
        </span>
        <span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </span>
      </p>
      <p>
        <span>
          加班截止时间
          <i class="on">*</i>
        </span>
        <span>
          <el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
        </span>
      </p>
      <p>
        <span>共计实数</span>
        <span></span>
      </p>
    </div>
    <div class="yuanyin">
      <h5>
        加班事由
        <i class="on">*</i>
      </h5>
      <input type="textarea" placeholder="最多可输入200个字符。">
    </div>
    <div class="fujian">
      <p>
        <i class="iconfont icon-jia1"></i>
        <span>上传附件</span>
        <input type="file" @change="submitFile">
      </p>
      <div class="imgBox">
        <div>
          <img src alt>
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
export default {
  data() {
    return {
      value0: "",
      value1: "",
      value2: "",
      overtimeType : [
          {
              id : 1,
              title :'双休日'
          },{
              id:2,
              title:'节假日'
          },{
              id:3,
              title:'工作日'
          }
      ],
      vacationType : [
          {
              id : 1,
              title :'年假'
          },{
              id:2,
              title:'调休'
          }
      ],
      guide:{
        type : ['png','jpeg','svg','jpg','gif'],
        size : 3
      }
    };
  },
  methods:{
      submitFile(e){
        let userfile = e.target.files[0];
        let {type,size} = userfile;
        let filetype =  type.match(/\/(\w+)$/)[1];
        let error = ''
        if(!this.guide.type.includes(filetype)){
          error = `请上传${this.guide.type.join()}类型的文件`
        }
        if(this.guide.size*1024*1024 < size){
          error = `请上传小于${this.guide.size}MB大小的文件`
        }
        if(error){
          alert(error)
          return;
        }
        const fromdata = new FormData();
        fromdata.append('file',userfile);
        request.get("/api/upload").then(res => {
          console.log(res.data)
        });
        
        
      }
  }
};
</script>
<style lang="scss">
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
h3 {
  height: pxTorem(44px);
  background: rgb(4, 83, 4);
  color: #fff;
  font-size: pxTorem(16px);
  display: flex;
  justify-content: space-between;
  span {
    justify-content: space-evenly;
    align-items:center;
    display: flex;
    i {
      font-size: pxTorem(16px);
    }
  }
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