---
Date: 2012-03-1
Title: Auto width CSS button without floats
Slug: auto-width-css-button
---

Recently, when coding a website for a client I stumbled across a problem. I wanted to create a button with some padding left and right that would resize itself according to the text that’s in it. So I couldn’t use a fixed width. Furthermore, I wanted to use it more than once and position it in different parts of the layout. So I couldn’t float the button. Continue reading to see the solution I came up with.

##The problem

Create a button with `10px top/bottom` and `15px left/right` padding. It should automatically adjust its width and have the possibility to be placed wherever in the layout, following the alignment of its parent container. For example, if the container with the text is aligned on the right, the button should also be aligned on the right.

Using a width property will mean that I would have to create several classes (small, medium, large) representing buttons with different width. Then, decide which will be the large buttons and assign that particular class to them. Unnecessary extra work and coding. Using a float property (widely used method) means that I cannot position that button in the center to match the text above the button, for example.

<a href="http://dl.dropbox.com/u/48552248/websites/demos/css_button_auto_width/demo.html" class="button">View the Demo &rarr;</a>

##HTML Code

First we need to add the HTML. We create a simple `<a href></a>` link with a class button.

	<a href="#" class="button">This is a button</a>

##CSS Code

The CSS code required to create the button is displayed below:

	.button{
		padding: 10px 15px;
		line-height: 50px;
		font-size: 20px;
		background-color: #971b00;
	}

Pretty simple right? That’s all you need to make this work. Experiment with the `line-height` property. That is used to separate the button from the other buttons or text, above/below it. Additional CSS3 code is recommended (not shown in this tutorial) to sexify your button.

##Second Solution

The first solution is good, but I ended up using this one for my client’s website. In this solution, the line-height property is not used to separate the button from the other buttons/text vertically but define the height of the button. Furthermore, the buttons are separated vertically using a margin property.

##CSS Code

The code I used to create the buttons in the second method is below:

	.button_second{
		padding: 0 15px;
		display: inline-block;
		line-height: 45px;
		font-size: 20px;
		margin-bottom: 7px;
		background-color: #971b00;
	}

##Conclusion

This is my version of a CSS button. I prefer the second method, but the first one works just as well. I tested the CSS button and it displays seamlessly on Firefox, Safari, Chrome and IE 7+. What do you think? Any problems or suggestions you might have?