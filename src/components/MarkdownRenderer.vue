<template>
  <div>
    <div v-for="(group, i) in tokenGroups" :key="`${i}_${componentName}`">
      <div v-if="group.type === typeReadonly">
        <tokens-read-only :tokens="group.tokens"></tokens-read-only>
      </div>
      <div v-if="group.type === typeEdit" class="mb5">
        <tokens-editable
          :initialContent="group.tokens.content"
        >
        </tokens-editable>
      </div>
    </div>
  </div>
</template>

<script>
import { tokenGrouper, TOKEN_GROUPER_TYPES } from '@/utils/token-remapper';
import TokensReadOnly from '@/components/TokensReadOnly';
import TokensEditable from '@/components/TokensEditable';

export default {
  name: 'markdownRenderer',
  components: { TokensReadOnly, TokensEditable },
  props: ['content', 'componentName'],
  computed: {
    tokenGroups() {
      const tokens = this.$md.parse(this.content);
      return tokenGrouper(tokens);
    },
    typeReadonly() {
      return TOKEN_GROUPER_TYPES.READ_ONLY;
    },
    typeEdit() {
      return TOKEN_GROUPER_TYPES.EDITABLE;
    },
  },
};
</script>