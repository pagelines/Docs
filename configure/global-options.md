<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/configure">Configure</a> <span class="divider">/</span></li>
  			<li class="active">Global Options</li>
		</ul>
	</div>
</div>

# Options #

PageLines DMS provides users with a number of global settings, allowing them to change their site's layout, add social integration, control colors, styles and more.

## Admin Shortcuts ##

The **Admin Shortcuts** panel provides a quick and efficient method of managing common Wordpress settings through the DMS front-end.

The Wordpress settings included are **Set Site Homepage**, **Manage Menus**, **Manage Widgets**, **User Profiles**, **Site Settings**, **Plugins Admin** and **Permalinks**.

![Admin Shortcuts](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/admin-shortcuts.jpg "Admin Shortcuts")

**Note:** When PageLines debug option is enabled, a debug info shortcut will also be added.

![Admin Shortcuts with Debug](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/admin-shortcuts-debug.jpg "Admin Shortcuts with Debug")

## Site Images ##

The **Site Images** panel allows you to upload custom images to be used on your site, such as favicon, login page and mobile touch image. You can either choose to upload an image from your computer or enter the full URL location of your custom image.

![Site Images](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/site-images.jpg "Site Images")

#### Favicon Image ####

The favicon image is a good way to brand your site and increase it’s prominence in your visitor’s bookmark menu and tabs. **Must be .png or .ico file - 32px by 32px**

#### Login Page Image ####

This image will be used on your Wordpress login page and is great for client websites. Use an image that is approximately **80px in height**.

#### Mobile Touch Image ####

The mobile touch image is visible when your users add your site as a webclip in Apple Iphone and Touch Products. **It is an image approximately 57px by 57px in either .jpg, .gif or .png format.**

## Layout & Nav ##

The **Layouts & Nav** panel provides options for configuring the layout and navigation of your site.

#### Layout Mode ####

Select **Pixel width** mode and your site maximum width will be controlled by pixels. If you select **Percent width** the width of your content will be a percentage of window size.

![Layout & Nav](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/layout-nav.jpg "Layout & Nav")

#### Display Mode ####

* **Full display mode** allows areas to be the full width of the window, with content width sections.
* **Boxed mode** contains everything in a central content box. Boxed mode is ideal for use with backgtround images.

#### Primary Navigation Menu ####

This will be used in mobile menus and optionally other places throughout your site.

#### Secondary Navigation Menu ####

This will be shown subtly in areas throughout the site and in your mobile menu.

## Typography ##

The **Typography** panel provides the ability to change font size, weight as well as the default font family used on your website. 

**Primary Text** allows you to style the standard type of your site. **Text Headers** allows you to style your site’s header tags (H1, H2, H3…)

![Typography](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/typography.jpg "Typography")

#### Select Font ####

The Select font dropdown menu allows you to choose from many popular web fonts. The whole Google web fonts library can be included by installing our [Google Web fonts plugin](http://www.pagelines.com/store/plugins/pagelines-googlefonts/), available from the **Store** tab in the DMS toolbar.

#### Base Font Size ####

The Base font size setting allows you to select the size of your text from `10px-30px`. This size is a reference that will be scaled for text used throughout the site. 

#### Font Weight #####

The Font weight setting allows you to select the weight of your text from `Light (300)*`, `Normal (400)`, `Semi-Bold (600)*` and `Bold (800)`.

*Please be aware that these font weights don't always have an effect.

## Color & Style ##

The **Color & style** panel provides the ability to easily change the color of your Content base, main text and links. As well as being able to configure your background using an image with settings allowing control over repeat, position, attachment and fit to screen.

![Color & Style](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/color-style.jpg "Color & Style")

#### Content Base & Site Text Colors ####

The **Content base** color is used as your background and as a basis for calculating contrast values in elements such as hover effects, etc. Use it as your default background color and refine using custom CSS/LESS or a child theme.

The Site text colors setting allows you to configure the basic text colors for your site.

#### Background Image Settings ####

If you would prefer to set the background to something other than a single color; you can upload your own image.

1. Browse your computer and locate your background image.
2. Click **Upload Image**.
3. Once uploaded, a preview of your image will be visible.

**Fit image to page?**

If you use this option the image will be fit **responsively** to the background of your page. This means the settings below will have no effect.

* **Background Repeat** Lets you choose to repeat the image in a vertical column and horizontal row or to tile it vertically and horizontally across the entire page
* **Vertical Position in Percent** allows you to move the image down the page
* **Horizontal Position in Percent** allows you to move the image to right of the page
* **Set Background Attachment** you can choose to have your image remain static or have it scroll down the page as the user scrolls the site

## Social & Local ##

Integrating your new website and your existing social media accounts is easy using Pagelines DMS. 

To access the social media options select the global icon from the DMS control panel and then select the Social & Local tab. 

Enter the required information for either twitter, facebook or hashtag into the required field and publish your page to view the changes.

![Section Control](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/social-local.jpg "Social Media")

## NavBar ##

The **NavBar** panel provides the ability to enable a fixed navigation bar to the top of your website. This Fixed Navigation bar is a powerful way to maintain your brand and menu even as your visitor’s scroll through your content.

![NavBar](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/navbar.jpg "NavBar")

#### Enable Fixed Navigation Bar ####

Check this option to enable the fixed navigation bar on your website.

#### Fixed NavBar Menu ####

The NavBar uses the [WordPress menus system](http://codex.wordpress.org/WordPress_Menu_User_Guide), either select one which has already been created from the **Select Menu** dropdown or use the **Configure Menus** button, this will load up the Wordpress menu editor.

#### NavBar Image ####

The Navbar image setting allows you to add a small image to fixed navigation bar, which will be positioned to the left hand side.

1. Browse your computer and locate your image.
2. Click **Upload Image**.
3. Once uploaded, a preview of your image will be visible.

* Not available on the NavBar section.
* Image Height is constricted to a **maximum 29px**.

#### Fixed Navbar Theme ####

The NavBar comes with several color options, these themes control the background color.

#### Fixed NavBar Configuration Options ####

You're able to configure the NavBar further with the following options, check the options to enable them.

* Activate dropdowns on hover.
* Align Menu Right? (Defaults Left)
* Hide Search?

## Import + Export ##

The **Import + Export** panel provides the ability to import and/or export your DMS config so that you don’t have to spend time implementing your settings again, if you plan on moving them to another PageLines DMS install or migrate your site to a new server. This time saving process ensures that your DMS settings are identical when imported.

![Import + Export](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/import-export.jpg "Import + Export")

## Advanced ##

The **Advanced** panel contains some additional options that can be useful to solve some specific issues when developing your site.

![Advanced](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/advanced.jpg "Advanced")

#### Google Prettify Code ####

Checking this box will enable a class of `prettyprint` to `<code>` or `<pre>` tags, or optionally use the `[pl_codebox]` shortcode. Wrap the codebox shortcode using `[pl_raw]` if Wordpress inserts line breaks.

#### PageLines Affiliate/Partner Link ####

If you are a [PageLines Partner](http://www.pagelines.com/partners/) you can enter your Partner Link here to change the PageLines logo on your site to be an affiliate link.

If you are not a PageLines Partner you can [sign up](http://www.impactradius.com/campaign-campaign-info/PageLines-Partner-Program.brand) and earn a referral for every sale you generate through your link.

#### Current Install Class ####

Use this option to add a class to the `<body>` element of the website. This can be useful when using the same child theme on several installations or sub domains and can be used to control CSS customizations.

## Resets ##

The **Resets** panel should be used with extreme caution. There are two reset options available on that panel. Use of these resets will restore global settings, including resetting current page settings.  You will be removing, on a global basis, all changes you've made to the site via settings.  

We recommend taking extra care and proceeding slowly, when using the Reset options.

![Resets](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/resets.jpg "Resets")

#### Reset Global Site Settings ####

Use this button to reset **all global settings** to their default state. Once you've completed this action, you may want to publish these changes to your live site.

#### Reset Current Page Settings ####

Use this button to reset all settings on the **current page** back to their default state. Once you've completed this action, you may want to publish these changes to your live site.

#### Clear all CSS/LESS cached data. ####

Use this button to purge the stored LESS/CSS data. This will also clear cached pages if wp-super-cache or w3-total-cache are detected.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/configure/using-templates">&larr; Using Templates</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/configure/pagelines-store">PageLines Store &rarr;</i></a></li>
		</ul>
	</div>
</div>
