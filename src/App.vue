<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { auth_list } from "@/stores/auth_list";

let storeDefinition = auth_list();
storeDefinition.getMenuList();
</script>

<template>
 <el-config-provider >
		<router-view></router-view>
	</el-config-provider>
</template>

<style scoped>

</style>
