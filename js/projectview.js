(function(module) {

  var projectView = {};

  projectView.initiateIndexPage = function() {
    Project.all.forEach(function(data) {
      $('#projects').append(data.toHtml());
    });
  };

  module.projectView = projectView;

})(window);
