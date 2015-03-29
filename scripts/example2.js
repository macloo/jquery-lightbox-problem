$(document).ready(function(){
// ----------------------------------------------------------------------------
// Note that a different "listener" is in effect for each paragraph in the 
// document. The set of instructions for each clicked paragraph is the same, 
// BUT NEW INSTRUCTIONS are added each time. By comparing each "listener" 
// and seeing how it differs from the one before, you will see how each action 
// is accomplished with jQuery. 
// ----------------------------------------------------------------------------


// Step 1: "First, click this paragraph ..." Basic screen overlay

$('#wrapper').on('click', '#shader1', function(e) { 
	// chained actions, next 6 lines (chained with dots)  

	// this HTML will be "appended To" the BODY 
	// the ID is styled in lightbox.css 
	$('<div id="overlay"></div>')
	// the top of that DIV will be tacked to the top of the viewport
	.css('top', $(document).scrollTop())
	// the DIV's opacity will be 0 or transparent to start
	.css('opacity', '0')
	// then the DIV slowly appears as a see-through (50%) shade
	.animate({'opacity' : '0.5'}, 'slow')
	// whenever the DIV is clicked, it will be removed
    .click(function() { $('div#overlay').remove(); }) 
    // with all that done, now append it To the BODY 
	.appendTo('body');

});

// ----------------------------------------------------------------------------

// Step 2. "Okay, let's try it again ..." Screen overlay with no scrolling 

$('#wrapper').on('click', '#shader2', function(e) { 

	$('body').css('overflow', 'hidden'); // hide the scrollbars!

	// same chained actions as above, next 6 lines 
	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity' : '0.5'}, 'slow')
    .click(function() { 
		$('div#overlay').remove(); 
		$('body').css('overflow', 'auto'); 
		}) // NOTE: this .click function builds in removal  
		   // AND ALSO restores the scrollbars 
	.appendTo('body');

});

// ----------------------------------------------------------------------------

// Step 3. "Next, we'll see how ..." Add a box DIV on top of the overlay DIV 

$('#wrapper').on('click', '#shader3', function(e) { 

	$('body').css('overflow', 'hidden'); 
	  
	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity' : '0.5'}, 'slow')
    .click(function() { 
		$('div#overlay').remove(); 
		$('body').css('overflow', 'auto'); 
		})  
	.appendTo('body');
	
	// now add the box DIV - the ID is styled in lightbox.css
	$('<div id="lightbox"></div>')
	.css( { "width":"400px","height":"300px","top":"20px","left":"20px" } ) // CSS for the box 
    .click(function() { 
		$('div#lightbox').remove(); // remove the box when it is clicked 
		})  
	.appendTo('body');

});

// ----------------------------------------------------------------------------

// Step 4. "We want to add a photo ..."

$('#wrapper').on('click', '#shader4', function(e) { 

	$('body').css('overflow', 'hidden'); 
  
	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity' : '0.5'}, 'slow')
    .click(function() { 
		$('div#overlay').remove(); 
		$('body').css('overflow', 'auto'); 
		})  
	.appendTo('body');

	$('<div id="lightbox"></div>')
	.css( { "width":"400px","height":"300px","top":"20px","left":"20px" } )  
    .click(function() { 
		$('div#lightbox').remove();  
		})  
	.appendTo('body');
	
	// below is the only new stuff added to this step 
	$('<img>')
	// add attribute "src" and the image's URL 
	.attr("src", "images/vancouver3.jpg") 
    // with all that done, now append it To the DIV with id="lightbox" 
	.appendTo('#lightbox'); 

});

// ----------------------------------------------------------------------------

// Step 5. "Ah, more new steps! ..."

$('#wrapper').on('click', '#shader5', function(e) { 

	$('body').css('overflow', 'hidden'); 
  
	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity' : '0.5'}, 'slow')
    // I have deleted the removal code for the overlay DIV
	.appendTo('body');

	$('<div id="lightbox"></div>')
	.css( { "top":"20px","left":"20px" } )  
    // I have deleted the removal code for the white lightbox DIV 
	.appendTo('body');
	 
	$('<img>')
	.attr("src", "images/vancouver3.jpg")  
	// this padding puts a 20-pixel white border around the photo 
	.css('padding', '20px') 
	// I added all the removal code for overlay, lightbox, and photo 
	// and restored the scrolling that was blocked
	.click(function() {
		$('div#lightbox').remove();
		$('div#overlay').remove(); 
		$('body').css('overflow', 'auto');
		})  
	.appendTo('#lightbox');  

});

// ----------------------------------------------------------------------------

// Step 6. "Now, to center the photo ..."

// here is a new function to position the lightbox DIV in the center 
// of the window 
function positionLightbox() {
	var top  = ($(window).height() - $('#lightbox').height()) / 2;
	var left = ($(window).width()  - $('#lightbox').width()) / 2;
	
	$('#lightbox')
	// using those variables we just filled ...
	.css({
		'top': top + $(document).scrollTop(),
		'left': left
		})
	.fadeIn(); // love this
}

// once again, the same listener code we have seen before

$('#wrapper').on('click', '#shader6', function(e) { 

	$('body').css('overflow', 'hidden'); 
  
	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity' : '0.5'}, 'slow') 
	.appendTo('body');

	$('<div id="lightbox"></div>')
	.css( { "top":"20px","left":"20px" } )  
	.hide() // added this so we don't see photo before it's ready 
	.appendTo('body');
	 
	$('<img>')
	.attr("src", "images/vancouver3.jpg")  
	.css('padding', '20px')
	// call the new function! This centers the photo and fades it in 
	.load(function() {  positionLightbox();  })  
	// below is old stuff we used before
	.click(function() {  
		$('div#lightbox').remove();
		$('div#overlay').remove(); 
		$('body').css('overflow', 'auto');
		})  
	.appendTo('#lightbox');  

});

// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
