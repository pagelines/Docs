<div class="row-fluid">
  <div class="span12">
    <ul class="breadcrumb">
        <li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
        <li><a href="http://docs.pagelines.com/customize">Customize</a> <span class="divider">/</span></li>
        <li class="active">The Base Theme</li>
    </ul>
  </div>
</div>

# Using the Base Child theme #

The PageLines Base Theme, is a un-styled child theme -- available free from the [PageLines Store](/getting-started/pagelines-store)  -- which will never receive an update, or add any styling of its own; designed as a platform for you to create your own child themes, as well customizing PageLines DMS.

For more information regarding child themes, we recommend reading these linked Wordpress codex articles -- [child themes](http://codex.wordpress.org/Child_Themes),  and [theme development](http://codex.wordpress.org/Theme_Development).

## Structure ##

The PageLines Base Theme (child) folder when [installed](/configure/installing-store-products), will be located here **wp-content → themes → dms-template-theme**, containing the subfolder and files, as seen below.

<pre>
<i class="icon-folder-open"></i> dms-template-theme/
  <i class="icon-folder-open"></i> sections/
  <i class="icon-file"></i> functions.php
  <i class="icon-file"></i> info.txt
  <i class="icon-file"></i> page.example.php
  <i class="icon-file"></i> screenshot.png
  <i class="icon-file"></i> setup.php
  <i class="icon-file"></i> style.css
  <i class="icon-file"></i> thumb.png
</pre>

## Adding Customization ##

### CSS ###

There are two principal methods for adding custom CSS to the Base Theme, these are: the `style.css` file and the `style.less` file. Each method applies to individual levels of skill -- based on your comfort level and proficiency, which we'll go through below.

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
/*
Theme Name: Base Theme
Theme URI: http://www.pagelines.com/
Description: A starter child theme for PageLines.  Use this as a reference for building your own child themes for PageLines Store.
Version: 1.0.2
Author: PageLines
Author URI: http://www.pagelines.com
Tags: developer

Template: dms

*/

/*
Themes follow the basic WordPress themes header scheme with the following additions:

  Template: pagelines
  Tells wordpress this is a childtheme and where the parent files are stored.

  Demo: http://a.link.com
  Use this to point to a demo for this product.

  External: http://a.link.com
  Use this to point to an external site, authors home page for example.
*/

/*
 * File Naming Conventions
 * -------------------------------------
 *  style.css         - Main theme style file.
 *  thumb.png         - Thumbnail image used in the store and on pagelines.com for your product.
 *  screenshot.png          - Primary screenshot, logo or graphic for your extension item (300px by 225px).
 *  screenshot-1.png          - Additional screenshots -1 -2 -3 etc (optional).
 *  page.example.php          - Custom page template, check the file for syntax. This is autoloaded.
 *  sections/         - Bundle sections with your theme in this folder, each section in a seperate folder.
 */
 ~~~

The first thing we will do is remove all the information that is not required and then add some example code below:

~~~ .css
/*
Theme Name: Base Theme
Theme URI: http://www.pagelines.com/
Description: A starter child theme for PageLines.  Use this as a reference for building your own child themes for PageLines Store.
Version: 1.0.2
Author: PageLines
Author URI: http://www.pagelines.com
Tags: developer

Template: dms

*/

body {
  background-color: #0088DD;
  color: #555;
  font-size: 22px;
}

.example {
  color: #FFFFFF;
  font-size: 16px;
  padding: 40px;
}
 ~~~

Once your custom CSS has been added, save the file and if your FTP client is configured correctly, it should upload the file to your server, replacing the older style.css. Refresh your website and your changes should have taken effect.

#### style.less ####

In order to use the style.less method, you will first need to create a **style.less** file, see our [Adding LESS Support](/customize/adding-less-css-support)  page on how to do this. Once the style.less file has been created you're now able to add both CSS and LESS CSS to the Base Theme.

For more information about LESS CSS , see our [LESS CSS](/advanced/less-css) documentation which also includes some examples.

### PHP ###

#### functions.php ####

The functions.php file allows you to add/manipulate functionality to PageLines DMS. You can use it to call functions and to define your own customized actions. The code is only executed when the theme is activated, if the theme is changed, the functionality will not carry over. The functions.php file supports numerous blocks of code to be used for many different purposes.

For more information about hooks, see our [Hooks](/advanced/hooks) documentation which also includes some examples.

## Renaming the Base child theme ##

By default, the PageLines child is named Base Theme with all the files stored in the **dms-template-theme** directory. However, at some point you may wish to change the name of the Base child theme.

Before proceeding with the following instructions, make sure the Base Theme is not the currently active theme (it can cause errors) by going to **Wordpress Admin Dashboard → Appearance → Themes** and clicking the **Activate link** for PageLines DMS.

Once the Base Theme has been deactived, open your FTP client, connect to your server and navigate to the following directory **wp-content → themes → dms-template-theme**.

Open the `style.css` file and you will see the following information.

~~~ .php
/*
Theme Name: Base Theme
Theme URL: http://www.pagelines.com/
Description: A starter child theme for PageLines.  Use this as a reference for building your own child themes for PageLines Store.
Version: 1.0.2
Author: PageLines
Author URI: http://www.pagelines.com
Tags: developer

Template: dms

*/
~~~

Edit any of these items, except for **Template: dms**, which tells Wordpress that this is a child theme of PageLines DMS.

~~~ .php
/*
Theme Name: ADD_YOUR_THEME_NAME_HERE
Theme URL: ADD_YOUR_WEBSITE_URL_HERE
Description: ADD_THE_DESCRIPTION_OF_YOUR_THEME_HERE
Version: 1.0.
Author: ADD_YOUR_NAME_HERE
Author URI: ADD_YOUR_WEBSITE_URL_HERE
Tags: developer

Template: dms

*/
~~~

Once you have replaced the default information with your own, save the `style.css` file. You have now successfully changed the name of Base Theme and made it into your own child theme!

You may also want to want to rename the **dms-template-theme** folder to match your child theme name. To do this, simply rename the folder inside your FTP client's Rename utility.

<div class="row-fluid">
  <div class="span12">
    <ul class="pager">
      <li class="pull-left"><a href="http://docs.pagelines.com/customize/dms-customize-options">&larr; PageLines Customize Plugin</a></li>
        <li class="pull-right"><a href="http://docs.pagelines.com/customize/store-child-themes">Store Child Themes &rarr;</a></li>
    </ul>
  </div>
</div>
