const skills = [
	{
		name: "HTML",
		level: 1,
		icon: "images/skills/html.png",
		accentColor: "#e0421e",
	},
	{
		name: "CSS",
		level: 1,
		icon: "images/skills/css.png",
		accentColor: "#1e8fe0",
	},
	{
		name: "Javascript",
		level: 1,
		icon: "images/skills/javascript.png",
		accentColor: "#e0d21e",
	},
	{
		name: "SQL",
		level: 0.6,
		icon: "images/skills/sql.png",
		accentColor: "#1453a0",
	},
	{
		name: "PHP",
		level: 0.8,
		icon: "images/skills/php.png",
		accentColor: "#6874b9",
	},
	{
		name: "C",
		level: 0.8,
		icon: "images/skills/c.png",
		accentColor: "#0b478c",
	},
	{
		name: "Python",
		level: 0.95,
		icon: "images/skills/python.png",
		accentColor: "#fddf55",
	},
	{
		name: "Java",
		level: 0.95,
		icon: "images/skills/java.png",
		accentColor: "#4f6dbc",
	},
	{
		name: "C#",
		level: 0.6,
		icon: "images/skills/cSharp.png",
		accentColor: "#8e60d4",
	},
];

function skillBuilder(skill) {
	var skillContainer = $("<div>").addClass("skillContainer");
	var skillName = $("<h3>").text(skill.name).addClass("skillName");
	var skillIcon = $("<img>").attr("src", skill.icon).addClass("skillIcon");
	var progressCircle = $("<div>").addClass("progressCircle");
	// Set the css variable --progress to the skill level

	// Animate the skills progress value from 0 to the skill level
	// Use the animate function from jQuery
	// easing in and out

	setInterval(function () {
		if (skill.level <= progressCircle.css("--progress")) {
			// Ends calling the function
			clearInterval();
			return;
		}
		progressCircle.css(
			"--progress",
			Number(progressCircle.css("--progress")) + 0.01
		);
	}, 10);

	var progressCircleInner = $("<div>").addClass("progressCircleInner");
	progressCircleInner.append(skillIcon, skillName);
	progressCircle.append(progressCircleInner);
	skill.accentColor
		? progressCircle.css("--accentColor", skill.accentColor)
		: progressCircle.css("--accentColor", "var(--main-background-color");

	skillContainer.append(progressCircle);
	return skillContainer;
}

for (var i = 0; i < skills.length; i++) {
	var skill = skills[i];
	var skillContainer = skillBuilder(skill);
	$("#skillsContainer").append(skillContainer);
}

// $("#skillsContainer").append(skillBuilder(skills[0]));
