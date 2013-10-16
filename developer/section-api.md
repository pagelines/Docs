# Building Drag + Drop Sections #

PageLines Section system allows developers to use their imagination to create their own unique sections for extra functionality as well as offering these sections to other PageLines users via the [PageLines Store](http://www.pagelines.com/shop).

Using this 'API', you can define what kind of content the sections load on the page, and use the option engine to add options directed at that particular sections.

## Setting Up & File Structure ##

The first part of section development, is setting up your section folder. 

Sections are supported in a variety of areas; specifically, they are supported in your plugins folder (with a special wrapper) and in your child theme 'sections' folder (child_theme_root/sections/sectionFolder/). 

The folder name you choose for your section will become your global 'section ID'.  Inside this folder you'll have your master 'section.php' file where you'll write most or all of the code for the section.

So to set up your basic section, you would have something like this (child_theme_root)/sections/sectionID/section.php

## Section Headers ##

Once you open up a section.php file, the first thing you'll see is the section headers. These are the basic information that you use to set up your section and how it works in DMS. 

Here is how the headers work and look in a section.php file:

```php
/*
	Section: Your Section Name
	Author: Your Name
	Author URI: http://www.yourwebsite.com
	Description: A short section description.
	Class Name: YourSectionClassName
	Filter: component
	Loading: active
*/
```
#### Class Name Header ####
This header must have the same value of your master section class (PHP class). We'll discuss this below. 

#### Filter Header ####
This header determines where your section will appear in the sections panel and can steer the behavior of the section as well. 
A 'Filter: full-width' statement will make your section full width and it won't be usable inside section areas. An example of this is the RevSlider section. 

#### Loading Header ####
This header determines if the section is actively loaded when a user drags it on to the page. This means it appears instantly without page refresh. Any other value here will require a page refresh on load of your section. 

Currently sections with a lot of javascript will require reloads but simpler sections may not. 

## Your Section Class ##

The basic wrapper for a DMS section is a PHP class that extends a base 'PageLinesSection' class. 

This gives your section a lot of prebuilt functionality and gets you off to a strong start. 

After you create this class, your functions and properties will all be added to the class to steer its functionality. 

A section wrapper looks like this: 

```php

class YourSectionClassName extends PageLinesSection {
	
	// Your Methods will go here. 
	// Note: the Class Name header and the section class name need to be the same.
	
}

```

Now your section is started! We're going to build on this in the next few paragraphs.

## Section Properties and Assets ##
By extending the core PageLines Section class you get access to a lot of tools, built right in to the section. 

Specifically, there are a bunch of variables set up for you to access that give you information about the section (that you can then use in code).

A few examples of variables you'll have are below.

```php

class YourSectionClassName extends PageLinesSection {
	
	function section_persistent(){
		
		$url = $this->base_url; // the base url of the section
		$dir = $this->base_dir; // the base directory of the section
		$thumb = $this->screenshot;  // the section thumb
		$splash = $this->splash; // the section splash
	}
	
}

```

## Section Methods ##
In the world of object oriented programming, they talk about something called 'methods.' These are functions within and a class that give is some sort of functionality. 

Sections use a bunch of methods to accomplish various things on a website. For example, there is a method for injecting things in the website header, or another one to add options to a section. 

Let's walk through the various methods available to you, and how they work... 

## section_persistent() Method ##

This method is used to add code to a section that should ALWAYS be loaded. For example, if a section needs to add something to the admin or a new post type, use this method. 
```php

class YourSectionClassName extends PageLinesSection {
	
	function section_persistent(){
		// Put code that should always be loaded here. 
	}
	
}

```


## section_template() Method ##
This is the most common and critical method in the entire section system. It is the output that appears on the page, wherever the section is placed. 

An example of this is as follows: 
```php

class YourSectionClassName extends PageLinesSection {
	
	function section_template(){
		?>
		<div class="example">
			This output HTML would appear on the page wherever the user drops the section.
		</div>
		<?php
	}
	
}

```

## section_head() Method ##

This method is used to add code and output that runs during the header portion of your website. This is often where javascript or metatags, etc... are put. 
```php

class YourSectionClassName extends PageLinesSection {
	
	function section_head(){
		// This will out put in between your sites <head> tags. 
		// For example, adding javascript: 
		?>
		
		<script>
		jQuery(window).ready(function() {
			// Javascript could go here.
		});
		</script>
		<?php
	}
	
}

```

#### prefix() Method ####

As a note, we've created a special 'prefix' method that can be used to get a unique JS and CSS selector for the current section. This can be incredibly useful when you're trying to specifically target a section with JS. 

```php
$this->prefix // returns > .section-yoursectionid[data-clone="######"] > which is a unique sitewide selector for your current section

```



## section_styles() Method ##
This method is most commonly used to add/enqueue javascript and CSS libraries to pages when the section is loaded. 

An example of this is as follows: 
```php

class YourSectionClassName extends PageLinesSection {
	
	function section_styles(){
		
		// This will load the 'cooljavascript.js' file from the current section folder
		wp_enqueue_script( 'my-js-plugin', $this->base_url.'/cooljavascript.js', array( 'jquery' ), PL_CORE_VERSION, true );
	}
	
}

```


# Dealing With Options #

For a more comprehensive overview of the options engine, read this article: <a href="/developer/dms-option-engine">DMS Option Engine <i class="icon-angle-right"></i></a>.


## section_opts() Method ##

Options are added to sections primarily through the section_opts() method. This method simply returns an array that is used by the option engine to create your options. 

An example would look like this:
```php

class YourSectionClassName extends PageLinesSection {
	
	function section_opts(){
		$opts = array(
			array(
				'key'			=> 'the_option_key',
				'type' 			=> 'select',
				'title' 		=> 'Select Something',
				'label' 		=> 'Select Somethign',
				'opts'=> array(
					'optvalue1'		=> array( 'name' => 'Some Option Stuff' ),
					'optvalue2'	 	=> array( 'name' => 'Some Option Stuff' )
				)
			)

		);
		return $opts;
	}
	
}


```

## The opt() Method ##
To reduce the complexity created by various scopes and cloning in DMS; we've created the ridiculously simple 'opt' method. 

This function simply takes the key of the option you'd like the value for and returns that value. 
```php

// The above option array in section_opts() would create a select option, with two options to select from. 
// The option value would be attainable via:
$opt_value = $this->opt('the_option_key');

```











