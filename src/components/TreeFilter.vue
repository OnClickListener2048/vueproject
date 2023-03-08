<template>
  <div>
    <h4>{{ title }}</h4>
    <el-input v-model="searchTerm"></el-input>
    <el-tree :empty-text="emptyText" :node-key="title" default-expand-all>

    </el-tree>
  </div>
</template>

<script setup name="TreeFilter" lang="ts">
import { ref } from "vue";



interface TreeFilterProps {
  title: string;
  emptyText: string;
}


let defaults = withDefaults(defineProps<TreeFilterProps>(), {
  title: "title",
  emptyText: "暂无数据"
});

let searchTerm = ref<string>("");

</script>

<style scoped>

</style>