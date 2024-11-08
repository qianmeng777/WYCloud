<script setup>
  import { ref, onMounted } from 'vue'
  import { getVoiceList } from '../../../services/index'

  const voiceList = ref([])

  onMounted(async () => {
    try {
      const res = await getVoiceList()
      console.log(res)
      voiceList.value = res.data.banners
    } catch (error) {
      console.error(error)
    }
  })
</script>

<template>
 
</template>

<style lang="scss" scoped>

</style>