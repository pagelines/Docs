<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
  			<li class="active">Typography</li>
		</ul>
	</div>
</div>

# Typography #

PageLines DMS typography is based on the powerful Bootstrap providing styling for tables, forms, buttons, and other standard interface elements.

## Adjusting Fonts ##

Pagelines DMS comes with a selection of pre-installed fonts you can use on your site. To select a font or to edit the current font’s settings select the ‘typography’ tab from the DMS control panel.

The typography panel is split into two sections, Primary text and Text headers. Both sections contain options to choose a font and select the font’s weight and size.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/typography.jpg)

Next to each options title there is a refresh button, which can be used to update the preview window with the current selection.

Note: The base font size is a reference that will be scaled for the text used throughout your site.

Note: Font weights with a * icon do not take affect on all browsers.

## Adjusting font color ##

Pagelines DMS allows you to choose a custom font color for both the main text color and the linked text color. To set your color options select the global options tab from the DMS control panel and select color and style menu.

For each of the text color options you can either enter the hex value directly into the color field, or select the desired using the inbuilt color picker. Use the refresh button next to each option to update the preview window with your new selection.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/color-style.jpg)

## Typography Examples ##

### Headings ###

All HTML headings, `<h1>` through `<h6>` are available.

<div markdown="1" class="docs-example">
	<h1>h1. Header 1</h1>
	<h2>h2. Header 2</h2>
	<h3>h3. Header 3</h3>
	<h4>h4. Header 4</h4>
	<h5>h5. Header 5</h5>
	<h6>h6. Header 6</h6>
</div>

### Body ###

PageLines DMS’s global default `font-size` is 14px, with a `line-height` of 1.55em. This is applied to the <body> and all paragraphs. In addition, `<p>` (paragraphs) receive a top/bottom margin of 1.55em.

<div class="docs-example">
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies dolor nec ante scelerisque consequat. Ut aliquet semper ipsum, a vehicula leo varius facilisis. Praesent lobortis consectetur venenatis.</p>
	<p></p>
	<p>Nullam pretium faucibus dui vel venenatis. Cras dapibus, dolor in suscipit lobortis, sapien eros tristique erat, ac eleifend augue quam posuere mauris. Donec dignissim diam eget tortor blandit ullamcorper. Maecenas sodales ornare nisi, in malesuada elit interdum eget.
	</p>
</div>
~~~ .html
<p>...</p>
~~~

### Lead body ###

Make a paragraph stand out by adding `.lead`.

<div class="docs-example">
	<p class="zmt lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices viverra vehicula. Etiam commodo metus in ipsum ultricies in sodales.</p>
</div>
~~~ .html
<p class="lead">...</p>
~~~

### Emphasis ###

Make use of HTML’s default emphasis tags to make your text standout.

Bold

For emphasizing a snippet of text with important

<div class="docs-example">
<p>
The following snippet of text is <strong>rendered as bold text</strong>.</p>
</div>
~~~ .html
<strong>rendered as bold text</strong>
~~~

### Italic ###

For emphasizing a snippet of text with stress

<div class="docs-example">
<p>
The following snippet of text is <em>rendered as italicized text.</em>
</p>
</div>
~~~ .html
<em>rendered as italicized text</em>
~~~

### Emphasis classes ###

Display meaning through color with a handful of emphasis utility classes.

<div markdown="1" class="docs-example">
	<p class="muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
	<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
	<p class="text-error">Donec ullamcorper nulla non metus auctor fringilla.</p>
	<p class="text-info">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</p>
	<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
</div>
~~~ .html
<p class="muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-error">Donec ullamcorper nulla non metus auctor fringilla.</p>
<p class="text-info">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
~~~

### Lists ###

#### Unordered ####

A list of items in which the order does not explicitly matter.

<div class="docs-example">
<ul>
<li>Nulla volutpat aliquam velit
<ul>
<li>Phasellus iaculis neque</li>
<li>Purus sodales ultricies</li>
<li>Vestibulum laoreet porttitor sem</li>
<li>Ac tristique libero volutpat at</li>
</ul>
</li>
<li>Faucibus porta lacus fringilla vel</li>
</ul>
</div>
~~~ .html
<ul>
  <li>...</li>
</ul>
~~~

#### Ordered ####

A list of items in which the order does explicitly matter.

<div class="docs-example">
<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit</li>
<li>Integer molestie lorem at massa</li>
<li>Facilisis in pretium nisl aliquet</li>
<li>Nulla volutpat aliquam velit</li>
<li>Faucibus porta lacus fringilla vel</li>
<li>Aenean sit amet erat nunc</li>
<li>Eget porttitor lorem</li>
</ol>
</div>
~~~ .html
<ol>
  <li>...</li>
</ol>
~~~

#### Unstyled ####

A list of items with no `list-style` or additional left padding.

<div class="docs-example">
<ul class="unstyled">
<li>Nulla volutpat aliquam velit
<ul>
<li>Phasellus iaculis neque</li>
<li>Purus sodales ultricies</li>
<li>Vestibulum laoreet porttitor sem</li>
<li>Ac tristique libero volutpat at</li>
</ul>
</li>
<li>Faucibus porta lacus fringilla vel</li>
</ul>
</div>
~~~ .html
<ul class="unstyled">
  <li>...</li>
</ul>
~~~

## More Examples ##

For more information and examples on typography, head over to [Bootstrap’s typography](http://getbootstrap.com/2.3.2/base-css.html#typography) page.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/tutorials/shortcodes">&larr; Shortcodes</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/tutorials/html-css-utilities">HTML/CSS Utilities &rarr;</a></li>
		</ul>
	</div>
</div>

