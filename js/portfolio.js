function Project(data) {

    this.title = data.title;
    this.language = data.language;
    this.category = data.category;
    this.submittedOn = data.submittedOn;
    this.projectURL = data.projectURL;
    this.projectDetails = data.projectDetails;

}

Project.all = [];

Project.prototype.toHtml = function () {


    var template = Handlebars.compile($('#project-template').text())

    this.daysAgo = parseInt((new Date() - new Date(this.submittedOn)) / 60 / 60 / 24 / 1000);
    this.submitDate = this.submittedOn ? 'submitted ' + this.daysAgo + ' days ago' : '(draft)';

    return template(this);

};


Project.loadAll = function (rawData) {
    rawData.sort(function (a, b) {

        return (new Date(b.submittedOn)) - (new Date(a.submittedOn));

    })

    rawData.forEach(function (data) {
        Project.all.push(new Project(data));

    });


};

Project.fetchAll = function () {
    if (localStorage.rawData) {

        $.ajax({
            type: 'HEAD',
            url: 'data/project.json',
            success: function (data, message, xhr) {
                console.log(xhr);

                var eTag = xhr.getResponseHeader('eTag');
                if (!localStorage.eTag || eTag !== localStorage.eTag) {
                    localStorage.eTag = eTag;
                } else {
                    Project.loadAll(JSON.parse(localStorage.rawData));
                }
            }
        })
        Project.loadAll(JSON.parse(localStorage.rawData));
        projectView.initiateIndexPage();


    } else {
        $.getJSON('data/project.json', function(rawData) {
            localStorage.rawData = JSON.stringify(rawData);
            Project.loadAll(JSON.parse(localStorage.rawData));
            projectView.initiateIndexPage();
        })


    };


}


