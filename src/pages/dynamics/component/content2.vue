<script setup>
import { ref, onMounted } from 'vue'
import { getrecommend } from '../../../services/index'

const recommend = ref([])

async () => {
  try {
    const res = await getrecommend()
    console.log(res.data.data)
    recommend.value = res.data.data
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
<view>
		<uni-fab
			:pattern="pattern"
			:content="content"
			:horizontal="horizontal"
			:vertical="vertical"
			:direction="direction"
			@trigger="trigger"
		></uni-fab>
	</view>
</template>

<style scoped lang='scss'>

</style>