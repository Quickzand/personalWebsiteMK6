const projects = [
	{
		name: "Dequeue",
		preview: "images/projects/dequeuePreview.png",
		id: "dequeue",
		description:
			"Dequeue is an app that allows you to control your computer from your phone, made by myself and Ayden Colby! It has a home screen allowing you to control more general things like volume, music, or terminal commands, and a section which allows you to create your own shortcuts and scripts to run on your computer remotely. This is my first time working with a mobile centric design and my first time using progressive web apps.",
		technologies: [
			{
				name: "Electron",
				icon: "images/technologies/electron.svg",
			},
			{
				name: "Node.js",
				icon: "images/technologies/node.svg",
			},
			{
				name: "Python",
				icon: "images/technologies/python.svg",
			},
			{
				name: "Progressive Web App",
				icon: "images/technologies/pwa.svg",
			},
		],
		links: [
			{
				type: "website",
				text: "Website",
				url: "www.beaned.com",
			},
			{
				type: "collaborator",
				text: "Ayden Colby",
				url: "www.aydencolby.com",
			},
			{
				type: "github",
				text: "GitHub",
				url: "www.github.com/",
			},
		],
		images: [
			"images/projects/dequeue/dequeue1.png",
			"images/projects/dequeue/dequeue6.png",
			"images/projects/dequeue/dequeue2.png",
			"images/projects/dequeue/dequeue3.png",
			"images/projects/dequeue/dequeue4.png",
			"images/projects/dequeue/dequeue5.png",
		],
	},
	{
		name: "Homesub",
		preview: "images/projects/homesubPreview.png",
		id: "homesub",
		description:
			"Homesub is my coronavirus relief effort. As someone who has experienced firsthand how difficult it can be to be completely disconnected from the physical environment of school, I wanted to find a way to help my classmates through the rough transition period to online learning. Seeing the difficulties that computer science students had with writing their code from home, I created a website for them to write, test, and submit all of their code from. Homesub was my first time working with any sort of backend, and was a valuable learning experience when it came to working with server side development.",
	},
	{
		name: "Wiki What",
		preview: "images/projects/WWPreview.png",
		id: "wikiWhat",
		description:
			"Dequeue is a web application that allows users to create and join virtual queues for businesses. Users can create a queue for a business and share the link with others to join the queue. Users can also join a queue that has already been created by another user. Users can also view the status of their queue and the status of the queues they have joined. Dequeue was built using React, Node.js, Express, and MongoDB.",
	},
	{
		name: "Wifi Panda",
		preview: "images/projects/wifiPandaPreview.png",
		id: "wifiPanda",
		description:
			"Dequeue is a web application that allows users to create and join virtual queues for businesses. Users can create a queue for a business and share the link with others to join the queue. Users can also join a queue that has already been created by another user. Users can also view the status of their queue and the status of the queues they have joined. Dequeue was built using React, Node.js, Express, and MongoDB.",
	},
	{
		name: "Meets Stories",
		preview: "images/projects/meetsPreview.png",
		id: "meets",
		description:
			"Dequeue is a web application that allows users to create and join virtual queues for businesses. Users can create a queue for a business and share the link with others to join the queue. Users can also join a queue that has already been created by another user. Users can also view the status of their queue and the status of the queues they have joined. Dequeue was built using React, Node.js, Express, and MongoDB.",
	},
	{
		name: "Tankz",
		preview: "images/projects/tankzPreview.png",
		id: "tankz",
		description:
			"Dequeue is a web application that allows users to create and join virtual queues for businesses. Users can create a queue for a business and share the link with others to join the queue. Users can also join a queue that has already been created by another user. Users can also view the status of their queue and the status of the queues they have joined. Dequeue was built using React, Node.js, Express, and MongoDB.",
	},
	{
		name: "Host Directory",
		preview: "images/projects/directoryPreview.png",
		id: "directory",
		description:
			"Dequeue is a web application that allows users to create and join virtual queues for businesses. Users can create a queue for a business and share the link with others to join the queue. Users can also join a queue that has already been created by another user. Users can also view the status of their queue and the status of the queues they have joined. Dequeue was built using React, Node.js, Express, and MongoDB.",
	},
];

function loadProjects() {
	for (var i in projects) {
		var currentProject = projects[i];
		// Creates project preview
		var projectPreview = $("<div>").addClass("projectPreview");
		var projectPreviewImage = $("<img>")
			.attr("src", currentProject.preview)
			.addClass("projectPreviewImage");
		var projectPreviewTitle = $("<h3>");
		var temp = $("<span>").text(currentProject.name);
		projectPreview.attr("id", currentProject.id + "Preview");
		projectPreview.attr("data-projectId", currentProject.id);
		projectPreview.attr("onclick", "selectProject(this.dataset.projectid)");
		projectPreviewTitle.append(temp);

		projectPreview.append(projectPreviewTitle, projectPreviewImage);
		$("#projectPreviewsContainer").append(projectPreview);
	}

	// Selects first project
	selectProject(projects[0].id);
}

loadProjects();

function selectProject(id) {
	$(".projectPreview.selected").removeClass("selected");
	$("#" + id + "Preview").addClass("selected");
	var currentProject;
	for (var i in projects) {
		var temp = projects[i];
		if (temp.id == id) {
			currentProject = temp;
		}
	}
	$("#projectName").text(currentProject.name);
	$("#projectDescription").text(currentProject.description);

	// Creates technologies
	$("#projectTechnologiesContainer").empty();
	for (var i in currentProject.technologies) {
		var currentTechnology = currentProject.technologies[i];
		var technology = $("<div>").addClass("technology");
		var technologyIcon = $("<img>")
			.attr("src", currentTechnology.icon)
			.addClass("technologyIcon");
		var technologyName = $("<div>")
			.text(currentTechnology.name)
			.addClass("technologyName");
		technology.append(technologyIcon, technologyName);
		$("#projectTechnologiesContainer").append(technology);
	}

	// Creates links
	$("#projectLinks").empty();
	for (var i in currentProject.links) {
		var currentLink = currentProject.links[i];
		var link = $("<div>").addClass("link");
		var linkIcon = $("<img>").addClass("linkIcon");
		switch (currentLink.type) {
			case "website":
				link.css("--link-accent-color", "#ffb041");
				linkIcon.attr("src", "images/icons/website.png");
				break;
			case "collaborator":
				link.css("--link-accent-color", "#118040");
				linkIcon.attr("src", "images/icons/collaborator.png");
				break;
			case "github":
				link.css("--link-accent-color", "#4078c0");
				linkIcon.attr("src", "images/icons/github.png");
				break;
		}
		var linkText = $("<div>").addClass("linkText").text(currentLink.text);
		link.append(linkIcon, linkText);
		$("#projectLinks").append(link);
	}

	// Creates images
	$("#projectImageSelectorContainer").empty();
	for (var i in currentProject.images) {
		var currentImage = currentProject.images[i];
		var image = $("<div>")
			.addClass("projectImageSelector")
			.append($("<img>").attr("src", currentImage))
			.click(function () {
				$(".projectImageSelector.selected").removeClass("selected");
				$(this).addClass("selected");
				$("#projectImage").removeClass("animating");
				var newImg = $(this).children("img").attr("src");
				setTimeout(function () {
					$("#projectImage").addClass("animating");
					$("#projectImage").attr("src", newImg);
				}, 100);
			});
		$("#projectImageSelectorContainer").append(image);
		if (i == 0) {
			image.click();
		}
	}
}

// Checks if 75% of the #projectsContainer element on screen
function checkProjectsContainer() {
	var offset = $("#projectsContainer").offset();
	var height = $("#projectsContainer").height();
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll + windowHeight > offset.top + height * 0.75) {
		return true;
	}
	return false;
}

// Runs on every scroll

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener(
	"scroll",
	function (event) {
		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function () {
			// Run the callback
			if (checkProjectsContainer()) {
				// Scroll to projectsContainer without animating
				$("html, body")
					.stop()
					.animate(
						{
							scrollTop: $("#projectsContainer").offset().top,
						},
						0
					);
			}
		}, 66);
	},
	false
);
