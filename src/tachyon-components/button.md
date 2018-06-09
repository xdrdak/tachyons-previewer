# Basic Buttons

Buttons are the staple of pretty much any component library. In regular css-frameworks like bootstrap, the only thing we need to to simply apply the <code>btn</code> class, and the styling is done.

However, building nice looking buttons using atomic css requires a bit more effort than we're used to. Since nothing is really abstracted away from us, it's necessary to do the proper resets and sizing to get what we need.

But, the end result is a much more flexible component.

### Basic blueprint

This is the most basic blueprint for a button with a background color.
You'll notice that there's a slight difference between a <code>button</code> tag and an <code>a</code> tag.

That's because the underlying element has some styling that we need to reset. The following example has what I consider to be the essential reset for buttons.

<strong>Note:</strong> in an anchor tag, we use the <code>dib</code> class to ensure proper sizing.

```html
<button class="pointer bn ph1 pv1 white bg-black">Button</button>
<a class="link dib ph1 pv1 white bg-black" href="">Anchor</a>
<button class="pointer bg-transparent b--black ba bw1 ph1 pv1 black" href="">Button</button>
<a class="link dib ba bw1 ph1 pv1 black" href="">Anchor</a>
```

### Styling buttons

Of course, black buttons are sorta dull. Let's add a dash of colour!
We're going to use the previously established blueprint for this.

And this is where things get super interesting. With atomic css, we're no longer tied to a designated name or state for a color.

Normally, we'd apply stuff like <code>btn btn--danger</code> to swap colors. But, in atomic css we simply change the appropriate helper class.

#### Here's a small table of parameters you'll probably want to tweak.

| Text Color | Bg color   | Button Size | Border Radius | Hover bg color   |
| ---------- | ---------- | ----------- | ------------- | ---------------- |
| (color)    | bg-(color) | f(1-6)      | br(1-4)       | hover-bg-(color) |

| Background Animations |
| --------------------- |
| bg-animate / dim      |

### Buttons with filled backgrounds

```html
<button class="pointer bn br1 ph3 pv2 white bg-blue hover-bg-light-blue bg-animate">
  Primary
</button>
<button class="pointer bn br1 ph3 pv2 white bg-red hover-bg-light-red bg-animate">
  Danger
</button>
<button class="pointer bn br1 ph3 pv2 white bg-green hover-bg-light-green bg-animate">
  Success
</button>
<button class="pointer bn br1 ph3 pv2 white bg-gray hover-bg-black bg-animate">
  Cancel
</button>
<a href="" class="link dib bn br1 ph3 pv2 white bg-pink hover-bg-light-pink bg-animate">
  Anchor
</a>
```

### Buttons with border

#### Here's a small table of parameters you'll probably tweak.

| Text Color | Button Size | Border Radius |
| ---------- | ----------- | ------------- |
| (color)    | f(1-6)      | br(1-4)       |

| Border Color (anchor) | Border Color (button) |
| --------------------- | --------------------- |
| (color)               | b--(color)            |

```html
<a class="f6 link dim br2 ba ph3 pv2 dib purple" href="">Button Text</a>
<a class="f6 link dim br2 ba ph3 pv2 dib green" href="">Button Text</a>
<button class="f6 pointer dim br2 ba ph3 pv2 dib bg-transparent b--purple purple">
  Button Text
</button>
<button class="f6 pointer dim br2 ba ph3 pv2 dib bg-transparent b--green green">
  Button Text
</button>
```
