<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
  			<li class="active">Responsive Grid</li>
		</ul>
	</div>
</div>

# Responsive Grid #

PageLines DMS encompasses a completely responsive grid system based on [Bootstrap](http://twitter.github.io/bootstrap/) that contains 12 columns, or "spans". The grid can be used virtually anywhere. Mark it up in a post, in a page, or wherever you need structured, responsive content.

The responsive grid system uses percents instead of pixels for column widths, ensuring proper proportions for key screen resolutions and devices.

<div class="docs-grid">
    <div class="row-fluid show-grid">
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
        <div class="span1">1</div>
    </div>
    <div class="row-fluid show-grid">
		<div class="span2">2</div>
		<div class="span2">2</div>
		<div class="span2">2</div>
		<div class="span2">2</div>
		<div class="span2">2</div>
		<div class="span2">2</div>
	</div>
	<div class="row-fluid show-grid">
		<div class="span3">3</div>
		<div class="span3">3</div>
		<div class="span3">3</div>
		<div class="span3">3</div>
	</div>
    <div class="row-fluid show-grid">
        <div class="span4">4</div>
        <div class="span4">4</div>
        <div class="span4">4</div>
    </div>
    <div class="row-fluid show-grid">
		<div class="span5">5</div>
		<div class="span2">2</div>
		<div class="span5">5</div>
	</div>
	<div class="row-fluid show-grid">
		<div class="span6">6</div>
		<div class="span6">6</div>
	</div>
	<div class="row-fluid show-grid">
		<div class="span7">7</div>
		<div class="span5">5</div>
	</div>
    <div class="row-fluid show-grid">
    	<div class="span8">8</div>
    	<div class="span4">4</div>
    </div>
    <div class="row-fluid show-grid">
		<div class="span9">9</div>
		<div class="span3">3</div>
	</div>
	<div class="row-fluid show-grid">
		<div class="span10">10</div>
		<div class="span2">2</div>
	</div>
    <div class="row-fluid show-grid">
        <div class="span11">11</div>
        <div class="span1">1</div>
    </div>
    <div class="row-fluid show-grid">
        <div class="span12">12</div>
    </div>
</div>

## How to use ##

### Basic ###

~~~ .html
<div class="row">
	<div class="span4">4</div>
	<div class="span8">8</div>
</div>
~~~

<div class="row-fluid show-grid">
	<div class="span4">4</div>
	<div class="span8">8</div>
</div>

### Offset ###

~~~ .html
<div class="row">
	<div class="span6">6</div>
	<div class="span6 offset6">6 Offset 6</div>
</div>
~~~

<div class="row-fluid show-grid">
	<div class="span6">6</div>
	<div class="span6 offset6">6 Offset 6</div>
</div>

### Nested ###

~~~ .html
<div class="row">
	<div class="span4">4</div>
	<div class="span8">8
		<div class="row-fluid">
			<div class="span6 zmb">6</div>
			<div class="span6 zmb">6</div>
		</div>
	</div>
</div>
~~~

<div class="row-fluid show-grid">
	<div class="span4">4</div>
	<div class="span8">8
		<div class="row-fluid">
			<div class="span6 zmb" style="background: #CCC">6</div>
			<div class="span6 zmb" style="background: #CCC">6</div>
		</div>
	</div>
</div>

<p class="zmt zmb"><small><span class="label label-info" style="margin-right: 5px;">Note:</span> <code>.zmb</code> is a special PageLines utility class that you can use to specify a zero margin on top<code>.zmt</code> , or on bottom <code>.zmb</code> of any element giving you full control. Read more about these utility classes on our <a href="http://docs.pagelines.com/tutorials/html-css-utilities">HTML/CSS Utilities]</a> page.</small></p>

## Layout Examples ##

### Newspaper Columns ###

~~~ .html
<div class="row">
	<div class="span4">...</div>
	<div class="span4">...</div>
	<div class="span4">...</div>
</div>
~~~

<div class="docs-example">
	<div class="row-fluid">
		<div class="span4">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet aliquam lectus. Nulla sagittis sed dolor ut ultrices. Nunc quam mauris, consequat at mauris cursus, hendrerit laoreet turpis. Phasellus a mauris euismod, aliquet sem sit amet, facilisis orci. Sed a augue rhoncus, elementum orci sed, laoreet elit. Vivamus venenatis sem eget risus consectetur lobortis consectetur et odio. Integer quis tincidunt enim.
		</div>
		<div class="span4">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet aliquam lectus. Nulla sagittis sed dolor ut ultrices. Nunc quam mauris, consequat at mauris cursus, hendrerit laoreet turpis. Phasellus a mauris euismod, aliquet sem sit amet, facilisis orci. Sed a augue rhoncus, elementum orci sed, laoreet elit. Vivamus venenatis sem eget risus consectetur lobortis consectetur et odio. Integer quis tincidunt enim.
		</div>
		<div class="span4">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet aliquam lectus. Nulla sagittis sed dolor ut ultrices. Nunc quam mauris, consequat at mauris cursus, hendrerit laoreet turpis. Phasellus a mauris euismod, aliquet sem sit amet, facilisis orci. Sed a augue rhoncus, elementum orci sed, laoreet elit. Vivamus venenatis sem eget risus consectetur lobortis consectetur et odio. Integer quis tincidunt enim.
		</div>
	</div>
</div>

### Two Columns (Sidebar/Content) ###

~~~ .html
<div class="row">
	<div class="span4">Sidebar Content</div>
	<div class="span8">Main Content</div>
</div>
~~~

<div class="docs-example">
	<div class="row-fluid show-grid">
		<div class="span4">
		Sidebar Content
		</div>
		<div class="span8">
		Main Content
		</div>
	</div>
</div>

### Three Columns (Two Sidebars/Main Content)

~~~ .html
<div class="row">
	<div class="span3">Sidebar Content</div>
	<div class="span6">Main Content</div>
	<div class="span3">Sidebar Content</div>
</div>
~~~

<div class="docs-example">
	<div class="row-fluid show-grid">
		<div class="span3">Sidebar Content</div>
		<div class="span6">Main Content</div>
		<div class="span3">Sidebar Content</div>
	</div>
</div>

### Image & Text

~~~ .html
<div class="row">
	<div class="span4"><img src="..."></div>
	<div class="span8">Text...</div>
</div>
~~~

<div class="docs-example">
	<div class="row-fluid">
		<div class="span4"><img src="http://www.pagelines.com/wp-content/uploads/2012/04/PL-logo.jpg" style="padding:0; box-shadow:none;"></div>
		<div class="span8">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet aliquam lectus. Nulla sagittis sed dolor ut ultrices. Nunc quam mauris, consequat at mauris cursus, hendrerit laoreet turpis. Phasellus a mauris euismod, aliquet sem sit amet, facilisis orci. Sed a augue rhoncus, elementum orci sed, laoreet elit. Vivamus venenatis sem eget risus consectetur lobortis consectetur et odio. Integer quis tincidunt enim.</div>
	</div>
</div>


<div class="row-fluid">
  <div class="span12">
    <ul class="pager">
      <li class="pull-left"><a href="http://docs.pagelines.com/tutorials/browser-specific-css">&larr; Browser Specific CSS</a></li>
        <li class="pull-right"><a href="http://docs.pagelines.com/tutorials/font-awesome">Font Awesome &rarr;</a></li>
    </ul>
  </div>
</div>