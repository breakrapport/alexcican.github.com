//initialise quote on pageload
getQuote();

//on click get new quote
$('#quote a').click(function() {
	getQuote();
	return false;
});

//function to get random quote and display it
function getQuote() {
	var quote = new Array ();
	quote[0] = "Good design is as little design as possible - Dieter Rams";
	quote[1] = "Good design should be innovative - Dieter Rams";
	quote[2] = "Good design should make a product useful - Dieter Rams";
	quote[3] = "Good design is aesthetic design - Dieter Rams";
	quote[4] = "Good design is unobtrusive - Dieter Rams";
	quote[5] = "Good design is consistent in every detail - Dieter Rams";
	quote[6] = "Good design is long lived - Dieter Rams";
	quote[7] = "Everything is designed. Few things are designed well - Brian Reed";
	quote[8] = "Good design is obvious. Great design is transparent - Joe Sparano";
	quote[9] = "Design is intelligence made visible - Alina Wheeler";
	quote[10] = "Design is the conscious effort to impose a meaningful order - Victor Papanek";
	quote[11] = "A design isn&#8217;t finished until somebody is using it - Brenda Laurel";
	quote[12] = "Inspiration exists, but it has to find you working - Pablo Picasso";
	quote[13] = "Less is more - Ludwig Mies Van Der Rohe";
	quote[14] = "The function of design is letting design function - Micha Commeren";

	var i = Math.floor(15 * Math.random())

	$("#quote h1").hide().html(quote[i]).fadeIn('slow');
}