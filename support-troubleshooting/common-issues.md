<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/support-troubleshooting">Support & Troubleshooting</a> <span class="divider">/</span></li>
  			<li class="active">Common Issues</li>
		</ul>
	</div>
</div>

# Common Issues and Solutions #

Along with the power of PageLines and WordPress, comes a few common issues that we see relatively often. These issues come with flexibility and usually have a pretty straight forward solution. We'll go through the most common issues here. 

## Common Issue #1 - Plugin Incompatibility ##

The most common issues we see are typically related to plugins. 

Some plugins may have issues, like javascript errors, that prevent proper operation of DMS. These plugins may be poorly coded, not up to WordPress standards, or there may be a conflict specific to your combination of extensions (e.g. if two plugins use the same function name or similar).

### Typical Symptoms ###

<ol>
<li>DMS editor is unresponsive or does not save. (Javascript Issue)</li>
<li>DMS loading screen does not fade away on full load of the site. (Javascript Issue)</li>
<li>Drag and drop or other key functions are buggy or unfunctional. (Javascript Issue)</li>
<li>CSS or Graphics appear strange/ugly/not-as-intended. (CSS Issue)</li>
</ol>

### Diagnosing and Fixing ###

In order to diagnose if a plugin is causing an error, navigate to your **Wordpress Administrator Dashboard &rarr; Plugins**.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/wp-dash-plugins.jpg)

1. Deactivate **ALL** plugins
2. Re-visit your website and check to see if the issue persists

If the issue does not persist, one (or more) of your plugins is causing a conflict with PageLines DMS. To determine which plugin(s) is causing the conflict, follow these steps:

1. Activate each plugin one by one
2. Check to see if the issue returns after each plugin is activated

## Common Issue #2 - Javascript Error(s) ##

DMS relies heavily on Javascript (JS) for its drag and drop functionality and handling. Because of this, JS errors can cause a lot of problems with DMS. 

If you're experiencing issues with DMS functionality this may be due to JavaScript errors or conflicts. These can be created by a plugin, or potentially by custom code/scripts that you've added. 

Luckily, diagnosing JavaScript errors/conflicts can quickly be found with your browsers built-in web developer tools. 

### Typical Symptoms ###

<ol>
<li>DMS editor is unresponsive or does not save. (Javascript Issue)</li>
<li>DMS loading screen does not fade away on full load of the site. (Javascript Issue)</li>
<li>Drag and drop or other key functions are buggy or unfunctional. (Javascript Issue)</li>
</ol>

### Diagnosing and Fixing ###

<ol>
<li>In Google Chrome go to the page where you are experiencing the error and navigate to <strong>View &rarr; Developer &rarr; JavaScript Console</strong>.</li>
<li>The error console will open. If you don't see any errors try reloading the page. The error may be generated when the page loads.</li>
</ol>

The console will provide you with the error type, the location of the error and the line number

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/js-error.jpg)

**Note:** If you prefer to use another browser, you can find instructions on how to identify JavaScript errors from the [Wordpress Codex](http://codex.wordpress.org/Using_Your_Browser_to_Diagnose_JavaScript_Errors)

##  Common Issue #3 - PHP Errors ##

If you encounter a white screen of death (WSOD) or receive a PHP error message preventing you from accessing your site,
this may be due to a PHP error. This can be caused by a plugin conflict, server error or database issue. 

### Typical Symptoms ###

<ol>
<li>Incomplete rendering of page.</li>
<li>DMS loading screen does not fade away on full load of the site.</li>
<li>Unresponsive editor or page.</li>
</ol>

### Diagnosing and Fixing ###

You can usually assume a PHP error if you see incomplete page output (tip: view source), or an actual PHP warning/error printed to your screen.

Debugging PHP errors is made simple as WordPress comes with specific debug systems designed to simplify the process.

1. Open the **wp-config.php** file.
2. Located the following line of code `define('WP_DEBUG', false);`
3. Replace `false` with `true` like so `define('WP_DEBUG', true);`

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/php-error.jpg)

Enabling WP_DEBUG will cause all PHP errors, notices and warnings to be displayed, like the image above.


