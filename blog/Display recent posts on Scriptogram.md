---
Date: 2013-01-09
Title: Display recent posts on Scriptogr.am
Slug: recent-posts-scriptogram
---


At the bottom of this blog I show a list of the latest three articles. There is no option to show that in Scriptogr.am. People kept asking me how I did it and if I could share with them the script that shows the latest articles. When I responded that I do it manually—there’s no script I just go and edit the theme file every time—they were disappointed. But it keeps coming up in my [Twitter feed](https://twitter.com/sican). So I spent an hour last night writing a script that reads your blog’s `RSS` feed and shows the latest three posts.
{{more}}
##Implications
Before we get started you should know that JavaScript has a [same origin policy](http://en.wikipedia.org/wiki/Same_origin_policy). What this means is that with JavaScript, you can’t read an external `XML` feed from [Digg.com](http://digg.com), for example, and show it on your website. A workaround is to create a `PHP` file that will act as a proxy, pull the external `XML` file on your server, and then parse that file in JavaScript. But we can’t run a `PHP` file on Scriptogr.am or Dropbox.

Thankfully, there’s an awesome thing called Google API. We’ll use the Google Loader to load the external feed’s `XML` file and then parse it in JavaScript. You can see the demo of this script at the bottom of this page.

##Step 1 - RSS Feed
Find your Scriptogr.am `RSS` feed. It should be in this format:

	http://scriptogr.am/USERNAME/feed/
	
##Step 2 - Add script
From the [Scriptogr.am dashboard](http://scriptogr.am/dashboard/), go to the *Tools* tab, and edit your `HTML` theme file. Go at the bottom of the file, before the end of your `<body>` and add the script below:	
<script src="https://gist.github.com/4491987.js"></script>
	
##Step 3 - Personalise script
The bits you have to edit are on **line 8** and **line 59**. Replace bits of code from this line:

	var feed = new google.feeds.Feed("http://scriptogr.am/sican/feed/");
	
with your feed URL from Step 1. Next, replace bits of code from this line:

	link.href = link.href.replace("scriptogr.am/sican","blog.sicanstudios.com");
	
with your feed URL’s first name and your custom domain name. Basically this line of code finds the `scriptogr.am/sican` links in the feed and replaces them with my custom domain name. If you don’t have a custom domain name for your blog, remove this line.

##Step 4 - Link to HTML
Last thing you need to do is add this `HTML` element: 

	<div id="recent-articles">Loading…</div>

at the location(s) where you want the recent posts container to be displayed. For example, I have it at the bottom of the `index` and `post` page:

	   <!-- index -->
       {{#is_index}}
       {{#first}}
        <div class="post">
        <h1><a href="{{permalink}}" title="{{title}}">{{title}}</a></h1>
        {{content}}
        <h2>Recent articles</h2>
        <div id="recent-articles">Loading…</div>
        <p>More articles in the <a href="http://blog.sicanstudios.com/archive" title="Archive">Archive</a></p>
        </div>
      {{/first}}
      {{/is_index}}

##Further customisation
Feel free to customise the script even more. For example, I don’t show the most recent post, because I show it on the homepage. I skip it by stating the loop count at `1` instead of `0` on **line 20**:

	for (var i = 1; i < 4; i++) {
	
Read through the script and make changes to the recent posts display format (starts from **line 44**) to suit your blog style. If you have any questions or problems, you know where to find me.
