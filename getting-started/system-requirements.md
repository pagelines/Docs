<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/getting-started">Getting Started</a> <span class="divider">/</span></li>
  			<li class="active">Requirements</li>
		</ul>
	</div>
</div>

<h2 id="requirements">Requirements</h2>

<p>PageLines DMS has some system requirements you should be aware of prior to installing.</p>

<h3>Browser Requirements</h3>

<p>PageLines DMS has been designed to work best in the latest desktop and mobile browsers, meaning older 
browsers will likely not be compatible, as they do not support most CSS3 properies. Specifically, we support the 
latest versions of the following:</p>

<ul>
<li>Chrome (Android, iOS, Mac and Windows)</li>
<li>Safari (iOS and Mac only, Windows has more or less been discontinued)</li>
<li>Firefox (Mac, Windows)</li>
<li>Internet Explorer</li>
<li>Opera (Mac, Windows)</li>
</ul>

<div class="bs-callout bs-callout-warning">
      <h4>Internet Explorer 8 and 9</h4>
      <p>Internet Explorer 8 and 9 are compatible. However, please be aware that many CSS3 properties 
      are not supported by IE8 and therefore, support for IE8 is limited.</p>
</div>

<p>To ensure you have a secure and enjoyable browsing experience, we recommend you visit <a href="http://browsehappy.com/" target="_blank">Browse Happy</a>. 
Browse Happy is a way for you to find out what is the latest version of each major browser.</p>

<div class="bs-callout bs-callout-info">
      <h4>DMS Visual Editor & Toolbar</h4>
      <p>PageLines DMS Visual Editor is only compatible with <a href="https://www.google.com/intl/en_uk/chrome/browser/" target="_blank">Google Chrome</a>. 
      The reason behind this is that Chrome has the best compiler and fastest javascript. Therefore if you wish to use the PageLines DMS Visual Editor, Google Chrome is required.</p>
</div>

<h3>Server Requirements</h3>

<p>PageLines DMS has been designed to work with any modern server environment, the recommended minimum requirements are:</p>

<ul>
      <li>PHP version 5.2.4 or greater (5.3 or greater recommended)</li>
      <li>MySQL version 5.0 or greater</li>
</ul>

<div class="bs-callout bs-callout-info">
      <h4>Users of PHP version 5.2</h4>
      <p>First and forth most, we recommend contacting your web host provider and ask them to upgrade your PHP version. 
      If this isn't possible for whatever reason, please make sure 
      <a href="http://php.net/manual/en/security.magicquotes.php" target="_blank"><code>Magic Quotes</code></a> 
      is <strong>off</strong> and <a href="http://uk3.php.net/manual/en/intro.posix.php" target="_blank"><code>Posix</code></a> 
      is <strong>Enabled/Installed</strong>.</p>
</div>

</p>A PHP memory limit of 49MB is the minimum requirement for PageLines DMS. However, this value can change depending 
on the version of PHP installed on your server. Below, is a list of the allocated PHP memory used by DMS for each PHP version.</p>

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
      <th>PHP Version</th>
      <th>Memory Usage</th>
    <thead>
    <tbody>
			<tr>
		    <td>PHP version 5.2</td>
		    <td>49MB (Megabytes)</td>
		  </tr>
      <tr>
        <td>PHP version 5.3</td>
        <td>39.2MB (Megabytes)</td>
      </tr>
     <tr>
        <td>PHP version 5.4</td>
        <td>30.8MB (Megabytes)</td>
      </tr>
      <tr class="success">
        <td>PHP version 5.5 <strong>Recommended</strong></td>
        <td>14MB (Megabytes)
      </tr>
    </tbody>
  </table>
</div>

<h3>WordPress Requirements</h3>

<p>We strongly advise that you always use the latest stable version of Wordpress for security reasons.</p>

<ul>
<li>The self hosted version of WordPress available from <a href="http://www.wordpress.org/" target="_blank">Wordpress.org</a></li>
<li>WordPress version 3.0 or greater</li>
</ul>

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
  			<li class="pull-right"><a href="http://docs.pagelines.com/getting-started/installation">Installation &rarr;</i></a></li>
		</ul>
	</div>
</div>
