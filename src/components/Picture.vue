<template>
  <div class="picture">
    <img :src="picture.url" alt="" />
    <h1>{{ picture.title }}</h1>
    <h1>{{ picture.owner }}</h1>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { Picture } from "../models/Picture.js";
import { AppState } from "../AppState.js";
export default {
  props: {
    picture: { type: Object, required: true },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>