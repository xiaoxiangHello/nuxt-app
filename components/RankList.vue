<template>
  <el-row :gutter="24" class="row" style="margin-top:30px;">
    <div v-for="(item,key) in items" style="height:70px;width:100%;font-size:15px;">
      <router-link :to="{path:'/home/index/details/id/'+item.id}" target="_blank">
    <el-col :span="20" style="color:#333;">
      <p>
          <span style="font-size:20px;weight:blod;padding-right:10px;color:red;line-height:20px;" v-if="item.rank < 6">{{item.rank}}</span>
          <span style="font-size:20px;weight:blod;padding-right:10px;line-height:20px;" v-else>{{item.rank}}</span>
          <span style="line-height:20px;">[{{item.title}}]</span>
      </p>
      <p style="margin-left:26px;">
        [{{item.show_time}}][{{item.location}}]
      </p>
    </el-col>
    <el-col :span="3">
      <p style="line-height:22px;color:orange;">
          <span>{{item.count}}</span>
      </p>
    </el-col>
      </router-link>
    </div>
  </el-row>
</template>

<script>
import API from './api/index.js'
export default {
  name: 'Focus',
  props: {
    msg: String,
    item: String,
  },
  data(){
    return {
      items:[],
    }
  },
  mounted(){
    this.getList()
  },
  methods:{
      getList(){
        var vm = this;
        this.$jsonp(API.RANK,{}
        ).then(json => {
            vm.items = json.data
        }).catch(err => {
          console.log(err)
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .tag a{
    text-decoration: none;
    color:#333;
  }

</style>
