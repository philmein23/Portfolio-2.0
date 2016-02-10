(function (module) {

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


//The parameter is an array of objects so why would the constructor function use an array of objects as an argument to instantiate a new object?
    Project.loadAll = function (rawData) {
        rawData.sort(function (a, b) {

            return (new Date(b.submittedOn)) - (new Date(a.submittedOn));

        })

        Project.all = rawData.map(function (ele) {
            return new Project(ele);
        })

    };

    Project.getAll = function () {
        $.getJSON('data/project.json', function (rawData) {
            localStorage.rawData = JSON.stringify(rawData);
            Project.loadAll(JSON.parse(localStorage.rawData));
            projectView.initiateIndexPage();
        })

    }

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
                        Project.getAll();
                    } else {
                        Project.loadAll(JSON.parse(localStorage.rawData));
                        projectView.initiateIndexPage();
                    }
                }
            })

        } else {
            Project.getAll();
        }


    };

    module.Project = Project;
})(window);


