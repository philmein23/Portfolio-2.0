(function(module) {
  var projectController = {};

  var clickScroll = function() {
    $('nav').on('click', '.tab', function(e) {
      $('body').animate({
        scrollTop: $('#' + $(this).data('content')).offset().top
      }, 'fast');
    });
  };

  projectController.index = function(ctx, next) {
    projectView.index(ctx.projects);
  };

  projectController.loadAll = function(ctx, next) {
    $('.project_template').empty();
    clickScroll();
    var projectData = function(allProjects) {
      ctx.projects = Project.all;
      next();
    };
    if (Project.all.length) {
      ctx.projects = Project.all;
      next();
    } else {
      Project.fetchAll(projectData);
    }
  };
  module.projectController = projectController;
})(window);
