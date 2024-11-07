<script setup>
import { ref, onMounted } from 'vue'
import { getrecommend } from '../../../services/index'

const recommend = ref([])

onMounted(async () => {
  try {
    const res = await getrecommend()
    console.log(res.data.data)
    recommend.value = res.data.data
  } catch (error) {
    console.error(error)
  }
})

</script>

<template>
<h1>2</h1>
</template>

<style scoped lang='scss'>

</style>