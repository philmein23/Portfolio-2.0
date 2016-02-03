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

    $('.navbar').on('click', '.project-tab', function () {

        $("#projects").slideToggle(175);

    });

    $('.navbar').on('click', '.about-tab', function () {

        $("#about-me").slideToggle(175);

    });

    $('.navbar').on('click', '.contact-tab', function () {

        $("#footer").slideToggle(175);

    });
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