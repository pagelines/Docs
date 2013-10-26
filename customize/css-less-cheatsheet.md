<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
  			<li class="active">CSS/LESS Cheetsheet</li>
		</ul>
	</div>
</div>

<h1>This is a Draft</h1>

# CSS/LESS Cheetsheet #

In this tutorial, we have provided a CSS/LESS that allows you to override the default styling for a number of areas in DMS and also, custom classes that you can use in the **Standard Options &rarr; Styling Classes** field. All you need to do is copy all the custom code below and paste it into either **DMS Toolbar &rarr; </> Custom Code &rarr; LESS/CSS Editor** or your **style.less** file in **PageLines Customize Plugin** or **Base Theme**.

## Backgrounds ##

Want to add a color or a gradient to a specific area on your site, using the following classes will allow you style any section that supports the **Styling Classes** field.

### Colors ###

The classes below can be used to add different background colors to all sections and layout sections.

~~~ .css
.red-bg {
	background-color: #D9534F;
}
.blue-bg {
	background-color: #428BCA;
}
.green-bg {
	background-color: #5CB85C;
}
.yellow-bg {
	background-color: #F0AD4E;
}
.purple-bg {
	background-color: #563D7C;
}
~~~

**NOTE:** You're free to change the colors to your liking and also use the code as a base to add your own custom colors.

### Gradients ###

If you don't like the idea of having one color backgrounds, you can utilize LESS CSS and add gradients to your sections with ease and without the pain of having to write multiple lines of code for browser compatibility.

~~~ .less
.red-grad-bg {
	#gradient .vertical( #D9534F, #D2322D );
}

.blue-grad-bg {
	#gradient .vertical( #428BCA, #3276B1 );
}

.green-grad-bg {
	#gradient .vertical( #5CB85C, #47A447 );
}

.yellow-grad-bg {
	#gradient .vertical( #F0AD4E, #ED9C28 );
}

.purple-grad-bg {
	#gradient .vertical( #563D7C, #463265 );
}
~~~

These examples utilize the `.vertical` mixin. However, you can replace this with any of the following `.horizonal` or `.radial`. For more advanced gradient mixins, see the [mixin.less](https://github.com/pagelines/DMS/blob/Dev/less/mixins.less) file.

## Text Colors ##



## Sections ##

The following code will allow you to customize how specific sections look, from changing the color of the title and subtext, to the size of the text.


### Flipper ###

~~~ .css

~~~

### iBox ###





