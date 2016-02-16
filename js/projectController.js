(function(module) {
    var projectController = {};

    projectController.index = function() {
        Project.fetchAll(projectView.initiateIndexPage);

        $('.navbar').on('click', '.tab', function(e) {

            $('body').animate({
                scrollTop: $('#' + $(this).data('content')).offset().top}, 'slow');
        })
    };

        module.projectController = projectController;
})(window);