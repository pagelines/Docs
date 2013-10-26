<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
  			<li class="active">Adding Custom Menus</li>
		</ul>
	</div>
</div>

# Adding Custom Menus #

Creating a custom menu allows you to change the order of the links in your menu, or delete them, create nested sub-menus of links and add custom links to other sites.

To create a custom menu, go to **Appearance &rarr; Menus** in your Wordpress admin dashboard.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/create-menu.png)

To create a new menu, type in a Menu Name (to help you remember what it is), and click the **Create Menu** button.

Adding pages, posts, categories and tags to your menu is as simple as checking the boxes for the items you want and then clicking **Add to Menu**.

**Theme locations**, allows you to decide where you would like your custom menu to appear in your PageLines DMS. If you wish to add a custom menu to the Fixed Nav or NavBar section, you do so in the sections options.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/custom-menus.png)

## Drop Down Menus ##

To change the order and placement of menu items, simply drag and drop the items to change their order. To create drop-down menus, drag the individual items to the right to "nest" them under the given parent item. You can undo these changes by dragging them to the left.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/child-menu.gif)

Be sure to click **Save Menu** to save any changes to your custom menu.

WordPress Custom Menus is well documented on the [WordPress codex](http://codex.wordpress.org/Appearance_Menus_SubPanel).

Important:  WordPress limits the number of levels for menus to three (3) -- Parent, child and grandchild. Some plugins may allow you to extend that, though we do not support such plugins.

## Adding Icons ##

If you'd like to display icons on your menu items, we recommend using [Font Awesome](http://docs.pagelines.com/tutorials/font-awesome). There are two methods, which we will go through below.

### Using Icon Code ###

Navigate to **Appearance &rarr; Menus** and choose the menu item (for this example, we will be using our **Home** menu item) you want to customize and click on the arrow to expand the settings.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/custom-menu-icon-example1.jpg)

Instead of using the icon class in **CSS Classes (optional)** field, we can use the actual icon code in the **Navigation Label** field. Add the following code `<i class="icon-home"></i>` before or after your menu items name, in our example, we will be adding the icon code before.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/custom-menu-icon-example4.jpg)

Repeat this process for all your menu items. For a full list of icons see our [Font Awesome](http://docs.pagelines.com/tutorials/font-awesome) page.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/custom-menu-icon-example2.jpg)

There is a more complex method to adding icons to your menu items, which requires you to indentify each menu items ID then use the CSS Pseudo class `:before` or `:after` depending on where you want your icon positioned. You will also need to use the icons Unicode, a full list can be found on the [Font Awesome cheatsheet](http://fortawesome.github.io/Font-Awesome/cheatsheet/). 

For more information on CSS Pseudo classes, see this [article](http://css-tricks.com/pseudo-class-selectors/).

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/tutorials/html-css-utilities">&larr; HTML/CSS Utilities</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/tutorials/adding-custom-fonts">Adding Custom Fonts &rarr;</a></li>
		</ul>
	</div>
</div>