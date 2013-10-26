<div class="row-fluid">
  <div class="span12">
    <ul class="breadcrumb">
        <li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
        <li><a href="http://docs.pagelines.com/advanced">Advanced</a> <span class="divider">/</span></li>
        <li class="active">Translating DMS</li>
    </ul>
  </div>
</div>

# Translating DMS #

All of the PageLines products are localization-ready, which means they can easily be translated into other languages. There are a number of methods to create a translation, most of which are outlined in the [WordPress codex](http://codex.wordpress.org/Translating_WordPress).

## Setup WordPress ##

The first thing you need to do is tell Wordpress which language it should use. Open `wp-config.php` and modify the line below, or add it if it is missing. In the example below, we have set the language to **Danish**, a complete list of language and country codes are outlined in the [Wordpress Codex](http://codex.wordpress.org/WordPress_in_Your_Language).

~~~ .php
define ('WPLANG', 'da_DK');
~~~

## Update Safe ##

By using either the **Base Theme** or **PageLines Customize Plugin** and creating a `language` folder, your custom translations will be safe from updates. Create the `language` folder in the following location.

### PageLines Customize Plugin ###

**wp-content &rarr; plugins &rarr; pagelines-customize**.

Once uploaded, your file structure for the PageLines Customize Plugin will look like this:

<pre>
<i class="icon-folder-open"></i> pagelines-customize/
	<i class="icon-folder-open"></i> <strong>language/</strong>
	<i class="icon-file"></i> functions.php
	<i class="icon-file"></i> pagelines-customize.php
	<i class="icon-file"></i> style.css
	<i class="icon-file"></i> thumb.png
</pre>

### Base Theme ###

**wp-content &rarr; themes &rarr; pagelines-template-theme**.

Once uploaded, your file structure for the Base Theme will look like this:

<pre>
<i class="icon-folder-open"></i> pagelines-template-theme/
	<i class="icon-folder-open"></i> <strong>language/</strong>
	<i class="icon-folder-open"></i> sections/
	<i class="icon-file"></i> functions.php
	<i class="icon-file"></i> info.txt
	<i class="icon-file"></i> page.example.php
	<i class="icon-file"></i> screenshot.png
	<i class="icon-file"></i> setup.php
	<i class="icon-file"></i> style.css
	<i class="icon-file"></i> thumb.png
</pre>

## PoEdit ##

If you wish to add translations manually, you can do so by using [PoEdit](http://www.poedit.net/).

PageLines DMS includes one `.pot` file which can be imported into PoEdit to translate. To get started open PoEdit and go to **File &rarr; New catalog from POT file**.

Once you have done this, choose the **pagelines.pot** which is located in `/wp-content/themes/dms/language/` and PoEdit will show the catalog properties window.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/catalog-property-window.jpg)

Fill the out the fields such as project name and so on, this informs other translators who you are and then click **OK**. After this you will be prompted to save your file, name it based on your language, for example, a Danish translation would be saved as `da_DK.po`and use the file type `GNU gettext catologs (*.po)`. Now the strings will be listed.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/poedit-strings.jpg)

After translating all strings, save again and the `.mo` file will be generated automatically.

## RTL (Right-to-Left) ##

Upon launch PageLines DMS will not provide RTL (right-to-left) support. However, such support has been discussed and will be implemented in a future release via an update.

Once RTL support has been implemented, you will be able to add Arabic, Hebrew, Persian, or any other RTL language and it will automatically enable Right-to-left (RTL) support in PageLines DMS and will change the styles accordingly.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/custom-sidebars">&larr; Custom Sidebars</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/advanced/optimize-load-time">Optimize Load Time &rarr;</i></a></li>
		</ul>
	</div>
</div>
