var projects = [];

function Project (data) {

    this.title = data.title;
    this.submittedOn = data.submittedOn;
    this.projectURL = data.projectURL;
    this.projectDetails = data.projectDetails;

}

Project.prototype.toHtml = function() {

    var $newProject = $('article.template').clone();


    $newProject.find("header h2").text(this.title);
    $newProject.find("time").attr('datatime', this.submittedOn);
    $newProject.attr('href', this.projectURL);
    $newProject.find(".project-description").html(this.projectDetails);

    $newProject.find('time').html('about' + parseInt((new Date() - new Date(this.submittedOn))/60/60/24/1000) + ' days ago');


    $newProject.removeClass('template');

   return $newProject;

}

rawData.sort(function(a,b) {

    return (new Date(b.submittedOn)) - (new Date(a.submittedOn));

})

rawData.forEach(function(element) {
    projects.push(new Project(element));

});

projects.forEach(function(a) {

    $('#projects').append(a.toHtml());

})