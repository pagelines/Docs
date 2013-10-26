<div class="row-fluid">
  <div class="span12">
    <ul class="breadcrumb">
        <li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
        <li><a href="http://docs.pagelines.com/customize">Customize</a> <span class="divider">/</span></li>
        <li class="active">PageLines Customize Plugin</li>
    </ul>
  </div>
</div>

# PageLines Customize Plugin #

The PageLines Customize Plugin is recommended for users who have moderate knowledge customizing sites using HTML/CSS, and PHP.

The plugin contains both `style.css`, and `functions.php` files like a child theme. It also supports `style.less`, hooks and localizations with the creation of a language folder.

However, you're unable to override sections with the Customize Plugin. If you do plan on overriding sections, you will need to use the [Base Theme](/http://docs.pagelines.com/customize/base-child-theme) method instead.

<table class="table table-striped table-bordered table-condensed">
	<thead>
		<tr>
			<th>Safe from updates</th>
			<th>CSS/LESS</th>
			<th>Hooks</th>
			<th>Override Sections</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><i class="icon-ok text-success"></td>
			<td><i class="icon-ok text-success"></td>
			<td><i class="icon-ok text-success"></td>
			<td><i class="icon-remove text-error"></td>
		</tr>
	</tbody>
</table>

## Installation ##

* Download the **PageLines Customize** plugin from [here](http://www.pagelines.com/api/store_free/plugin-pagelines-customize.zip)
* Now install the plugin like any other Wordpress plugin, from your **Wordpress Administrator Dashboard &rarr; Plugins &rarr; Add New &rarr; Upload**.
* Once the installation process has been completed, activate the plugin.

## File Structure ##

Once installed and activated, the PageLines Customize Plugin folder will be located here:  **wp-content → plugins → pagelines-customize**, and contains the following files:

<pre>
<i class="icon-folder-open"></i> pagelines-customize/
	<i class="icon-file"></i> functions.php
	<i class="icon-file"></i> pagelines-customize.php
	<i class="icon-file"></i> style.css
	<i class="icon-file"></i> thumb.png
</pre>

## Adding Customization ##

### CSS ###

There are two principal methods for adding custom CSS to the PageLines Customize Plugin, these are: the `style.css` file and the `style.less` file. Each method applies to individual levels of skill -- based on your comfort level and proficiency, which we'll go through below.

<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>Stylesheet</th>
      <th>Supports CSS</th>
      <th>Supports LESS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>style.css</strong></td>
      <td><i class="icon-ok text-success"></i></td>
      <td><i class="icon-remove text-error"></i></td>
    </tr>
    <tr>
      <td><strong>style.less</strong></td>
      <td><i class="icon-ok text-success"></i></td>
      <td><i class="icon-ok text-success"></i></td>
    </tr>
  </tbody>
</table>

As you can see from the table above, the `style.css` file only supports standard CSS and not less. However, the `style.less` file supports both, if you do plan to utilize LESS into your design, we recommend consolidating all your CSS into the `style.less` file, for easier management of your code.

#### style.css ####

To add custom CSS to the style.css file, we recommend **not** using the WordPress Editor, but instead use your FTP client which should be configured to work with your code editor when opening `.css`, `.html`, .`php` files.

When you open the style.css file in your code editor, you see the following:

~~~ .css
/* ============================== */
/* = HOW TO CUSTOMIZE PAGELINES = */
/* ============================== */

/*

Rules placed in this stylesheet will override the default styles of the Base Platform theme and will not be changed or over written when you update the 
Platform framework. Additionally, since this stylesheet is purely for editing purposes you can easily undo or erase some of the CSS to return your site back to the look and feel of the Base theme.

In the Base theme the footer is black and the CSS looks like this:

	#footer {
		clear:both;
		font-size:1em;
		overflow:hidden;
		text-align: left;
		background: #000;
		color: #999;
		position: relative;
	}

To change the background color to white, all you have to do is declare a new rule for the color like so:

		#footer { background: #FFF; }

A great tool for modifying themes and inspecting CSS elements is the FireBug extension for FireFox. You can also use the developer tools provided by Chrome (right-click and "inspect element") or Internet Explorer if you're feeling dangerous.

LEARN CSS - We recommend using Lynda.com video tutorials to learn using CSS.
			Also, for a comprehensive list of CSS rules and usage try consulting W3 schools @ http://www.w3schools.com/css/default.asp
*/
/* ============================== */
/* = Start Your Custom CSS Here = */
/* ============================== */
~~~

The information you see above isn't required and can be removed if you like. Once your custom CSS has been added, save the file and if your FTP client is configured correctly, it should upload the file to your server, replacing the older style.css. Refresh your website and your changes should have taken effect.

#### style.less ####

In order to use the style.less method, you will first need to create a **style.less** file, see our [Adding LESS Support](/customize/adding-less-css-support)  page on how to do this. Once the `style.less` file has been created you're now able to add both CSS and LESS CSS to the Base Theme.

For more information about LESS CSS , see our [LESS CSS](/advanced/less-css) documentation which also includes some examples.

### PHP ###

#### functions.php ####

The functions.php file allows you to add/manipulate functionality to PageLines DMS. You can use it to call functions and to define your own customized actions. The code is only executed when the PageLines Customized Plugin is activated, if the plugin is deactivated, the functionality will not carry over. The `functions.php` file supports numerous blocks of code to be used for many different purposes.

For more information about hooks, see our [Hooks](/advanced/hooks) documentation which also includes some examples.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/customize/dms-customize-options">&larr; DMS Customize Options</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/customize/base-child-theme">The Base Child Theme &rarr;</a></li>
		</ul>
	</div>
</div>
