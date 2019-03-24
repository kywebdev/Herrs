# The Grid

<p class="lead">Problem: You've got tons of content, each needing different sized cells, and don't know how to quick and easily get it all done. Solution: The awesome XY grid!</p>

---

## Overview

The grid is built around two key elements: grid-x and cells. grid-container create a max-width and contain the grid, and cells create the final structure. Everything on your page that you don't give a specific structural style to should be within a grid-x or cell.

---

## Nesting

In the Grid you can nest cells down as far as you'd like. Just embed grid-x inside cells and go from there. Each embedded grid-x can contain up to 12 cells.

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of `<div>` tags to create cells.

```html
<div class="grid-x">
  <div class="small-6 medium-4 large-3 cell">...</div>
  <div class="small-6 medium-8 large-9 cell">...</div>
</div>
```

<div class="grid-x display">
  <div class="small-12 large-4 cell">4</div>
  <div class="small-12 large-4 cell">4</div>
  <div class="small-12 large-4 cell">4</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-3 cell">3</div>
  <div class="small-12 large-6 cell">6</div>
  <div class="small-12 large-3 cell">3</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-2 cell">2</div>
  <div class="small-12 large-8 cell">8</div>
  <div class="small-12 large-2 cell">2</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-3 cell">3</div>
  <div class="small-12 large-9 cell">9</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-4 cell">4</div>
  <div class="small-12 large-8 cell">8</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-5 cell">5</div>
  <div class="small-12 large-7 cell">7</div>
</div>
<div class="grid-x display">
  <div class="small-12 large-6 cell">6</div>
  <div class="small-12 large-6 cell">6</div>
</div>

---

## Nesting grid-x

In the Grid you can nest cells down as far as you'd like. Just embed grid-x inside cells and go from there. Each embedded grid-x can contain up to 12 cells.

```html
<div class="grid-x">
  <div class="small-8 cell">8
    <div class="grid-x">
      <div class="small-8 cell">8 Nested
        <div class="grid-x">
          <div class="small-8 cell">8 Nested Again</div>
          <div class="small-4 cell">4</div>
        </div>
      </div>
      <div class="small-4 cell">4</div>
    </div>
  </div>
  <div class="small-4 cell">4</div>
</div>
```

<div class="grid-x display">
  <div class="small-8 cell">8
    <div class="grid-x">
      <div class="small-8 cell">8 Nested
        <div class="grid-x">
          <div class="small-8 cell">8 Nested Again</div>
          <div class="small-4 cell">4</div>
        </div>
      </div>
      <div class="small-4 cell">4</div>
    </div>
  </div>
  <div class="small-4 cellgi">4</div>
</div>

---

## Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="grid-x">
  <div class="small-2 cell">2</div>
  <div class="small-10 cell">10, last</div>
</div>
<div class="grid-x">
  <div class="small-3 cell">3</div>
  <div class="small-9 cell">9, last</div>
</div>
```

<div class="grid-x display">
  <div class="small-2 cell">2</div>
  <div class="small-10 cell">10, last</div>
</div>
<div class="grid-x display">
  <div class="small-3 cell">3</div>
  <div class="small-9 cell">9, last</div>
</div>



# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>\_settings.scss</code></p>

---

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #d3313a"></span>
      #d3313a
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #37bee3"></span>
      #37bee3
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #f7bd3e"></span>
      #f7bd3e
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #3adb76"></span>
      #3adb76
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #333333"></span>
      #333333
    </div>
  </div>
</div>



# Typography

<p class="lead">This design uses Proxima Nova for headings and paragraph text.</p>

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

## Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such.

---

<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h2 class="secondary">Heading Level 2</h2>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h3>Heading Level 3</h3>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h4>Heading Level 4</h4>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h5>Heading Level 5</h5>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h6>Heading Level 6</h6>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.



# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button">Large button</a>
<a href="#" class="primary button">Regular button</a>
<a href="#" class="primary small button">Small button</a>
<a href="#" class="primary tiny button">Tiny button</a>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button">Large button</a>
<a href="#" class="secondary button">Regular button</a>
<a href="#" class="secondary small button">Small button</a>
<a href="#" class="secondary tiny button">Tiny button</a>
```



# Card

<!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora omnis suscipit id ut laborum recusandae molestias hic aliquid **expedita!** [Non dicta](zurb.com), autem obcaecati error, id ab voluptate unde culpa nulla. -->

```html_example
<div class="row">
    <div class="large-4 medium-6 columns">
        <div class="card">
            <div class="card__card-divider">
                <i class="card__card-icon far fa-clock"></i>
                <span class="card__card-time">15 min</span>
            </div>
            <a href="" class="card__card-link">
                <img src="https://picsum.photos/481/250?image=1" alt="" class="card__card-img" />
            </a>
            <div class="card__card-section">
                <h4 class="card__card-heading secondary">Seven-Layer Mexican Dip</h4>
                <p class="card__card-text">Nunc ullamcorper scel erisque dignissim. Quis que sodales finibus lacus...</p>
                <a href="" class="card__card-view-link">View</a>
            </div>
        </div>
    </div>
    <div class="large-4 medium-6 columns">
        <div class="card">
            <div class="card__card-divider">
                <i class="card__card-icon far fa-clock"></i>
                <span class="card__card-time">15 min</span>
            </div>
            <a href="" class="card__card-link">
                <img src="https://picsum.photos/481/250?image=1" alt="" class="card__card-img" />
            </a>
            <div class="card__card-section">
                <h4 class="card__card-heading secondary">Seven-Layer Mexican Dip</h4>
                <p class="card__card-text">Nunc ullamcorper scel erisque dignissim. Quis que sodales finibus lacus...</p>
                <a href="" class="card__card-view-link">View</a>
            </div>
        </div>
    </div>
    <div class="large-4 medium-6 columns">
        <div class="card">
            <div class="card__card-divider">
                <i class="card__card-icon far fa-clock"></i>
                <span class="card__card-time">15 min</span>
            </div>
            <a href="" class="card__card-link">
                <img src="https://picsum.photos/481/250?image=1" alt="" class="card__card-img" />
            </a>
            <div class="card__card-section">
                <h4 class="card__card-heading secondary">Seven-Layer Mexican Dip</h4>
                <p class="card__card-text">Nunc ullamcorper scel erisque dignissim. Quis que sodales finibus lacus...</p>
                <a href="" class="card__card-view-link">View</a>
            </div>
        </div>
    </div>
</div>
```



# Callout

<!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora omnis suscipit id ut laborum recusandae molestias hic aliquid **expedita!** [Non dicta](zurb.com), autem obcaecati error, id ab voluptate unde culpa nulla. -->

```html_example
  <div class="row">
    <div class="callout large-6 medium-12 columns">
      <img src="assets/img/homepage-card1.jpg" alt="" class="callout__callout-img">
      <div class="callout__callout-overlay">
        <p class="callout__callout-text">From food to community to ecology, we try to stay true to what is inherently good.</p>
        <button class="button callout__callout-button">Button</button>
      </div>
    </div>
    <div class="callout large-6 medium-12 columns">
      <img src="assets/img/homepage-card2.jpg" alt="" class="callout__callout-img">
      <div class="callout__callout-overlay">
        <p class="callout__callout-text">From food to community to ecology, we try to stay true to what is inherently good.</p>
        <button class="button callout__callout-button">Button</button>
      </div>
    </div>
  </div>
```



# Navigation

<!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora omnis suscipit id ut laborum recusandae molestias hic aliquid **expedita!** [Non dicta](zurb.com), autem obcaecati error, id ab voluptate unde culpa nulla. -->

```html_example
  <div class="row">
    <div class="small-12 columns">
      <ul class="menu expanded main-nav">
        <li><a href="#">One</a></li>
        <li><a href="#">Two</a></li>
        <li><a href="#">Three</a></li>
        <li><a href="#">Four</a></li>
        <li><a href="#">Five</a></li>
        <li><a class="is-active" href="#">Six</a></li>
        <li><a href="#">Seven</a></li>
      </ul>
  </div>
</div>
```




# Forms

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## How to Use

Make forms great and easy to use with the following rules:

- Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the for, name, and id attributes for all applicable elements.
- Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
- Before selecting any set of fields to use for a required input, explore other options (e.g., radio buttons over select lists).

---


## Form Layouts

Form elements in Foundation are styled based on their type attribute rather than a class. Inputs in Foundation have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Example

```html_example
<form>
  <div class="row">
    <div class="large-12 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns selectdiv">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="large-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>
</form>
``` 



# Slider

<!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora omnis suscipit id ut laborum recusandae molestias hic aliquid **expedita!** [Non dicta](zurb.com), autem obcaecati error, id ab voluptate unde culpa nulla. -->

```html_example
  <div class="row">
    <div class="small-12 columns">
      <div class="content-carousel" id="fullproductlist">
        <div class="productList">
                        <div class="slide-content">
                            <div class="product">
                              <img src="assets/img/lorem-bag.png" />
                            </div>
                            <div class="productShadow"></div>
                        </div>
                        <div class="slide-content">
                            <div class="product">
                              <img src="assets/img/lorem-bag.png" />
                            </div>
                            <div class="productShadow"></div>
                        </div>
                        <div class="slide-content">
                            <div class="product">
                              <img src="assets/img/lorem-bag.png" />
                            </div>
                            <div class="productShadow"></div>
                        </div>
                        <div class="slide-content">
                            <div class="product">
                              <img src="assets/img/lorem-bag.png" />
                            </div>
                            <div class="productShadow"></div>
                        </div>
                        <div class="slide-content">
                            <div class="product">
                              <img src="assets/img/lorem-bag.png" />
                            </div>
                            <div class="productShadow"></div>
                        </div>
      </div>
   </div>
  </div>
</div>
```