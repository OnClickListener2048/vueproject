<template>
  <div>
    <el-input class="icon-input" v-model="value" :clearable="true">
      <template #append>
        <el-button type="primary" class="el-button">11111</el-button>
      </template>
    </el-input>
  </div>
</template>

<script setup name="IconSelector">
import { ref } from "vue";

let value = ref("")

</script>

<style scoped lang="scss">
.icon-input{
  height: 60px;
  width: 100%;
  font-size: 15px;
  margin: 10px 10px 10px 10px;
  padding: 10px;
  .el-button{
    font-size: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>