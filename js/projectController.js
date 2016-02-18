(function(module) {
  var projectController = {};

  projectController.index = function() {

    Project.fetchAll(projectView.initiateIndexPage);
    $('.project_template').empty();

    $('.navbar').on('click', '.tab', function(e) {
      $('body').animate({
        scrollTop: $('#' + $(this).data('content')).offset().top
      }, 'fast');
    });

  };

  module.projectController = projectController;
})(window);
