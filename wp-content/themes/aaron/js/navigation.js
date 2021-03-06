/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */

( function() {
	var container, button, menu;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	/* Close meny with Esc key*/

	jQuery(document).ready(function($) {
	$( document ).keyup( function( e ) { 
	    if ( e.keyCode === 27 ) { 
	    	if ( -1 !== container.className.indexOf( 'toggled' ) ) {
				container.className = container.className.replace( ' toggled', '' );
				button.setAttribute( 'aria-expanded', 'false' );
				menu.setAttribute( 'aria-expanded', 'false' );
			}
	     } 
	} ); 



});	


} )();

	/* Thanks to: Keyboard Accessible Dropdown Menus
	Copyright 2013 Amy Hendrix (email : amy@amyhendrix.net), Graham Armfield (email : graham.armfield@coolfields.co.uk)
	License:      MIT
	Plugin URI:   http://github.com/sabreuse/accessible-menus
	*/

jQuery(document).ready(function($){	$('.main-navigation li').hover(
		function(){$(this).addClass("keyboard-dropdown");},
		function(){$(this).delay('250').removeClass("keyboard-dropdown");}
	);

	$('.main-navigation li a').on('focus blur',
		function(){$(this).parents().toggleClass("keyboard-dropdown");}
	);

});	

/**
* Add screen reader text to the tagcloud
* @todo -remove this when the default tagcloud is improved...
*/

jQuery(".tagcloud a").each( function() {
    var tagnumber = jQuery(this).attr('title');
    jQuery(this).append('<span class="screen-reader-text">' + tagnumber +  ' </span>');
});


// fix cases where blog post photos have title attributes but not alt attributes
// this is caused by WP using title for title but not requiring alt attribute through version 3.6
jQuery(document).ready(function($){ $('img[title]').not(':has([alt])').each(function () {
        var theTitle = $(this).attr('title');
        $(this).attr('alt', theTitle).removeAttr('title');
    } );
});
