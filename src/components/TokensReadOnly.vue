<template>
  <div class="lh-copy measure-wide" v-html="rawHtml">
  </div>
</template>

<script>
export default {
  name: 'tokensReadOnly',
  props: ['tokens'],
  computed: {
    rawHtml() {
      const tokens = this.tokens;
      const rawHtml = tokens
        .map((t, i) => {
          if (t.type === 'inline') {
            return t.content;
          }
          return this.$md.renderer.renderToken(tokens, i);
        })
        .join('');
      return rawHtml;
    },
  },
};
</script>
