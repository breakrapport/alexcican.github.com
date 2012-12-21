---
Date: 2012-02-17
Title: The most important CSS trick you’ll ever need
Slug: most-important-css-trick
---

Having experienced the awful taste of designing layouts with tables when I developed a myspace design for my band, I learned how hard it is to develop a customised myspace design. I would’ve been nowhere near to finishing the design in time if I hadn’t made use of this CSS “trick”. Which is not really a “trick”, it’s a clever use of a CSS property.

##CSS Trick

I’ll jump right into the subject. The most important CSS “trick” you’ll ever need is:

	border: solid 1px;

That’s it! All you need to do, is add to your element a border! Let’s see some applications for it.

##Aligning elements

Say that you want to align two elements which are absolute positioned on the screen. How do you align them perfectly? This is especially important if you’re developing a grid based design (such as the [960](http://960.gs/ "960grid")) The elements must be aligned spot on. Of course, there are widgets and pre-made CSS templates to ensure that, but let’s do it by hand.

For example, we want to bring the top container text down aligned with the other container.

All you have to do is add a border to both of the elements and move the top container down to match the other container’s position. We move it down, by adding value to the `top:` property:

	.top_container {
		position: absolute;
		top: 120px;
		left: 0;
	}

##Replacing text link with image

Let’s say that you want to replace the boring text link with a button. The button is an image and you want to make it clickable. You also want to remove the text from the link, since the button image already includes it. How do you do it?

First, we need to replace the HTML link with the image button. To do so, we add to the link a class `link` and add a `background-image` to it. The background image is the button. We then hide the text from inside the link with the property `text-indent: -9999px`. Finally, we add a some `width` and `height` to the link (preferably the same size as your button):

	.link {
		width: 223px;
		height: 73px;
		display: block;
		text-indent: -9999px;
		background-image: url('../images/image_button.jpg');
		background-repeat: no-repeat;
		margin: 50px 0 0 80px;
	}

Next, we just add a border and try to match the height and width with the button. Furthermore, we also need to change the position of the button with margin: CSS property:

	.link {
		border: solid 1px;
		width: 223px;
		height: 73px;
		display: block;
		text-indent: -9999px;
		background-image: url('../images/image_button.jpg');
		background-repeat: no-repeat;
		margin: 50px 0 0 80px;
	}

##Conclusion

There are many applications for this “trick”, you just have to practice. I hope you enjoyed the tutorial and I hope you’ll incorporate it in your web development process!