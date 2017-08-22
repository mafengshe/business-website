<template>
  <div id="prodshow">
    <section class="md1">
      <ul>
        <li>
          <div class="card1 t-center">
            <div class="c-inner">
              <img src="/static/images/信息服务.svg" alt="">
              <div>产品信息服务</div>
            </div>
          </div>
        </li>
        <li>
          <div class="card1 t-center">
            <div class="c-inner">
              <img src="/static/images/接入.svg" alt="">
              <div>产品接入服务</div>
            </div>
          </div>
        </li>
        <li>
          <div class="card1 t-center">
            <div class="c-inner">
              <img src="/static/images/sjl.svg" alt="">
              <div>数据流服务</div>
            </div>
          </div>
        </li>
        <li>
          <div class="card1 t-center">
            <div class="c-inner">
              <img src="/static/images/gyl.svg" alt="">
              <div>供应链服务</div>
            </div>
          </div>
        </li>
      </ul>
      <div class="m1-content left">
        <div class="m1-title">
          首创物联网行业信息服务
        </div>
        <div class="sou"></div>
        <div class="m1-meta">
          深智云物联网搜索引擎系列，引领物联网未来信息预测. <br>
          打造传统制造与物联网信息共享平台
        </div>
        <div class="btn-wrapper">
          <a href="#" class="btn-mid">查看详情</a>
        </div>
      </div>
      <div class="m1-img right">
        <!-- <img src="/static/images/shui.png" alt=""> -->
      </div>
    </section>
    <section class="md2">
      <div class="m2-content">
        <h1 class="m2-title">物联网产品接入服务</h1>
        <div class="sou2"></div>
        <div class="m2-meta">
          聚焦多维度产品接入，快速打造物联网产品<br>
          全品类开发经验，灵活的产品模式
        </div>
      </div>
      <section class="show-card">
          <div class="card2 t-center left" >
            <img src="/static/images/bzh.svg" alt="">
            <h4>标准化产品接入</h4>
            <div class="meta">快速稳定低成本 100+品类</div>
            <a href="#" class="btn-small">点击详情</a>
          </div>
          <div class="card2 t-center left">
            <img src="/static/images/zdy.svg" alt="">
            <h4>自定义产品接入</h4>
            <div class="meta">定制需求，独立数据库</div>
            <a href="#" class="btn-small">点击详情</a>
          </div>
          <div class="card2 t-center left">
            <img src="/static/images/pt.svg" alt="">
            <h4>自动SaaS平台</h4>
            <div class="meta">自动的Saas平台管理</div>
            <a href="#" class="btn-small">点击详情</a>
          </div>
      </section>
      <div class="clear"></div>
      <div class="md2-bottom">
        <article class="m-b-content right">
          <div style="font-size: 30px;">物联网行业资源服务</div>
          <div class="sou"></div>
          <div class="meta">利用智能交互硬件、智能产品软件、云服务、供应链产品、等不同唯独的资源建立创新的资源共享服务模式</div>
          <div class="btn-wrapper">
            <a href="#" class="btn-mid">查看详情</a>
          </div>
        </article>
        <div class="m-b-img">
          <img src="/static/images/xing.png" alt="">
        </div>
      </div>
      <div class="clear"></div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'prodshow',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.md1{
  height: 456px;
  position: relative;
  background: #f0f0f0;
}

.md1 ul {
  position: absolute;
  top: -60px;
  width: 100%;
  padding-left: 8%;
}

ul li {
  overflow: hidden;
  width: 20%;
  margin-right: 4%;
}

.card1 {
  width: 100%;
  height: 120px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #fff;
  padding: 0 20%;
}

.c-inner {
  padding-top: 18px;
  height: 100%;
  border-bottom: 4px solid #2198f2;
}

.c-inner div {
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.m1-content {
  padding: 190px 0 30px 8%;
}

.m1-title {
  font-size: 32px;
}

.m1-img {
  width: 30%;
  height: 300px;
  /* border: 1px solid; */
  margin: 80px;
}

.m1-img img{
  width: 100%;
  height: 100%;
}

.m1-meta {
  font-size: 16px;
  font-weight: 600;
  color: #4d5961;
}

.sou {
  height: 5px;
  width: 200px;
  background: linear-gradient(to right, #24e1ef, #f0f0f0);
  margin: 15px 0
}

.sou2 {
  height: 5px;
  width: 300px;
  background: linear-gradient(to left, #24e1ef, #fff);
  margin: 10px auto;
}

.btn-wrapper {
  margin-top: 30px;
}

.btn-mid {
  /* display: inline-block; */
  width: 180px;
  height: 60px;
  padding: 10px 40px;
  border: 2px solid #2198f2;
  color: #2198f2;
  font-size: 20px;
}

.btn-small {
  display: inline-block;
  width: 80%;
  padding: 6px 30px;
  border: 2px solid #2198f2;
  color: #2198f2;
  font-size: 14px;
  font-weight: 700
}

.btn-mid:hover {
  background: #2198f2;
  color: #fff;
}

.btn-small:hover {
  background: #2198f2;
  color: #fff;
}
.md2 {
  padding: 0 6%;
}

.m2-content {
  padding: 60px 0;
  text-align: center;
}

.m2-title {
  font-size: 36px;
}

.m2-meta {
  font-size: 14px;
}

.show-card{
  /* overflow: hidden; */
}

.card2 {
  width: 30%;
  height: 380px;
  /* border: 1px solid #bec1c1; */
  /* box-shadow:0 2px 5px 0 #CCCBCB */
  margin: 0 1.6%;
  padding: 40px 6%;
}

.card2:hover {
  box-shadow: 0px 10px 30px rgba(0,0,0,0.1);
  -webkit-transform: translate3d(0, -4px, 0);
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.card2 img {
  width: 60%;
}

.card2 > :nth-child(2) {
  margin-top: 10px;
}

.card2 > :nth-child(3) {
  margin-top: 25px;
}

.card2 > :nth-child(4) {
  margin-top: 35px;
}

.md2-bottom {
  margin-top: 140px;
  overflow: hidden;
}

.m-b-content {
  width: 300px;
}

.m-b-img img {
  margin: 0 0 -10px -20px;
  width: 60%;
}





</style>
