<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style>
.index {
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-gap:30px;
  margin-top:60px;


}
.index h2{
  font-size:1.8rem;
  text-align: center;
  margin-top:0;
}
.index .ingredients{
  margin:30px  auto;

}
.index .ingredients li{
  display: inline-block;
}
</style>
