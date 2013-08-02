<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
  			<li class="active">Browser Specific CSS</li>
		</ul>
	</div>
</div>

# Browser Specific CSS #

The Browser Specific CSS plugin adds a browser or device specific class to your body tag, depending on what browser/device is viewing the page. Which can be used to add styling for that particular browser or device.

## Usage ##

### Without Plugin ###

If the browser specific css plugin isn’t installed or activated, your body tag would look like this.

~~~ .html
<body class="home blog logged-in admin-bar custom responsive pagelines posts full_width ">
~~~

### With Plugin ###

With the Browser Specific CSS plugin enabled, if you were to view your website on a desktop PC/Mac and in Google Chrome, the body tag will contain a `.desktop` and `.chrome` class.

~~~ .html
<body class="home blog logged-in admin-bar custom responsive pagelines posts full_width desktop chrome">
~~~

### Full List of Browser/Device Classes ###

Below is a list of all available classes for you to choose for both browsers and devices.

<div class="row-fluid">
<div class="span4 zmb">
<ul class="unstyled zmt zmb">
<li><code>.android</code></li>
<li><code>.blackberry</code></li>
<li><code>.chrome</code></li>
<li><code>.desktop</code></li>
<li><code>.firefox</code></li>
<li><code>.ie</code></li>
<li><code>.ios</code></li>
<li><code>.ipad</code></li>
<li><code>.iphone</code></li>
</ul>
</div>
<div class="span4 zmb">
<ul class="unstyled zmt zmb">
<li><code>.ipod</code></li>
<li><code>.lg</code></li>
<li><code>.lynx</code></li>
<li><code>.mobile</code></li>
<li><code>.motorola</code></li>
<li><code>.nintendo</code></li>
<li><code>.nokia</code></li>
<li><code>.opera-mobile</code></li>
<li><code>.opera</code></li>
</ul>
</div>
<div class="span4 zmb">
<ul class="unstyled zmt zmb">
<li><code>.palm</code></li>
<li><code>.safari</code></li>
<li><code>.samsung</code></li>
<li><code>.samsung-galaxy-tab</code></li>
<li><code>.sony-ericsson</code></li>
<li><code>.symbian</code></li>
<li><code>.tablet</code></li>
<li><code>.windows-mobile</code></li>
</ul>
</div>
</div>

If Internet explorer is detected the version will also be added like `.ie7`.

## Examples ##

Ideally you shouldn’t need specific CSS for certain browsers or devices. However, as long as Internet Explorer 7 and 8 browsers continue to hold significant market share, you will, in some cases need to use CSS rules to assist outdated technology.

Therefore, below are some examples on how to use the Browser Specific CSS.

### Background Color ###

For this example, let’s imagine that you wish to have a different colored background for visitors who use Google Chrome.

~~~ .css
body.chrome {
	background-color: black;
}
~~~

You’re free to change the `.chrome` from the example code, to any specific browser/device class from the list above. Using the above code, allows visitors using the Google Chrome browser to view your site with a black body background color.

You can also add any CSS property you like. For example, `background-image` giving visitors a unique background image, `font-size`increasing/decreasing the size of text for that specific browser.

### Targeting a Section ###

There may come a time where you need to make fine adjustments on a section for a specific browser or device, this could be increasing the padding to reducing the size of text.

For this example, let’s say you wish to change the background color of the Masthead section for visitors using Mozilla FireFox.

~~~ .css
body.firefox .section-masthead .content {
	background-color: red;
}
~~~

You’re free to change the `.firefox` from the example code, to any specific browser/device class from the list above. The code above is targeting the `.content` area of the Masthead section, you can edit this code to apply CSS to a specific area for that section.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/tutorials/using-plugins">&larr; Using Plugins</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/tutorials/responsive-grid">The Responsive Grid &rarr;</a></li>
		</ul>
	</div>
</div>
