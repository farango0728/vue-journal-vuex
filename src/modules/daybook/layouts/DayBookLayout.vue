<template>
  <NavBar />
  <div class="d-flex">
    <div class="col-2"><EntryList /></div>
    <div class="col"><router-view></router-view></div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList")),
  },
};
</script>