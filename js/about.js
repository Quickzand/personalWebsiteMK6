var educationInfo = {
	suncoast: {
		title: "Suncoast High School",
		timeline: "2017 - 2021",
		gpa: "4.2 GPA",
		degree: "Math Science and Engineering Program",
		courses: [
			"AP Computer Science",
			"Java SQL Databases",
			"Web Design",
			"IB Computer Science",
			"Discrete Mathematics",
			"Differential Equations",
			"Calculus 2/3",
			"Linear Algebra",
			"AP Physics C",
		],
		clubs: [
			"Student Government - Freshman Class Secretary",
			"Student Government - Sophomore Class Vice-President",
			"Student Government - Junior Class Logistics Coordinator",
			"Space Exploration and Engineering Club - Vice President",
			"(SECME) – Bridge Team Lead",
			"STEM10 – Design Manager",
		],
		activities: [
			"Hack Suncoast Hackathon",
			"Palm Beach Tech Hackathon",
			"Blueprint / Hack MIT Hackathon",
		],
		image: "images/suncoastCampus.jpeg",
	},
	ucf: {
		title: "University of Central Florida",
		degree: "Bachelor of Science in Computer Science",
		timeline: "2021 - 2025",
		gpa: "3.2 GPA",
		courses: [
			"Intro to C",
			"Discrete Structures",
			"Computer Science I",
			"Computer Science II",
			"Object Oriented Programming",
			"Security in Computing",
		],
		clubs: [
			"KnightHacks - Project Team Lead",
			"ACM - Member",
			"Google Developer Student Club - Member",
			"GameDev Knights - Member",
		],
		activities: [
			"GameDev Knights Gamejam",
			"Knighthacks Hackathon",
			"Shellhacks Hackathon",
		],
		image: "images/reflectionPond.jpeg",
	},
};

$(".experienceHeader").click(function () {
	$(this).parent().toggleClass("expanded");
});

$(".experienceHeader").click();

$(".educationCard").click(function () {
	$("#educationSlideover").addClass("expanded");
	var school = $(this).attr("id");
	setCurrentSchool(educationInfo[school]);
});

$(".educationCard").hover(
	function () {
		var school = $(this).attr("id");
		setCurrentSchool(educationInfo[school]);
		$("#educationSlideover").addClass("peek");
	},
	function () {
		var school = $(this).attr("id");
		setCurrentSchool(educationInfo[school]);
		$("#educationSlideover").removeClass("peek");
	}
);

$("#closeSlideover").click(function () {
	$("#educationSlideover").removeClass("expanded");
});

function setCurrentSchool(schoolInfo) {
	$("#educationTitle").text(schoolInfo.title);
	$("#educationDegree").text(schoolInfo.degree);
	$("#educationDate").text(schoolInfo.timeline);
	$("#gpa").text(schoolInfo.gpa);
	$("#coursesContainer").empty();
	for (var i = 0; i < schoolInfo.courses.length; i++) {
		var tempCourse = $("<div>").addClass("course").text(schoolInfo.courses[i]);
		$("#coursesContainer").append(tempCourse);
	}

	$("#clubsContainer").empty();
	for (var i = 0; i < schoolInfo.clubs.length; i++) {
		var tempClub = $("<div>").addClass("club").text(schoolInfo.clubs[i]);
		$("#clubsContainer").append(tempClub);
	}

	$("#activitiesContainer").empty();
	for (var i = 0; i < schoolInfo.activities.length; i++) {
		var tempActivity = $("<div>")
			.addClass("activity")
			.text(schoolInfo.activities[i]);
		$("#activitiesContainer").append(tempActivity);
	}

	$("#educationImage img").attr("src", schoolInfo.image);
}

setCurrentSchool(educationInfo.ucf);
