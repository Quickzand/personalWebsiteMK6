function init() {
	var navButtons = $(".navButton");
	// On click call navTo and pass in the navButton
	navButtons.click(function () {
		navTo($(this));
	});
	navScroll();
}

function navTo(navButton) {
	$(".selected").removeClass("selected");
	navButton.addClass("selected");
}
$.fn.isInViewport = function () {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};
// When $("header") is in viewport, add hidden class to $("nav")
// When $("header") is not in viewport, remove hidden class from $("nav")
function navScroll() {
	var header = $("header");
	var nav = $("nav");
	if (header.isInViewport()) {
		// nav.addClass("hidden");
	} else {
		nav.removeClass("hidden");
	}
}
// Run nav scroll on scroll
$(window).scroll(function () {
	navScroll();
});

// Runs init when the window loads
window.onload = init;
