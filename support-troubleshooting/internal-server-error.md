<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/support-troubleshooting">Support & Troubleshooting</a> <span class="divider">/</span></li>
  			<li class="active">Internal Server Error</li>
		</ul>
	</div>
</div>

# Internal Server Error #

There can be a number of reasons for an Internal Server Error. Here are some thing you can do to solve it:

<ul>
	<li>The most likely issue is a corrupted <code>.htaccess</code> file. Log in to your site root using FTP and rename your <code>.htaccess</code> file to <code>.htaccess_old</code>. Try loading your site to see if this has solved your problem. If it works, make sure to visit Settings > Permalinks and reset your permalinks. This will generate a new .htaccess file for you.</li>

	<li>Try deactivating all of your Plugins to see if it is a Plugin issue. If you are unable to access your WordPress Administration Screens, deactivate your Plugins via FTP by following <a href="http://docs.pagelines.com/support-troubleshooting/white-screen-of-death">these instructions</a>.</li>

	<li>Increase the PHP Memory limit by following <a href="http://docs.pagelines.com/support-troubleshooting/memory-allocation-error">these instructions</a>.</li>

	<li>Try re-uploading the <strong>wp-admin</strong> and <srong>wp-includes</strong> folders from a fresh install of WordPress.</li>
</ul>

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/support-troubleshooting/Parse Error">&larr; Parse Error</a></li>
		</ul>
	</div>
</div>
