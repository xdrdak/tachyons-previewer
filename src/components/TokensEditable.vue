<template>
  <div>
    <div class="mb1">
      <h4 class="dib b pa1 white bg-blue shadow-4 br2 mb2">Preview</h4>
      <!-- Preview output bellow -->
      <div class="pa2 bg-steel-grey br2" v-html="content"></div>
    </div>
    <div>
      <h4 class="dib b pa1 white bg-hot-pink shadow-4 br2 mb2">&lt;/&gt;</h4>
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

export default {
  name: 'tokensEditable',
  components: { codemirror },
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