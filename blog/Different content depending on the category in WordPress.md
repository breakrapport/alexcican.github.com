---
Date: 2012-02-22
Title: Different content depending on the category in WordPress
Slug: content-category-wordpress
---

In this tutorial I’ll explain how to take your WordPress theme to the next level and make it stand out from the typical blog type template. Basically, we’ll be displaying different content depending on the category the post is in. By mastering this technique, the possibilities are trully endless.

##Customising content

Using WordPress as a CMS is very “in” nowadays. You can do so much customising within WordPress, such as adding custom fields, displaying different styles (CSS) for each category, picking random posts, displaying custom content to search engine visitors, and some wackier stuff such as displaying all untagged posts, displaying different content depending on day, customising the dashboard and much, much more!

In this tutorial we’ll focus on displaying different content for each category.

##First Method

We’ll assume that we have two categories that we want to customise: `contact` and `news` and that you are using WordPress 2.9 or above (if you aren’t, use the second method explained below).

First, go in your template folder (located inside `wordpress_root/wp-content/themes/`) and create two PHP files called:
`category-contact.php` and `category-news.php`.

By default, the template hierarchy within WordPress will select the first file with a name syntax that matches the following list:

* category-slug.php
* category-ID.php
* category.php
* archive.php
* index.php

So if you try to view the `contact` or the `news` category now, it will show a blank page. That’s it basically! You can now, go inside each category’s PHP file and add whatever you want inside; the default template’s PHP file will be bypassed.

What if you have a dozen or so categories, do you create a dozen PHP files with each category name? No!

You just add the default content that you want to be displayed for most categories within the `archive.php` page and create only PHP files for the categories you want to customise. Or, you can do it by using the second method explained below.

##Second Method

The second method is to create two PHP files for the two categories we want to edit, place them inside the theme folder and name them: `category_contact.php` and `category_news.php`.

Next, create another PHP file and name it: `category_other.php`. This will be the alternative content to be displayed when the visitor selects neither the `contact` nor the `news` category.

Now, go inside the `archive.php` page and delete everything that’s inside. Add the following code:

	<?php
		if (is_category('contact')) {
			include (TEMPLATEPATH . '/category_contact.php');

		} elseif (is_category('news')) {
			include (TEMPLATEPATH . '/category_news.php');

		} else {
			include (TEMPLATEPATH . '/category_other.php');
		} 
	?>

So we’re basically saying, if the category selected is `contact`, display the `category_contact.php`. If the category selected is `news`, display the `category_news.php`. If none of the IFs are true, then display the `category_other.php`. Simple and very efficient!

##Conclusion

The same principle can be applied to the posts’ template. Say that you have a post which you want to display differently, add a gallery at the end, for example. You can apply the same idea from the second method (haven’t tried it with the first method).

I hope you understood the concept!