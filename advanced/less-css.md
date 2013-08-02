<div class="row-fluid">
  <div class="span12">
    <ul class="breadcrumb">
        <li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
        <li><a href="http://docs.pagelines.com/advanced">Advanced</a> <span class="divider">/</span></li>
        <li class="active">LESS</li>
    </ul>
  </div>
</div>

# LESS #

LESS is a stylesheet language that extends CSS with dynamic behavior such as variables, mixins, operations and functions. LESS reduces the overall time it takes to create and maintain your code base, while also keeping your code clean and optimized.

## Variables ##

Variables allow you to specify widely-used values in a single place, and then re-use them throughout the style sheet, making global changes as easy as changing a single line of code. An example is shown below:

~~~ .css
//LESS
@myBlue:              #08D;

h1, h2, h3, h4, h5, h6 {
	color: @myBlue;
}
a:hover {
	color: @myBlue;
}
~~~

~~~ .css
// Compiled CSS
h1, h2, h3, h4, h5, h6 {
	color: #08D;
}
a:hover {
	color: #08D;
}
~~~

## Mixins ##

Mixins allow you to embed all the properties of one class into another by simply including the class name as one of its properties. It’s just like variables, but for whole classes.  Mixins can also behave like functions, and take arguments, as seen in the example below:

~~~ .css
// LESS
.rounded-corners (@radius: 5px) {
	-webkit-border-radius: @radius;
	-moz-border-radius: @radius;
	-ms-border-radius: @radius;
	-o-border-radius: @radius;
	border-radius: @radius;
}

#header {
	.rounded-corners;
}
#footer {
	.rounded-corners(10px);
}
~~~

~~~ .css
// Compiled CSS
#header {
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-ms-border-radius: 5px;
	-o-border-radius: 5px;
	border-radius: 5px;
}
#footer {
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	-ms-border-radius: 10px;
	-o-border-radius: 10px;
	border-radius: 10px;
}
~~~

## Nested Rules

Rather than constructing long selector names to specify inheritance, in LESS you can simply nest selectors inside other selectors. This makes inheritance clear and style sheets shorter.

~~~ .css
// LESS
#header {
	h1 {
		font-size: 26px;
		font-weight: bold;
    	}
    	p { font-size: 12px;
		a { text-decoration: none;
			&:hover { border-width: 1px }
		}
	}
}
~~~

~~~ .css
// Compiled CSS
#header h1 {
	font-size: 26px;
	font-weight: bold;
}
#header p {
	font-size: 12px;
}
#header p a {
	text-decoration: none;
}
#header p a:hover {
	border-width: 1px;
}
~~~

## Functions & Operations

Functions & Operations provides the ability to use mathematical operations in your CSS values, as well as manipulate values through functions.

~~~ .css
// LESS
@the-border: 		1px;
@base-color: 		#111;
@red:				#842210;

#header {
	color: (@base-color * 3);
	border-left: @the-border;
	border-right: (@the-border * 2);
}
#footer {
	color: (@base-color + #003300);
	border-color: desaturate(@red, 10%);
}
~~~

~~~ .css
// Compiled CSS

#header {
	color: #333;
	border-left: 1px;
	border-right: 2px;
}
#footer {
	color: #114411;
	border-color: #7d2717;
}
~~~

The above examples introduce you to the basics of LESS. For a more detailed overview, please visit the [http://lesscss.org/](http://lesscss.org/)

## DMS Variables ##

These are the variables which are part of PageLines DMS core.

### Layout ###

<div class="row-fluid">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td class="span3 center"><code>@pl-base</code></td>
					<td>Page background color</td>
				</tr>
				<tr>
					<td class="center"><code>@pl-page-width</code></td>
					<td>User set page width</td>
				</tr>
				<tr>
					<td class="center"><code>@pl-content-width</code></td>
					<td>Uset set content width</td>
				</tr>
				<tr>
					<td class="center"><code>@pl-responsive-width</code></td>
					<td>User set responsive width</td>
				</tr>
				<tr>
					<td class="center"><code>@pl-sidebar-width</code></td>
					<td>User set sidebar width</td>
				</tr>
				<tr>
					<td class="center"><code>@pl-secondary-width</code></td>
					<td>User set secondary sidebar width</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

### Path ###

<div class="row-fluid">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td class="span3 center"><code>@{plChildRoot}</code></td>
					<td>Used to specify root Child theme URL</td>
				</tr>
				<tr>
					<td class="center"><code>@{plRoot}</code></td>
					<td>Used to set Parent theme dir</td>
				</tr>
				<tr>
					<td class="center"><code>@{plSectionsRoot}</code></td>
					<td>Used to specify /sections dir</td>
				</tr>
				<tr>
					<td class="center"><code>@{plExtendRoot}</code></td>
					<td>Used to specify section root in pagelines-sections plugin</td>
				</tr>
				<tr>
					<td class="center"><code>@{plPluginsRoot}</code></td>
					<td>Used to specify base plugin path directory</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

#### Example ####

~~~ .css
// In Sections
.example {
	background: url(@{plSectionsRoot}/yoursection/img/bar.png);
}

// In Child Themes
.example {
	background: url(@{plChildRoot}/img/bar.png);
}
~~~

### Responsive ###

<div class="row-fluid zmb">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td><code>@resLargeDesktop</code></td>
					<td><code>1200px</code></td>
				</tr>
				<tr>
					<td><code>@resDesktop</code></td>
					<td><code>979px</code></td>
				</tr>
				<tr>
					<td><code>@resPortraitTablet</code></td>
					<td><code>767px</code></td>
				</tr>
				<tr>
					<td><code>@resPhoneLandscape</code></td>
					<td><code>480px</code></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

### Typography ###

<div class="row-fluid zmb">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td><code>@baseFontSize</code></td>
					<td><code>@plFontSize</code></td>
				</tr>
				<tr>
					<td><code>@baseLineHeight</code></td>
					<td><code>@plFontSize * 1.55</code></td>
				</tr>
				<tr>
					<td><code>@propLineHeight</code></td>
					<td><code>1.55em</code></td>
				</tr>
				<tr>
					<td><code>@baseHeaderSize</code></td>
					<td><code>@plHeaderSize</code></td>
				</tr>
				<tr>
					<td><code>@defaultFont</code></td>
					<td><code>"Helvetica Neue", "Helvetica", Arial, serif;</code></td>
				</tr>
				<tr>
					<td><code>@codeFont</code></td>
					<td><code>Menlo, Monaco, "Courier New", monospace;</code></td>
				</tr>
				<tr>
					<td><code>@baseFontFamily</code></td>
					<td><code>@plBaseFont</code></td>
				</tr>
				<tr>
					<td><code>@baseFontWeight</code></td>
					<td><code>@plBaseWeight</code></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

### Component Sizing ###

Based on `font-size` 14px and `line-height` 20px.

<div class="row-fluid zmb">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td><code>@fontSizeLarge</code></td>
					<td><code>@baseFontSize * 1.25;</code> ~18px</td>
				</tr>
				<tr>
					<td><code>@fontSizeSmall<code></td>
					<td><code>@baseFontSize * 0.85;</code> ~12px</td>
				</tr>
				<tr>
					<td><code>@fontSizeMini</code></td>
					<td><code>@baseFontSize * 0.75;</code> ~11px</td>
				</tr>
				<tr>
					<td><code>@paddingLarge</code></td>
					<td><code>11px 19px;</code> // 44px</td>
				</tr>
				<tr>
					<td><code>@paddingSmall</code></td>
					<td><code>2px 10px;</code> // 26px</td>
				</tr>
				<tr>
					<td><code>@paddingMini</code></td>
					<td><code>0 6px;</code> // 22px</td>
				</tr>
				<tr>
					<td><code>@baseBorderRadius</code></td>
					<td><code>4px;</code></td>
				</tr>
				<tr>
					<td><code>@borderRadiusLarge</code></td>
					<td><code>6px;</code></td>
				</tr>
				<tr>
					<td><code>@borderRadiusSmall</code></td>
					<td><code>3px;</code></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

### Color Variables ###

#### Grays ####

<div class="row-fluid zmb">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td class="span4"><code>@black</code></td>
					<td><code>#000</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #000"></span></td>
				</tr>
				<tr>
					<td><code>@grayDarker</code></td>
					<td><code>#222</code></td>
					<td><span class="swatch" style="background-color: #222"></span></td>
				</tr>
				<tr>
					<td><code>@grayDark</code></td>
					<td><code>#333</code></td>
					<td><span class="swatch" style="background-color: #333"></span></td>
				</tr>
				<tr>
					<td><code>@gray</code></td>
					<td><code>#555</code></td>
					<td><span class="swatch" style="background-color: #555"></span></td>
				</tr>
				<tr>
					<td><code>@grayLight</code></td>
					<td><code>#999</code></td>
					<td><span class="swatch" style="background-color: #999"></span></td>
				</tr>
				<tr>
					<td><code>@grayLighter</code></td>
					<td><code>#eee</code></td>
					<td><span class="swatch" style="background-color: #eee"></span></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

#### Accent Colors ####

<div class="row-fluid zmb">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td><code>@white</code></td>
					<td><code>#fff</code></td>
					<td><span class="swatch swatch-bordered" style="background-color: #fff"></span></td>
				</tr>
				<tr>
					<td class="span4"><code>@blue</code></td>
					<td><code>#049cdb</td>
					<td class="swatch-col"><span class="swatch" style="background-color: #049cdb"></span></td>
				</tr>
				<tr>
					<td><code>@green</code></td>
					<td><code>#46a546</code></td>
					<td><span class="swatch" style="background-color: #46a546"></span></td>
				</tr>
				<tr>
					<td><code>@red</code></td>
					<td><code>#9d261d</code></td>
					<td><span class="swatch" style="background-color: #9d261d"></span></td>
				</tr>
				<tr>
					<td><code>@yellow</code></td>
					<td><code>#ffc40d</code></td>
					<td><span class="swatch" style="background-color: #ffc40d"></span></td>
				</tr>
				<tr>
					<td><code>@orange</code></td>
					<td><code>#f89406</code></td>
					<td><span class="swatch" style="background-color: #f89406"></span></td>
				</tr>
				<tr>
					<td><code>@pink</code></td>
					<td><code>#c3325f</code></td>
					<td><span class="swatch" style="background-color: #c3325f"></span></td>
				</tr>
				<tr>
					<td><code>@purple</code></td>
					<td><code>#7a43b6</code></td>
					<td><span class="swatch" style="background-color: #7a43b6"></span></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

#### Buttons ####

<div class="row-fluid zmb">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td class="span4"><code>@btnBackground</code></td>
					<td><code>@white</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #fff"></span></td>
				</tr>
				<tr>
					<td><code>@btnBackgroundHighlight</code></td>
					<td><code>darken(@white, 10%)</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #e6e6e6"></span></td>
				</tr>
				<tr>
					<td><code>@btnBorder</code></td>
					<td><code>darken(@white, 20%)</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #ccc"></span></td>
				</tr>
				<tr>
					<td><code>@btnPrimaryBackground</code></td>
					<td><code>@linkColor</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #08c"></span></td>
				</tr>
				<tr>
					<td><code>@btnPrimaryBackgroundHighlight</code></td>
					<td><code>spin(@btnPrimaryBackground, 15%)</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #05c"></span></td>
				</tr>
				<tr>
					<td><code>@btnInfoBackground</code></td>
					<td><code>#5bc0de</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #5bc0de"></span></td>
				</tr>
				<tr>
					<td><code>@btnInfoBackgroundHighlight</code></td>
					<td><code>#2f96b4</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #2f96b4"></span></td>
				</tr>
				<tr>
					<td><code>@btnSuccessBackground</code></td>
					<td><code>#62c462</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #62c462"></span></td>
				</tr>
				<tr>
					<td><code>@btnSuccessBackgroundHighlight</code></td>
					<td><code>#51a351</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #51a351"></span></td>
				</tr>
				<tr>
					<td><code>@btnWarningBackground</code></td>
					<td><code>lighten(@orange, 15%)</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #fbb450"></span></td>
				</tr>
				<tr>
					<td><code>@btnWarningBackgroundHighlight</code></td>
					<td><code>@orange</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #f89406"></span></td>
				</tr>
				<tr>
					<td><code>@btnImportantBackground</code></td>
					<td><code>#ee5f5b</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #ee5f5b"></span></td>
				</tr>
				<tr>
					<td><code>@btnImportantBackgroundHighlight</code></td>
					<td><code>#bd362f</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #bd362f"></span></td>
				</tr>
				<tr>
					<td><code>@btnInverseBackground</code></td>
					<td><code>@gray</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #555"></span></td>
				</tr>
				<tr>
					<td><code>@btnInverseBackgroundHighlight</code></td>
					<td><code>@grayDarker</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #222"></span></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

#### Form States and Alerts ####

<div class="row-fluid zmb">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td class="span4"><code>@warningText</code></td>
					<td><code>#c09853</code></td>
					<td><span class="swatch" style="background-color: #c09853"></span></td>
				</tr>
				<tr>
					<td><code>@warningBackground</code></td>
					<td><code>#f3edd2</code></td>
					<td class="swatch-col"><span class="swatch" style="background-color: #f3edd2"></span></td>
				</tr>
				<tr>
					<td><code>@errorText</code></td>
					<td><code>#b94a48</code></td>
					<td><span class="swatch" style="background-color: #b94a48"></span></td>
				</tr>
				<tr>
					<td><code>@errorBackground</code></td>
					<td><code>#f2dede</code></td>
					<td><span class="swatch" style="background-color: #f2dede"></span></td>
				</tr>
				<tr>
					<td><code>@successText</code></td>
					<td><code>#468847</code></td>
					<td><span class="swatch" style="background-color: #468847"></span></td>
				</tr>
				<tr>
					<td><code>@successBackground</code></td>
					<td><code>#dff0d8</code></td>
					<td><span class="swatch" style="background-color: #dff0d8"></span></td>
				</tr>
				<tr>
					<td><code>@infoText</code></td>
					<td><code>#3a87ad</code></td>
					<td><span class="swatch" style="background-color: #3a87ad"></span></td>
				</tr>
				<tr>
					<td><code>@infoBackground</code></td>
					<td><code>#d9edf7</code></td>
					<td><span class="swatch" style="background-color: #d9edf7"></span></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

This is a partial listing, for the entire variable library, see the `/less` directory located in `/wp-content/themes/pagelines/`.

## DMS Mixins ##

<div class="row-fluid zmb">
	<div class="span12 zmb">
		<table class="table mid table-bordered table-striped table-condensed">
			<tbody>
				<tr>
					<td><code>.border-radius()</code></td>
					<td>Round the corners of an element. Can be a single value or four space-separated values</td>
				</tr>
					<tr>
					<td><code>.box-shadow()</code></td>
					<td>Add a drop shadow to an element</td>
				</tr>
				<tr>
					<td><code>.transition()</code></td>
					<td>Add CSS3 transition effect (e.g., <code>all .2s linear</code>)</td>
				</tr>
				<tr>
					<td><code>.box-sizing()</code></td>
					<td>Change the box model for an element (e.g., <code>border-box</code> for a full-width <code>input</code>)</td>
				</tr>
				<tr>
					<td><code>#translucent &gt; .background()</code></td>
					<td>Give an element a translucent background color</td>
				</tr>
				<tr>
					<td><code>#translucent &gt; .border()</code></td>
					<td>Give an element a translucent border color</td>
				</tr>
				<tr>
					<td><code>#gradient &gt; .vertical()</code></td>
					<td>Create a cross-browser vertical background gradient</td>
				</tr>
				<tr>
					<td><code>#gradient &gt; .horizontal()</code></td>
					<td>Create a cross-browser horizontal background gradient</td>
				</tr>
				<tr>
					<td><code>#gradient &gt; .directional()</code></td>
					<td>Create a cross-browser directional background gradient</td>
				</tr>
				<tr>
					<td><code>#gradient &gt; .vertical-three-colors()</code></td>
					<td>Create a cross-browser three-color background gradient</td>
				</tr>
				<tr>
					<td><code>#gradient &gt; .radial()</code></td>
					<td>Create a cross-browser radial background gradient</td>
				</tr>
				<tr>
					<td><code>#gradient &gt; .striped()</code></td>
					<td>Create a cross-browser striped background gradient</td>
				</tr>
				<tr>
					<td><code>#gradientBar()</code></td>
					<td>Used for buttons to assign a gradient and slightly darker border</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

#### Example ####

##### Border Radius #####

~~~ .css
// LESS
.example {
	.border-radius(5px);
}
~~~

~~~ .css
// Compiled CSS
.example {
	-webkit-border-radius:5px;
	-moz-border-radius:5px;
	border-radius:5px;
}
~~~

##### Box Shadow #####

~~~ .css
// LESS
.example {
	.box-shadow(0 0 5px black);
}
~~~

~~~ .css
// Compiled CSS
.example {
	-webkit-box-shadow:0px 0px 5px black;
	-moz-box-shadow:0px 0px 5px black;
	box-shadow:0px 0px 5px black;
}
~~~

##### Gradients #####

~~~ .css
// LESS
.example {
	#gradient > .vertical (#000000,#333333);
}
~~~

~~~ .css
// Compiled CSS
.example {
	background-color: #000000;
	background-image: -moz-linear-gradient(top,#000000, #333333;
	background-image: -ms-linear-gradient(top,#000000, #333333;
	background-image: -webkit-gradient(linear,0 0,0 100%,from(#000000, #333333;
	background-image: -webkit-linear-gradient(top,#000000, #333333;
	background-image: -o-linear-gradient(top,#000000, #333333;
	background-image: linear-gradient(top,#000000, #333333;
	background-repeat: repeat-x;
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000, #333333;
}
~~~

This is a partial listing, for the entire mixins library, see the `mixin.less` file located in `/wp-content/themes/pagelines/less/`.

## Example ##

In the example below, we will be using the Masthead section, and using the gradient and border radius mixins. The standard Masthed section looks like this:

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/override-default-masthead.jpg)

Using Google Chrome's web dev tools to inspect the Masthead section, we can indentify the correct class(es), needed to override the sections default CSS.

~~~ .css
.masthead {
	position: relative;
	margin-bottom: 65.1px;
}
~~~

By using the the LESS mixins`.border-radius();` and `#gradient > .vertical()`, we can add a gradient background with a border radius to the masthead with just a few lines of code.

~~~ .css
#site .masthead {
	#gradient > .vertical(#05F, #09F);
	.border-radius(8px);
	padding: 20px;
}
~~~

We will also add some `padding: 20px;` just to give our header, text and buttons some space, the end result looks like this:

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/custom-less-masthead.jpg)

As you can see, with just three lines of LESS CSS, we have created a browser compatible customization. If we were to use standard CSS, our custom CSS would look like this:

~~~ .css
#site .masthead {
	background-color: #008FBE;
	background-image: -moz-linear-gradient(top, #08A, #09D);
	background-image: -ms-linear-gradient(top, #08A, #09D);
	background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#08A), to(#09D));
	background-image: -webkit-linear-gradient(top, #06F, #09F);
	background-image: -o-linear-gradient(top, #08A, #09D);
	background-image: linear-gradient(top, #08A, #09D);
	background-repeat: repeat-x;
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088aa', endColorstr='#0099dd', GradientType=0);
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
	padding: 20px;
}
~~~

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/hooks">&larr; Hooks</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/advanced/override-sections">Override Sections &rarr;</i></a></li>
		</ul>
	</div>
</div>
