function toggleLightMode() {
	var element = $(":root");
	element.toggleClass("lightMode");
	// Store the light mode preference in local storage
	localStorage.setItem("lightMode", element.hasClass("lightMode"));
}

// If the user has a light mode preference stored in local storage, set the light mode accordingly
if (localStorage.getItem("lightMode") === "true") {
	toggleLightMode();
}

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
	var icon = $("<link>").attr("rel", "icon").attr("href", "images/logo.svg");
	$("head")
		.append(author)
		.append(description)
		.append(keywords)
		.append(viewport)
		.append(icon);
}

metaTagsBuilder();
