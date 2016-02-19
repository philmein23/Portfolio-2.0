(function(module) {

  var projectView = {};

  var render = function(project) {
    var template = Handlebars.compile($('#project-template').text());
    this.daysAgo = parseInt((new Date() - new Date(this.submittedOn)) / 60 / 60 / 24 / 1000);
    this.submitDate = this.submittedOn ? 'submitted ' + this.daysAgo + ' days ago' : '(draft)';

    return template(project);
  };

  projectView.index = function(projects) {
    $('.project_template').empty();
    projects.forEach(function(a) {
      $('#projects').append(render(a));
    });
  };


  module.projectView = projectView;

})(window);
