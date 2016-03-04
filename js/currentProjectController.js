(function(module) {
  var currentProjectController = {};

  var clickScroll = function() {
    

    $('.navbar').on('click', '.tab', function(e) {

      $('body').animate({
        scrollTop: $('#' + $(this).data('content')).offset().top
      }, 'fast');
    });
  };

  currentProjectController.index = function() {
    $('#current_project').empty();
    clickScroll();
    repos.requestRepos(repoView.index);

  };

  module.currentProjectController = currentProjectController;
})(window);
