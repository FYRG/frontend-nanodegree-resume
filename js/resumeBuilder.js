/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
var formattedName = HTMLheaderName.replace("%data%", "Alphard");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
var bio = {
	"name" = "Alphard",
	"role" = "Web Developer",
	"contact info" = "XXX@qq.com",
	"picture URL" = "images/test.jpg",
	"welcome message" = "Welcome Programer!",
	"skills" = "Program",
};
//$('#header').prepend(formattedRole);
//$('#header').prepend(formattedName);
$('#header').append(HTMLheaderName.replace("%data%", bio["name"]));
*/

var work = {"jobs" : [
	{"employer" : "CCB",
	"title" : "bank teller",
	"location" : "Zhongzhou",
	"dates" : "2014-07-10",
	"description" : "Work in the bank teller reception"},
	{"employer" : "CCB",
	"title" : "technician",
	"location" : "Anyangfenhang",
	"dates" : "2016-08-01",
	"description" : "Technical support work"}
]}

var projects = {"projects" : [
	{"title" : "Web Design",
	"dates" : "2017-09-27",
	"description" : "Create a Web App",
	"img" : []}
	],
	"display" : function(){
		for(var each in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = projects.projects[each].title;
			var formattedDates = projects.projects[each].dates;
			var formattedDescription = projects.projects[each].description;
			var formattedImg = projects.projects[each].img;
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", formattedTitle));
			$(".date-text:last").append(HTMLprojectDates.replace("%data%", formattedDates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", formattedDescription));
			if( formattedImg.length > 0){
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", formattedImg));
			}
			}
		}
	}

var bio = {
	"name" : "Alphard Wang",
	"role" : "",
	"welcomMessage" : "",
	"biopic" : "",
	"contacts" : {
		"mobile" : 1234567890,
		"email" : "",
		"github" : "",
		"twitter" : "",
		"location" : ""
	},
	"skill" : ["HTML", "CSS", "JavaScript"]
}

var education = {"schools" : [
	{"name" : "",
	"location" : "",
	"degree" : "",
	"dates" : "",
	"url" : "",
	"majors" : [],
	"onlineCourses" : [
		{"title" : "",
		"schools" : "",
		"dates" : "",
		"url" : ""}
	]}
]}

if(bio.skill.length > 0) {
	$("#header").append(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skill[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skill[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skill[2]);
	$("#skills").append(formattedSkill);
}

function displayWork(){
	for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)

	$(".work-entry:last").append(formattedTitle, formattedLocation, formattedDates, formattedDescription);
	}
}

displayWork();

function inName(){
	var arrName = bio.name.split(" ");
	arrName[0] = arrName[0][0].toUpperCase() + arrName[0].slice(1).toLowerCase();
	arrName[1] = arrName[1].toUpperCase();
	var name = arrName.join(" ");
	bio.name = name; 
}

$("#main").append(internationalizeButton);

projects.display();


