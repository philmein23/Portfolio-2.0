var projectView = {};


projectView.addCategoryFilter = function () {
    $('article').each(function () {
        if (!$(this).hasClass('template')) {

            var val = $(this).attr('data-category');

            var optionTag = '<option value="' + val + '">' + val + '</option>';
            $('#category-filter').append(optionTag);

        }

    })


};



projectView.handleMainNav = function () {

    $('.navbar').on('click', function () {

        $("#about-me").slideToggle(175);
        $("#projects").slideToggle(175);

    })
}


projectView.setPreview = function () {
    $('.project-description *:nth-of-type(n+1)').hide();


    $('a.read-on').on('click', function (e) {
        e.preventDefault();
        $('.project-description *:nth-of-type(n+1)').show();
        $('a.read-on').hide();
    })


};

$(projectView.handleMainNav());
$(projectView.setPreview());
$(projectView.addCategoryFilter());