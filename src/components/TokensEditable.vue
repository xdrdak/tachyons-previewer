<template>
  <div>
    <div class="mb1">
      <badge class="bg-blue br2 mb2">Preview</badge>
      <!-- Preview output bellow -->
      <div class="pa2 bg-steel-grey br2" v-html="content"></div>
    </div>
    <div>
      <badge class="bg-hot-pink br2 mb2">&lt;/&gt;</badge>
      <codemirror
        v-model="content"
        :options="cmOption"
      >
      </codemirror>
    </div>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror';
import Badge from '@/components/BaseBadge';

export default {
  name: 'tokensEditable',
  components: { codemirror, Badge },
  props: ['initialContent'],
  watch: {
    initialContent(newProp) {
      this.content = newProp;
    },
  },
  data() {
    return {
      content: this.initialContent,
      cmOption: {
        theme: 'moemoe',
        origLeft: null,
        connect: 'align',
        mode: 'text/html',
      },
    };
  },
};
</script>