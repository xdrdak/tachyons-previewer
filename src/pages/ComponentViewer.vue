<template>
  <markdown-renderer :content="rawContents" :componentName="componentName"></markdown-renderer>
</template>
<script>
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default {
  name: 'componentViewer',
  components: { MarkdownRenderer },
  props: {
    componentName: String,
  },
  async created() {
    await this.fetchComponent();
  },
  data() {
    return {
      loading: false,
      rawContents: '',
    };
  },
  watch: {
    $route: 'fetchComponent',
  },
  methods: {
    async fetchComponent() {
      this.loading = true;
      try {
        const rawContents = await import(/* webpackPrefetch: true */ `@/tachyon-components/${
          this.componentName
        }.md`);
        this.rawContents = rawContents;
      } catch (e) {
        console.error(e);
      }
      this.loading = false;
    },
    getTokens() {
      return this.$_tokens;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
