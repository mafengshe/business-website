<template>
  <div id="teamshow">
    <div class="d1 pd-10">
      <div class="btn-group">
        <a class="btn-mid" 
           :class="{ active: index === 1 }" @click="choose(1)">
           公司简介</a>
        <a class="btn-mid"
           :class="{ active: index === 2 }" @click="choose(2)">
           联系我们</a>
      </div>
      <section class="desc">
        <img src="/static/images/小图.png" class="left" alt="">
        <div class="desc-right ohidden" v-if="index==1">
          <div class="d-r-top">公司简介</div>
          <article>
            {{cmpDesc}}
          </article>
        </div>
        <div class="desc-right ohidden" v-if="index==2">
          <div class="d-r-top">联系我们</div>
          <article>
            商务合作：400889-3766 <br>
            总 机：0833-23829388 <br>
            招聘专线：0834-28394766 <br>
            邮箱：bussiness@zhijia.com
          </article>
        </div>
      </section>
      <div class="clear"></div>
      <div class="d1-content">
        <h2>发展历程</h2>
        <div class="meta">DEVELOPMENT HISTORY</div>
      </div>
      <div class="timeline">
        <img src="/static/images/timeline.png" alt="">
      </div>
    </div>
    <div class="d2">
      <div class="d1-content">
        <h2>团队介绍</h2>
        <div class="meta">TEAM PRESENTATION</div>
      </div>
      <div class="d2-c-img t-center">
        <img src="/static/images/一群人.png" height="277"  alt="">
      </div>
      <div class="team-desc">
        {{teamDesc}}
      </div>
    </div>
    <div class="bottom">
      <img src="/static/images/底图.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'name',
  data () {
    return {
      index: 1,
      cmpDesc: '上海市ZHIJIA科技有限公司成立于2015年，是物联网领域极具行业创新能力的IoT云平台公司，旗下拥有唯一品牌ZHIJIA，提供智能产品打造、超级APP开发、私有云搭建、企业专属SaaS服务，IoT PaaS服务、数据服务等，具备业内罕见的软硬件解决能力、供应链渠道整合能力、数据价值开发能力以及完整的纵向服务基因。公司以“成就天下精品，创造美好生活”为使命，专注于智能家居、智慧社区、楼宇办公、智能健康、智能硬件、智慧工业六大细分领域，汇聚华为、百度、腾讯、富士康、普联、华邦云等100多位专业背景人才，在产品规划、硬件接入、UI设计、移动开发、云端架构建设、联调测试、数据产品及应用等方面极富经验.',
      teamDesc: '上海市ZHIJIA有限公司，采用扁平化管理、阿米巴经营理念，汇聚华为，百度。。。等近100位专业背景人才，核心成员拥有8年行业经验，在产品规划，硬件接入、UI设计、移动开发、云端架构建设、调试测试、数据产品及应用、AI技术等方面投入了大批专业，富有经验的伙伴。'
    }
  },
  created () {
    this.axios.get('about').then(res => {
      // success callback
      let data = res.data.data.pop()
      this.cmpDesc = data.cmpDesc
      this.teamDesc = data.teamDesc
    }, res => {
    // error callback
    })
  },
  methods: {
    choose (id) {
      this.index = id
    }
  }
}
</script>

<style scoped>
.btn-group {
  padding: 40px 0 60px 0;
  text-align: center;
}

.btn-mid {
  width: 276px;
  height: 54px;
  line-height: 54px;
  text-align: center;
  border: 1px solid #a0a0a0;
  display: inline-block;
  border-radius: 4px;
  color: #a0a0a0;
  margin: 0 14px;
}

.active {
  background: #0061fd;
  color: #fff;
}

.desc {
  padding: 0 12px;
  height: 355px;
  overflow: hidden;
}

.desc-right {
  padding: 0 12px;
}

.desc-right article {
  margin-top: 30px;
  font-size: 14px;
  /* line-height: 28px； */
}

.d-r-top {
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: #0061fd;
  color: #fff;
  font-size: 20px;
}

.d1-content {
  text-align: center;
  margin-top: 20px;
}

.d1-content h2{
  color: #0061fd;
}

.timeline {
  height: 220px;
  
}

.d2 {
  height: 540px;
  background: #e5e5e5;
  /* overflow: hidden; */
  position: relative;
  padding-top: 1px;
}

.team-desc {
  position: absolute;
  left: 0; right: 0;bottom: -70px; /* right必须为0 */
  margin: auto;    /* 有了这个就自动居中了 */
  width: 667px;
  height: 188px;
  background: #fff;
  box-shadow: 2px 5px 5px #ebebeb;
  padding: 30px 20px;
  color: #898989;
  font-size: 16px;
}

.bottom {
  background: #fff;
  height: 442px;
  padding: 139px 0 86px 0;
}

.bottom img {
  width: 100%;
}

</style>
