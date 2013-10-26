<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
  			<li class="active">Lockdown the Visual Editor</li>
		</ul>
	</div>
</div>

# Lockdown the Visual Editor #

Use the following code If you have completed your clients design and would prefer to lockdown the DMS Visual Editor, this will prevent your client from making any unwanted changes.

## Admin Only Access ##

If you wish to lockdown the visual editor and only allow the **admin** access to the editor, open up your `wp-config.php` file and find the following code:

~~~ .php
define('WP_DEBUG', false);
~~~

Add below that, the following code:

~~~ .php
define( 'PL_EDITOR_LOCK', 'admin' );
~~~

Your changes will look similar to this:

~~~ .php
define('WP_DEBUG', false);
define( 'PL_EDITOR_LOCK', 'admin' );
~~~

Save these changes and from now on, only the **admin** user will be able to access the Visual Editor.

## Multiple User Access ##

If you work in a team and wish to have multiple users access to the Visual Editor but keep your client lockout, use this method. Open up your `wp-config.php` file and find the following code:

~~~ .php
define('WP_DEBUG', false);
~~~

Add below that, the following code (remember to replace the usernames in the example below to your teams usernames):

~~~ .php
define( 'PL_EDITOR_LOCK', 'andrew,bob,chris,daniel,eric' );
~~~

Your changes will look similar to this:

~~~ .php
define('WP_DEBUG', false);
define( 'PL_EDITOR_LOCK', 'andrew,bob,chris,daniel,eric' );
~~~

Save these changes and from now on, only **andrew**, **bob**, **chris**, **daniel** and **eric** users will be able to access the Visual Editor.


 If no users are defined, all users with **edit_theme_options** role will have access to the Visual Editor.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/tutorials/creating-a-branding-area">&larr; Creating a Branding Area</a></li>
		</ul>
	</div>
</div>