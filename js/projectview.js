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


}


projectView.handleMainNav = function () {

    $('.navbar').on('click', '.tab', function () {

        $('.tab-content').hide();
        $('#' + $(this).data('content')).fadeIn();

    });

};

//disabled
/*projectView.setPreview = function () {
    $('.project-description *:nth-of-type(n+1)').hide();


    $('a.read-on').on('click', function (e) {
        e.preventDefault();
        $('.project-description *:nth-of-type(n+1)').show();
        $('a.read-on').hide();
    })


};*/

$(function () {
    projectView.handleMainNav();
    /*projectView.setPreview();*/
    projectView.addCategoryFilter();
    projectView.insertCategoryFilter();


})
