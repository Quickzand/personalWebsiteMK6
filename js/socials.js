function socialBarBuilder() {
	var socialBar = $("#socialBar");
	var githubSVG =
		'<svg width="1024" height="1024" viewBox="0 0 1024 1024"   xmlns="http://www.w3.org/2000/svg" class="contactIcon" id="Github"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" /></svg>';
	var gitHubIcon = $("<div>")
		.attr("id", "githubIcon")
		.addClass("socialIcon")
		.append(githubSVG)
		.css("animation-delay", "6.5s")
		.on("click", function () {
			openInNewTab("https://github.com/Quickzand");
		});
	var linkedInSVG =
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="contactIcon" id="LinkedIn"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> </svg>';
	var linkedInIcon = $("<div>")
		.attr("id", "linkedInIcon")
		.addClass("socialIcon")
		.append(linkedInSVG)
		.css("animation-delay", "6.75s")
		.on("click", function () {
			openInNewTab("https://www.linkedin.com/in/matthew-sand-3312891b0/");
		});
	var instagramSVG =
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="contactIcon" id="Instagram"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg>';
	var instagramIcon = $("<div>")
		.attr("id", "instagramIcon")
		.addClass("socialIcon")
		.append(instagramSVG)
		.css("animation-delay", "7s")
		.on("click", function () {
			openInNewTab("https://www.instagram.com/_matthewsand_/");
		});
	var twitterSVG =
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="contactIcon" id="Twitter"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>';
	var twitterIcon = $("<div>")
		.attr("id", "twitterIcon")
		.addClass("socialIcon")
		.append(twitterSVG)
		.css("animation-delay", "7.25s")
		.on("click", function () {
			openInNewTab("https://twitter.com/_Matthew_Sand_");
		});
	var youtubeSVG =
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="contactIcon" id="Youtube"> <path d = "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" > < /path> </svg>';
	var youtubeIcon = $("<div>")
		.attr("id", "youtubeIcon")
		.addClass("socialIcon")
		.append(youtubeSVG)
		.css("animation-delay", "7.5s")
		.on("click", function () {
			openInNewTab("https://www.youtube.com/channel/UC6D48xFSCHF5kCKheFtneGQ");
		});
	var redditSVG =
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="contactIcon" id="Reddit"><path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z"></path></svg>';
	var redditIcon = $("<div>")
		.attr("id", "redditIcon")
		.addClass("socialIcon")
		.append(redditSVG)
		.css("animation-delay", "7.75s")
		.on("click", function () {
			openInNewTab("https://www.reddit.com/user/Quicksand2202");
		});
	var facebookSVG =
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="contactIcon" id="Facebook"> <path d = "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" > < /path></svg > ';
	var facebookIcon = $("<div>")
		.attr("id", "facebookIcon")
		.addClass("socialIcon")
		.append(facebookSVG)
		.css("animation-delay", "8s")
		.on("click", function () {
			openInNewTab("https://www.facebook.com/profile.php?id=100010226416502");
		});

	const delayDifference = 0.25;
	const startDelay = 1;

	gitHubIcon.appendTo(socialBar);
	linkedInIcon.appendTo(socialBar);
	instagramIcon.appendTo(socialBar);
	twitterIcon.appendTo(socialBar);
	youtubeIcon.appendTo(socialBar);
	redditIcon.appendTo(socialBar);
	facebookIcon.appendTo(socialBar);

	var socialIcons = $(".socialIcon");
	socialIcons.each(function () {
		$(this).css(
			"animation-delay",
			startDelay + delayDifference * $(this).index() + "s"
		);
	});
}

function openInNewTab(url) {
	var win = window.open(url, "_blank");
	// win.focus();
}

function shareURL(title, url) {
	navigator.share({
		title: title,
		url: url,
	});
}

$.fn.isInViewport = function () {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};

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

socialBarBuilder();
metaTagsBuilder();
