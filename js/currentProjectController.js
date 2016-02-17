(function(module) {
  var currentProjectController = {};

  currentProjectController.index = function() {
    repos.requestRepos(repoView.index);
    
    $('.navbar').on('click', '.tab', function(e) {
      $('body').animate({
        scrollTop: $('#' + $(this).data('content')).offset().top
      }, 'slow');
    });
  };

  module.currentProjectController = currentProjectController;
})(window);
