<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/support-troubleshooting">Support & Troubleshooting</a> <span class="divider">/</span></li>
  			<li class="active">Memory Allocation Error</li>
		</ul>
	</div>
</div>

# Memory Allocation Error #

The reason why this error shows up is because you exceeded the default Memory Limit. There are numerous solutions for it, but the most common reason for this error is caused by a plugin(s).  When visitors to your site view a page, all PHP calls on the page load using available, designated PHP memory resources.  Excessive plugins, oversized images and some customized code can drain available PHP resources.

The error will look similar to this:

<pre>
Fatal error: Allowed memory size of 3353552 bytes exhausted (tried to allocate 2348957 bytes) in /home/username/public_html/wp-includes/plugin.php on line X
</pre>

The simplest method in attempting to resolve this issues is to, open your `wp-config.php` which is located in the root WordPress directory. Then add the following line inside the main php tag:

~~~ .php
define('WP_MEMORY_LIMIT', '64M');
~~~

With this line of code, we may have just increased the memory limit to 64Mb. If you still encounter the error after applying this fix, you will need to contact your web host provider. Inform them of the issue and ask if it is possible for them to increase the server's memory limit.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/support-troubleshooting/common-issues">Common Issues &rarr;</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/support-troubleshooting/white-screen-of-death">White Screen of Death &rarr;</a></li>
		</ul>
	</div>
</div>