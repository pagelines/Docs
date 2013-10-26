<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
  			<li class="active">Section Area Styling</li>
		</ul>
	</div>
</div>

# Full Width Section Area Styling #

Included in DMS is the **Full Width Section Area** section, this allows you to create a full width section area that can house one or more sections. This is extremely useful if you wish to create Single Page Websites. We have used a similar technique on [PageLines.com](http://www.pagelines.com).

![](http://cdn.pagelines.com/wp-content/themes/dms/sections/pl_area/splash.png)

## Custom CSS ##

The first you will want to do is is create some unique classes which contain custom CSS. For this example, we will be using nothing more than `background-color` and `color` properties. You're free to use the example code below on your website immediately as it will work or use it as a base to create your own colors schemes.

~~~ .css
/* red background, white text */
.my-red-area {
	background-color: #bd362f;
	color: white;
}
/* blue background, white text */
.my-blue-area {
	background-color: #0055CC;
	color: white;
}
/* green background, white text */
.my-green-area {
	background-color: #51A351;
	color: white;
}
~~~

For this example, we will be adding the above CSS to the **DMS Toolbar → </> Custom Code → Custom LESS/CSS Editor**. However, you're free to add it to any of our customization methods such as the **style.less/style.css** files in both PageLines Customize Plugin and Base Theme.

## Configure ##

Once the custom CSS (above) has been added, its time to configure the **Full Width Section Area** and populate it with some sections.


The first thing we need to do is drag and drop the **Full Width Section Area** to our website and position it. For this example, we will be adding it below the **Header** area and populate it by adding the **Masthead** section. Once we configure the Masthead section we will end up with something like this:

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/fullwidthsection-masthead.jpg)

Now that we have our Masthead section configured, it's time to add one of the custom classes we added earlier to the **Full Width Section** Area. To do this, click the <i class="icon-pencil"></i></strong> icon, to bring up the **Full Width Section Area** options and in the **Standard Options → Styling Classes** field, enter one of the class names.

For example, lets say we want to have a full width section area with a red background, we would enter `my-red-area`, as this is the class name. We **do not** add the full CSS for that class.

 ![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/fullwidthsection-classname.jpg)

Click Publish and refresh your website, your Full Width Section should now have a red background as it is using the `.my-red-area` class.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/fullwidthsection-masthead-red.jpg)

You can replace `my-red-area` with the other classes we added earlier such as `my-blue-area` or `my-green-area` to change the background to blue or green and even create your. The best part about this is, you can use the **Full Width Section** as many times as you like which can lead to some unique designs.

The principle limitation will be your imagination -- so unleash it, and remember that this tutorial was only basic. You can do more advanced things by using multiple classes to the **Standard Options → Styling Classes**, like using gradients, adding borders and even using LESS. The possibilities are endless.

## Example ##

In the example image below, we have added multiple **Full Width Sections Areas** and populated each section area with several sections. We have also added a unique class to each section area giving them all different colors.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/fullwidthsection-fullpage.jpg)

## Quick Cheatsheet ##

Below is a list of custom CSS that provide different background colors which you can use as a quick start.

~~~ .css
/* red background, white text */
.my-red-area {
	background-color: #BD362F;
	color: white;
}
/* blue background, white text */
.my-blue-area {
	background-color: #0055CC;
	color: white;
}
/* green background, white text */
.my-green-area {
	background-color: #51A351;
	color: white;
}
/* yellow background, white text */
.my-yellow-area {
	background-color: #FFC40D;
	color: white;
}
/* orange background, white text */
.my-orange-area {
	background-color: #F89406;
	color: white;
}
/* purple background, white text */
.my-purple-area {
	background-color: #7A43B6;
	color: white;
}
~~~

Simply copy the code above into your customization method and click save.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/tutorials/adding-custom-fonts">&larr; Adding Custom Fonts</a></li>
			<li class="pull-right"><a href="http://docs.pagelines.com/tutorials/creating-a-branding-area">Creating a Branding Area &rarr;</a></li>
		</ul>
	</div>
</div>

