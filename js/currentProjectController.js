(function(module) {
  var currentProjectController = {};

  var clickScroll = function() {
    $('#current_project').empty();

    $('.navbar').on('click', '.tab', function(e) {
      $('body').animate({
        scrollTop: $('#' + $(this).data('content')).offset().top
      }, 'fast');
    });
  };

  currentProjectController.index = function() {
    clickScroll();
    repos.requestRepos(repoView.index);

  };

  module.currentProjectController = currentProjectController;
})(window);
