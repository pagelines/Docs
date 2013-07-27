<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
  			<li class="active">Shortcodes</li>
		</ul>
	</div>
</div>

# Shortcodes #

## PL RAW ##

Wordpress is designed to add `<p></p>` tags whenever you add a new line. This is great when using normal text, but when writing code or using shortcodes, it can be the cause of all sorts of issues.

To resolve this issue, we have created a utility shortcode that stops Wordpress adding `<p></p>` tags whenever a new linebreak has been used, or in cleaning up copied code to which paragraph tags were included. Simply wrap the `[pl_raw][/pl_raw]` around your code/shortcode and erroneous tags will be eradicated. See examples below.

~~~ .html
[pl_raw]
[pl_button type="btn" link="" target="blank"]Default[/pl_button]
[/pl_raw]
~~~

Please be aware that the `[pl_raw]` shortcode can only be used once per page.

## Buttons ##

There are 7 different color schemes to choose from, as well 3 sizes; mini, default and large.

<div class="row-fluid">
	<div class="span12">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<th>Attribute</th>
					<th>Description</th>
				</tr>
				<tr>
					<td><code>type=""</code></td>
					<td>Controls color</td>
				</tr>
				<tr>
					<td><code>size=""</code></td>
					<td>Determines size. Includes mini, and large</td>
				</tr>
				<tr>
					<td class="span2"><code>link=""</code></td>
					<td>Button link</td>
				</tr>
				<tr>
					<td><code>target="blank"</code></td>
					<td>Opens link in new window</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

### Standard Buttons ###

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>Button</th>
			<th>Description</th>
			<th>Shortcode</th>
		</tr>
    </thead>
	<tbody>
		<tr>
			<td><button type="button" class="btn">Default</button></td>
			<td>Standard gray button with gradient</td>
			<td><code>[pl_button type="btn" link="" target="blank"]Default[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-primary">Primary</button></td>
			<td>Provides extra visual weight and identifies the primary action in a set of buttons</td>
			<td><code>[pl_button type="primary" link="" target="blank"]Primary[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-info">Info</button></td>
			<td>Used as an alternative to the default styles</td>
			<td><code>[pl_button type="info" link="" target="blank"]Info[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-success">Success</button></td>
			<td>Indicates a successful or positive action</td>
			<td><code>[pl_button type="success" link="" target="blank"]Success[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-warning">Warning</button></td>
			<td>Indicates caution should be taken with this action</td>
			<td><code>[pl_button type="warning" link="" target="blank"]Warning[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-danger">Important</button></td>
			<td>Indicates a dangerous or potentially negative action</td>
			<td><code>[pl_button type="important" link="" target="blank"]Important[/pl_button]</code></td>
		</tr>
		<tr>
			<td><button type="button" class="btn btn-inverse">Inverse</button></td>
			<td>Alternate dark gray button, not tied to a semantic action or use</td>
			<td><code>[pl_button type="inverse" link="" target="blank"]Inverse[/pl_button]</code></td>
		</tr>
	</tbody>
</table>

### Dropdown Buttons ###

The Dropdown button shortcode supports both `size=""` for button size and `type=""` for color control like the Standard Button shortcode.

<div class="row-fluid">
	<div class="span12">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td class="span2 center"><code>size=""</code></td>
					<td>Determines size. Includes mini, and large</td>
				</tr>
				<tr>
					<td class="center"><code>type=""</code></td>
					<td>Controls color</td>
				</tr>
				<tr>
					<td class="center"><code>label=""</code></td>
					<td>Button label</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

~~~ .html
[pl_buttondropdown size="large" type="info" label="button"]
	<ul>
  		<li><a href="#">This</a></li>
  		<li><a href="#">This</a></li>
  		<li><a href="#">This</a></li>
	</ul>
[/pl_buttondropdown]
~~~

<div class="row-fluid">
	<div class="span3">
		<div class="btn-group"><button class="btn btn-large btn-important dropdown-toggle" data-toggle="dropdown" href="#">button <span class="caret"></span></button>
			<ul class="dropdown-menu">
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><button class="btn btn-large btn-primary dropdown-toggle" data-toggle="dropdown" href	="#">button <span class="caret"></span></button>
				<ul class="dropdown-menu">
					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</div>
		</div>
		<div class="span3">
			<div class="btn-group"><button class="btn btn-large btn-success dropdown-toggle" data-toggle="dropdown" href="#">button <span class="caret"></span></button>
				<ul class="dropdown-menu">
					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</div>
		</div>
		<div class="span3">
			<div class="btn-group"><button class="btn btn-large btn-warning dropdown-toggle" data-toggle="dropdown" href="#">button <span class="caret"></span></button>
				<ul class="dropdown-menu">
					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
  					<li><a href="#">This</a></li>
				</ul>
			</div>
		</div>
</div>

### Split Button Dropdown ###

<table class="table mid table-bordered table-striped table-condensed">
	<tbody>
		<tr>
			<td class="span2 center"><code>size=""</code></td>
			<td>Determines size. Includes mini, and large</td>
		</tr>
		<tr>
			<td class="center"><code>type=""</code></td>
			<td>Controls color</td>
		</tr>
		<tr>
			<td class="center"><code>label=""</code></td>
			<td>Button label</td>
		</tr>
	</tbody>
</table>

~~~ .html
[pl_splitbuttondropdown size="large" type="success" label="button"]
<ul>
	<li><a href="#">This</a></li>
	<li><a href="#">This</a></li>
	<li><a href="#">This</a></li>
</ul>
[/pl_splitbuttondropdown]
~~~

<div class="row-fluid">
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-important">button</a><a class="btn btn-large btn-important dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-primary">button</a><a class="btn btn-large btn-primary dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
  				<li><a href="#">This</a></li>
  				<li><a href="#">This</a></li>
  				<li><a href="#">This</a></li>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-success">button</a><a class="btn btn-large btn-success dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
			</ul>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group"><a class="btn btn-large btn-warning">button</a><a class="btn btn-large btn-warning dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
			<ul class="dropdown-menu">
				<li><a href="#">This</a></li>
				<li><a href="#">This</a></li>
  				<li><a href="#">This</a></li>
			</ul>
		</div>
	</div>
</div>

### Button Groups ###

You can specify the same attrbutes as the buttons above, but placed into the markup instead of the shortcode.

~~~ .html
[pl_buttongroup]
	<a class="btn btn-important" href="#">Link</a>
	<a class="btn btn-important" href="#">Link</a>
	<a class="btn btn-important" href="#">Link</a>
[/pl_buttongroup]
~~~

<div class="row-fluid">
	<div class="span3">
		<div class="btn-group">
			<a class="btn btn-important" href="#">Link</a>
			<a class="btn btn-important" href="#">Link</a>
			<a class="btn btn-important" href="#">Link</a>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group">
			<a class="btn btn-primary" href="#">Link</a>
			<a class="btn btn-primary" href="#">Link</a>
			<a class="btn btn-primary" href="#">Link</a>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group">
			<a class="btn btn-success" href="#">Link</a>
			<a class="btn btn-success" href="#">Link</a>
			<a class="btn btn-success" href="#">Link</a>
		</div>
	</div>
	<div class="span3">
		<div class="btn-group">
			<a class="btn btn-warning" href="#">Link</a>
			<a class="btn btn-warning" href="#">Link</a>
			<a class="btn btn-warning" href="#">Link</a>
		</div>
	</div>
</div>

## Labels & Badges ##

### Labels ###

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Label</th>
			<th>Usage</th>
			<th>Notes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="center span3"><span class="label label-default">Default</span></td>
			<td><code>[pl_label type="default"]Default[/pl_label]</code></td>
			<td class="span3">Available attributes include default, success, warning, important, info, and inverse</td>
		</tr>
		<tr>
			<td class="center"><span class="label label-success">Success</span></td>
			<td><code>[pl_label type="success"]Success[/pl_label]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-warning">Warning</span></td>
			<td><code>[pl_label type="warning"]Warning[/pl_label]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-important">Important</span></td>
			<td><code>[pl_label type="important"]Important[/pl_label]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-info">Info</span></td>
			<td><code>[pl_label type="info"]Info[/pl_label]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="label label-inverse">Inverse</span></td>
			<td><code>[pl_label type="inverse"]Inverse[/pl_label]</code></td>
			<td></td>
		</tr>
	</tbody>
</table>

### Badges ###

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Badge</th>
			<th>Usage</th>
			<th>Notes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="center span3"><span class="badge badge-default">Default</span></td>
			<td><code>[pl_badge type="default"]Default[/pl_badge]</code></td>
			<td class="span3">Available attributes include default, success, warning, important, info, and inverse</td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-success">Success</span></td>
			<td><code>[pl_badge type="success"]Success[/pl_badge]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-warning">Warning</span></td>
			<td><code>[pl_badge type="warning"]Warning[/pl_badge]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-important">Important</span></td>
			<td><code>[pl_badge type="important"]Important[/pl_badge]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-info">Info</span></td>
			<td><code>[pl_badge type="info"]Info[/pl_badge]</code></td>
			<td></td>
		</tr>
		<tr>
			<td class="center"><span class="badge badge-inverse">Inverse</span></td>
			<td><code>[pl_badge type="inverse"]Inverse[/pl_badge]</code></td>
			<td></td>
		</tr>
	</tbody>
</table>

## Modals ##

Modals are great for situations where it’s important that the background context be maintained.
The Modal contains a title, content, along with a set of actions in the footer and can be used with Buttons, Labels and Badges.

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span3 center"><code>title=""</code></td>
			<td>Serves as the title of the modal window</td>
		</tr>
		<tr>
			<td class="center"><code>type=""</code></td>
			<td>The type of element that triggers the modal. Available types include: btn, label, badge.</td>
		</tr>
		<tr>
			<td class="center"><code>colortype=""</code></td>
			<td>Available color types include: info, success, warning, important, and inverse.</td>
		</tr>
		<tr>
			<td class="center"><code>label=""</code></td>
			<td>Serves as the label for the element that opens the modal popup</td>
		</tr>
	</tbody>
</table>

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/modal-example.jpg)

~~~ .html
[pl_modal title="Title" type="btn" colortype="info" label="Click Me!"]
Some content here for the cool modal pop up. Labels, badges, and buttons can open them!
[/pl_modal]
~~~

## Tooltips & Popovers ##

### Tooltips ###

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span2 center"><code>tip=""</code></td>
			<td>This is what's displayed inside the tip.</td>
		</tr>
		<tr>
			<td class="span2 center"><code>position=""</code></td>
			<td>Specifies the location of the tooltip. top,left,bottom,and right</td>
		</tr>
	</tbody>
</table>

~~~ .html
This is a [pl_tooltip tip="Cool" position="right"]tooltip [/pl_tooltip] example.
~~~

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/tooltip-example.jpg)

### Popovers ###

Use Popover to provide subtextual information to a page without affecting layout.

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span2 center"><code>position=""</code></td>
			<td>Specifies the location of the popover top, left, bottom and right</td>
		</tr>
		<tr>
			<td class="span2 center"><code>title=""</code></td>
			<td>Specifies the title of the popover.</td>
		</tr>
		<tr>
			<td class="center"><code>content=""</code></td>
			<td>Specifies the content inside of the popover.</td>
		</tr>
	</tbody>
</table>

~~~ .html
This is a [pl_popover title="Title" content="..." position="right"]popover[/pl_popover] example.
~~~

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/popover-example.jpg)

## Alerts ##

Wrap any text and an optional dismiss button for a basic alert message, which supports multiple color schemes.

<div class="row-fluid">
	<div class="span6">
		<div class="alert alert-warning alert-block">This is a Warning.</div>
	</div>
	<div class="span6">
		<div class="alert alert-success"><a class="close" data-dismiss="alert" href="#">×</a>This is a Success, using the <code>.closable="yes"</code> attribute.</div>
	</div>
</div>
<div class="row-fluid">
	<div class="span6 zmb">
		<div class="alert alert-info alert-block">This is useful Info.</div>
	</div>
	<div class="span6 zmb">
		<div class="alert alert-important"><a class="close" data-dismiss="alert" href="#">×</a>This is Important using the <code>.closable="yes"</code> attribute.</div>
	</div>
</div>

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span2"><code>type=""</code></td>
			<td>Specifies the color. Available types include: info,</td>
		</tr>
		<tr>
			<td><code>closable="yes"</code></td>
			<td>Displays an "X" which makes alert disappear when clicked.</td>
		</tr>
	</tbody>
</table>

~~~ .html
[pl_alertbox type="info"]
This is an error.
[/pl_alertbox]
~~~

### Alert Headings ###

<div class="alert alert-important alert-block">
		<h2 class="alert-heading zmt zb">Alert Heading</h2>
		<p>This is Important.</p>
</div>

~~~ .html
[pl_alertbox type="info"]
	<h2 class="alert-heading">Alert Heading</h2>
	This is an error.
[/pl_alertbox]
~~~

## Quotes ##

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span3 center"><code>pull=""</code></td>
			<td>Specifies blockquote position. Default is left, and the only other available attribute includes: right</td>
		</tr>
		<tr>
			<td class="center"><code>cite=""</code></td>
			<td>Serves as the source of the quote</td>
		</tr>
	</tbody>
</table>

~~~ .html
[pl_blockquote cite="Someone Famous"]
	This is a quote with a source
[/pl_blockquote]
~~~

<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>

### Pull Right ###

~~~ .html
[pl_blockquote pull="right" cite="Someone Famous"]
	This is a quote with a source
[/pl_blockquote]
~~~

<blockquote class="pull-right">
	<p>This is a quote. Below is the source if all goes well
		<small>Someone Famous</small>
	</p>
</blockquote>

## Tabs ##

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span3 center"><code>type=""</code></td>
			<td>Specifies...</td>
		</tr>
		<tr>
			<td class="center"><code>pl_tabtitle active=""</code></td>
			<td>Specifies the active title tab</td>
		</tr>
		<tr>
			<td class="center"><code>pl_tabtitle number=""</code></td>
			<td>Specifies the position of the title tab</td>
		</tr>
		<tr>
			<td class="center"><code>pl_tabcontent active=""</code></td>
			<td>Specifies the active content tab</td>
		</tr>
		<tr>
			<td class="center"><code>pl_tabcontent number=""</code></td>
			<td>Specifies the position of the content tab</td>
		</tr>
	</tbody>
</table>

<div class="docs-example zmt">
<div class="tabs">		    		<script>
			    		jQuery(function(){
							 jQuery('a[data-toggle="tab"]').on('shown', function (e) {
							  e.target // activated tab
							  e.relatedTarget // previous tab
							})
						});
		    		</script><ul class="nav nav-tabs">
<li class="active"><a href="#1" data-toggle="tab">Title 1</a></li>
<li class=""><a href="#2" data-toggle="tab">Title 2</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane active" id="1"><p></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
<p></p></div>
<div class="tab-pane" id="2"><p></p><p><img class="pl-imageframe tac colorbox-1607" alt="" src="http://netdna.pagelines.me/wp-content/themes/pagelines/sections/features/images/feature3.jpg" data-lazy-loaded="true" style="display: inline;"></p>
<p></p></div>
</div>
</div>
</div>

## Accordion ##

<table class="table mid table-bordered table-striped table-condensed">
<tbody>
<tr>
<th>Attribute</th>
<th>Description</th>
</tr>
<tr>
<td class="span3 center"><code>pl_accordion name=</code></td>
<td>Serves as the ID(#) of the accordion. To have multiple accordions, specify different names.</td>
</tr>
<tr>
<td class="center"><code>pl_accordioncontent name=</code></td>
<td>This content name must match the accordion name</td>
</tr>
<tr>
<td class="center"><code>number=""</code></td>
<td>Indicates the order the content sections are displayed</td>
</tr>
<tr>
<td class="center"><code>heading=""</code></td>
<td>Serves as the title of the tab</td>
</tr>
<tr>
<td class="center"><code>open=""</code></td>
<td>Indicates whether or not the tab should be opened by default</td>
</tr>
</tbody>
</table>

~~~ .html
[pl_accordion name="accordion"][pl_accordioncontent name="accordion" number="1" heading="Tile 1" open="yes"]
Content 1
[/pl_accordioncontent]
[pl_accordioncontent name="accordion" number="2" heading="Title 2"]
<img class="pl-imageframe" src="" alt="" />
[/pl_accordioncontent]
[/pl_accordion]
~~~

<div class="accordion" id="accordion2">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
        Title
      </a>
    </div>
    <div id="collapseOne" class="accordion-body collapse in">
      <div class="accordion-inner">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
    </div>
  </div>
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
        TItle
      </a>
    </div>
    <div id="collapseTwo" class="accordion-body collapse">
      <div class="accordion-inner">
        <img class="pl-imageframe" src="http://netdna.pagelines.me/wp-content/themes/pagelines/sections/features/images/feature3.jpg" alt="">
      </div>
    </div>
  </div>
</div>

## Carousel ##

<table class="table mid table-bordered table-striped table-condensed">
<tbody>
<tr>
<th>Attribute</th>
<th>Description</th>
</tr>
<tr>
<td class="span2 center"><code>name=""</code></td>
<td>Serves as the ID (#) of the carousel. For more than one carousel, specify distinct names</td>
</tr>
<tr>
<td class="center"><code>first=""</code></td>
<td>Signifies the first slide in the carousel rotation</td>
</tr>
<tr>
<td class="center"><code>title=""</code></td>
<td>Indicates the title of the slide</td>
</tr>
<tr>
<td class="center"><code>imageurl=""</code></td>
<td>Specifies the path to the carousel image</td>
</tr>
</tbody>
</table>

<div id="myCarousel" class="carousel slide">
	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class=""></li>
		<li data-target="#myCarousel" data-slide-to="1" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="2" class=""></li>
	</ol>
	<div class="carousel-inner">
		<div class="item">
			<img src="http://netdna.pagelines.me/wp-content/themes/pagelines/sections/features/images/feature1.jpg">
			<div class="carousel-caption">
				<h4>First Thumbnail label</h4>
				<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
			</div>
		</div>
		<div class="item active">
			<img src="http://netdna.pagelines.me/wp-content/themes/pagelines/sections/features/images/feature2.jpg">
			<div class="carousel-caption">
				<h4>Second Thumbnail label</h4>
				<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
			</div>
		</div>
		<div class="item">
			<img src="http://netdna.pagelines.me/wp-content/themes/pagelines/sections/features/images/feature3.jpg">
			<div class="carousel-caption">
				<h4>Third Thumbnail label</h4>
				<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
			</div>
		</div>
	</div>
	<a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
	<a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
</div>


~~~ .html
[pl_carousel name="PageLinesCarousel"][pl_carouselimage first="yes" title="Slide 1" imageurl="" ]
Here is the first slide and it's caption.
[/pl_carouselimage]

[pl_carouselimage title="Slide 2" imageurl=""]
Here is the second slide, in all its glory.
[/pl_carouselimage]

[pl_carouselimage title="Slide 3" imageurl=""]
You can have as many slides as you can create.
[/pl_carouselimage]

[/pl_carousel]
~~~

## Social Media ##

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Button</th>
			<th>Usage</th>
			<th>Notes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="//pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=http%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Next%20stop%3A%20Pinterest" data-pin-do="buttonPin" data-pin-config="beside"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a><script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script></td>
			<td><code>[pinterest img=url(optional)]</code></td>
			<td>Optionally add an image url to the shortcode. If none is added one will be auto detected.</td>
		</tr>
		<tr>
			<td><div class="fb-like" data-href="http://developers.facebook.com/docs/reference/plugins/like" data-send="false" data-layout="button_count" data-width="450" data-show-faces="true"></div><div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script></td>
			<td><code>[like_button url=http://url-to-like.com]</code></td>
			<td>Add an optional URL to like, otherwise likes the page that the button is placed on.</td>
		</tr>
		<tr>
			<td><div class="g-plusone" data-annotation="inline" data-width="300"></div><script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script></td>
			<td><code>[googleplus]</code></td>
			<td></td>
		</tr>
		<tr>
			<td><script src="//platform.linkedin.com/in.js" type="text/javascript">
 lang: en_US
</script>
<script type="IN/Share"></script></td>
			<td><code>[linkedin]</code></td>
			<td></td>
		</tr>
		<tr>
			<td><a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script></td>
			<td><code>[twitter_button]</code></td>
			<td></td>
		</tr>
		<tr>
			<td><a href="https://twitter.com/pagelines" class="twitter-follow-button" data-show-count="false">Follow @pagelines</a></td>
			<td><code>[twitter_button type="follow"]</code></td>
			<td>Input Twitter handle under DMS Toolbar &rarr; Global Options &rarr; Social & Local.</td>
		</tr>
	</tbody>
</table>

## Responsive Videos ##

A lightweight, easy-to-use shortcode for fluid width video embeds, which supports YouTube, Vimeo and Dailymotion.

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span1 center"><code>type=""</code></td>
			<td>Available types include youtube, vimeo and dailymotion</td>
		</tr>
		<tr>
			<td class="center"><code>id=""</code></td>
			<td>ID of the video. See below for an example</td>
		</tr>
	</tbody>
</table>

<div class="row-fluid">
	<div class="span6">
		<img src="http://netdna.pagelines.me/wp-content/blogs.dir/686/files/2012/10/vimeo.jpg?v=1371676907" alt="" title="vimeo" style="margin-bottom: 1.5em;">
	</div>
	<div class="span6">
		<img src="http://netdna.pagelines.me/wp-content/blogs.dir/686/files/2012/10/youtube.jpg?v=1371676907" alt="" title="youtube" style="margin-bottom: 1.5em;">
	</div>
</div>

<iframe src="http://player.vimeo.com/video/67237715?title=0&amp;byline=0" width="870" height="419" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

## Maps ##

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="span2 center"><code>width=""</code></td>
			<td>Width of embedded map, in pixels or percent</td>
		</tr>
		<tr>
			<td class="center"><code>height=""</code></td>
			<td>Height of embedded map, in pixels or percent</td>
		</tr>
		<tr>
			<td class="center"><code>address=""</code></td>
			<td>Address of location.</td>
		</tr>
	</tbody>
</table>

~~~ .html
[googlemap width="100%" height="300" address="San Francisco,CA"]
~~~

<iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;q=San Francisco,CA&amp;output=embed"></iframe>

## Charts ##

<table class="table mid table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th>Attribute</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="center"><code>size=""</code></td>
			<td>Specifies the size of the chart</td>
		</tr>
		<tr>
			<td class="center"><code>bg=""</code></td>
			<td>Background color of chart</td>
		</tr>
		<tr>
			<td class="center"><code>title=""</code></td>
			<td>Title of chart</td>
		</tr>
		<tr>
			<td class="center"><code>labels=""</code></td>
			<td>Data labels, comma separated</td>
		</tr>
		<tr>
			<td class="center"><code>advanced=""</code></td>
			<td>For l33t</td>
		</tr>
		<tr>
			<td class="center"><code>type=""</code></td>
			<td>Type of chart: line, xyline, sparkline, meter, scatter, venn, pie, pie2d</td>
		</tr>
		<tr>
			<td class="span2 center"><code>data=""</code></td>
			<td>Data, separated between commas</td>
		</tr>
		<tr>
			<td class="center"><code>colors=""</code></td>
			<td>Specifies the color of the data</td>
		</tr>
	</tbody>
</table>

~~~ .html
[chart data="41.52,37.79,20.67,0.03" bg="F7F9FA" labels="Reffering+sites|Search+Engines|Direct+traffic|Other" colors="058DC7,50B432,ED561B,EDEF00" size="488x200" title="Traffic Sources" type="pie"]
~~~

<img title="Traffic Sources" src="http://chart.apis.google.com/chart?cht=p3&amp;chtt=Traffic Sources&amp;chl=Reffering+sites|Search+Engines|Direct+traffic|Other&amp;chco=058DC7,50B432,ED561B,EDEF00&amp;chs=488x200&amp;chd=t:41.52,37.79,20.67,0.03&amp;chf=bg,s,F7F9FA" alt="Traffic Sources">

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/tutorials/font-awesome">&larr; Font Awesome</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/tutorials/typography">Typography &rarr;</a></li>
		</ul>
	</div>
</div>
