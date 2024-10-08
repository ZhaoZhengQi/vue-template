<template>
  <div class="input-box">
    <div>
      <div>input</div>
      <el-input v-model="input" placeholder="请输入" />
      <el-input
        v-model="input1"
        class="input-date"
        placeholder="选择日期"
        :suffix-icon="Calendar"
      />
      <el-input v-model="input4" class="input-search" placeholder="输入搜索">
        <template #prefix>
          <el-icon class="el-input__icon">
            <icon-ep-Search />
          </el-icon>
        </template>
      </el-input>
    </div>
    <div>
      <div>textarea</div>
      <el-input
        class="input-textarea"
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="请输入文本内容"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Calendar } from '@element-plus/icons-vue'

const input = ref('')
const textarea = ref('')
const input1 = ref('')
const input4 = ref('')
</script>

<style lang="scss" scoped>
@import '@/styles/element/input';

.input-box {
  & > div {
    & > div {
      margin-bottom: 10px;
    }

    .input-textarea {
      width: 240px;
    }

    .input-date {
      margin-left: 10px;
    }

    .input-search {
      margin-left: 10px;
    }
  }
}
</style>
