(function (module) {

    var projectView = {};

    projectView.addCategoryFilter = function () {
        $('article').each(function () {
            if (!$(this).hasClass('template')) {
                var val = $(this).attr('data-category');
                var optionTag = '<option value="' + val + '">' + val + '</option>';
                if ($('#category-filter option[value="' + val + '"]').length === 0) {
                    $('#category-filter').append(optionTag);
                }
            }
        })

    };

    projectView.insertCategoryFilter = function () {
        $('#category-filter').on('change', function () {
            if ($(this).val()) {
                $('article').hide();
                $('article[data-category="' + $(this).val() + '"]').fadeIn();
            } else {
                $('article').fadeIn();
            }
        })
    };

    projectView.initiateIndexPage = function () {
        Project.all.forEach(function (data) {
            $('#projects').append(data.toHtml());
        });
    };


        projectView.addCategoryFilter();
        projectView.insertCategoryFilter();



    module.projectView = projectView;

})(window);
