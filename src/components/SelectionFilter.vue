<template>
  <div class="container">
   <div v-for="item in defaults.data" :key="item.key" class="list">
    <div class="title">
      <span>{{item.title}}:</span>
    </div>

     <ul class="list-detail">
       <li v-for="option in item.options" :key="option.value" class="list-item">
         <span>{{option.label}}</span>
       </li>
     </ul>
   </div>

  </div>
</template>


<script setup lang="ts" name="SelectionFilter">
interface OptionsProps {
  value: string | number;
  label: string;
  icon?: string;
}

interface SelectDataProps {
  title: string; // 列表标题
  key: string; // 当前筛选项 key 值
  multiple?: boolean; // 是否为多选
  options: OptionsProps[]; // 筛选数据
}

interface SelectFilterProps {
  data?: SelectDataProps[]; // 选择的列表数据
  defaultValues?: { [key: string]: any }; // 默认值
}

let defaults = withDefaults(defineProps<SelectFilterProps>(), {
  data: () => [],
  defaultValues: () => []
});

let array = "";
console.log();

</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  .title{
    margin-top: -2px;
  }
  .list{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed var(--el-border-color-light);
    &:last-child {
      border-bottom: none;
    }
    .list-detail{



      .list-item {
        cursor: pointer;
        padding: 4px 12px 4px 12px;
        border-radius: 50px;
        margin: 10px;
        color: var(--el-color-primary);
        background: var(--el-color-primary-light-9);
        border: 1px solid var(--el-color-primary-light-5);

        list-style-type: none;
        display: inline;
        &:hover{
          color: var(--el-color-white);
          background: var(--el-color-primary);
          border-color: var(--el-color-primary);
          transition: 0.3s;
        }
        &:active{
          color: var(--el-color-white);
          background: var(--el-color-primary);
          border-color: var(--el-color-primary);
        }

      }
    }
  }
}
</style>