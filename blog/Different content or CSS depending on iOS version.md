---
Date: 2012-03-20
Title: Different content or CSS depending on iOS version
Slug: different-content-css-ios-version
---

<del>I’m currently caught in the process of developing my first web application</del> It’s finished: [TimeWasted &rarr;](http://timewasted.co.uk). I’m optimising it to work and look great for the iPhone and the iPad. The testing of the app is done on my iPhone 3G running iOS 4.2 — the last supported iOS for this device.

A word on online simulators. Aside from resizing the browser size — operation you can do by yourself — and adding an iPhone/iPad-like address bar, they’re rubbish at rendering the page like a mobile browser. In order to test the app on other devices, I went to my local “App Store” where they have all the latest Apple devices running iOS 5. I was surprised to see that there were a number of differences in the way the page rendered compared to my iPhone 3G.

##New addition to my browser checks?

How a website is displayed depends largely on the browser — Firefox, Chrome, Safari, Opera, IE8, IE9. Although the number of differences in the way a website is rendered is being reduced with every new version of a browser that comes out — for example IE8 vs IE9 — it’s far from insignificant. So, every once-in-a-while during the development stage I check the website in other browsers and fix the inconsistencies — if possible.

Now, I believe, I have to add iOS (iOS4 vs iOS5) to that check. I won’t go into all of the differences, but one of the biggest is that in iOS4 you could not have fixed elements on the page and a scrolling div — you had to use JavaScript alternatives, like [iScroll](http://cubiq.org/iscroll-4), to mimic the effect. This is fixed with iOS5: just add the following code and mobile rendering of that `div` will be similar to a desktop browser:

	-webkit-overflow-scrolling: touch;

##Older versions of iOS

If you don’t care about older versions of iOS and you only want to support the latest version, that’s fine. But I think we’re not quite there yet. It’s a similar situation to the “IE6”. A couple of years ago, even though there were new versions of IE out there, we had to include hacks into our code to make the website look as good as possible on IE6. Slowly, as usage of that version dropped, we stopped supporting it nowadays.

##Add content or change CSS values depending on iOS

Nonetheless, in order to check for what iOS use the code below. I have setup my HTML/CSS to cater for iOS4 and I make any changes for iOS5, using JavaScript. The code below will check if the user is using iOS5 and will change the CSS property bottom to a value of 0 for the footer of the page. Note that the value is in pixels. Moreover, it will append to the body of the page some text or HTML element.

	var iOS5 = navigator.userAgent.match(/OS 5_/i) != null;

	if (iOS5) {
		$("footer").css('bottom','0');
		$("body").append('<h3>This is for iOS5</h3>');
	}

##Conclusion

That’s it basically! There are many uses for this script. One idea would be to only load certain scripts — for example iScroll — in order for the website to work great in older versions of iOS, if the user is on iOS4 or below. That will save some precious bandwidth for the user that views your website using iOS5. Other uses not related to iOS would be to cater for different browsers. For example in Firefox the web font looks great, but in Chrome it needs some extra letter-spacing. Use the code below:

	var chrome = navigator.userAgent.match(/Chrome/i) != null;

	if (chrome) {
		$("body").css('letter-spacing','0.5');
	}

Am I forgetting something? Yes, I am: Android OS. If only I could get my hands on an Android device and test my websites/apps on it. In the meantime I can only trust my coding skills and hope that the page looks at least “good”…