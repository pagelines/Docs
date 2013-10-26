<div class="row-fluid">
  <div class="span12">
    <ul class="breadcrumb">
        <li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
        <li><a href="http://docs.pagelines.com/advanced">Advanced</a> <span class="divider">/</span></li>
        <li class="active">Optimizing Load Time</li>
    </ul>
  </div>
</div>

# Optimizing Load Time #

You have probably heard this before, but when a user visits your website for the first time, you only have a few seconds to capture their attention, convincing them to stick around. This is why having a optimized load time, is important, especially for those of you running a business.

PageLines DMS has been built with performance in mind. However, some hosting environments can have a negactive effect on the performance of DMS, which is out of our control. Therefore, we have compiled a list of everything you can do, to improve your load time.

## Web Host Provider ##

When choosing your web host package, shared hosting may seem like a bargin (unlimited databases, unlimited disk space etc...). However, this may not always be the case and these extras can come at a price elsewhere on your setup. Usually resulting in incredibly slow performance and possible down time.

This is why choosing a good web host provider, is one of the most important decisions you will ever make. Although finding one that works for you, is usually found the hard way via trial and error. Luckily, we have provided you with a list below of recommended hosts by our Store developers.

* [FlyWheel](http://getflywheel.com/)
* [WP Engine](http://wpengine.com/)
* [ZippyKid!](https://www.zippykid.com/)
* [Page.ly](https://page.ly/)

## Caching ##

A cache plugin generates a HTML copy of your web pages and stores them on your server as static files. When a visitor arrives at a particular page, the server uses the cached page rather than re-querying your database and dynamically generating it. Therefore, speeding up page response times and reducing the server resources required for generating and serving a web page.

There are many cache plugins available via the Wordpress plugin repository. However, we recommend the following:

* [WP Super Cache](http://wordpress.org/plugins/wp-super-cache/)
* [W3 Total Cache](http://wordpress.org/plugins/w3-total-cache/)

For information on configuring these plugins, please review their documentation.

## Content Delivery Network (CDN)

A CDN (Content Delivery Network) is a network of servers around the globe. The sole purpose of a CDN is to deliver content to end-users with high availability and high performance. Besides better performance and availability, CDNs also offload the traffic served directly from the content provider's origin infrastructure, resulting in cost savings for the content provider.

* [MaxCDN](http://www.maxcdn.com/)
* [CloudFlare](https://www.cloudflare.com/)

## Images ##

In modern web development even minor optimizations have significant influence on how efficiently your website works. Optimizing your images to reduce the file size can easily be achieved by using an application such as [JpegMini](http://www.jpegmini.com/) available for both  <ic class="icon-apple"></i> and <i class="icon-windows"></i>.

Fortunately, there is an amazing, free plugin called [WP-SmushIt](http://wordpress.org/plugins/wp-smushit/) which will do this process to all of your images automatically, as you are uploading them.

Another alternative is [Kracken](http://kraken.io/), Kraken is a robust, ultra-fast image optimizer.

## LazyLoad ##

LazyLoad is the process of delaying the loading of images in long web pages. Images outside of viewport (visible part of web page) wont be loaded before user scrolls to them.

PageLines have a free plugin available on the store called [Lazy Load](http://wordpress.org/plugins/lazy-load/)

## Revision Control ##

If WordPress is left to its own devices, it would store every single one of your drafts, indefinitely. If our posts are done and published, why would we need all those drafts stored ?

Installing the [Revision Control](http://wordpress.org/plugins/revision-control/) plugin, makes sure post revisions are kept to a minimum, set it to 3 or 4, in case you make a mistake, but not too high that you clutter your backend with unnecessary drafted posts.

<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/advanced/custom-sidebars">&larr; Custom Sidebars</a></li>
  		</ul>
	</div>
</div>
