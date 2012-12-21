---
Date: 2012-02-26
Title: How to speed up your website
Slug: speed-up-your-website
---

Having a fast website is crucial nowadays. With the attention span of the Internet users decreasing constantly, you need to have a fast loading website. Go slow and you will lose any potential customer that visits your website. Google is penalising slow websites as well. I know, because I got “punished” almost a year ago; they stripped one page-rank from this website — punishment continuing to these days. This factor: website loading time, is a potential dealbreaker. So let me show you some methods of speeding up your website.

##Checking your speed

First, we need to establish the current loading time of the website. To do that, you need to download a plugin for your browser called [YSlow](http://developer.yahoo.com/yslow/). After you’ve installed Firebug, YSlow, and restarted the browser, you should have an icon in the bottom right corner of your browser. Click it and run it on your website. Now, there is a catch. The website’s loading time also depends on the client’s Internet speed. So, when I refer to checking your speed I mean writing down the size of your website.

![YSlow results](http://dl.dropbox.com/u/48552248/websites/sicanstudios/blog/assets/yslow.jpg)
<figcaption>The weight of my website in kB</figcaption>

Finished? Okay, let’s start reducing the loading time of your website. I’ll present the methods by each subject.

##Javascript

Remove all unnecessary scripts and fancy effects and use PHP (back-end) instead. One example of that would be to ditch the JS script for displaying your Twitter feed and use PHP. You may argue that with this way you load the server more. Yes, but it’s an insignificant amount and I prefer doing that, rather that overloading the client’s machine. By removing scripts you also reduce the requests you make to the server to fetch that script. So there you have it; a win-win situation. Another clever solution, if your website is running with WordPress, is to use IF statements to load certain scripts. For example, there is no point in loading that `Fancybox` script used to preview full size images if the user isn’t on a `post` page. The code for that:

	<?php if (is_single()) 
		echo '<script type="text/javascript" src="http://www.yourwebsite.com/javascript/fancybox.js"></script>';
	?>

Place your Javascript at the bottom of the page. The functionality of this is to allow the page and the style of it to load completely before loading the script with those fancy effects. The benefits are that your browser doesn’t hang mid-air waiting for that script to load and then continue loading the page.

Make your Javascript files load externally. Keep the HTML only for content. By doing that, the browser can cache the script file, whereas having it inside the HTML, it would be loaded every time the HTML file is requested. You get a faster website for free!

Combine your Javascript files into one big file. The benefit is that you reduce the HTTP requests to one. This can be tricky though. Conflicts between scripts could appear. Start by creating a `.js` file and inserting in it, one script at a time. Test your website to see if the effects work. If yes, continue adding the scripts until you are done. If one of the scripts doesn’t work, you could try to alternate places with another script (place the one on top of the other). It goes without saying that libraries such as jQuery should be at the top, inside that massive JS file. Some tweaking to your Javascript code is required. Generally it’s good practice to add each script inside its own function:

	$(function() {
	.
	.
	});

Minify your Javascript code. Minification is the practice of removing unnecessary characters, such as spaces, from code to reduce its size. Go here to [minify your CSS](http://www.minifycss.com/css-compressor/) and here to [minify your JS](http://www.minifyjs.com/javascript-compressor/). It produces an “ugly”, crushed version of your code, which you will have a hard time editing. So, make sure you have the files backed up in their original state. If you are using WordPress you can install [this plugin](http://wordpress.org/extend/plugins/wp-minify/) or [this one](http://wordpress.org/extend/plugins/w3-total-cache/).

##Images

Images are a big resource waster. Use CSS3 to style your buttons and graphic elements. You can simulate any Photoshop effect with CSS3. Don’t forget that users on Internet Explorer cannot see CSS3 elements (IE 7 or earlier); in the custom CSS file for my IE hacks I also add the image versions of the design elements.

Use CSS image sprites. This means adding all the images that are used in your website inside one file. By doing so, you minimise HTTP requests. Then, you can position each design element, for example the logo, by using CSS code to move the sprite image around:

	.logo {
		background: url('./images/sprite.png') 50px 100px no-repeat;
	}

This technique should also be implemented when adding hovering effects on an element, a logo for example:

	.logo {
		background: url('./images/sprite.png') 50px 100px no-repeat;
	}

	.logo:hover {
		background: url('./images/sprite.png') 50px -100px no-repeat;
	}

![sprites](http://dl.dropbox.com/u/48552248/websites/sicanstudios/blog/assets/sprites.jpg)

In Photoshop, save your images for the “Web and Devices” (Alt+Shift+Ctrl+S), not just selecting “save” or “save as”. This will result in a much smaller sized (in kB) image. Also, crop your image to allow space only for the necessary elements; don’t create a 500px by 500px image for a 100px square.

Smush your images. Smushing your images removes unnecessary bytes from the files. A popular free service is [Smush.it](http://www.smushit.com/ysmush.it/). Also available as a [Wordpress plugin](http://wordpress.org/extend/plugins/wp-smushit/). Apart from the content images, don’t forget to smush your favicons and image sprites.

Use fewer images with your content. I know; they attract attention and enhance the browsing experience. But they can also ruin it completely, by never allowing the website to finish loading. I get pissed at people who add images only for the sake of it; images without relevancy to the content. On the other hand, images can be used as a traffic source. Click to read how I managed to [increase my traffic by 570% using images](http://sicanstudios.com/post/increase-traffic-website).

Do not resize images in HTML:

	<img src="./images/large_500px_480px.jpg" width="100px" height="90px" alt="big image"/>

Don’t ever do that. Why? Because you’re forcing your visitors to download a larger file than the one they need, making thus your website slower. Your images will look awful because browsers don’t do a very good job at resizing images and resizing in the browser requires more time to render the page and uses more of your viewer’s system resources and RAM. And for mobile versions, you can serve different images with HTML5 like so:

	<img src="t.gif" data-src="real-image.jpg" data-bigger-src="real-bigger-image.jpg">

Read more about this on the [24ways.org article](http://24ways.org/2011/adaptive-images-for-responsive-designs-again).

##HTML and CSS

Learn how to code properly. Do not use many selectors, unless it’s necessary:

	#header #menu .submenu ul li ul li.hidden {
		font-size: 20px;
	}

The above code is the same as the below:

	li.hidden {
		font-size:20px;
	}

Another way to reduce your CSS file size is to use shorthand properties. For example this is not smart:

	#footer {
		margin: 10px 20px 10px 20px;
		font-size: 14px;
		font-family: Arial, sans-serif;
		line-height: 1.5em;
	}

The same can be achieved with the following code:

	#footer {
		margin: 10px 20px;
		font: 14px/1.5em Arial, sans-serif;
	}

There are many ways to write good code; I won’t go into detail in this post; if you want, [read more here](http://www.smashingmagazine.com/2007/05/10/70-expert-ideas-for-better-css-coding/).

Validate your [HTML](http://validator.w3.org/) and [CSS](http://jigsaw.w3.org/css-validator/) code. If your CSS code doesn’t validate because of the `-moz-opacity` or the `-moz-box-shadow` it’s OK. But often you simply forget a closing bracket; this can lead to page rendering issues later on. And don’t assume that because the website loads fine on your machine to load fine on a different one. Reduce those errors.

##Other Savings

Compress your files with `gzip`. Learn [how to do that here](http://pixeljar.net/2009/06/06/how-to-gzip-your-site-components/). If you are using Wordpress, the plugins mentioned earlier in the minify section, should do that for you automatically.

Remove entity tags. By removing the `ETag` you disable the ability of the browser to validate the files, relying on your expires headers and cache control. Add the following code in your `.htaccess` file:

	Header unset ETag
	FileETag None

Remove iFrames. The Facebook _like button_ or Twitter button at the bottom of this page, is costing me around 10KB in size, increasing the page’s loading time. Is it worth it?

If you are using WordPress, utilise the least amount of plugins. Installing many plugins, heavily overloads the database thus making it slower. Also, databases should be optimised at least once a month. A plugin for WordPress that does that (ironic isn’t it?) is [this one](http://wordpress.org/extend/plugins/wp-dbmanager/).

Get a good server. Especially if you get sudden spikes of traffic from Twitter, Reddit, etc. These spikes can crash your server. If you are getting lots of traffic regularly, consider VPS (Virtual Private Servers) or dedicated servers on which only your website is hosted (more expensive).

Use a Content Delivery Network (CDN). A Content Delivery Network is a system of computers containing copies of data. In short, the user accesses a copy of your website near them, as opposed to all users accessing the same central server, creating bottlenecks near that server. Check out [CloudFlare](https://www.cloudflare.com/). Basic account is FREE!

Consider hosting your comments on external platforms like [Disqus](http://disqus.com/). In doing so, the server is doesn’t have to save, process and access your comments every time the page is loaded. Furthermore, spam comments are automatically checked by them; another plus. Engadget and many others use it, why not you?

##Conclusion

Having a fast website is very important. Now you know how. I presented you with many methods of speeding up your website. Go ahead and use them on your website, today! This list is on-going, meaning that I will add even more methods later.