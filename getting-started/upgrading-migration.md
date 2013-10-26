<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/tutorials">Getting Started</a> <span class="divider">/</span></li>
  			<li class="active">Upgrading & Migration</li>
		</ul>
	</div>
</div>

# Upgrading & Migration #

In this tutorial, we will show you the process of migrating from Platform Pro (and other legacy themes) and the PageLines Framework. Additionally, we will discuss upgrading from the Open Source edition of DMS to one of the Premium DMS subscriptions.

## Migrating from Legacy Products ##

Unfortunately, there is no automatic upgrade path for users of Platform or Platform Pro (or legacy themes), instead you will need to migrate to PageLines DMS. This means that you will need to recreate your site's design again using the available tools and features within PageLines DMS.

The average site transition takes from five minutes to a few hours, depending on the volume of customization that you applied to your website. There are, however, a few things you should be aware of when upgrading to make your transition as easy as possible.

### Database Untouched ###

Your site content, such as your pages and posts will remain untouched upon installing and activating PageLines DMS.

### CSS Changes ###

Whilst developing PageLines DMS, it is very difficult to prevent some CSS changes from occurring. This means that you may need to review your custom CSS and make some adjustments where required, to correct your custom CSS rules and align them with the new elements inside Pagelines DMS.

### Migration Steps ###

* Back up your database.
* Copy any custom CSS, functions and any other code you may have added into a code editor.
* Move all of your widgets to the “**inactive”** area at the bottom **Appearance &rarr; Widgets**.
* Follow these instructions on how to [install & activate PageLines DMS](http://docs.pagelines.com/getting-started/installation).
* Re-establish your WordPress menus **Appearance &rarr; Menus** and click **Save**.
* Move all of your widgets back to the desired locations **Appearance &rarr; Widgets**.
* Visit each tab of the DMS Toolbar and adjust the settings to your liking (don’t forget to enter your account info too!).
* Paste your custom CSS, functions, etc, that you copied earlier back into your site.
* There are three ways to do this, for more information see our [How to Customize](http://docs.pagelines.com/customize/how-to-customize) doc.

## Migrating from PageLines Framework ##

Like Platform Pro, there isn't an upgrade path and you will need to migrate. However, we have included a option **DMS Toolbar → Global Options ↠ Advanced &rarr; Framework V2 Upgrade**. Using this option enables PageLines Framework backend interface and options. Not all PageLines Framework options work in DMS due to specificity; but it allows you to reference your old settings as you are rebuilding your site using the DMS system.

Like the instructions above, your site content such as pages and posts will remain untouched, though your custom CSS will need adjusting to align with the new elements.

### Migration Steps ###

* Back up your database.
* Copy any custom CSS, functions and any other code you may have added into a code editor.
* Move all of your widgets to the “**inactive”** area at the bottom **Appearance &rarr; Widgets**.
* Follow these instructions on how to [install & activate PageLines DMS](http://docs.pagelines.com/getting-started/installation).
* Re-establish your WordPress menus **Appearance &rarr; Menus** and click **Save**.
* Move all of your widgets back to the desired locations **Appearance &rarr; Widgets**.
* Visit each tab of the DMS Toolbar and adjust the settings to your liking (don’t forget to enter your account info too!).
* Paste your custom CSS, functions, etc, that you copied earlier back into your site.
* There are three ways to do this, for more information see our [How to Customize](http://docs.pagelines.com/customize/how-to-customize) doc.

<div class="alert alert-error">
  <strong>Warning:</strong> You must uninstall the <strong>PageLines Section</strong> plugin, as this may cause issues with DMS such as section styles not loading etc, this is because sections in DMS are now considered plugins.
</div>

## Upgrading From DMS Lite

After your purchase of PageLines DMS has been completed, log in to your website's WordPress admin dashboard.

* Navigate **PageLines &rarr; Account**.
* Enter your PageLines **username** and **password**.
* Once successfully logged in, it will state **PageLines DMS enabled**.
* Go back to your WordPress Dashboard. You should see a notice at the top of the screen (see graphic below).
* Click **Update Now**.
* Under the **Themes** tab, check the box next to **PageLines** and click **Update Themes**.
* Once updated, you will have successfully upgraded to the premium version of PageLines DMS.

`PageLines DMS Version 3.X is available. You should Update Now.
Please check out the release thread before upgrading`

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/getting-started/activation">&larr; Activation</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/getting-started/dashboard-account">Dashboard & Your Account &rarr;</i></a></li>
		</ul>
	</div>
</div>

