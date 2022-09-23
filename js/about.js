$(".experienceHeader").click(function () {
	$(this).parent().toggleClass("expanded");
});

$(".educationCard").click(function () {
	if ($(this).hasClass("opening")) {
		$(this).removeClass("opening");
		$(this).addClass("closing");
	} else {
		$(this).addClass("opening");
		$(this).removeClass("closing");
	}
});
