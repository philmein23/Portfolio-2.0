(function(module) {
    var projectController = {};

    projectController.index = function() {
        Project.fetchAll(projectView.initiateIndexPage());

        $('.navbar').on('click', '.tab', function() {
            $('body').animate({
                scrollTop: $('#' + $(this).data('content')).offset().top}, 'slow');
        })
    };

        module.projectController = projectController;
})(window);