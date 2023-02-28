<template>
 <div class="description">

   <IconSelector></IconSelector>

   <el-descriptions :border="true" direction="horizontal" title="title" extra="extra" :column="1" size="large" >
      <template #title>
        <div>qweqweq</div>
      </template>

     <el-descriptions-item label="aaaaaaaaaaaa">qewqewqewqe</el-descriptions-item>
     <el-descriptions-item label="bbbbbbbbbbbb">aa1d2a3</el-descriptions-item>
     <el-descriptions-item label="cccccccccccc">qewqewqeqeqwewqe</el-descriptions-item>
     <el-descriptions-item label="ddd">qewasdsadqewqewqe</el-descriptions-item>
   </el-descriptions>
 </div>
</template>

<script>
import IconSelector from "@/components/IconSelector.vue";

export default {
  name: "index",
  components: { IconSelector }
};
</script>

<style scoped>
  .description{
    width: 100%;
    height: 100%;
  }
</style>