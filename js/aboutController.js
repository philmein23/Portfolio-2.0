(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.navbar').on('click', '.tab', function(e) {

      $('body').animate({
        scrollTop: $('#' + $(this).data('content')).offset().top}, 'fast');
    });
  };
  module.aboutController = aboutController;
})(window);
