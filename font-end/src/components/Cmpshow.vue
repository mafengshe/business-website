<template>
  <div id="cmpshow">
    <div class="top1 card-shaow">
      <ul>
        <li>
          <img src="/static/images/认证.svg" alt="" class="left">
          <div class="t-word1">企业认证</div>
          <div class="t-word2">国家数据中心认证</div>
        </li>
        <li>
          <img src="/static/images/合作.svg" alt="" class="left">
          <div class="t-word1">与平台达成合作</div>
          <div class="t-word2">国家数据中心颁发</div>
        </li>
        <li>
          <img src="/static/images/宣传片.svg" alt="" class="left">
          <div class="t-word1">智家品牌宣传片</div>
          <div class="t-word2">全方位了解智家</div>
        </li>
      </ul>
    </div>
    <div class="mid1">
      <div class="mid1-top">
        物联网一站式纵向服务
      </div>
      <div class="mid1-top2">
        智家作为物联网行业极具创新能力的loT平台，为企业提供进入物联网必需的<br>
        商业信息、产品介入、数据流、供应链资源一站式服务，助力智造转型，<br>
        并为其在物联网时代打造新商业模式<br>
      </div>
      <ul class="ohidden">
        <li>
          <div class="border-cicle inblock">
            <img src="/static/images/网络.svg" alt="">
          </div>
          <div class="meta">网络信息服务</div>
        </li>
        <li>
          <div class="border-cicle inblock">
            <img src="/static/images/产品接入.svg" alt="">
          </div>
            <div class="meta">物联网产品接入</div>
        </li>
        <li>
          <div class="border-cicle inblock">
            <img src="/static/images/物联网.svg" alt="">
          </div>
            <div class="meta">数据创新服务</div>
        </li>
        <li>
          <div class="border-cicle inblock">
            <img src="/static/images/资源.svg" alt="">
          </div>
            <div class="meta">行业资源整合</div>
        </li>
        
      </ul>
    </div>
    <div class="mid2">
      <div class="dt-wrapper">
        <div class="details btn">
          <a href="#" class="btn">了解详情</a>  
        </div>  
      </div>
      <div class="title">
        智家智能优势
      </div>
      <div class="meta">
        拥有八年行业经验核心团队，300+客户案例经验，丰富的软硬件、供应链核心资源。打造物联网的顶尖服务能力
      </div>
      <div class="bottom">
        <div class="computer-wrapper">
          <span class="inblock" style="position:relative;">
            <img src="/static/images/电脑素材.png" alt="">
            <span class="in-title">ZhiJia</span>
            <span class="in-meta">感受万物智能</span>
          </span>
        </div>
        <div class="more">
          <a href="#" class="btn-more">MORE</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cmpshow',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.top1 {
  height: 100px;
  width: 80%;
  margin-left: 10%;
  position: absolute;
  top: 460px;
}

.top1 img {
  /* position: absolute; */
  margin-top: -6px;
}

.t-word1 {
  height:40px;
  font-size:24px;
  margin-top: 6px;
  overflow: hidden;
}

.t-word2 {
  font-size:12px;
  overflow: hidden;
  color: #7a818a
}

.card-shaow {
  padding: 15px 20px;
  background: #fff;
  box-shadow: 1px 5px 2px #ebebeb;  
  -moz-box-shadow: 5px 5px 2px #ebebeb;
}

.card-shaow ul li{
  width: 32%;
}

.mid1 {
  height: 448px;
  background: #efefef;
  text-align: center;
  overflow: hidden;
  padding: 75px 0 20px 0;
}

.mid1-top {
  font-size: 32px;
  margin-top: 20px;
}

.mid1-top2 {
  font-size: 12px;
  margin-top: 10px;
  line-height: 180%;
}

.mid1 ul {
  padding: 30px 10%;
}

.mid1 ul li {
  width: 24%;
  position: relative;
}

.mid1 ul li .meta{
  margin-top: 15px;
}

.mid2 {
  background: #fff;
  height: 620px;
  position: relative;
  text-align: center;
}

.border-cicle {
  border-radius: 50%;
  height: 110px;
  width: 110px;
  border: 2px solid var(--blue);
}

.border-cicle img {
  margin-top: 20px;
  height: 66px;
}

.dt-wrapper {
  height: 70px;
}

.details {
  position: absolute;
  left: 0; right: 0;top: -10px; /* right必须为0 */
  margin: auto;    /* 有了这个就自动居中了 */
}

.btn {
  width: 216px;
  display: inline-block;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  background: #1f68fe;
}

.btn:hover {
  background: #0e4bc7;
}

.title {
  font-size: 32px;
}

.computer-wrapper {
  margin-top: 30px;
}

.btn-more {
  display: inline-block;
  height: 48px;
  line-height: 48px;
  width: 182px;
  border: 1px solid;
  font-size: 28px;
  font-weight: 700;
  color: var(--blue)
}

.btn-more:hover {
  background: var(--blue);
  color: #fff;
}

.in-title {
  position: absolute;
  left: 100px;top: 40px;
  font-size: 56px;
  color: #ffbb01;
}

.in-meta {
  position: absolute;
  left: 100px;top: 110px;
  font-size: 26px;
  /* color: #ffbb01; */
}



</style>
