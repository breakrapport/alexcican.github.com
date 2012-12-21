---
Date: 2012-05-19
Title: How I moved my blog to Dropbox
Slug: blog-dropbox-scriptogram
---


A few months ago I cancelled my hosting accounts and moved all my [websites to Dropbox and GitHub](http://blog.sicanstudios.com/post/guide-hosting-website-dropbox-github). The only problem I was left with was where I should host the blog. I decided to use Tumblr. Regretting that decision after only two months ([I wrote about why here](http://blog.sicanstudios.com/post/new-blog-design)), the solution was in front of me all this time: **use Dropbox[^1] for the blog** as well. In this article I’ll show you how I did it.
{{more}}
##Downside of Dropbox
On Dropbox you can only host **static files**. This is a disadvantage if you want to host a blog. Updating a blog with content regularly becomes tedious when you have a static layout. You have to include all the parts of the layout (header, footer, javascript) on every page. You have to write your blog post using HTML syntax. This method is not future-friendly because in the future, for example if you want to change even one link of the header menu, you’ll have to change every single blog post. Therefore, there’s a gap…

##An awesome thing called Scriptogr.am
A gap that is filled excellently by [Scriptogr.am](http://scriptogr.am/). Scriptogr.am is an app that connects to your Dropbox account and allows you to host a blog or dynamic website. The blog posts, or pages, are simple Markdown[^2] files located inside `Dropbox>Apps>scriptogram>posts`.

Some cool features of Scriptogr.am:

1. **Custom domain name**: Use your own domain name for the blog, like `blog.sicanstudios.com`.
2. **Awesome themes**: Build your own themes (very easy to do) or select one from the gallery.
3. **Awesome HTML&CSS editor**: Beautifully designed online editor with syntax highlighting.
4. **One step sign-up**: One step to sign-up and one click sign-in to Scriptogr.am.
5. **Offline & online editing**: Use your favourite text editor (for me: [SublimeText 2](http://www.sublimetext.com/2) and [Byword app](http://bywordapp.com/) for iPad) or Scriptogr.am’s online editor.
6. **Posts or pages**: aside from blog posts, you can also host pages (and style them differently in the theme).
7. **Tags, Slugs, Drafts**: For each blog post you can specify your own tags, slug[^3], and its state (whether it’s published or not).


##Creating a post
To create a new blog post, simply create a Markdown file inside the `posts` directory with this front-block (required) at the top of the file:

	---
	Date: 2012-05-19
	Title: How I moved my blog to Dropbox
	---

You can add some extra attributes to this front-block if you want:

	---
	Date: 2012-05-19
	Title: How I moved my blog to Dropbox
	Slug: blog-dropbox-scriptogram
	Tags: blog, dropbox, tutorial
	Type: post
	Published: false
	Excerpt: A few months ago I cancelled my hosting accounts and moved all my [websites to Dropbox and GitHub](http://blog.sicanstudios.com/post/guide-hosting-website-dropbox-github)…
	---

Once you are done with the front-block, you can start writing your blog post. When you’re ready, save the file, go to your [admin page](http://scriptogr.am/admin/) and click the button *“Synchronize”* to update the blog with the new post. I hope this process of having to click the button in order to update the blog will be removed in the future. Simply, have the server update the directory once a new file is added to the `posts` folder.

![scriptogram synchronize button](https://dl.dropbox.com/u/48552248/websites/sicanstudios/blog/assets/scriptogram-publish-button.jpg)
<figcaption>Having to click “Synchronize” gets in the way of Dropbox’s simplicity (drag-n-drop)</figcaption>
##Adding a custom domain name
To add a custom domain name for your Scriptogr.am blog, simply go to your [admin panel](http://scriptogr.am/admin/), find the *“custom domain”* field and insert your desired custom domain name without the `http://`. For me it’s:

	blog.sicanstudios.com

Make sure you click the *“Update Settings”* button below the input field to apply the changes. Now it’s time to change the **DNS settings**. 

If you’re using GoDaddy, login to your account, launch the domains and click on the domain name you want to change. From that page, go down and find the *“DNS Manager”* section. Click on *“Launch”*. 

![godaddy dns editor](https://dl.dropbox.com/u/48552248/websites/sicanstudios/blog/assets/godaddy-dns-editor.jpg)
<figcaption>For Scriptogr.am, I have a `CNAME` assigned for the sub-domain `blog.sicanstudios.com`</figcaption>
Based on the type of custom domain name you’ve added in the Scriptogr.am’s admin panel, we’ll make different changes to the DNS. For a sub-domain like `http://www.sicanstudios.com` or `http://blog.sicanstudios.com` you would simply create a `CNAME` record pointing to `scriptogr.am`. If you are using a top-level domain like `http://sicanstudios.com`, you must use an `A (Host)` record pointing to `50.116.1.192`. There’s no need to add a `CNAME` record for top-level domains. Wait up to 48-72 hours for the changes to take effect (usually within an hour or so).

##Creating a theme
I won’t go into theming extensively, but Scriptogr.am themes are pretty easy to edit or create, if you have basic knowledge of HTML. If you have some theming experience from other CMSs (Content Management System) like Wordpress or Drupal, theming for Scriptogr.am will be a **stroll in the park** for you.

For a Scriptogr.am theme, you have only two files to worry about. The first file represents **the content** (HTML) and the other, **the styling** (CSS). For creating a layout, the *magic* happens inside conditional statements. Each section of the `<body>` below represents the `homepage`, `post`, `page` or `archive` pages.

	<body>
		<!-- Get posts -->
		{{#posts}}

			<!-- Outputs the home page -->
			{{#is_index}}
				...
			{{/is_index}}

			<!-- Outputs the "Blog post" -->
			{{#is_post}}
				...
			{{/is_post}}

			<!-- Outputs the "Page" -->
			{{#is_page}}
				...
			{{/is_page}}

			<!-- Outputs the "Archive" page -->
			{{#is_archive}}
				...
			{{/is_archive}}

		{{/posts}}
		<!-- End posts -->
	</body>

Inside each block you can add whatever HTML you want to show in that particular page. There are a handful of shortcodes available (like for example: `{{content}}` will output the content of the blog post/page), that can be found at the bottom of [this page](http://support.scriptogr.am/kb/creating-themes/creating-or-editing-a-theme). Here’s the code I have for the blog post (i.e. this page you’re currently viewing):

	{{#is_post}}
		<div class="post">
			<div class="content">

				<div id="continue_reading" class="title">
					<h1><span>{{title}}</span></h1>
				</div>

				<div class="body-post">
					{{content}}

					<!-- if tags -->
					{{#if_tags}}
						<ul class="tags">
							{{#tags}}
								<li><a href="{{base_url}}/tag/{{name}}">{{name}}</a></li>
							{{/tags}}
						</ul>	
					{{/if_tags}}
					<!-- endif -->

				</div><!--end body-->
			</div><!--end content-->
		</div><!--end post-->
		<p class="more"><a href="http://blog.sicanstudios.com/archive">More articles in the Archive →</a></p>
	{{/is_post}}

Above and below those conditional statements, the code for the `header` and `footer` is inserted (because I want that code to be applied to every page). And at the bottom, before closing the `</body>` tag, I add some JavaScript code for smooth font resizing and Google Analytics tracker.

Here’s a tip for you. It’s best to tinker with the theme a bit. Because, the default theme of Scriptogr.am could be improved in terms of SEO (`<h1>` tags, title, descriptions, etc.). I want to show you a better way to display the `<title>` of the blog:

	<title>{{#posts}}{{#is_post}}{{title}}{{/is_post}}{{/posts}}{{#is_index}}Blog of SicanStudios{{/is_index}}{{#is_archive}}Archive of the Blog of SicanStudios{{/is_archive}}</title>

We’re saying if the page is a post, display the `{{title}}` of the post, if it’s the homepage, display *“Blog of SicanStudios”* and if it’s an archive, display *“Archive of the Blog of SicanStudios”*.

This was a brief overview of the themes in Scriptogr.am. If you’re having any trouble, please visit the [FAQ](http://support.scriptogr.am/kb) or the [forums](http://support.scriptogr.am/discussions). 

##Conclusion
Scriptogr.am has made it possible for me to host my blog on Dropbox. I now actually **enjoy the process** of writing a blog post. Hence, I’m inclined to writing more. I start writing on my iPad and I continue on my PC. When I’m finished, the post is published with literally one click. But don’t misunderstand me: it’s **not a silver bullet**. 

Migrating from your previous CMS can become a **tedious process** if you have many blog posts. There’s no way to import your posts from a blog service like Wordpress. Luckily for me, I also used to store a text based version of my articles, as backup. Finally, some features, that have existed for years on other CMSs, are missing from Scriptogr.am. Here are some improvements that could be made:

* support __multiple blogs__
* allow me to __export/save__ the theme
* __update the blog automatically__ whenever the `posts` folder is updated by Dropbox, without having to click synchronize
* add a __preview window__ to the online text editor for Markdown files
* allow me to __customise 404__ (not found) error pages
* allow me to __sort archives__ by year as well, not only by month

Like with the custom domain name feature that was added recently to Scriptogr.am, hopefully we will see these changes implemented in the near future.

[^1]: [Dropbox](http://dropbox.com) is a free service that lets you bring your photos, docs, and videos anywhere and share them easily. This means that any file you save to your Dropbox will automatically save to all your computers, phones and even the Dropbox website.

[^2]: Markdown, file extension: *.md*, is a lightweight markup language, that allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid HTML. Check out the [Markdown syntax](http://daringfireball.net/projects/markdown/syntax).

[^3]: A *slug*, in Internetical terminology, is the URL of the page. For example this blog post’s slug is: `blog-dropbox-scriptogram`.