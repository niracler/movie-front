<template>
  <div id="table">
    <a-input-search placeholder="输入要搜索的电影名称" style="width: 200px;margin-bottom:20px;" @search="onSearch" />
    <div>
      <a-button style="margin:10px 5px 10px 0;" @click="sortPO">按票房从高到低排列</a-button>
      <a-button style="margin:10px 5px 10px 0;" @click="sortRO">按票房从低到高排列</a-button>
      <a-select defaultValue="中国" style="width: 120px" @change="handleChange">
        <a-select-option value="50">中国</a-select-option>    
        <a-select-option value="37">中国香港</a-select-option>    
        <a-select-option value="40">中国台湾</a-select-option>    
        <a-select-option value="1">美国</a-select-option>    
        <a-select-option value="25">英国</a-select-option>    
        <a-select-option value="16">德国</a-select-option>    
        <a-select-option value="4">法国</a-select-option>    
        <a-select-option value="30">日本</a-select-option>    
        <a-select-option value="2">加拿大</a-select-option>    
        <a-select-option value="7">意大利</a-select-option>    
        <a-select-option value="14">西班牙</a-select-option>    
        <a-select-option value="42">墨西哥</a-select-option>    
        <a-select-option value="11">澳大利亚</a-select-option>    
        <a-select-option value="43">印度</a-select-option>    
        <a-select-option value="2102">尼日利亚</a-select-option>    
        <a-select-option value="24">丹麦</a-select-option>    
        <a-select-option value="20">荷兰</a-select-option>    
        <a-select-option value="26">瑞典</a-select-option>    
        <a-select-option value="32">捷克</a-select-option>    
        <a-select-option value="8">巴西</a-select-option>    
        <a-select-option value="22">阿根廷</a-select-option>    
        <a-select-option value="19">比利时</a-select-option>    
        <a-select-option value="9">菲律宾</a-select-option>    
        <a-select-option value="6">瑞士</a-select-option>    
        <a-select-option value="45">芬兰</a-select-option>    
        <a-select-option value="33">匈牙利</a-select-option>    
        <a-select-option value="17">奥地利</a-select-option>    
        <a-select-option value="31">俄罗斯</a-select-option>    
        <a-select-option value="29">韩国</a-select-option>    
        <a-select-option value="69">爱尔兰</a-select-option>    
        <a-select-option value="3">波兰</a-select-option>    
        <a-select-option value="44">葡萄牙</a-select-option>    
        <a-select-option value="13">挪威</a-select-option>    
        <a-select-option value="10">以色列</a-select-option>    
        <a-select-option value="21">希腊</a-select-option>    
        <a-select-option value="74">古巴</a-select-option>    
        <a-select-option value="60">智利</a-select-option>    
        <a-select-option value="15">土耳其</a-select-option>    
        <a-select-option value="28">新西兰</a-select-option>    
        <a-select-option value="39">立陶宛</a-select-option>    
        <a-select-option value="41">马耳他</a-select-option>    
        <a-select-option value="75">伊朗</a-select-option>    
        <a-select-option value="54">泰国</a-select-option>    
        <a-select-option value="46">保加利亚</a-select-option>    
        <a-select-option value="64">克罗地亚</a-select-option>    
        <a-select-option value="51">印度尼西亚</a-select-option>    
        <a-select-option value="23">哥伦比亚</a-select-option>    
        <a-select-option value="66">罗马尼亚</a-select-option>    
        <a-select-option value="18">南非</a-select-option>    
        <a-select-option value="35">马来西亚</a-select-option>    
        <a-select-option value="48">塞浦路斯</a-select-option>    
        <a-select-option value="49">巴拿马</a-select-option>    
        <a-select-option value="82">南联盟</a-select-option>    
        <a-select-option value="5">新加坡</a-select-option>    
        <a-select-option value="27">秘鲁</a-select-option>    
        <a-select-option value="52">黎巴嫩</a-select-option>    
        <a-select-option value="53">波多黎各</a-select-option>    
        <a-select-option value="38">埃及</a-select-option>    
        <a-select-option value="47">委内瑞拉</a-select-option>    
        <a-select-option value="55">牙买加</a-select-option>    
        <a-select-option value="36">爱沙尼亚</a-select-option>    
        <a-select-option value="56">特立尼达和多巴哥</a-select-option>    
        <a-select-option value="65">斯洛文尼亚</a-select-option>    
        <a-select-option value="57">多米尼加</a-select-option>    
        <a-select-option value="12">冰岛</a-select-option>    
        <a-select-option value="34">卢森堡</a-select-option>    
        <a-select-option value="58">危地马拉</a-select-option>    
        <a-select-option value="68">斯洛伐克</a-select-option>    
        <a-select-option value="59">乌拉圭</a-select-option>    
        <a-select-option value="61">厄瓜多尔</a-select-option>    
        <a-select-option value="62">玻利维亚</a-select-option>    
        <a-select-option value="63">拉脱维亚</a-select-option>    
        <a-select-option value="67">南斯拉夫</a-select-option>    
        <a-select-option value="70">肯尼亚</a-select-option>    
        <a-select-option value="72">乌克兰</a-select-option>    
        <a-select-option value="73">摩洛哥</a-select-option>    
        <a-select-option value="76">坦桑尼亚</a-select-option>    
        <a-select-option value="77">波黑</a-select-option>    
        <a-select-option value="78">越南</a-select-option>    
        <a-select-option value="79">津巴布韦</a-select-option>    
        <a-select-option value="80">阿尔及利亚</a-select-option>    
        <a-select-option value="81">巴勒斯坦</a-select-option>    
        <a-select-option value="83">塞内加尔</a-select-option>    
        <a-select-option value="84">巴基斯坦</a-select-option>    
        <a-select-option value="85">阿尔巴尼亚</a-select-option>    
        <a-select-option value="86">格鲁吉亚</a-select-option>    
        <a-select-option value="87">布基纳法索</a-select-option>    
        <a-select-option value="88">亚美尼亚</a-select-option>    
        <a-select-option value="89">海地</a-select-option>    
        <a-select-option value="90">吉尔吉斯坦</a-select-option>    
        <a-select-option value="91">尼泊尔</a-select-option>    
        <a-select-option value="92">哈萨克斯坦</a-select-option>    
        <a-select-option value="93">突尼斯</a-select-option>    
        <a-select-option value="94">卢旺达</a-select-option>    
        <a-select-option value="95">纳米比亚</a-select-option>    
        <a-select-option value="96">乌兹别克斯坦</a-select-option>    
        <a-select-option value="97">斯里兰卡</a-select-option>    
        <a-select-option value="98">喀麦隆</a-select-option>    
        <a-select-option value="99">加纳</a-select-option>    
        <a-select-option value="100">巴哈马</a-select-option>    
        <a-select-option value="101">中国澳门</a-select-option>    
        <a-select-option value="102">西德</a-select-option>    
        <a-select-option value="103">前苏联</a-select-option>    
        <a-select-option value="104">捷克斯洛伐克</a-select-option>    
        <a-select-option value="105">东德</a-select-option>    
        <a-select-option value="106">摩纳哥</a-select-option>    
        <a-select-option value="107">列支敦士登</a-select-option>    
        <a-select-option value="108">利比亚</a-select-option>    
        <a-select-option value="109">象牙海岸</a-select-option>    
        <a-select-option value="110">乍得</a-select-option>    
        <a-select-option value="111">博茨瓦纳</a-select-option>    
        <a-select-option value="112">阿富汗</a-select-option>    
        <a-select-option value="113">格陵兰岛</a-select-option>    
        <a-select-option value="114">蒙古</a-select-option>    
        <a-select-option value="118">科威特</a-select-option>    
        <a-select-option value="128">巴林</a-select-option>    
        <a-select-option value="137">白俄罗斯</a-select-option>    
        <a-select-option value="148">哥斯达黎加</a-select-option>    
        <a-select-option value="151">萨尔瓦多</a-select-option>    
        <a-select-option value="152">洪都拉斯</a-select-option>    
        <a-select-option value="156">阿拉伯</a-select-option>    
        <a-select-option value="158">马其顿</a-select-option>    
        <a-select-option value="2087">百慕大群岛</a-select-option>    
        <a-select-option value="2088">苏里南河(荷兰)</a-select-option>    
        <a-select-option value="2089">巴巴多斯岛</a-select-option>    
        <a-select-option value="2090">叙利亚</a-select-option>    
        <a-select-option value="2091">塞尔维亚</a-select-option>    
        <a-select-option value="2092">全世界</a-select-option>    
        <a-select-option value="2093">巴拉圭</a-select-option>    
        <a-select-option value="2094">孟加拉国</a-select-option>    
        <a-select-option value="2095">约旦</a-select-option>    
        <a-select-option value="2096">阿曼</a-select-option>    
        <a-select-option value="2097">新喀里多尼亚</a-select-option>    
        <a-select-option value="2099">卡塔尔</a-select-option>    
        <a-select-option value="2103">法罗群岛</a-select-option>    
        <a-select-option value="2104">阿鲁巴岛</a-select-option>    
        <a-select-option value="2106">伯利兹城</a-select-option>    
        <a-select-option value="2107">尼加拉瓜</a-select-option>    
        <a-select-option value="2119">佛得角</a-select-option>    
        <a-select-option value="2120">圭亚那</a-select-option>    
        <a-select-option value="2121">塞舌尔</a-select-option>    
        <a-select-option value="2123">安哥拉</a-select-option>    
        <a-select-option value="2125">毛里求斯</a-select-option>    
        <a-select-option value="2127">斐济</a-select-option>    
        <a-select-option value="2128">波斯尼亚</a-select-option>    
        <a-select-option value="2131">莫桑比克</a-select-option>    
        <a-select-option value="2132">苏丹</a-select-option>    
        <a-select-option value="2141">伊拉克</a-select-option>    
        <a-select-option value="2142">北朝鲜</a-select-option>    
        <a-select-option value="2143">塞尔维亚和黑山</a-select-option>    
        <a-select-option value="2144">缅甸</a-select-option>    
        <a-select-option value="2145">马达加斯加岛</a-select-option>    
        <a-select-option value="2146">阿塞拜疆</a-select-option>    
        <a-select-option value="2147">安道尔</a-select-option>    
        <a-select-option value="2148">瓜德罗普岛</a-select-option>    
        <a-select-option value="2149">马提尼克岛</a-select-option>    
        <a-select-option value="2150">汤加</a-select-option>    
        <a-select-option value="2151">尼日尔</a-select-option>    
        <a-select-option value="2152">厄立特里亚</a-select-option>    
        <a-select-option value="2153">不丹</a-select-option>    
        <a-select-option value="2154">老挝国</a-select-option>    
        <a-select-option value="2155">加蓬</a-select-option>    
        <a-select-option value="2156">贝宁湾</a-select-option>    
        <a-select-option value="2157">柬埔寨</a-select-option>    
        <a-select-option value="2158">多哥</a-select-option>    
        <a-select-option value="2159">中非共和国</a-select-option>    
        <a-select-option value="2160">几内亚</a-select-option>    
        <a-select-option value="2161">马里</a-select-option>    
        <a-select-option value="2162">塔吉克斯坦</a-select-option>    
        <a-select-option value="2163">巴布亚新几内亚</a-select-option>    
        <a-select-option value="2164">赞比亚</a-select-option>    
        <a-select-option value="2165">沙特阿拉伯</a-select-option>    
        <a-select-option value="2166">刚果</a-select-option>    
        <a-select-option value="2167">土库曼斯坦</a-select-option>    
        <a-select-option value="2168">乌干达</a-select-option>    
        <a-select-option value="2169">毛利塔尼亚</a-select-option>    
        <a-select-option value="2170">摩尔多瓦</a-select-option>    
        <a-select-option value="2171">科索沃</a-select-option>    
        <a-select-option value="2172">埃塞俄比亚</a-select-option>    
        <a-select-option value="2174">特克斯科斯群岛</a-select-option>    
        <a-select-option value="2175">特克斯和凯科斯群岛</a-select-option>    
        <a-select-option value="2176">利比里</a-select-option>    
        <a-select-option value="2177">索马里</a-select-option>    
        <a-select-option value="2178">荷属安的列斯群岛</a-select-option>    
        <a-select-option value="2179">刚果民主共和国</a-select-option>    
        <a-select-option value="2180">也门共和国大使馆</a-select-option>    
        <a-select-option value="2181">莱索托王国大使馆</a-select-option>    
        <a-select-option value="2182">被占领巴勒斯坦领土</a-select-option>    
        <a-select-option value="2183">安提瓜和巴布达</a-select-option>    
        <a-select-option value="2184">纽埃</a-select-option>    
        <a-select-option value="2185">法属玻利尼西亚</a-select-option>    
        <a-select-option value="2186">刚果民主共和国</a-select-option>    
        <a-select-option value="2187">几内亚比绍</a-select-option>    
        <a-select-option value="2188">西撒哈拉</a-select-option>    
        <a-select-option value="2189">布隆迪共和国大使馆</a-select-option>    
        <a-select-option value="2190">圣马力诺</a-select-option>    
        <a-select-option value="2194">中国澳门</a-select-option>    
        <a-select-option value="2202">几内亚比绍</a-select-option>    
      </a-select>
    </div>
    <a-table :columns="columns" :dataSource="data" :pagination='false'>
      <span slot="mid" slot-scope="text" href="javascript:;">
        <router-link :to="{name:'details',params:{mid:text}}">{{text}}</router-link>
      </span>
      <span slot="default_image" slot-scope="text" href="javascript:;">
        <img :src="text" style="width:135px;height:205px;">
      </span>
    </a-table>
    <div style="margin-top:10px;">
      <a-button style="margin-left:5px;" v-show="prev" @click="goPrev">上一页</a-button>
      <a-button style="margin-left:5px;" v-show="next" @click="goNext">下一页</a-button>
    </div>
  </div>
</template>

<script>
  const URL = 'http://demo.niracler.com:8001';
  const columns = [
    {
      title: 'ID',
      dataIndex: 'mid',
      key: 'mid',
      scopedSlots: { customRender: 'mid' },
    },
    {
      title: '电影名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '英文名称',
      dataIndex: 'english_name',
      key: 'english_name',
    },
    {
      title: '发行年限',
      dataIndex: 'release_year',
      key: 'release_year',
    },
    {
      title: '图片',
      dataIndex: 'default_image',
      key: 'default_image',
      scopedSlots: { customRender: 'default_image' },
    },
    {
      title: '票房',
      dataIndex: 'box_office',
      key: 'box_office',
    },
    {
      title: '地区',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: '制式',
      dataIndex: 'style',
      key: 'style',
    },
    {
      title: '上映时间',
      dataIndex: 'release_time',
      key: 'release_time',
    },
    {
      title: '片长',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: '电影类型',
      dataIndex: 'movie_type',
      key: 'movie_type',
    }
  ];

  const axios = require('axios');
  export default {
    data() {
      return {
        data: [],
        columns,
        next:null,
        prev:null
      };
    },
    created() {
      const self = this;
      axios.get(URL+'/movie/')
      .then(function (response) {
        self.data=response.data.results;
        self.next=response.data.next;
      });
    },
    methods: {
      goNext() {
        const self = this;
        axios.get(self.next)
        .then(function (response) {
          self.data=response.data.results;
          self.next=response.data.next;
          self.prev=response.data.previous;
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
      },
      goPrev() {
        const self = this;
        axios.get(self.prev)
        .then(function (response) {
          self.data=response.data.results;
          self.next=response.data.next;
          self.prev=response.data.previous;
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
      },
      onSearch(value) {
        const self = this;
        axios.get(URL+'/movie/?search='+value)
        .then(function (response) {
          self.data=response.data.results;
          self.next=response.data.next;
          self.prev=response.data.previous;
        });
      },
      sortPO() {
        const self = this;
        axios.get(URL+'/movie/?ordering=-box_office')
        .then(function (response) {
          self.data=response.data.results;
          self.next=response.data.next;
          self.prev=response.data.previous;
        });
      },
      sortRO() {
        const self = this;
        axios.get(URL+'/movie/?ordering=box_office')
        .then(function (response) {
          self.data=response.data.results;
          self.next=response.data.next;
          self.prev=response.data.previous;
        });
      },
      handleChange(value) {
        const self = this;
        axios.get(URL+'/movie/?area_id='+value)
        .then(function (response) {
          self.data=response.data.results;
          self.next=response.data.next;
          self.prev=response.data.previous;
        });
      },
    }
  };

</script>
<style scoped>
  #table{
    padding:20px;
  }
</style>