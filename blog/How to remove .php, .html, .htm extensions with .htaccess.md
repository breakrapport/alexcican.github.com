---
Date: 2012-02-19
Title: How to remove .php, .html, .htm extensions with .htaccess
Slug: how-to-remove-php-html-htm-extensions-with-htaccess
---

I recently wanted to remove the extensions from my website, to make the URLs are more user friendly and search engine friendly. I stumbled over how to remove the `.php` extension from a PHP page. What about `.html`? I wanted to remove those as well! In this tutorial I’ll show you how to do it easily, by editing the `.htaccess` file.

##What is an .htaccess file

The `.htaccess` file is a simple ASCII file that you create with a text editor like Notepad. It provides a way to make configuration changes on a per-directory basis.

> _Please note that `.htaccess` is the file’s extension. It isn’t `file.htaccess`, it is simply `.htaccess`._

`.htaccess` files affect the directory in which they are placed and all sub-directories. For example if there is one `.htaccess` file located in your root directory (yoursite.com), it would affect yoursite.com/content/, yoursite.com/content/images/, etc.

It is important to remember that this can be prevented — for example if you don’t want certain htaccess commands to affect a specific directory — by placing a new `.htaccess` file within the directory you don’t want affected with the changes, and removing the specific command(s) from the new htaccess file that you do not want affecting this directory.

##Features

With an `.htaccess` file you can:

* Redirect the user to different page
* Password protect a specific directory
* Block users by IP
* Preventing hot linking of your images
* Rewrite URIs
* Specify your own Error Documents

In this tutorial we’ll be focusing only on rewriting URIs.


##Removing Extensions

To remove the `.php` extension from a PHP file for example `yoursite.com/wallpaper.php` to `yoursite.com/wallpaper` you have to add the following code inside the `.htaccess` file:

	RewriteEngine On
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteRule ^([^\.]+)$ $1.php [NC,L]

If you want to remove the `.html` extension from a html file for example `yoursite.com/wallpaper.html` to `yoursite.com/wallpaper` you simply have to alter the last line from the code above to match the filename:

	RewriteRule ^([^\.]+)$ $1.html [NC,L]

That’s it! You can now link pages inside the HTML document without needing to add the extension of the page. For example:

	<a href="http://whatever.com/wallpaper" title="wallpaper">wallpaper</a>

##Adding a trailing slash at the end

I received many requests asking how to add a trailing slash at the end. Ignore the first code and insert the following code. The first four lines deal with the removal of the extension and the following, with the addition of the trailing slash. Link to the HTML or PHP file as shown above. Don’t forget to change the code if you want it applied to an HTML file.

	RewriteEngine On
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteRule ^([^/]+)/$ $1.php
	RewriteRule ^([^/]+)/([^/]+)/$ /$1/$2.php
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteCond %{REQUEST_URI} !(\.[a-zA-Z0-9]{1,5}|/)$
	RewriteRule (.*)$ /$1/ [R=301,L]
	Removing both extensions

Some people asked how you can remove the extension from both HTML and PHP files. I haven’t got a coding solution for that. But, you could just rename your HTML file from `.html` or `.htm` to `.php` and add the code for removing the .php extension

##Conclusion
For those who are not so experienced with .htaccess files there is an online tool for creating .htaccess files. It is pretty good for novice users and very easy to use. [Visit their website →](http://www.htaccesseditor.com/en.shtml "Create .htacces files").

##Updates

Attention GoDaddy users: In order to remove the extensions you need to enable `MultiViews` before. The code should look like this:

	Options -MultiViews
	RewriteEngine On
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteRule ^([^\.]+)$ $1.php [NC,L]