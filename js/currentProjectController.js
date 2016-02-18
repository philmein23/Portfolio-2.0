(function(module) {
  var currentProjectController = {};

  currentProjectController.index = function() {

    repos.requestRepos(repoView.index);
    $('#current_project').empty();

    $('.navbar').on('click', '.tab', function(e) {
      $('body').animate({
        scrollTop: $('#' + $(this).data('content')).offset().top
      }, 'fast');
    });
  };

  module.currentProjectController = currentProjectController;
})(window);
