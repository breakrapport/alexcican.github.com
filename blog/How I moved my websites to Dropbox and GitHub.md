---
Date: 2012-05-15
Title: How I moved my websites to Dropbox and GitHub
Slug: guide-hosting-website-dropbox-github
---


A few months ago I cancelled my hosting accounts and moved all my websites to the cloud. I tried it **as an experiment**; never for one second I believed it would work. I did the switch out of impulse: because I was pissed; but now, I’m very glad I switched. 

##Why I switched
Prior to the cloud, I was hosting my websites on a **VPS (Virtual Private Server) with a company called [Linode](http://linode.com)**. This company gives you a server *as is* and you have to install the OS by yourself, maintain it, improve its performance, etc. I busted my chops trying to configure a fast server. After I was done, the server was running **CentOS + nginx + PHP-fpm + MySQL**, hosting my websites and Wordpress blogs.

The drop that filled the glass came one day in February when all my websites (folders) **were deleted somehow**. Because I considered paying $20 per month for simply hosting my files was enough, I didn’t enable the backup option (was $2 extra per month if I remember correctly). So that day came, and I went straight to their support ticketing system. The dude that was assigned to me was not helpful at all and said there was nothing to be done. My last personal backup of the websites was in December 2011.

Pissed, I **cancelled my account**, got my refund and didn’t think back (or forward). Having been left only with my domain names I had to do something (for *SicanStudios.com* alone, I was averaging around 700 unique visitors per day). That’s when I made the decision to use the cloud.

##Why I switched to Dropbox[^1] + GitHub[^2]

I switched to these two services for a couple of reasons:

1. **Free**. It’s free and your account is created immediately. Free 2GB space for Dropbox and unlimited public repos for GitHub. 

2. **Easy to use**. Just drag-n-drop the file inside your Dropbox folder. The file is accessible anytime from anywhere (Dropbox website, desktop, laptop, mobile, tablet). Uploading to GitHub (known as *pushing*), is very simple: `commit`, add your message and `push` the changes.

3. **Plenty of space**. I didn’t need 20GB for my websites. The free 2GB offered by Dropbox was more than enough.

4. **Backup**. Your files won’t get lost/deleted. The extra layer of pushing the files to GitHub as well, offered double the protection (like putting two condoms on). 

5. **Restore**. In case you screwed up something, you can restore the file (as well as previous versions of it) and revert the changes. At no extra cost.

6. **Uptime**. Previously, with my VPS, and going back even more with my shared hosting, the uptime was good but I would experience downtime. Switching to the cloud, made my websites online with an uptime of 99.991%[^3].

7. **Speed**. My websites are blazing fast. Dropbox and GitHub servers are optimised out of the box to be fast and reliable (pages are compressed).

8. **Security**. In my efforts to improve the performance of my server, who knows what vulnerabilities I enabled, making my server hackable (that’s what happened on that day of February?). I don’t have to worry about that again. Both services come with SSL and free support included.

Let’s get into **how I did** it.

##The specifics of Dropbox

If you want your files to be accessed by anyone, you have to move them into your “Public” folder. If you’re using absolute paths for your website, I suggest you change it to relative paths. So from this:

	<a href="http://sicanstudios.com/web/file.html"></a>

change it to this:

	<a href="./web/file.html"></a>

Doing it this way, you can still access the website without having the domain name of the website pointing to the correct folder.

Next step is to **change the DNS** to point to the Dropbox folder (skip this if you’re gonna use GitHub to host your online version of the site).

If you’re using GoDaddy, logit to *“Your account”* and launch the *“Domains”*. Then, click on the domain name you want to edit and from the toolbar, select the *forward* icon. Click *“Forward Domain”* and insert in the popup input, the complete URL of the `index.html` from inside the Dropbox folder (to get the link: *right click on the file>Dropbox>Copy public link*).

![godaddy forward domain](https://dl.dropbox.com/u/48552248/websites/sicanstudios/blog/assets/godaddy-forward-domain.jpg)
<figcaption>Forwarding a domain on GoDaddy</figcaption>
Wait a for a few hours and you should be able to access the website hosted on Dropbox, via your domain name.

##Downsides of Dropbox

The big downside of hosting your website on Dropbox is that you can only **host static assets** (HTML, CSS, JS, images). No PHP. A solution for that was to use another great service [PHPFog](http://phpfog.com). I won’t go into details in this tutorial about PHP.

The other downside I found was the **URL system**. On Dropbox the URL of a file is something like:

	https://dl.dropbox.com/u/212143/public/website/file.html

This means that the Dropbox URL would be visible when navigating the website. I couldn’t have something like:

	http://sicanstudios.com/file.html

unless I did a URL masking from my DNS settings. This was not optimal because whatever page of the website I’d browse, it would show up only as:

	sicanstudios.com

To do this URL masking on GoDaddy, repeat the steps above for pointing the DNS record to Dropbox, but in the popup click on *“Advanced Options”* and select the second option: *“Forward with Masking”*.

Lastly, if you have a large website, with many pages, you will find it difficult when you want to update the heade of the page, for example. Because of the website being static, you would have to edit every page of your website. Whereas with a dynamic website, you edit once (the `header.php` for example) and you’re done.

##Specifics of GitHub

Searching for solutions to this issue I came across GitHub. On GitHub, you can host static websites with the option of adding your custom domain name (hence custom URLs) as well. There are two ways to do this: 

1) You [create a repository](http://help.github.com/create-a-repo/) with your username and add `.github.com` at the end of the name. For example, if your username is *“sican”* you create a repo:

	sican.github.com

2) or within an existing repo, you [create a new branch](http://learn.github.com/p/branching.html) called `gh-pages` and push the HTML files of your website in there.

To enable **custom domain names**, you just have to push a file called `CNAME`, in the root of the repo or branch, open the file with a text editor and add your domain name inside:

	sicanstudios.com

GitHub pages also supports **custom error pages**. Simply push a `404.html` file with your message in the root of the repo or branch.

Now it’s time to change the **DNS settings** from GoDaddy to point to our GitHub page. Login to your account, launch the domains and click on the domain name you want to change. From that page (see screenshot above), go down and find the *“DNS Manager”* section. Click on *“Launch”*. 

You have to decide what domain name you’ll be using. For a sub-domain like `http://www.sicanstudios.com` or `http://blog.sicanstudios.com` you would simply create a `CNAME` record pointing to `charlie.github.com`. If you are using a top-level domain like `http://sicanstudios.com`, you must use an `A (Host)` record pointing to `204.232.175.78`. There’s no need to add a `CNAME` record for top-level domains.

##Downsides of GitHub

The first downside is that you need **special software** for interacting (gracefully) with your repositories. The best software to install if you’re on a Mac is **[Git Tower](http://www.git-tower.com/)** and if you’re on Windows you shoud be using **[SmartGit](http://www.syntevo.com/smartgit/index.html)**.

The other downside to GitHub is that unless you’re a software geek, it **takes time** to *get it*. It’s not intuitive and it’s not drag-n-drop. It takes time to go through the [help documents](http://help.github.com/) and learn how to setup stuff (repositories, branches, trees). But after that learing period, it’s very easy to use.

Lastly, the same as with Dropbox, GitHub only **supports static assets** (HTML, CSS, JS, images).

##Liberation begins

*“FTP-ing is so 1999”* – everyone

Have you found an error on the website but you’re on the move without your laptop? Edit the page that’s hosted on Dropbox from your iPhone/iPad, save it and you’re done. If you’re on GitHub, `commit` the changes and `push` them to the repository. Job done!

*“Hold your horses, Johnny”*. There’s a catch: a Git version control app for the iPhone/iPad **doesn’t exist yet**, so you can’t update your repository on those devices. Textastic[^4] has it planned but I don’t see it being completed any time soon. 

There is a way around this but it involves Jailbreaking your iPhone/iPad and a great deal of hacking via the command line. Check out this **[great tutorial](http://kreeger.posterous.com/textastic-git-a-match-made-in-jailbreaker-ner)** showing you how to do it.

## Conclusion

There are some disadvantages to both systems:

* __Dropbox:__ __1)__ doesn’t support custom URLs __2)__ can host only static files (HTML, CSS, JS) and __3)__ making changes to a website with many pages is tedious

* __GitHub:__ __1)__ needs special software and takes time to learn __2)__ pushing changes to repos no easy via mobile/tablet and __3)__ can host only static files (HTML, CSS, JS)

but for me it works. For me, the **advantages outweigh the disadvantages**. I like my websites more (since they load faster and stay online longer), I feel much more relaxed and I also sleep better at night (secure servers, backups exist). Lastly, I feel liberated since I can access my files anytime from anywhere (and edit them, almost from any device).

Next article I have scheduled, is a continuation of this one: [*“How I moved my blog to Dropbox”*](http://blog.sicanstudios.com/post/blog-dropbox-scriptogram). Make sure you [grab the RSS feed](http://feeds.feedburner.com/sicanstudios) or you [follow me on Twitter](http://twitter.com/sican).

[^1]: [Dropbox](http://dropbox.com) is a free service that lets you bring your photos, docs, and videos anywhere and share them easily. This means that any file you save to your Dropbox will automatically save to all your computers, phones and even the Dropbox website.

[^2]: [GitHub](http://github.com) is a web-based hosting service for projects that use the Git revision control system. Basically you can host the source code of your different projects and have people contribute to the project and point out issues.

[^3]: Based on some stats ([source](http://37signals.com/svn/posts/3099-benchmarking-basecamps-uptime-against-five-other-web-apps)) from 15 December to 31 January, GiHub was down for only six minutes.

[^4]: [Textastic](http://www.textasticapp.com/) is a powerful text editor for the iPad with syntax highlighting, support for FTP, Dropbox, and many other features you’d like to have in a text editor. 