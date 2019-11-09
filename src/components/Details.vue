<template>
  <div>
    <a-table :columns="columns" :dataSource="list" :pagination='false'>
    </a-table>
    <div id="echarts" :style="{width: '100%', height: '500px'}"></div>
  </div>
</template>

<script>
const axios = require('axios');
const columns = [
    {
      title: '电影ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '周数',
      dataIndex: 'week',
      key: 'week',
    },
    {
      title: '每周时间',
      dataIndex: 'week_time',
      key: 'week_time',
    },
    {
      title: '场均人次',
      dataIndex: 'average_per_game',
      key: 'average_per_game',
    },
    {
      title: '单周票房',
      dataIndex: 'one_week_box_office',
      key: 'one_week_box_office',
    },
    {
      title: '累计票房（万）',
      dataIndex: 'total_box_office',
      key: 'total_box_office',
    },
    {
      title: '上映天数',
      dataIndex: 'days_released',
      key: 'days_released',
    }
  ];
const URL = 'http://demo.niracler.com:8001';
export default {
  data() {
    return {
      list:[],
      columns
    }
  },
  props: ['mid'],
  created() {
    const self = this;
    axios.get(URL+'/boxoffice/?mid='+self.mid)
    .then(function (response) {
      self.list=response.data;
    });
  },
  mounted() {
      var dom = document.getElementById('echarts');
      var myChart = this.echarts.init(dom);
      // 绘制图表
      myChart.setOption({
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    });
  }
}

</script>
<style scoped lang='scss'>
</style>