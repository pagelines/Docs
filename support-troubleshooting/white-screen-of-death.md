<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/support-troubleshooting">Support & Troubleshooting</a> <span class="divider">/</span></li>
  			<li class="active">White Screen of Death</li>
		</ul>
	</div>
</div>

# The White Screen of Death #

PHP errors, as well as database errors can manifest as a white screen, a blank screen with no information, in the WordPress community this is commonly known as the White Screen of Death.

There are a number of reasons for the 'white screen of death':

## Plugins ##

If you can access the WordPress administrator dashboard try deactivating all of your Plugins and then reactivating them one by one and see if this resolves the issue.

If you are unable to access your WordPress administrator dashboard, log in to your website via FTP. Locate the folder `/wp-content/plugins/` and rename the Plugin folder `plugins_old`. This will deactivate all of your Plugins. You should then be able to login and access the WordPress dashboard.

## Memory Limit ##

The white screen of death can also be caused by your memory being exhausted. Read our tutorial on how to increase [PHP memory in WordPress](http://docs.pagelines.com/support-troubleshooting/memory-allocation-error) for more information.

## WP_DEBUG ##

If disabling all plugins didn't resolve the issue, you can also use the WordPress debug function. `WP_DEBUG` is a PHP constant (a permanent global variable) that can be used to trigger the "debug" mode throughout WordPress. It is false by default and can be set to true in the `wp-config.php` file.  See below:

~~~ .php
// REPLACE FALSE
define('WP_DEBUG', false);

// WITH TRUE TO ENABLE DEBUG MODE
define('WP_DEBUG', true;
~~~

Once added, the blank screen may now display errors, warnings, or notices. These will likely help you determine the root cause.  If you're going to open a topic in our support forum, please copy and paste these errors there, explaining what occurred before you experienced the white page condition.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/support-troubleshooting/memory-allocation-error">&larr; Memory Allocation Error</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/support-troubleshooting/parse-error">Parse Error &rarr;</a></li>
		</ul>
	</div>
</div>
