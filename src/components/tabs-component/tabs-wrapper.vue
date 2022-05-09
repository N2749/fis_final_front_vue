<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        class="tab"
        :class="{ selected: title === selectedTitle }"
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from 'vue';
export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);
    provide('selectedTitle', selectedTitle);
    return {
      selectedTitle,
      tabTitles,
    };
  },
};
</script>

<style>
.tabs__header {
  padding: 0;
  display: flex;
  gap: 0 10px;
}
.tab {
  list-style: none;
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease-out;
}

.tabs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tabs__header li.selected {
  background-color: #038c7f;
  color: white;
}
</style>
