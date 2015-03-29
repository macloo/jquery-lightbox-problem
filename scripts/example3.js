$(document).ready(function(){
// ----------------------------------------------------------------------------
// This example builds on example1 -- the difference is now we have buttons 
// to move forward or back through the array of all the pictures. 
// ----------------------------------------------------------------------------

var i = 0; // set the counter to 0 
// remember, the index of the first item in an ARRAY is always 0 

// list all your image URLs in an array named pics  
var pics = ["images/vancouver1.jpg", 
	"images/vancouver2.jpg",
	"images/vancouver3.jpg",
	"images/vancouver4.jpg"
	];

// what to do when the "next" button is clicked:  
$('#wrapper').on('click', '#next', function(e) {
	i++; // add 1 to the counter
	// check to see if we ran out of pics and need to start over 
	// works for any number of images in pics 
	if (i == pics.length) {
		i = 0; // reset the counter if we ran out of pics
	}
	// get the URL for the photo from the array named pics 
	$("img#mask").attr("src", pics[i]); 
});

// what to do when the "prev" button is clicked:  
$('#wrapper').on('click', '#prev', function(e) {
	i--; // subtract 1 from the counter - we're going backward
	// check to see if we ran out of pics and need to start over 
	// works for any number of images in pics 
	if (i < 0) {
		i = pics.length - 1; // set the counter to index of last pic
	}
	// get the URL for the photo from the array named pics 
	$("img#mask").attr("src", pics[i]); 
});


// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
