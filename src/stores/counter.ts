import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const GlobalConfig = defineStore(
  {
    id: "GlobalConfig",
    state: () => {
      return {
        token: ""
      };
    },
    getters: {},
    actions: {
      setToken(token: string) {
        this.token = token
      }
    },
    persist: true
  }
);
