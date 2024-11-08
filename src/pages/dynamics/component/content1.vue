<script setup>
import {ref ,onMounted} from 'vue'
import {getListsonger} from '../../../services/index'

const titlelist=ref([])
onMounted(async () => {
  try {
    const res = await getListsonger()
    console.log(res.data.artists)
    titlelist.value = res.data.artists
  } catch (error) {
    console.error(error)
  }
})

const isCondition = ref(true)





const data=ref([
  {con:"1.人类需要爱和鼓励 2.我喜欢任何一个我3.我喜欢风的透彻4.没关系生活还在继续5.我们自己定义自己6.心诚自然久7.爱的第一页爱自己8.小世界里干杯9.想当一棵树10.放弃是勇敢的开始11.拥抱自己12.不完美才美13.像百花撞了春风14.爱的第一页爱自己",
   timg:"https://wx3.sinaimg.cn/mw690/006LOpnAgy1hvekowxmjzj30j60j6dhs.jpg",
   name:'饭煎蛋 '
},
{con:"如何对抗语言能力退化/坍缩？阅读严肃书籍,看非批量生产的洞见:精准化用词（少用代词）,替换同义词,丰富语料库:深度思考（多挖掘,多质疑,多反思）:尝试写作or辩论。语言除了是强大的外部交际工具,还是强化思维的工具和介质。同时从符号学的视角帮助人类通过习以为常的日常生活,洞察信息交流的深刻本质和人类语言的共同基因,探寻人类思维创造力的“秘钥”。总之,了解语言的属性,就像了解数学中的公理,可以由此推论延展出更多的生活智慧。The boundary of language is the boundary of the worl作为思维的话能表达,内涵的载体及理解的边界,语言的简化会让思维也滑向两极的深渊。越是短平快,看似吸引眼球的东西,越不可能真正表达你自己的感受和观点。个体应当尽量让自己的chain of thought是完整的,富有细节的,经得起推敲的,而不是简化的,同质的,模棱两可的。世界是事实的总和,不是事物的总和。而事实是关于属性的判断或描述,并由多维层次的事态组成的。哪种语言越接近于描述事实,哪种语言就接近这个世界,越爆发生命力和力量。我们所看到的没看到的,以及正在发生的,都是事实,而我们习惯的语言则塑造我们的世界观和意识形态。警惕那些否定你思考和感受的话术诸如<你想复杂了>不是的,是他们将世界扁平化了",
 timg:"https://wx1.sinaimg.cn/mw690/001UrXrhly1hvcx2fyts1j61s035snpd02.jpg",
 name:'小宇宙'
}
  ])
</script>

<template>
    <view class="home">
    <view class="com-title">
        <view class="com-title-left">
            <image :src="titlelist[15]?.img1v1Url"/>
            <text>乐迷团</text>
        </view>    
        <scroll-view class="con" scroll-x>
        <view class="qwe">
        <view class="con-item" v-for="(item,index) in titlelist">
            <image :src="item.img1v1Url"/>
            <text>{{item.name}}</text>
          </view>
        </view>
        </scroll-view>
    </view>

    <view class="con">
      <view v-for="item in data" class="con-items">
        <view class="tit">
          <image :src="item.timg" alt="用户头像" />
          <h4>{{item.name}}</h4>
        </view>
        <text class="item-con"  :class="{
      'post-content': isCondition,
      'post-content.expanded': !isCondition
     }">{{item.con}}</text>
     <button v-if="isCondition"  @click="isCondition=false">展开</button>
     

      </view>
    </view>
  </view> 
</template>

<style scoped lang='scss'>
.home{
  overflow: auto;
}
.com-title{
    width: 100vw;
    height:150rpx;
    display: flex;
   .com-title-left{
        width: 100rpx;
        height: 150rpx;
        margin-left: 20rpx;
        image{
            width: 100rpx;
            height: 100rpx;
            border-radius: 50%;

        }
        }
    .qwe{
        flex: 1;
        display: flex;

       
        .con-item{
            width: 100rpx;
            height: 150rpx;
            margin-left: 20rpx; 
            image{
                width: 100rpx;
                height: 100rpx;
                border-radius: 50%;

                 }
                }
         }
}
.con-items{
margin-top: 10px;  
padding: 10px 30px;
background: rgb(239,239,239);
.tit{
  display: flex;
  align-items: center;
  image{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  h4{
    font-family: 楷体;
  }
 
}
.item-con{
    padding: 0 20px;
    font-family: 楷体;
    font-size: 20px;
    color: #666;
    line-height: 1.5;

    display: block;
  }

.post-content {
  max-height: 150px; /* 初始最大高度 */
  overflow: hidden; /* 超出部分隐藏 */
  transition: max-height 0.3s ease; /* 平滑过渡效果 */
}

.post-content.expanded {
  max-height: none; /* 展开时移除最大高度限制 */
}  
}
</style>