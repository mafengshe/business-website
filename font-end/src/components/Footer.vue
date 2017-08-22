<template>
  <footer id="footer">
    <div class="area1">
      <div>上海智家科技有限公司</div>
      <div>地址：上海市静安区xxx</div>
    </div>
    <div class="area2">
      <div>商务合作：400889-3766</div>
      <div>总 机：0833-23829388</div>
      <div>招聘专线：0834-28394766</div>
      <div>邮箱：bussiness@zhijia.com</div>
    </div>
    <!-- <ul>
      <li class="l1">
      </li>
      <li class="l2">
        <div>上海智家科技有限公司</div>
        <div>地址：上海市静安区xxx</div>
      </li>
      <li class="l3">
        <div>商务合作：400889-3766</div>
        <div>总 机：0833-23829388</div>
        <div>招聘专线：0834-28394766</div>
        <div>邮箱：bussiness@zhijia.com</div>
      </li>
    </ul>  -->
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
footer {
  height: 168px;
  background: #000;
  color: #fff;
  overflow: hidden;
}

.area1{
  display: inline-block;
  height: 168px;
  padding: 40px 0;
  margin-left: 50%;
  overflow: hidden;
}

.area1 > :first-child {
  font-size: 16px;
}

.area1 > :nth-child(3) {
  font-size: 12px;
}

.area2{
  display: inline-block;
  height: 100%;
  padding: 40px 0;
  margin-left: 5%;
  overflow: hidden;
  font-size: 12px;
}
</style>
