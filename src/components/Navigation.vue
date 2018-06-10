<template>
  <nav>
    <ul class="pl2">
      <li
        v-for="(mapping, i) in componentLinks"
        :key="i"
        :class="mapping.type === typeSection ? 'pv1' : 'pv2'"
      >
        <div
          v-if="mapping.type === typeSection"
          class="black-80 b f4"
        >
          {{ mapping.title }}
        </div>
        <router-link
          v-if="mapping.type === typeComponent"
          class="link dim black-70"
          :to="`/component/${mapping.filename}`"
        >
          {{ mapping.properName }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { TYPES, componentMaps } from '@/tachyon-components/tachyon-components';

export default {
  name: 'navigation',
  computed: {
    componentLinks() {
      return componentMaps;
    },
    typeSection() {
      return TYPES.SECTION;
    },
    typeComponent() {
      return TYPES.COMPONENT;
    },
  },
};
</script>

<style scoped>
.router-link-active {
  border-bottom: 3px solid #ff41b4;
}
</style>

