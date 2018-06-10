# Alerts

Alert are a very easy thing to do in atomic css.

Notice that in the next examples, the only thing we really need to change is the color, and everything else falls in place correctly. Talk about convenient!

### Bootstrap inspired alerts

```html
<div role="alert" class="bg-washed-red b--light-red pv3 ph3 br2 ba mb2">
  <strong class="b">Alert!</strong>
  <span class="dib">Something seriously bad happened.</span>
  <span class="fr">
    <button class="b--transparent bg-transparent pointer">&#10005;</button>
  </span>
</div>

<div role="info" class="bg-washed-blue b--light-blue pv3 ph3 br2 ba mb2">
  <strong class="b">Info:</strong>
  <span class="dib">This is some helpful text.</span>
  <span class="fr">
    <button class="b--transparent bg-transparent pointer">&#10005;</button>
  </span>
</div>

<div role="success" class="bg-washed-green b--light-green pv3 ph3 br2 ba mb2">
  <strong class="b">Success</strong>
  <span class="dib">It's green, so you know we're good.</span>
  <span class="fr">
    <button class="b--transparent bg-transparent pointer">&#10005;</button>
  </span>
</div>
```

### Left accent border

```html
<div class="bl bw2 b--yellow pv2 pl2 bg-light-yellow" role="warning">
  <p class="b">Hey look</p>
  <p>There's some information displayed here.</p>
</div>
```

### Top accent border

```html
<div class="bt bw3 br2 b--blue pl2 pv2 bg-washed-blue shadow-1" role="warning">
  <div class="flex">
    <div class="mr3 ml1 blue b f3 mt2">&#9432;</div>
    <div>
      <p class="b f4 mt2">Hey look</p>
      <p>There's some information displayed here.</p>
    </div>
  </div>
</div>
```
