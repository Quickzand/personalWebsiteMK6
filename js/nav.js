function init() {
	var navButtons = $(".navButton");
	// On click call navTo and pass in the navButton
	navButtons.click(function () {
		navTo($(this));
	});
	navScroll();
	navButtonAnimation();
}

function navTo(navButton) {
	$(".selected").removeClass("selected");
	navButton.addClass("selected");

	var navToID = navButton.attr("data-navTo");
	scrollTo("#" + navToID);
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

var navElement = $("nav");
// Run nav scroll on scroll
$(window).scroll(function () {
	navScroll();
	// If scrolled 100 px add hidden class to $("nav")
	if ($(window).scrollTop() > 100) {
		navElement.addClass("scrolled");
	} else {
		navElement.removeClass("scrolled");
	}
});

// Scrolls page to element
function scrollTo(id) {
	$("html, body").animate(
		{
			scrollTop: $(id).offset().top,
		},
		1000
	);
}

// Adds animation delay variable to each navButtonText based on index
function navButtonAnimation() {
	var navButtons = $(".navButtonText");
	navButtons.each(function (index) {
		$(this).css("--index", index);
	});
}

// Runs init when the window loads
window.onload = init;
