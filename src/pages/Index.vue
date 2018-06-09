<template>
  <div class="flex justify-center alignt-center">
    <div>
      <h1 class="measure">Tachyon Previewer</h1>
      <p class="lh-copy measure f4">
        Here's a bunch of curated tachyon components that you can easily preview and play around with!
      </p>
      <p class="lh-copy measure f4">
        Each components have 1 or more little code playgrounds, in which you can easily tweak
        the component to experiment a bit with it.
      </p>
      <div class="pb4">
        <tokens-editable initialContent="<button>This is editable!</button>"></tokens-editable>
      </div>
      <h2>
        Using these components in your project
      </h2>
      <p class="lh-copy measure f4 pb4">
        Make sure to include <a class="link blue dim" href="http://tachyons.io/">Tachyons</a> into your project.
        <br />
        After that, simply slap one of them components into your page and you're ready to go!
      </p>
      <h2>
        Managing styles
      </h2>
      <p class="lh-copy measure f4">
        You'll notice super quickly that classes tend to get very long.
        It's a drawback that comes with pretty much any atomic css toolkits.
      </p>
      <p class="lh-copy measure f4">
        My recommendation? Create components!
        If you're using <code>React</code> or <code>Vue</code>, then take advantage of the whole
        <em>"everything can be a component"</em> paradigm.
      </p>
      <p class="lh-copy measure f4">
        If you're using a templating engine, then you can leverage partial views.
      </p>
    </div>

  </div>
</template>

<script>
import Badge from '@/components/BaseBadge';
import TokensEditable from '@/components/TokensEditable';

export default {
  components: { Badge, TokensEditable },
};
</script>
