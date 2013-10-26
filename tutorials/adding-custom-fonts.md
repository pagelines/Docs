<div class="row-fluid">
  <div class="span12">
    <ul class="breadcrumb">
        <li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
        <li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
        <li class="active">Adding Custom Fonts</li>
    </ul>
  </div>
</div>

# Adding a Custom Font #

There may come a time during development where you feel the need to add a custom font to your website, one that isn't available from the Google web fonts library. This tutorial will take you through the steps needed to add a custom font to your PageLines DMS powered website.

In this example, we will explain how you can add the custom free font [GoodDog](http://www.fontsquirrel.com/fonts/GoodDog) from [Font Squirrel](http://www.fontsquirrel.com/).

## Installing a Custom Font ##

### Step 1: Uploading the Custom Font Files ###

GoodDog is a free font that you can download at [Font Squirrel](http://www.fontsquirrel.com/). Make sure you've downloaded the @font-face Kit using their [webfont generator](http://www.fontsquirrel.com/tools/webfont-generator).

Using your favourite FTP client, create a folder in `/wp-content/themes/[CHILD THEME]/` and name it **fonts**. Then unzip the webfont package, and upload the following files to **fonts** folder:

* gooddog-webfont.eot
* gooddog-webfont.svg
* gooddog-webfont.ttf
* gooddog-webfont.woff

### Step 2: Adding the Necessary CSS ###

Open the **stylesheet.css** file that comes included with the @font-face kit to see the custom fonts CSS.

<pre><code>/* Add GoodDog Font */

@font-face {
    font-family: 'gooddogregular';
    src: url('gooddog-webfont.eot');
    src: url('gooddog-webfont.eot?#iefix') format('embedded-opentype'),
         url('gooddog-webfont.woff') format('woff'),
         url('gooddog-webfont.ttf') format('truetype'),
         url('gooddog-webfont.svg#gooddogregular') format('svg');
    font-weight: normal;
    font-style: normal;

}
</code></pre>

In the Custom Fonts CSS, you will now need to tell the CSS where the font files are. In **Step.1**, we uploaded these files to `/wp-content/themes/[CHILD THEME]/fonts/`. We now need to include this path for the font to work, to make things easier we can use one of the PageLines LESS CSS path variables `@{plChildRoot}` and add `/fonts/` at the end.

Once completed your final code should look like this:

<pre><code>/* Add GoodDog Font */

@font-face {
    font-family: 'gooddogregular';
    src: url('@{plChildRoot}/fonts/gooddog-webfont.eot');
    src: url('@{plChildRoot}/fonts/gooddog-webfont.eot?#iefix') format('embedded-opentype'),
         url('@{plChildRoot}/fonts/gooddog-webfont.woff') format('woff'),
         url('@{plChildRoot}/fonts/gooddog-webfont.ttf') format('truetype'),
         url('@{plChildRoot}/fonts/gooddog-webfont.svg#gooddogregular') format('svg');
    font-weight: normal;
    font-style: normal;

}
</code></pre>

Copy and paste the CSS into the **Custom &rarr; Custom LESS/CSS** in the PageLines Toolbar.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/custom-font-code.jpg)

### Step 3: Modifying your Code. ###

To start using your custom font, you first need to tell your stylesheets to use them. Look at the original @font-face declaration above and find the property called **font-family.** The name linked there will be what you use to reference the custom font. Prepend that webfont name to the font stack in the "font-family" property, inside the selector you want to change. For example:

<pre><code>h1, h2, h3, h4, h5, h6 { 
    font-family: 'gooddogregular', Arial, sans-serif;
}
</code></pre>

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/custom-font-code2.jpg)

## Troubleshooting ##

### Fonts not showing in any browser ###

You either did not upload the fonts to the correct directory, or you did not link the fonts properly in the CSS. If you've confirmed that all this is correct and you still have a problem, take a look at your .htaccess file and see if requests are getting intercepted.

### Fonts not loading in iPhone or iPad ###
The most common problem here is that you are serving the fonts from an IIS server. IIS refuses to serve files that have unknown MIME types. If that is the case, you must set the MIME type for SVG to "image/svg+xml" in the server settings.

### Fonts not loading in Firefox ###
The primary reason for this failure? You are still using a version Firefox older than 3.5. So upgrade already! If that isn't it, then you are very likely serving fonts from a different domain. Firefox requires that all font assets be served from the same domain. Lastly it is possible that you need to add WOFF to your list of MIME types (if you are serving via IIS.)

### Fonts not loading in IE ###
Are you looking at Internet Explorer on an actual Windows machine or are you cheating by using a service like Adobe BrowserLab? Many of these screenshot services do not render @font-face for IE. Best to test it on a real machine.

### Fonts not loading in IE9 ###
IE9, like Firefox, requires that fonts be served from the same domain as the website. Make sure that is the case, you can do this by following the instructions in **Step 1**.

<div class="row-fluid">
    <div class="span12">
        <ul class="pager">
            <li class="pull-left"><a href="http://docs.pagelines.com/tutorials/adding-custom-menus">&larr; Adding Custom Menus</a></li>
            <li class="pull-right"><a href="http://docs.pagelines.com/tutorials/lockdown-visual-editor">Lockdown Visual Editor &rarr;</i></a></li>

        </ul>
    </div>
</div>

