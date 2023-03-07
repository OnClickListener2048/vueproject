<template>
  <div class="container">
    <div v-for="item in defaults.data" :key="item.key" class="list">
      <div class="title">
        <span>{{ item.title }}:</span>
      </div>

      <ul class="list-detail">
        <li :class="{active:result[item.key].indexOf(option.value)!==-1}" v-for="option in item.options"
            :key="option.value" @click="selectItem(item,option)">
          <span>{{ option.label }}</span>
        </li>
      </ul>
    </div>

  </div>
</template>


<script setup lang="ts" name="SelectionFilter">
import { onBeforeMount, ref } from "vue";

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
  data: (): SelectDataProps[] => [],
  defaultValues: () => []
});

let result = ref<{ [key: string]: any[] }>({});


onBeforeMount(() => {
  console.log(defaults.data);
  for (const item of defaults.data) {
    result.value[item.key] = [];
  }
  console.log(result.value);
});

let emits = defineEmits<{ (e: "change", value: object ):void}>();


let selectItem = function(item: SelectDataProps, option: OptionsProps) {
  let resultElement = result.value[item.key] as typeof option.value[];
  if (item.multiple) {
    let indexOf = resultElement.indexOf(option.value);
    if (indexOf == -1) {
      resultElement.push(option.value);
    } else {
      delete resultElement[indexOf];
      // resultElement.push(option.value);
    }
  } else {
    let indexOf = result.value[item.key].indexOf(option.value);
    if (indexOf === -1) {
      result.value[item.key] = [option.value];
    } else {
      delete result.value[item.key][indexOf];
    }

  }
  emits("change",result.value);
  console.log(result);
  console.log(result.value[item.key].indexOf(option.value) !== -1);
};


</script>

<style scoped lang="scss">
.container {
  width: 100%;

  .title {
    margin-top: -2px;
  }

  .list {
    display: flex;
    align-items: center;
    border-bottom: 1px dashed var(--el-border-color-light);

    &:last-child {
      border-bottom: none;
    }

    .list-detail {


      li {
        cursor: pointer;
        padding: 4px 12px 4px 12px;
        border-radius: 50px;
        margin: 10px;
        color: var(--el-color-primary);
        background: var(--el-color-primary-light-9);
        border: 1px solid var(--el-color-primary-light-5);

        list-style-type: none;
        display: inline;

        &:hover {
          color: var(--el-color-white);
          background: var(--el-color-primary);
          border-color: var(--el-color-primary);
          transition: 0.3s;
        }

        &.active {
          color: var(--el-color-white);
          background: var(--el-color-primary);
          border-color: var(--el-color-primary);
          font-weight: bold;
        }

      }
    }
  }
}
</style>