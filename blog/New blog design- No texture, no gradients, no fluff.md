---
Title: New blog design: No texture, no gradients, no fluff
Date: 2012-05-12
Slug: new-blog-design
---

**Welcome to the new blog of SicanStudios**. You couldn’t have known, unless you’re following [me on Twitter](http://twitter.com/sican), that a few months ago, I cancelled my hosting accounts and moved all my websites to [Dropbox](http://dropbox.com), [GitHub](http://github.com), and [PHPFog](http://phpfog.com).

This setup has several advantages, like: **24/7 access to the files** from anywhere and on whatever device, backup (Dropbox primarily and backup + custom URLs on GitHub), **file recovery** (in case you deleted a file), and **simplicity** (drag-n-drop). A blog post is coming explaining how I did the switch.

I’m here to tell you that this setup has **worked excellently**. I had only one issue left: the blog. Previously, the blog was powered by Wordpress CMS on my server. Canceling my hosting meant that I had to move the blog somewhere else. I decided to go with Tumblr (and installing a good app for posting from the iPad: [Tumblita](http://tumblita.com/)).

##Tumblr is difficult

Unfortunately, there were a couple of things I didn’t like with Tumblr. One was the `HTML` **syntax support** when writing a blog post, which was badly designed:

![tumblr html editor](http://dl.dropbox.com/u/48552248/websites/sicanstudios/blog/assets/tumblr-html-editor.jpg)
<figcaption>Seriously, Tumblr? I’m supposed to edit HTML like that?!</figcaption>
The other negative was the **theme editor** which was a pain to work with. The CSS code container was very very small and they didn’t even include a scrollbar (had to use keyboard arrows). And the HTML editor had partial syntax support. Not to mention that it was super ugly (fluorescent green on pale blue background)…

![tumblr theme editor](http://dl.dropbox.com/u/48552248/websites/sicanstudios/blog/assets/tumblr-theme-editor.jpg)
<figcaption>The CSS code container is too small and no scrollbar is assigned to it</figcaption>
So I thought, why not host the blog on Dropbox as well? Or at least on GitHub. I came across [Jekyll](https://github.com/mojombo/jekyll) but the lack of an iPad app that supports the Git system ([Textastic](http://feedback.textasticapp.com/) has this feature planned) would make it difficult, but not impossible, to update the blog. So I turned my efforts into finding a solution for Dropbox. That’s when I came across [Scriptogr.am](http://scriptogr.am).

##Scriptogram for Dropbox

I’ve tried Scriptogr.am before, but the lack of setting up a custom domain name turned me away. Now that this feature’s been added, I switched immediately. It was very easy to setup and get started!

##How it works

I won’t go into much detail but it works like this: Link you Dropbox account and allow Scriptogram app access. Drag and drop your Markdown file[^1] inside the `Dropbox>Apps>Scriptogram>posts` folder and then go to their website and click the “synchronize” button to update the blog. Job done!

![scriptogram theme editor](http://dl.dropbox.com/u/48552248/websites/sicanstudios/blog/assets/scriptogram-theme-editor.jpg)
<figcaption>How a theme editor should be</figcaption>
Their online **theme editor rocks**. They have two editors: one *for CSS* and one *for HTML*. Both are beautifully designed and the syntax highlight shows you immediately whether you forgot to close an `HTML` element. They even have a third editor, a *text editor* for editing your markdown files online.

There are improvements and features that could be added, like: 

1. support multiple blogs
2. allow me to export/save the theme
3. update the blog automatically whenever the *posts* folder is updated by Dropbox, without having to click *synchronize*
4. add a *preview* window to the online text editor for Markdown files.
5. allow me to sort archives by year as well, not only by month
6. allow me to customise 404 (not found) error pages

##Design of blog

For the redesign of the blog I wanted to challenge myself: 

* **Content First**
* **Responsive, device-agnostic design**
* **No texture**
* **No shadows**
* **No gradients**
* **Big, beautiful typography and big images**
* **No CSS media queries** [^2]

That’s right, **no media queries**. There are no breakpoints (mobile, tabled, desktop) defined for this design, except for `max-width` in order to keep the words per line within an acceptable range. This was a big challenge. I had to rely heavily on my CSS-ninja skills.

**Big typography and images** are prominent in order to cater for big resolutions (looking at you, iPad 3) and high contrast for readability on mobile devices under bright sunlight.

The header doesn’t have any branding; the **logo is almost invisible**, placed in the footer. The menu is stripped to its bare essentials (in order to keep it in one line, on the iPhone).

##Conclusion

All in all a revamped, modern version of the original design of [the site](http://sicanstudios.com). I know the blog looks quite different now from the rest of the site; in time I’ll modify the site’s design to match the blog’s.

I am confident that this setup (Dropbox + Scriptogr.am) and the sexy blog design will inspire me to start writing more often. Now, head over to the [Archive](http://blog.sicanstudios.com/archive) to read some other stuff I wrote.

I would love to hear your comments about the blog redesign on [Twitter](http://twitter.com/sican).

[^1]: Markdown, file extension: *.md*, is a lightweight markup language, that allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid HTML. Check out the [Markdown syntax](http://daringfireball.net/projects/markdown/syntax)

[^2]: A CSS media query is an instruction for the browser to load a different stylesheet (design) depending on the width of the screen or the type of medium (such as print). In this manner, you can cater for mobile browsers (320px wide for iPhone) and serve the user a mobile design of the website. 