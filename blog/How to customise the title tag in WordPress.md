---
Date: 2012-02-18
Title: How to customise the title tag in WordPress
Slug: customise-title-tag-wordpress
---

In this tutorial I’ll demonstrate how using PHP, you can display different title tags depending on what page you’re viewing. So, you can display the tagline of the website on the homepage and on an individual post display only the post’s title. This is an example of how you can customise your Wordpress theme to suit your needs.

##Customise the title tag

Say that you are on the home page and you want to display in the title tag the name of the website and the description. Now say that you want when you navigate away from the home page and move to the category page, to display in the title tag the category and the name of the website without the description. Or when you are inside a post page and you only want to display the name of the post with the name of the website. How do you do it?

##Step 1

Go to your `header.php` file within your active template and locate the `<title></title>` tags. There are four types of pages we need to keep in mind:

1.  Post page
2.  Category page
3.  Simple page
4.  Home page

##Post Page

We first need to check if the page is a post page. If it’s true, then display the title of the post and the name of the blog (or whatever else you want to display). Below is the code you need to add inside the title tag _(unfinished code)_:

	<?php 
		if (is_single() ) {
			wp_title(' '); ?> 
			&raquo; 
			<?php bloginfo('name'); 
		}
	?>

This will display the title of the post: `wp_title(' ');` followed by a `»` and the name of the blog: `bloginfo('name')`;

##Category Page

If the page isn’t a post page, we need to check if the page is a category page. If it is, then display the category title and the name of the blog (or whatever else you want to display). Below is the code you need to add inside the title tag _(continued from previous code snippet)_:

	<?php 
		elseif (is_category() ) {
			single_cat_title(); ?> 
			&raquo; 
			<?php bloginfo('name'); ?>
		}
	?>

This will display the title of the category: `single_cat_title();` followed by a `»` and the name of the blog: `bloginfo('name')`;

##Simple Page

This is the kind of page that you create by yourself, within WordPress. You can have various pages, like a “Contact” page, “Testimonials” page etc. If the page isn’t a post or a category then it could be a page. If it is, then display the page’s title and the name of the blog (or whatever else you want to display). Below is the code you need to add inside the title tag _(continued from previous code snippet)_:

	<?php 
		elseif (is_page() ) {
			wp_title(' '); ?> 
			&raquo; 
			<?php bloginfo('name');
		}
	?>

This will display the title of the page: `wp_title(' ');` followed by a `»` and the name of the blog: `bloginfo('name')`;
Home page

If the page is none of the above, then it means that it is a different kind of page, most probably it’s the home page. If that is the case, display the name of the blog and the description of it (or whatever else you want to display). Below is the code you need to add inside the title tag _(continued from previous code snippet)_:

	<?php 
		else {
			<?php bloginfo('name'); ?> 
			&raquo; 
			<?php bloginfo('description');
		}
	?>

##Conclusion

So the complete title tag should look like this:

	<title>
		<?php if (is_single() ) { 
			wp_title(' '); ?> 
			&raquo; 
			<?php bloginfo('name');

		} elseif (is_category() ) {
			single_cat_title(); ?> 
			&raquo; 
			<?php bloginfo('name');

		} elseif (is_page() ) {
			wp_title(' '); ?> 
			&raquo; 
			<?php bloginfo('name');

		} else { 
			bloginfo('name'); ?>
			&raquo; 
			<?php bloginfo('description');
			
		}?>
	</title>

Of course, you could change the title tag to suit your needs; this is just a demonstration of what can be achieved. The important message to take away is that WordPress PHP snippets are very powerful and can be used in many ways.

Also, make sure you check out the [Wordpress help sheet](http://wpcandy.com/wp-content/uploads/WordPress-Help-Sheet.pdf "Wordpress Help Sheet") to see more PHP snippets and codes helping you customise a Wordpress theme easily!