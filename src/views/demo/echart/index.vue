<template>
  <v-chart ref="vChartRef" class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide, nextTick } from 'vue'
import { TweenMax } from 'gsap'

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

provide(THEME_KEY, 'light')

const vChartRef = ref(null)
nextTick(() => {
  const $box = vChartRef.value.$el
  TweenMax.to($box, {
    x: -12,
    // y: -12,
    // rotation: 10,
    duration: 1,
    repeat: -1, // 次数，无限次是-1
    yoyo: true, // 往返运动
    delay: 1, // 延迟2s
    // scale: 1.1,
    ease: 'power1.inOut', // elastic
    onComplete: () => {
      console.log('动画完成')
    },
    onStart: () => {
      console.log('动画开始')
    },
  })
})

const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: 'Traffic 222 Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 1235, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 100,
          shadowOffsetX: 10,
          shadowColor: 'rgba(0, 0, 10, 0.5)',
        },
      },
    },
  ],
})
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
