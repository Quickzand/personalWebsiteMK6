function init() {
	var navButtons = $(".navButton");
	// On click call navTo and pass in the navButton
	navButtons.click(function () {
		navTo($(this));
	});
	navScroll();
	metaTagsBuilder();
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
// Run nav scroll on scroll
$(window).scroll(function () {
	navScroll();
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

// Constructs the meta tags and icon for the webpage
function metaTagsBuilder() {
	var author = $("<meta>")
		.attr("name", "author")
		.attr("content", "Matthew Sand");
	var description = $("<meta>")
		.attr("name", "description")
		.attr("content", "Fullstack Web Developer and Computer Science Student");
	var keywords = $("<meta>")
		.attr("name", "keywords")
		.attr(
			"content",
			"Resume, Fullstack, Developer, Computer Science, University, Central, Florida, Matthew, Sand, Matthew Sand, Programmer"
		);
	var viewport = $("<meta>")
		.attr("name", "viewport")
		.attr("content", "width=device-width, initial-scale=1.0");
	var icon = $("<link>").attr("rel", "icon").attr("href", "favicon.ico");
	$("head")
		.append(author)
		.append(description)
		.append(keywords)
		.append(viewport)
		.append(icon);
}

// Runs init when the window loads
window.onload = init;
