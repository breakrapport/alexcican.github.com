---
Date: 2012-03-3
Title: How to set cookies in JavaScript
Slug: set-cookies-javascript
---

Cookies are an important part of browsers. Without them, we couldn’t browse websites that require authentication, such as social networks since we’d be asked for our password at each new page. We couldn’t write an e-mail, or buy something. In general, our use would be fairly limited to browsing only passive websites. Therefore, cookies are an important part of a developer’s arsenal. In this tutorial we’ll focus only on a small part of cookies, setting and editing cookies using jQuery.

<a href="http://dl.dropbox.com/u/48552248/websites/demos/set_cookies/demo.html" class="button">View the Demo &rarr;</a>

I’ll be using a cookie plugin created by Klaus Hartl. We do not need to edit anything in this file, just call it after jQuery. [Download the script →](http://dl.dropbox.com/u/48552248/websites/demos/set_cookies/cookie.js)

##Step 1 - HTML first

Based on the example above, we create a div and inside it we have two messages. The one that will be displayed only one time, when the page is loaded and the one that will be displayed after the first one was shown. I used heading tags to separate them from one another:

	<div class="message">
		<h1>This message is displayed only the first time you visit this page. Refresh to hide it!</h1>
		<h3>This is shown only after the previous message was shown in the last visit. Even when you refresh the page, the browser remembers your option. In case JS is disabled, this message is more important and should be displayed!</h3>
	</div>

##Step 2 - CSS

I always take into account what happens when JavaScript is disabled. It’s good practice and makes your website more accessible and user friendly. In case JavaScript is disabled, we don’t want to confuse our visitor and have both messages display at the same time. We need to hide the first message by default, in the CSS. We will display the message it in the JavaScript section:

	h1 {
		display: none;
	}

##Step 3 - Initialising

It’s best for page loading times, to add JavaScript at the bottom of the page, before closing the `</body>` tag. First, we need to call jQuery.

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>

Next we call the cookie script. Make sure you add the correct URL pointing to the script.

	<script type="text/javascript" src="cookie.js"></script>

Below it, we add an empty script and inside it, we start coding:

	<script type="text/JavaScript">
	</script>

##Step 4 - JavaScript

First, we will reverse what we did in our CSS file. Display the initial message `<h1>`, and hide the second message `<h3>`.

	$(document).ready(function() {
		$('.message h1').css("display", "block");
		$('.message h3').css("display", "none");

Next we add the cookie code. There are two parts to this: one that checks the cookie and the other that adds the cookie. First, we will check for the cookie (I’ll explain why later). If the ID of the cookie is set to hide, then hide the first message and display the second:

		var cookie_mesage = $.cookie('welcome');
		if (cookie_mesage == 'hide') {
			$('.message h1').css("display", "none");
			$('.message h3').css("display", "block");
		};

Before we close the script tag, we have to add the cookie that will hide the first message. We add it at the end, because if we were to add it before the code that checks (see above) the cookie, it would hide the first message from the beginning. Adding it at the end ensures that the message will be hidden the next time the page is loaded.

		$.cookie('welcome', 'hide');
	});

The complete code for the first example:

	<script type="text/JavaScript">
		$(document).ready(function() {
			$('.message h1').css("display", "block");
			$('.message h3').css("display", "none");

			var cookie_mesage = $.cookie('welcome');

			if (cookie_mesage == 'hide') {
				$('.message h1').css("display", "none");
				$('.message h3').css("display", "block");
			};

			$.cookie('welcome', 'hide');
		});
	</script>

##Step 5 - Add cookie on click

In the demo page, you saw that the second container would hide the text and show the other one, only after you clicked on the “X”. First we need to add an a href tag to our HTML. I added it inside the first message, so that when it’s hidden, the button will be hidden as well:

	<h1>This message is displayed only the first time you visit this page. Refresh to hide it!
	<a href="#" title="Hide This Message">X</a></h1>

Position the “X” to the top of the container using the relative/absolute trick in the CSS:

	.message {
		position: relative
	}

	.message a {
		position: absolute;
		top: 0;
		right: 0;
	}

Inside the script tag, we add the code to do something once the a href is clicked:

	$('.message a').click(function() {
		return false;
	});

Inside the function we will be using classes to identify when a user has clicked or not. First we check to see if we already have a class clicked assigned to the link. If yes, do nothing. If we don’t have a class, it means that the user hasn’t clicked on the link before. Fade out the first message and queue the second one, once it’s finished. Finally, add a cookie with the variable clicked.

	var $this = $(this);

	if ($this.hasClass('clicked')) { }
	
	else {
		$(this).addClass('clicked');
		$('.message h1').delay(200).fadeOut(1300)

		.queue(function(n) {
			$('.message h3').css("display", "block");
			n();
		});

		$.cookie('welcome', 'clicked');
	}

But wait, we are not done! We need to check if the cookie has the clicked variable attached to it:

	var cookie_mesage_clicked = $.cookie('welcome');
	if (cookie_mesage_clicked == 'clicked') {
		$('.message_click a').addClass('clicked');
		$('.message_click h1').css("display", "none");
		$('.message_click h3').css("display", "block");
	};

The complete code for the second example:

	<script type="text/JavaScript">
		$(document).ready(function() {
			$('.message h1').css("display", "block");
			$('.message h3').css("display", "none");
			$('.message a').click(function() {

			var $this = $(this);

			if ($this.hasClass('clicked')) { }

			else {
				$(this).addClass('clicked');
				$('.message h1').delay(200).fadeOut(1300)

				.queue(function(n) {
					$('.message h3').css("display", "block");
					n();
				});

				$.cookie('welcome', 'clicked'); }
				return false;
			});

			var cookie_mesage_clicked = $.cookie('welcome');
			if (cookie_mesage_clicked == 'clicked') {
				$('.message_click h1').css("display", "none");
				$('.message_click h3').css("display", "block");
			};
		});
	</script>

##Step 6 - Accessibility

If you disable JavaScript and you check the page, the first message will be completely hidden because we hid it in the CSS; that is good. But if you disable stylesheets both messages are visible, creating confusion. Why would you want stylesheets disabled? Well for one: screen-readers; used by blind people, they read only what’s in the HTML disregarding CSS. To fix this problem and make our website even more user friendly we have to add the first message in the script tag, so that it will be displayed only if the user has JavaScript enabled.

To do that, remove the first message from the HTML. Then we just append the message to the .message div inside jQuery. Note that this has to go before the JavaScript code in which you hide the initial message `<h1>`.

	$('.message').append('<h1>You can only hide this message, by pressing x at the top of this box <a href="#" title="Hide This Message">X</a></h1>');

##Conclusion

There are many uses of cookies. Showing a one-time only message is one. Or showing a message until you click to hide it is another popular use — now you know how to create your own [Hellobar](http://www.hellobar.com/). The next step is authenticating users and saving sessions in the cookies.