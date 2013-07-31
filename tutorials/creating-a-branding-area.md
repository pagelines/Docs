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

Once you have DMS installed, once of the first things you will want to do is branding your website. Usually, these areas consist of a logo image on one side and a navigation menu and social media links on the other. In this tutorials, we will show you how to create your branding header area using nothing more than:

* 2 Column Section
* MediaBox Section with some basic HTML
* NavBar section
* TextBox Section with some basic HTML
* Some basic LESS CSS

## The Setup ##

To setup our Branding area, the first thing we want to do is enable the Visual Editor. Once active, from the DMS Toolbar click on **Add Sections**, then drag and drop the **2 Column** layout section into your header section area. 

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/branding-2column.jpg)

Now we will change the width of the two columns, so that our naviation has more room, to this simply click on the **decrease/increase** options. For this tutorial, we will be setting the width of the left column to **5/12** and the right column to **7/12**. However, you can have your columns any width.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/branding-column-width.jpg)


## Adding Logo ##

For the logo image, we will be utilizing the MediaBox section. Goto **Add Sections** via the Toolbar then drag and drop the **MediaBox** section into the left hand column of the **2 Column** section we added above.

* Once added, click on the **Edit** icon, this will bring up the **MediaBox** options.
* In the **Text and Embed HTML** field, add the following HTML:

~~~ .html
<a class="logo" href="http://www.my-website.com/"><img src="Path To My Image" alt="My Logo"></a>
~~~

You will need to add your websites URL as well as the URL for your logo image, we have included a `logo` class, just in-case you wish to add some additional styling.

* You can go through the additional **MediaBox** options to add animations (we used **From Left**), once finished, click the Publish button and refresh.
* Your logo image should now be present.

## Social Media Links ##

To integrate social media networks, we are going to utilize Font Awesome and style using LESS. Click the **Edit** icon on the **TextBox** section and add the following code to the **Text Content** box to add your social networks, you can edit the code to add/remove any services you do/don't use.

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
    </ul>
</div>
~~~

For a full list of social media icons, see the branding section on our [Font Awesome page](http://docs.pagelines.com/tutorials/font-awesome).

## Add Navigation ##

Adding your Navigation to your new branding area, is as simple as dragging and dropping the NavBar section onto your template. For this example, we will be positioning the NavBar in the right hand side of the **2Columns** section and underneath the **TextBox** section.

Once everything is in position you should end up with something similar to this:

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/branding-position-sections.jpg)

Once the NavBar is in position, click the <i class="icon-pencil"></i> icon, to bring up the **NavBar** options to configure it.

## Styling the Social Media Icons ##

In order to style the social media icons we added to the **TextBox**, we are going to be using LESS CSS and a few LESS variables. However, don't worry, we do all the hard work for you, all you need to do is add the code. As we are using LESS, the below code will need to be added to either **DMS Toolbar → </> Custom Code → Custom LESS/CSS Editor** or your **style.less** file in either **PageLines Customize Plugin** or **Base Theme**.

### Color Variables ###

These variables have each been given a specified color which is associated with that social media network. Add the following variables to the top of your customization method.

~~~ .less
/* Social media color variables */

@dribbble:			#EA4C89;
@facebook:          #3B5998;
@googleplus:		#E14107;
@instagram:         #517FA4;
@linkedin:			#0181B2;
@pinterest:			#CB2027;
@rss:				#E5842F;
@twitter:			#00ACED;
@youtube:			#CD332D;
~~~

Now it's time to add the LESS which will style the Social Bars HTML we added earlier. Add the following code to either **DMS Toolbar → </> Custom Code → Custom LESS/CSS Editor** or your **style.less** file in either **PageLines Customize Plugin** or **Base Theme**.

~~~ .less
.social-bar {
    a {
        margin-right: 0px;
        padding: 0px;
    }
    a:first-child {
        padding-left: 0;
    }
    li {
        display: inline;
    }
    .icon {
        .border-radius(0px); /* Here in-case you wish to add a radius */
        margin-bottom: 5px;
        min-width: 50px;
        color: #FFF;
        text-align: center;
        font-size: 26px;
        line-height: 50px;
    &:hover { .transition(background .4s linear); }
    }
    .icon-dribbble {
        background-color: @dribbble;
    &:hover { background-color: lighten(@dribbble, 10%); }
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

## Adding Responsive CSS ##

As you may have noticed we used the `pull-right` utility class, which floats your element to the right. However, when viewing on a mobile device, this may not be case. So adding the following code, will center your social bar on all devices that have a max screen resolution of `767px`.

~~~ .css
@media (max-width: 767px) {
    .social-bar {
        float: none;
        text-align: center;
    }
}
~~~

This is still a draft...
