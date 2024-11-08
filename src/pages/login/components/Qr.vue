<script setup lang="ts">
import { qrKeyApi, qrCreateApi, qrCheckApi } from '../../../services/index'
import { ref, onBeforeUnmount, onMounted } from 'vue'
import { useUserStore } from '../../../stores/user'

const userStore = useUserStore()

const unikey = ref('')
const qrimg = ref('')
const qrStatus = ref('')
const qrCode = ref(null)
let timer = null


onMounted(() => {
  uni.removeStorageSync('curCookie')
})



const qrCheck = () => {
  timer = setInterval(async () => {
    const res = await qrCheckApi(unikey.value)
    console.log("New unikey:", res.data.unikey); // 检查 unikey 是否变化
    qrCode.value = res.data.code
    if (res.data.code === 800) {
      // 二维码过期，重新获取二维码
      qrStatus.value = '已过期，点击重新获取'
      clearInterval(timer)
    } else if (res.data.code === 801) {
      // 等待扫码
    } else if (res.data.code === 802) {
      // 等待确定
      qrStatus.value = '等待确认'
    } else if (res.data.code === 803) {
      qrStatus.value = '扫码成功'
      // 登录成功，把cookie存到本地
      uni.setStorageSync('curCookie', res.data.cookie)
      // 获取用户信息
      userStore.getAccount()
      uni.showToast({
        title: '登录成功',
        icon: 'success'
      })
      clearInterval(timer)
      setTimeout(() => {
        uni.switchTab({
          url: '/pages/recommend/Recommend'
        })
      }, 1000)
    }
  }, 5000)
}

const getQr = async () => {
  // 获取key
  const keyRes = await qrKeyApi()
  // console.log(keyRes.data);
  unikey.value = keyRes.data.data.unikey
  // 创建二维码
  const qrInfoRes = await qrCreateApi(unikey.value)
  qrimg.value = qrInfoRes.data.data.qrimg
  // 开始轮询二维码状态
  qrCheck()
}

getQr()

onBeforeUnmount(() => {
  clearInterval(timer)
})

const resetQr = () => {
  if (qrCode.value === 800) {
    qrCode.value = null
    getQr()
  }
}

</script>

<template>
  <view class="qr-wrap">
    <image :src="qrimg" mode="widthFix"></image>
    <view class="qr-code" v-if="qrCode !== null && qrCode !== 801" @click="resetQr">{{ qrStatus }}</view>
  </view>
</template>

<style lang='scss' scoped>
.qr-wrap {
  position: relative;
  image {
    max-width: 500rpx;
    margin: 0 auto;
    display: block;
  }
}
.qr-code {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #ffffff, $alpha: .8);
  text-align: center;
  line-height: 300px;
  font-size: 22px;
}
</style>