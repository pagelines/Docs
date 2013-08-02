<div class="row-fluid">
  <div class="span12">
    <ul class="breadcrumb">
        <li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
        <li><a href="http://docs.pagelines.com/advanced">Advanced</a> <span class="divider">/</span></li>
        <li class="active">Override Sections</li>
    </ul>
  </div>
</div>

# Override Sections #

There may come a point during your design process where a section doesn't provide a specific function required for your design, such as header tag changed from `<h3>` to `<h2>`. This is where override sections or child sections are used. In PageLines DMS overriding sections is a very straight forward process.

## How to Override Sections ##

To begin, let's make sure we are using the **Base Theme** customization method, as this is the only method which supports overriding sections.  Make sure Base Theme is installed from our Store.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/base-theme-active.jpg)

Once we have determined that the **Base Theme** is our customization method, we need to download a fresh copy of DMS from the [PageLines Launchpad](http://www.pagelines.com/launchpad/member.php) . Once downloaded, extract the `dms.zip` and navigate to **pagelines &rarr; sections**, here you will find multiple folders each representing the core sections included with PageLines DMS.

Locate the section in which you wish to override or customize, for this example we will be overriding the **iBox** section. Now open your FTP client, connect to your server and navigate to the following directory: `/wp-content/themes/dms-template-theme/sections/`.

Upload the **iBox** section folder to Base Theme at `/wp-content/themes/dms-template-theme/sections/`  as a folder and like magic, we have a child section of iBox, ready for us to modify.

<pre>
<i class="icon-folder-open"></i> dms-template-theme/
	<i class="icon-folder-open"></i> sections/
		<i class="icon-folder-open"></i> <strong>ibox/</strong>
	<i class="icon-file"></i> functions.php
	<i class="icon-file"></i> info.txt
	<i class="icon-file"></i> page.example.php
	<i class="icon-file"></i> screenshot.png
	<i class="icon-file"></i> setup.php
	<i class="icon-file"></i> style.css
	<i class="icon-file"></i> thumb.png
</pre>

You can edit the section by opening the `section.php` file in your code editor.  Once saved, your changes will override the previous section, when the Base Theme is activated.

## Support Scope ##

Please be aware that our support team will be able to provide limited support for child sections, as this is considered user-created code. If you have any issues or errors related to your own custom code, we recommend contacting one of the PageLines Pros.  Our support team are not developers and unable to diagnose your code.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/less-css">&larr; LESS CSS</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/advanced/custom-sidebars">Custom Sidebars &rarr;</i></a></li>
		</ul>
	</div>
</div>
