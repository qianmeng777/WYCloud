<template>
  <view>推荐</view>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { getBannerApi } from '../../services/index'

  const title = ref('Hello')

  // const getBanner = async () => {
  //   try {
  //     const res = await getBannerApi()
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // getBanner()

  getBannerApi().then(res => console.log(res)).catch(error => console.error(error))

</script>

<style lang="scss" scoped>

</style>