<template>
  <div id="loans">
    <tarbar-header seach='false' headerTitle='贷款'></tarbar-header>
    <div class="main">
      <login loginContent=登录可查询贷款></login>
    </div>
  </div>
</template>

<script>
import TarbarHeader from '@/components/TarbarHeader'
import Login from '@/components/Login'
export default {
  components: {
    TarbarHeader,
    Login
  }
}
</script>

<style scoped>

</style>

