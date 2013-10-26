<div class="row-fluid">
  <div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
  			<li class="active">Creating a Branding Area</li>
		</ul>
	</div>
</div>

# Creating a Branding Area #

Once you have DMS installed, one of the first things you will want to do is add branding to your website. Usually, this area consists of a logo image on one side and a navigation menu plus social media links on the other. In this tutorial, we will show you how to create your branding header area using nothing more than:

* 2 Column Section
* MediaBox Section with some basic HTML
* NavBar section
* TextBox Section with some basic HTML
* Some basic LESS CSS

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/branding-example.jpg)

## The Setup ##

To setup your Branding area, the first thing we will need to do is enable the Visual Editor. Once active, navigate from the DMS Toolbar and click on **Add Sections**, then drag and drop the **2 Column** layout section into the header area.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/branding-2column.jpg)

Now we will change the width of the two columns so that our naviation has more room, to this simply click on the **decrease/increase** options. For this tutorial, we will be setting the width of the left column to **5/12** and the right column to **7/12**. However, you can have your columns set at any width you choose.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/branding-column-width.jpg)


## Adding Logo ##

For the logo image, we will be utilizing the MediaBox section. Goto **Add Sections** via the Toolbar then drag and drop the **MediaBox** section into the left hand column of the **2 Column** section we added above.

* Once added, click on the **Edit** icon, this will bring up the **MediaBox** options.
* In the **Text and Embed HTML** field, add the following HTML:

~~~ .html
<a class="logo" href="http://www.my-website.com/"><img src="Path To My Image" alt="My Logo"></a>
~~~

You will need to add your websites URL as well as the URL for your logo image, we have included a `.logo` class, just in-case you wish to add some additional styling.

* You can go through the additional **MediaBox** options to add animations (we used **From Left**), once finished, click the Publish button and refresh.
* Your logo image should now be present.

## Social Media Links ##

To integrate social media networks, we are going to utilize Font Awesome and style using LESS. Click on the **Edit** icon within the **TextBox** section and add the following code to the **Text Content** box, this will add your social network icons. You can edit the code to add/remove any services you do/do not wish to use.

You can also take advantage of **ViewPoint Animation**, as we added the textbox to the right hand side of the **2 Column** layout section, we will want to use the **From Right** option.

Also remember to repalce `#` with your social media network URLs.

~~~ .html
<div class="social-bar pull-right">
    <ul class="zmt zmb">
        <li><a href="#" target="_blank"><i class="icon icon-dribbble"></i></a></li>
        <li><a href="#" target="_blank"><i class="icon icon-facebook"></i></a></li>
        <li><a href="#" target="_blank"><i class="icon icon-google-plus"></i></a></li>
        <li><a href="#" target="_blank"><i class="icon icon-instagram"></i></a></li>
        <li><a href="#" target="_blank"><i class="icon icon-linkedin"></i></a></li>
        <li><a href="#" target="_blank"><i class="icon icon-pinterest"></i></a></li>
        <li><a href="#" target="_blank"><i class="icon icon-twitter"></i></a></li>
        <li><a href="#" target="_blank"><i class="icon icon-youtube-play"></i></a></li>
        <li><a href="#" target="_blank"><i class="icon icon-rss"></i></a></li>
        <li><a href="mailto:hello@example.com"><i class="icon icon-envelope"></i></a></li>
    </ul>
</div>
~~~

As you can see from the HTML above, we have used the `pull-right` [utility class](http://docs.pagelines.com/tutorials/html-css-utilities), to position our social bar. However, if you like, you can remove `pull-right` from the HTML and simply use the Alignment options in the **TextBox** sections configuration. The choice is entirely up to you.

For a full list of social media icons, see the branding section on our [Font Awesome page](http://docs.pagelines.com/tutorials/font-awesome).

## Add Navigation ##

Adding your Navigation to your new branding area is as simple as dragging and dropping the NavBar section onto your template. For this example, we will be positioning the NavBar on the right hand side of the **2Columns** section and underneath the **TextBox** section.


Once everything is in position you should end up with something similar to this:

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/branding-position-sections.jpg)

With the NavBar is in position, click the <i class="icon-pencil"></i> icon, to bring up the **NavBar** options to configure it.

## Styling the Social Media Icons ##

To style the social media icons we added to the **TextBox**, we are going to be using LESS CSS and a few LESS variables. However, don't worry, we do all the hard work for you, all you need to do is add the code. As we are using LESS, the below code will need to be added to either **DMS Toolbar → </> Custom Code → Custom LESS/CSS Editor** or your **style.less** file in either **PageLines Customize Plugin** or **Base Theme**.

### Color Variables ###

These variables have each been given a specified color which is associated with that social media network. Add the following variables to the top of your customization method.

~~~ .less
/* Social media color variables */

@dribbble:			#EA4C89;
@envelope:          #08CF90;   
@facebook:          #3B5998;
@googleplus:		#E14107;
@instagram:         #517FA4;
@linkedin:			#0181B2;
@pinterest:			#CB2027;
@rss:				#E5842F;
@twitter:			#00ACED;
@youtube:			#CD332D;
~~~

Now it's time to add the LESS which will style the Social bar HTML we added earlier. Add the following code to either **DMS Toolbar → </> Custom Code → Custom LESS/CSS Editor** or your **style.less** file in either **PageLines Customize Plugin** or **Base Theme**.

~~~ .less
.social-bar {
    a {
        margin-right: 0px; // Here in-case you wish to add margins
        padding: 0px; // Here in-case you wish to add padding
    }
    li {
        display: inline;
    }
    .icon {
        .border-radius(0px); // Here in-case you wish to add a radius
        margin-bottom: 5px;
        min-width: 50px;
        color: #FFF;
        text-align: center;
        font-size: 26px;
        line-height: 50px;
    &:hover { .transition(background 400ms linear); }
    }
    .icon-dribbble {
        background-color: @dribbble;
    &:hover { background-color: lighten(@dribbble, 10%); }
    }
    .icon-envelope {
        background-color: @envelope;
    &:hover { background-color: lighten(@envelope, 10%); }
    }
    .icon-facebook {
        background-color: @facebook;
    &:hover { background-color: lighten(@facebook, 10%); }
    }
    .icon-google-plus {
        background-color: @googleplus;
    &:hover { background-color: lighten(@googleplus, 10%); }
    }
     .icon-instagram {
        background-color: @instagram;
    &:hover { background-color: lighten(@instagram, 10%); }
    }
    .icon-linkedin {
        background-color: @linkedin;
    &:hover { background-color: lighten(@linkedin, 10%); }
    }
    .icon-pinterest {
        background-color: @pinterest;
    &:hover { background-color: lighten(@pinterest, 10%); }
    }
     .icon-rss {
        background-color: @rss;
    &:hover { background-color: lighten(@rss, 10%); }
    }
    .icon-twitter {
        background-color: @twitter;
    &:hover { background-color: lighten(@twitter, 10%); }
    }
    .icon-youtube-play {
        background-color: @youtube;
    &:hover { background-color: lighten(@youtube, 10%); }
    }
}
~~~

There are alternatives methods to creating your LESS, such as using Mixins. For more information on mixins see this [page](http://lesscss.org/#-mixins).

## Adding Responsive CSS ##

As you may have noticed we used the `pull-right` [utility class](http://docs.pagelines.com/tutorials/html-css-utilities), this floats your element to the right. However, when viewing on a mobile device, you will probably want the `.social-bar` element to be centered. Adding the following code, will center your social bar on all devices that have a max screen resolution of `767px`.

~~~ .css
@media (max-width: 767px) {
    .social-bar {
        float: none;
        text-align: center;
    }
}
~~~

## The Result ##

When all the above steps have been completed, the end result will look like this on your desktop PC/Mac.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/branding-example.jpg)

Although a lot of instructions, this is quite basic and is supposed to demonstrate what can be achieved with DMS and your imagination.

<div class="row-fluid">
    <div class="span12">
        <ul class="pager">
            <li class="pull-left"><a href="http://docs.pagelines.com/tutorials/section-area-styling">&larr; Section Area Styling</a></li>
            <li class="pull-right"><a href="http://docs.pagelines.com/tutorials/lockdown-visual-editor">Lockdown Visual Editor  &rarr;</a></li>
        </ul>
    </div>
</div>
