<template>
  <div class="container">
    <el-input class="icon-input" v-model="value" :clearable="true" @click="showSelectionDialog=true" @clear="clear">
      <template #append>
        <el-button type="primary" :icon="icons[value]" class="el-button"></el-button>
      </template>
    </el-input>


    <el-dialog v-model="showSelectionDialog" title="图标选择框" width="75%" top="50px">
      <el-input size="large" v-model="searchValue" :prefix-icon="Icons.Search"></el-input>

      <el-scrollbar>
        <div class="icon-list">
          <div class="icon-item" v-for="item in result" :key="item" @click="select(item)">
            <component :is="item" class="icon"></component>
            <div>{{ item.name }}</div>
          </div>
        </div>
      </el-scrollbar>
    </el-dialog>
  </div>


</template>

<script setup name="IconSelector" lang="ts">
import { computed, ref } from "vue";
import * as Icons from "@element-plus/icons-vue";

let emits = defineEmits(["icon"]);


type IconRecord = Record<string, any>


let value = ref("");

let showSelectionDialog = ref(false);

let searchValue = ref("");

let icons: IconRecord = Icons;

let select = function(item: any) {
  showSelectionDialog.value = false;
  console.log(item);
  value = item.name;
  emits("icon", item);
};
let clear = function() {
  value.value = "";
  searchValue.value= ""
  emits("icon", null);
};
let result = computed(() => {
  let result: IconRecord = {};
  for (const key in icons) {
    if (key.indexOf(searchValue.value) != -1) {
      result[key] = icons[key];
    }
  }
  return result;
});

let blur = function() {
  console.log("blur");
};

let focus = function() {
  console.log("focus");
};

</script>

<style scoped lang="scss">


.container {
  display: flex;

  .icon-input {
    height: 60px;
    width: 100%;
    margin: 10px;
    font-size: 15px;

    .el-button {
      font-size: 19px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }


}

.icon-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 115px);
  justify-content: space-evenly;
  max-height: 70vh;

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 42px;
    padding: 20px 30px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.3);
    }


    div {
      width: 100px;
      margin-top: 5px;
      line-height: 20px;
      text-align: center;
    }
  }
}
</style>