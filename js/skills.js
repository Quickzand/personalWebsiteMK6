const programmingLanguages = [
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
	progressCircle.css("--progress", skill.level);

	var progressCircleInner = $("<div>").addClass("progressCircleInner");
	progressCircleInner.append(skillIcon, skillName);
	progressCircle.append(progressCircleInner);
	skill.accentColor
		? progressCircle.css("--accentColor", skill.accentColor)
		: progressCircle.css("--accentColor", "var(--main-background-color");

	skillContainer.append(progressCircle);
	return skillContainer;
}

// for (var i = 0; i < skills.length; i++) {
// 	var skill = skills[i];
// 	var skillContainer = skillBuilder(skill);
// 	$("#skillsContainer").append(skillContainer);
// }

// SKILLS PHYSICS STARTS HERE
var engine = Matter.Engine.create();

var render = Matter.Render.create({
	element: document.getElementById("skillsContainer"),
	engine: engine,
	options: {
		width: $("#skillsContainer").width(),
		height: $("#skillsContainer").height(),
		wireframes: false,
		background: "transparent",
	},
});

Matter.Engine.run(engine);
Matter.Render.run(render);

// Puts walls around each .skills div
var skills = $(".skillContainer");
for (var i = 0; i < skills.length; i++) {
	var skill = skills[i];
	var skillRect = skill.getBoundingClientRect();
	var skillBody = Matter.Bodies.rectangle(
		skillRect.left + skillRect.width / 2,
		skillRect.top + skillRect.height / 2,
		skillRect.width,
		skillRect.height,
		{
			isStatic: true,
			render: {
				fillStyle: "transparent",
				strokeStyle: "transparent",
			},
		}
	);
	Matter.World.add(engine.world, skillBody);
}

// Make the circles bounce off the walls
var walls = [
	Matter.Bodies.rectangle(
		$("#skillsContainer").width() / 2,
		0,
		$("#skillsContainer").width(),
		1,
		{
			isStatic: true,
			render: {
				fillStyle: "transparent",
			},
		}
	),
	Matter.Bodies.rectangle(
		$("#skillsContainer").width() / 2,
		$("#skillsContainer").height(),
		$("#skillsContainer").width(),
		1,
		{
			isStatic: true,
			render: {
				fillStyle: "transparent",
			},
		}
	),
	Matter.Bodies.rectangle(
		0,
		$("#skillsContainer").height() / 2,
		1,
		$("#skillsContainer").height(),
		{
			isStatic: true,
			render: {
				fillStyle: "transparent",
			},
		}
	),
	Matter.Bodies.rectangle(
		$("#skillsContainer").width(),
		$("#skillsContainer").height() / 2,
		1,
		$("#skillsContainer").height(),
		{
			isStatic: true,
			render: {
				fillStyle: "transparent",
			},
		}
	),
	Matter.Bodies.rectangle(
		$("#skillsContainer").width() / 3,
		$("#skillsContainer").height() / 2,
		50,
		$("#skillsContainer").height(),
		{
			isStatic: true,
			render: {
				fillStyle: "transparent",
			},
		}
	),
	Matter.Bodies.rectangle(
		(2 * $("#skillsContainer").width()) / 3,
		$("#skillsContainer").height() / 2,
		100,
		$("#skillsContainer").height(),
		{
			isStatic: true,
			render: {
				fillStyle: "transparent",
			},
		}
	),
];

Matter.World.add(engine.world, walls);

// Add circles and have the respective Skill DOM element follow the circle
var skillContainers = [];
var skillBody = [];
for (var i = 0; i < programmingLanguages.length; i++) {
	var skill = programmingLanguages[i];
	var skillContainer = skillBuilder(skill);
	$("#programmingLanguages").append(skillContainer);

	var circle = Matter.Bodies.circle(
		Math.random() * $("#programmingLanguages").width(),
		Math.random() * $("#programmingLanguages").height(),
		skillContainer.width() / 2,
		{
			restitution: 1,
			friction: 0.5,
			render: {
				fillStyle: "transparent",
			},
		}
	);
	skillContainers.push(skillContainer);
	skillBody.push(circle);

	Matter.World.add(engine.world, circle);
}

var width = $(".skillContainer").width();
var height = $(".skillContainer").height();
// Make the corresponding DOM element follow the circle using transform with rotation
Matter.Events.on(engine, "afterUpdate", function () {
	for (var i = 0; i < skillContainers.length; i++) {
		skillContainers[i].css(
			"transform",
			"translate(" +
				(skillBody[i].position.x - width / 2) +
				"px," +
				(skillBody[i].position.y - height / 2) +
				"px)"
		);
	}
});

// Add a floor
var floor = Matter.Bodies.rectangle(
	$("#skillsContainer").width() / 2,
	$("#skillsContainer").height() * 1,
	$("#skillsContainer").width(),
	10,
	{
		isStatic: true,
		render: {
			fillStyle: "transparent",
		},
	}
);
Matter.World.add(engine.world, floor);

// Make circles grabbable and draggable
var mouse = Matter.Mouse.create(render.canvas);
var mouseConstraint = Matter.MouseConstraint.create(engine, {
	mouse: mouse,
	constraint: {
		render: {
			visible: false,
		},
	},
});
Matter.World.add(engine.world, mouseConstraint);

// When the window is resized, update the canvas size and the physics engine
$(window).resize(function () {
	render.canvas.width = $("#skillsContainer").width();
	render.canvas.height = $("#skillsContainer").height();
	render.options.width = $("#skillsContainer").width();
	render.options.height = $("#skillsContainer").height();
});
