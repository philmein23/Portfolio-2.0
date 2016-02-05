var projects = [];

function Project (data) {

    this.title = data.title;
    this.category = data.category;
    this.submittedOn = data.submittedOn;
    this.projectURL = data.projectURL;
    this.projectDetails = data.projectDetails;

}

Project.prototype.toHtml = function() {


    var template = Handlebars.compile($('#project-template').text())

    this.daysAgo = parseInt((new Date() - new Date(this.submittedOn))/60/60/24/1000);
    this.submitDate = this.submittedOn ? 'submitted ' + this.daysAgo + ' days ago': '(draft)';

    return template(this);

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